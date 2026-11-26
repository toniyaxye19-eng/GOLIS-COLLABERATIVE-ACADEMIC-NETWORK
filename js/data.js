const GCAN_COURSES = [
  {
    id: "pph",
    name: "PPH",
    full: "Primary Public Health",
    desc: "Caaaafimaadka bulshada, bounceeddada ka-hortagga cudurrada, iyo hawlkarnimada caafimaadka.",
    icon: "🌍",
    revision: [
      { title: "Tilmaamaha aasaasiga ah ee PPH", detail: "Hirgelinta caafimaadka bulshada, tallaabooyinka ka-hortagga, iyo himilooyinka caafimaadka." },
      { title: "Epidemiology-dhix gal ah", detail: "Sida cudurrada ugu faafigaan, incidence vs prevalence, iyo habraac ka-hortagga." },
      { title: "Imtixaannadii hore", detail: "Suaalo imtixaan oo ka socda sanadadii hore oo ardaydu wadaagaan." }
    ],
    quiz: [
      {
        q: "Waa maxay faraqa u dhexeeya 'incidence' iyo 'prevalence'?",
        options: [
          "Waa isku mid",
          "Incidence waa casrad cusub, prevalence waa tirada guud ee xilligaas",
          "Prevalence waa casrad cusub, incidence waa tirada guud",
          "Midna lama isticmaalo PPH"
        ],
        answer: 1
      },
      {
        q: "Tallaabada ugu horreysa ee ka-hortagga cudurka faafigaya waa:",
        options: ["Daaweyn", "Go'aan ku ool ah oo ka-hortag ah", "Gudbinta warbixin", "Tijaabo lab"],
        answer: 1
      },
      {
        q: "Waa maxay ujeeddada ugu weyn ee PPH?",
        options: [
          "Kaliya daaweynta bukaanada",
          "Hagaajinta caafimaadka guud ee bulshada oo dhan",
          "Ganacsi dawooyin",
          "Khibrad kale oo dhaqaale"
        ],
        answer: 1
      }
    ]
  },
  {
    id: "anatomy",
    name: "Anatomy",
    full: "Anatomy",
    desc: "Dhismaha jirka bini'aadamka: xubnaha, lafaha, muruqyada, iyo hab-dhismeedkooda.",
    icon: "🦴",
    revision: [
      { title: "Hab-dhismeedka lafaha", detail: "Noocyada lafaha, lafta dhexe, iyo sida ay isku xirmaan." },
      { title: "Nidaamka muruqyada", detail: "Muruqyada madaxa, laf-dhabarta, iyo faraha — magacyada iyo hawlaha." },
      { title: "Atlas anatomy", detail: "Sawirro la adeegsado marka la baranayo xubnaha jirka." }
    ],
    quiz: [
      {
        q: "Lafata ugu weyn jirka bini'aadamka waa:",
        options: ["Femur", "Humerus", "Tibia", "Radius"],
        answer: 0
      },
      {
        q: "Muruqa 'cardiac' waxaa laga helaa:",
        options: ["Gacmaha", "Wadnaha", "Cagaha", "Caloosha"],
        answer: 1
      },
      {
        q: "Tirooda lafaha jirka dadka waaweyn waxay dhaaftaan:",
        options: ["150", "206", "300", "400"],
        answer: 1
      }
    ]
  },
  {
    id: "physiology",
    name: "Physiology",
    full: "Physiology",
    desc: "Sida jirka bini'aadamka u shaqeeyo: hab-dhismeedka nafso, dheef-shiid, iyo dheecaannada.",
    icon: "🫀",
    revision: [
      { title: "Nidaamka wadnaha", detail: "Sida dhiigu u socdo, garaaca wadnaha, iyo huubka wadnaha." },
      { title: "Dheef-shiidka", detail: "Marxaladaha dheef-shiidka iyo shaandhaynta mineerada." },
      { title: "Nidaamka neefmareenka", detail: "Isku dheelitirka O2 iyo CO2 iyo hawsha sambabada." }
    ],
    quiz: [
      {
        q: "Wadnu wuxuu leeyahay qolal (chambers) tiradoodu tahay:",
        options: ["2", "3", "4", "5"],
        answer: 2
      },
      {
        q: "Neefsashada marka la qaado O2 wuxuu baxaa:",
        options: ["N2", "CO2", "H2O oo keliya", "O2"],
        answer: 1
      },
      {
        q: "Caabitaanka dhiigu (normal) ee dadka caafimaad qabku waa:",
        options: ["120/80", "140/100", "90/60", "160/90"],
        answer: 0
      }
    ]
  },
  {
    id: "pathology",
    name: "Pathology",
    full: "Pathology",
    desc: "Cudurrada iyo sida ay u saameeyaan unugyada iyo xubnaha jirka.",
    icon: "🔬",
    revision: [
      { title: "Noocyada cudurrada", detail: "Cudurrada faafigaya, cudurrada genetic-ka, iyo kuwa deegaanka." },
      { title: "Hab-dhismeedka unugyada", detail: "Sida unugyada u beddelmaan marka cudur soo gaaro." },
      { title: "Tijaabada pathology", detail: "Biopsy, cytology, iyo lab tests-ka muhiimka ah." }
    ],
    quiz: [
      {
        q: "Biopsy waa:",
        options: [
          "Tijaabo dhiig",
          "Qaadista qayb unug si la fiiriyo microscope",
          "X-ray",
          "Tijaabo kaarboon"
        ],
        answer: 1
      },
      {
        q: "Cudurka 'inflammation' wuxuu ka kooban yahay:",
        options: ["Unug cusub oo dhan", "Fal-celin jirka ee ka-hortagga", "Waxba ma aha", "Cudur genetic"],
        answer: 1
      },
      {
        q: "Nooca ugu caansan ee cancer-ka wuxuu ka yimaadaa:",
        options: ["Unugyada caadiga ah", "Unugyada isku dhaawacmay", "Dhiig keliya", "Lafaha keliya"],
        answer: 1
      }
    ]
  },
  {
    id: "microbiology",
    name: "Microbiology",
    full: "Microbiology",
    desc: "Bakteriyada, fayrasyada, fungi-ga, iyo sida ay cudurro u keenaan.",
    icon: "🧫",
    revision: [
      { title: "Noocyada microbes-ka", detail: "Bacteria, viruses, fungi, iyo parasites — faraqa u dhexeeya." },
      { title: "Antibiotics", detail: "Sida antibiotics u shaqeeyaan iyo khadarka antibiotic resistance." },
      { title: "Sterilization", detail: "Hababka nadiifinta iyo ka-hortagga faafitaanka microbes-ka." }
    ],
    quiz: [
      {
        q: "Fayrasyadu (viruses) waxay kaliya hartaraan (reproduce) gudaha:",
        options: ["Biyaha", "Unugyada nool", "Cirka", "Dhulka"],
        answer: 1
      },
      {
        q: "Antibiotic-resistant bacteria waa:",
        options: [
          "Bakteriya daawadu ku shaqayn waydo",
          "Bakteriya cusub oo fiican",
          "Fayras",
          "Fungi"
        ],
        answer: 0
      },
      {
        q: "Sterilization waxay wataa:",
        options: [
          "Nadiifinta dhammaan microbes-ka",
          "Nadiifinta qaar keliya",
          "Shuban la'aan",
          "Daaweyn"
        ],
        answer: 0
      }
    ]
  }
];

