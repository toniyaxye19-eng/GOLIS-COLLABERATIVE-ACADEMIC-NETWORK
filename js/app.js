const GCAN_STORE_KEY = "gcan_data_v1";

const GCAN_DEFAULTS = {
  threads: GCAN_SEED_THREADS,
  materials: GCAN_SEED_MATERIALS
};

function gcanLoad() {
  try {
    const raw = localStorage.getItem(GCAN_STORE_KEY);
    if (!raw) return structuredClone(GCAN_DEFAULTS);
    const parsed = JSON.parse(raw);
    return {
      threads: Array.isArray(parsed.threads) ? parsed.threads : GCAN_DEFAULTS.threads,
      materials: Array.isArray(parsed.materials) ? parsed.materials : GCAN_DEFAULTS.materials
    };
  } catch {
    return structuredClone(GCAN_DEFAULTS);
  }
}

function gcanSave(state) {
  localStorage.setItem(GCAN_STORE_KEY, JSON.stringify(state));
}

function gcanReset() {
  localStorage.removeItem(GCAN_STORE_KEY);
  location.reload();
}

let GCAN_STATE = gcanLoad();

function gcanNow() {
  return new Date().toLocaleString("so-SO", { dateStyle: "medium", timeStyle: "short" });
}

function gcanCourseById(id) {
  return GCAN_COURSES.find((c) => c.id === id);
}

function gcanInitNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

function gcanCourseCardHTML(course) {
  return `
    <article class="card">
      <div class="card-icon">${course.icon}</div>
      <h3>${course.name}</h3>
      <p>${course.desc}</p>
      <div class="form-row">
        <a class="btn btn-ghost" href="courses.html#${course.id}">Furo revision</a>
      </div>
    </article>
  `;
}

function gcanRenderHomeCourses() {
  const wrap = document.getElementById("courseCards");
  if (wrap) wrap.innerHTML = GCAN_COURSES.map(gcanCourseCardHTML).join("");
}

function gcanQuizSubmit(quizEl, quiz) {
  let score = 0;
  quiz.forEach((item, qi) => {
    const opts = quizEl.querySelectorAll(`.quiz-q[data-q="${qi}"] .quiz-opt`);
    const chosen = quizEl.querySelector(`.quiz-q[data-q="${qi}"] .quiz-opt.selected`);
    opts.forEach((opt, oi) => {
      opt.disabled = true;
      if (oi === item.answer) opt.classList.add("correct");
    });
    if (chosen && Number(chosen.dataset.opt) === item.answer) score += 1;
  });
  const result = quizEl.querySelector(".quiz-result");
  result.textContent = `Waxaad ka heshay ${score}/${quiz.length}. Ku celceli mar walba aad barato.`;
  const btn = quizEl.querySelector(".quiz-retry");
  if (btn) btn.hidden = false;
}

function gcanBuildQuiz(course) {
  return `
    <div class="quiz" data-course="${course.id}">
      ${course.quiz
        .map(
          (item, qi) => `
        <div class="quiz-q" data-q="${qi}">
          <h4>${qi + 1}. ${item.q}</h4>
          ${item.options
            .map(
              (opt, oi) =>
                `<button class="quiz-opt" data-opt="${oi}" type="button">${opt}</button>`
            )
            .join("")}
        </div>
      `
        )
        .join("")}
      <p class="quiz-result notice" hidden></p>
      <button class="btn btn-primary quiz-submit" type="button">Hubi jawaabaha</button>
      <button class="btn btn-ghost quiz-retry" type="button" hidden onClick="location.reload()">Dib u bilow</button>
    </div>
  `;
}

function gcanWireQuiz(panelEl) {
  const submit = panelEl.querySelector(".quiz-submit");
  if (!submit) return;
  panelEl.querySelectorAll(".quiz-opt").forEach((opt) => {
    opt.addEventListener("click", () => {
      const q = opt.closest(".quiz-q");
      q.querySelectorAll(".quiz-opt").forEach((o) => o.classList.remove("selected"));
      opt.classList.add("selected");
    });
  });
  submit.addEventListener("click", () => {
    const quiz = gcanCourseById(panelEl.dataset.course).quiz;
    gcanQuizSubmit(panelEl.querySelector(".quiz"), quiz);
  });
}

function gcanRenderCoursesPage() {
  const wrap = document.getElementById("coursePanels");
  if (!wrap) return;

  const tabs = document.getElementById("courseTabs");
  tabs.innerHTML = GCAN_COURSES.map(
    (c, i) =>
      `<button class="tab-btn ${i === 0 ? "active" : ""}" data-course="${c.id}" type="button">${c.icon} ${c.name}</button>`
  ).join("");

  wrap.innerHTML = GCAN_COURSES.map(
    (c, i) => `
    <section class="panel ${i === 0 ? "active" : ""}" id="${c.id}" data-course="${c.id}">
      <h2>${c.icon} ${c.full}</h2>
      <p class="section-sub">${c.desc}</p>
      <div class="panel-grid">
        <div class="card">
          <h3>Revision</h3>
          <ul class="list" style="margin-top:0.7rem">
            ${c.revision.map((r) => `<li><strong>${r.title}</strong><span class="muted">${r.detail}</span></li>`).join("")}
          </ul>
        </div>
        <div class="card">
          <h3>Taba-baro (Quiz)</h3>
          <div style="margin-top:0.7rem">${gcanBuildQuiz(c)}</div>
        </div>
      </div>
    </section>
  `
  ).join("");

  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    tabs.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    wrap.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
    const panel = document.getElementById(btn.dataset.course);
    panel.classList.add("active");
    gcanWireQuiz(panel);
  });

  const hash = location.hash.replace("#", "");
  const initial = gcanCourseById(hash) ? hash : GCAN_COURSES[0].id;
  tabs.querySelector(`[data-course="${initial}"]`).click();
}