const GCAN_SEED_THREADS = [
  {
    id: "t1",
    course: "anatomy",
    title: "Sida loo xasuusto magacyada muruqyada gacanta?",
    author: "Arday GCAN",
    when: "2 maalmood kahor",
    replies: [
      { author: "Walaashay naag ah", when: "1 maalin kahor", text: "Waxaan isticmaali jiray acronym-yo. Isku day 'Some Lovers Try Positions...' — waa magacyada lafaha gacanta tirada kordhinta!" },
      { author: "Arday kale", when: "12 saac kahor", text: "Flash cards ayaan isticmaalaa, 10 muruq maalintii." }
    ]
  },
  {
    id: "t2",
    course: "physiology",
    title: "Su'aal: garabka wadnaha ee 'systole' iyo 'diastole'?",
    author: "Arday GCAN",
    when: "3 maalmood kahor",
    replies: [
      { author: "Walaalkay", when: "2 maalmood kahor", text: "Systole = wadnu wuxuu cadaadis ku wadaa dhiig; Diastole = wadnu wuxuu nasanayaa wuxuuna buuxsanaa." }
    ]
  },
  {
    id: "t3",
    course: "microbiology",
    title: "Maxay ku kala duwan yihiin bacteria iyo virus?",
    author: "Arday cusub",
    when: "1 toddobaad kahor",
    replies: [
      { author: "Arday GCAN", when: "6 maalmood kahor", text: "Bacteria waa unug nool oo iskeed u hartara, virus-na wuxuu u baahan yahay unug kale si uu u hartaro." }
    ]
  }
];

const GCAN_SEED_MATERIALS = [
  { title: "Buuga Anatomy — Atlas la wadaago", course: "anatomy", type: "Buug", author: "GCAN", when: "1 toddobaad kahor" },
  { title: "Physiology — Cheat-sheet nidaamka wadnaha", course: "physiology", type: "Notes", author: "GCAN", when: "5 maalmood kahor" },
  { title: "PPH — Imtixaannadii 2023", course: "pph", type: "Imtixaan", author: "GCAN", when: "2 toddobaad kahor" },
  { title: "Pathology — Slides lectures-ka", course: "pathology", type: "Slides", author: "GCAN", when: "10 maalmood kahor" },
  { title: "Microbiology — Lab safety guide", course: "microbiology", type: "Guide", author: "GCAN", when: "3 toddobaad kahor" }
];