function gcanRenderThreads(filterCourse) {
  const list = document.getElementById("threadList");
  if (!list) return;
  const threads = GCAN_STATE.threads.filter(
    (t) => !filterCourse || filterCourse === "all" || t.course === filterCourse
  );
  if (!threads.length) {
    list.innerHTML = `<p class="muted">Weli ma jiro dood halkan. Ku bilow mid hoose.</p>`;
    return;
  }
  list.innerHTML = threads
    .map(
      (t) => `
    <article class="thread">
      <div class="thread-meta">${t.course.toUpperCase()} · ${t.author} · ${t.when}</div>
      <h3>${t.title}</h3>
      <div class="replies">
        ${t.replies
          .map(
            (r) => `
          <div class="reply">
            <div class="thread-meta">${r.author} · ${r.when}</div>
            ${r.text}
          </div>
        `
          )
          .join("")}
      </div>
    </article>
  `
    )
    .join("");
}

function gcanRenderMaterials(filterCourse) {
  const list = document.getElementById("materialList");
  if (!list) return;
  const items = GCAN_STATE.materials.filter(
    (m) => !filterCourse || filterCourse === "all" || m.course === filterCourse
  );
  if (!items.length) {
    list.innerHTML = `<p class="muted">Weli ma jiro agab halkan. Kudar mid hoose.</p>`;
    return;
  }
  list.innerHTML = `<ul class="list">${items
    .map(
      (m) => `
    <li>
      <strong>${m.title}</strong>
      <span class="muted">${m.type} · ${m.course.toUpperCase()} · ${m.author} · ${m.when}</span>
    </li>
  `
    )
    .join("")}</ul>`;
}

function gcanWireDiscussionPage() {
  const list = document.getElementById("threadList");
  if (!list) return;

  gcanRenderThreads("all");

  const filter = document.getElementById("threadFilter");
  const courseSelect = document.getElementById("threadCourse");
  const options =
    `<option value="all">Dhammaan courseyada</option>` +
    GCAN_COURSES.map((c) => `<option value="${c.id}">${c.name}</option>`).join("");
  filter.innerHTML = options;
  courseSelect.innerHTML = GCAN_COURSES.map(
    (c) => `<option value="${c.id}">${c.name}</option>`
  ).join("");
  filter.addEventListener("change", () => gcanRenderThreads(filter.value));

  document.getElementById("threadForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const course = document.getElementById("threadCourse").value;
    const title = document.getElementById("threadTitle").value.trim();
    const body = document.getElementById("threadBody").value.trim();
    if (!title || !body) return;
    const author = document.getElementById("threadAuthor").value.trim() || "Arday GCAN";
    GCAN_STATE.threads.unshift({
      id: `t${Date.now()}`,
      course,
      title,
      author,
      when: gcanNow(),
      replies: []
    });
    GCAN_STATE.threads[0].replies.push({ author, when: gcanNow(), text: body });
    gcanSave(GCAN_STATE);
    e.target.reset();
    filter.value = course;
    gcanRenderThreads(course);
  });
}

function gcanWireMaterialsPage() {
  const list = document.getElementById("materialList");
  if (!list) return;

  gcanRenderMaterials("all");

  const filter = document.getElementById("materialFilter");
  const courseSelect = document.getElementById("materialCourse");
  const options =
    `<option value="all">Dhammaan courseyada</option>` +
    GCAN_COURSES.map((c) => `<option value="${c.id}">${c.name}</option>`).join("");
  filter.innerHTML = options;
  courseSelect.innerHTML = GCAN_COURSES.map(
    (c) => `<option value="${c.id}">${c.name}</option>`
  ).join("");
  filter.addEventListener("change", () => gcanRenderMaterials(filter.value));

  document.getElementById("materialForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("materialTitle").value.trim();
    if (!title) return;
    const course = document.getElementById("materialCourse").value;
    const type = document.getElementById("materialType").value;
    const author = document.getElementById("materialAuthor").value.trim() || "Arday GCAN";
    GCAN_STATE.materials.unshift({ title, course, type, author, when: gcanNow() });
    gcanSave(GCAN_STATE);
    e.target.reset();
    filter.value = course;
    gcanRenderMaterials(course);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  gcanInitNav();
  gcanRenderHomeCourses();
  gcanRenderCoursesPage();
  gcanWireDiscussionPage();
  gcanWireMaterialsPage();
});
