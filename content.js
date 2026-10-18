/* Single source of truth for the homepage. All option skins load this.
   Add real bullets for the Booking freelance role when you have them. */
window.CONTENT = {
  uz:{
    nav:["Men haqimda","Tajriba","Texnologiyalar","Aloqa"],
    eyebrow:"Senior Software Engineer",
    tagline:"Murakkab va masshtabli tizimlarni qurishda 12+ yillik tajribaga ega muhandis. Mustahkam Java asosi va so'nggi yillarda LLM-asosidagi mahsulotlar hamda AI jarayonlarni ishlab chiqarishga olib chiqish bo'yicha amaliyot.",
    location:"Diemen, Niderlandiya",
    availability:"Yangi imkoniyatlarga ochiq",
    ctaDownload:"CV ni yuklab olish",
    ctaContact:"Aloqa o'rnatish",
    fcLabel:"Qisqacha",
    stats:[
      {v:"12",s:"+",c:"yillik tajriba"},
      {v:"7",s:"",c:"kompaniya"},
      {v:"4",s:"",c:"til"},
      {v:"3",s:"",c:"mamlakat"}
    ],
    focusTitle:"Yo'nalishlar",
    focus:[
      {t:"AI va LLM mahsulotlari",d:"RAG qonotmalari, prompt muhandisligi, AI yordamchilari va ishlab chiqarishga joriy etilgan AI dasturlash amaliyotlari."},
      {t:"Masshtabli, yuqori unumdor tizimlar",d:"Ma'lumotga asoslangan refaktoring, kesh strategiyalari va yuqori trafikdagi endpointlarga tushuvchi yukni kamaytirish."},
      {t:"Boshidan oxirigacha egallik",d:"Backend, frontend va testlar — funksiyani tahlildan relizgacha to'liq egallash."},
      {t:"Mentorlik va texnik liderlik",d:"Jamoa yo'l xaritalari strategiyasi, muhandislarni mentorlik qilish va dasturlash standartlarini oshirish."}
    ],
    expTitle:"Tajriba",
    experience:[
      {company:"Booking.com",role:"Freelance Software Engineer",period:"2026 — hozir",loc:"Amsterdam, Niderlandiya",team:"Messaging Security",
        bullets:[
          "Booking.com Messaging Security jamoasida mustaqil (freelance) dasturiy muhandis sifatida ishlayapman — xavfsiz xabar almashish funksiyalari va platforma xavfsizligini mustahkamlash bo'yicha."
        ],stack:["Java","Xavfsizlik","Xabarlar"]},
      {company:"Adyen",role:"Software Engineer",period:"2026-apr — 2026",loc:"Amsterdam, Niderlandiya",team:"Online Payments-Authentication",
        bullets:[
          "3DS autentifikatsiyadagi nosozliklarni sezilarli darajada kamaytirishi kutilayotgan toʻlovni autentifikatsiya qilish oqimining oxirigacha yangilanishiga egalik qildi. Dastlabki ma'lumotlarni o'rganish, o'lchash va ishlab chiqish bilan shug'ullangan va backend, frontend va end-to-end testlarini yozgan.",
          "Jamoa ichida AI-asosli dasturlash amaliyotlarini joriy etdim — muhandislarga loyiha kontekstini boshqarish, kod bilim diagrammalarini tuzish, AI ni ichki vositalar (Git, Jira, loglar) bilan integratsiya qilish va maxsus AI skill orqali token ishlatishni optimallashtirishni o'rgatdim."
        ],stack:["Java","React","Factory Droid"]},
      {company:"Meta",role:"E5 Software Engineer",period:"2022-avg — 2025-dek",loc:"Amsterdam, Niderlandiya",team:"Care Engineering",
        bullets:[
          "Jamoaning texnik yo‘l xaritasi strategiyasiga rahbarlik qildi, shu bilan birga unumdorlikni sezilarli darajada oshirdi, shu jumladan ma’lumotlarga asoslangan refaktoring orqali tizimdagi muhim to‘siqlarni bartaraf etdi.",
          "GraphQL so'rovlarini yuqori chastotali so'rov mexanizmidan jonli obuna modeliga ko'chirish orqali tizimning optimallashtirilgan miqyosi, orqa tomon yukini kattalik darajasida kamaytirish.",
          "Faqatgina ichki AI yordamchisini uchidan oxirigacha yetkazib berdi - butun RAG quvur liniyasini qurish, tezkor muhandislik va chat UI komponentlarini asosiy ma'lumotlar quvurlarida ma'lumotlar muhandislari bilan hamkorlik qilish."
        ],stack:["Hack","React","TypeScript","Python","Ichki ma'lumot bazalari","LLM (Llama)","GraphQL"]},
      {company:"Booking.com",role:"Senior Software Developer",period:"2017-avg — 2022-avg",loc:"Amsterdam, Niderlandiya",team:"Room Selection (Core Funnel)",
        bullets:[
          "Mehmonxona sahifasi va xonalar jadvali uchun backend mantiqini egalladim — asosiy xizmatlarni migratsiya qilib, refactoring qildim, endpointlarni optimallashtirish va tizimning uzoq muddatli barqarorligini ta'minladim.",
          "Ma'lumotlar bazasi API'si tepasida so'rov darajasidagi keshlash qatlamini yaratishda backend jamoasi a'zolariga rahbarlik qilish va maslahat berish; ma'lumotlar bazasi qo'ng'iroqlariga ulangan va so'rovlarni takrorlash usullarini bekor qilib, yuqori trafikli so'nggi nuqtalarda trafikni sezilarli darajada kamaytiradi.",
          "Booking.com kalendar ilovasi uchun narx ko'rsatish funksiyasini boshlab, backendni ishlab chiqdim va dizaynerlar hamda frontend muhandislari bilan ko'p yo'nalishda hamkorlik qildim."
        ],stack:["Perl","Java","A/B testing","SQL"]},
      {company:"CDNetworks",role:"Senior Software Engineer",period:"2015-fev — 2017-may",loc:"Seul, Koreya",team:"Cache Server Project",
        bullets:[
          "Bloom filter kesh strategiyasini joriy etib, minglab serverlarda disk operatsiyalarini 70% ga (soniyasiga 700 dan 200 ga) kamaytirgan loyihani taklif qilib, boshqardim.",
          "Tizimni profiling qilib, asosiy ma'lumot tuzilmalarini HashMap dan ConcurrentHashMap ga almashtirish orqali og'ir yuk ostidagi kesh server unumdorligini optimallashtirdim.",
          "IPv6 qo'llab-quvvatlash, dinamik konfiguratsiya boshqaruvi va yaxshilangan xato loglashni qo'shib, tizim imkoniyatlarini kengaytirdim."
        ],stack:["Java","Python","Linux administratsiyasi"]},
      {company:"KHResearch",role:"Senior Software Engineer",period:"2013-avg — 2014-dek",loc:"Seul, Koreya",team:"Influenza Forecasting Startup",
        bullets:[
          "Twitter ma'lumotlarini qazish tizimini Oracle dan Hadoop asosidagi platformaga ko'chirdim.",
          "HBase da kunlik TF-IDF atama matritsalarini hisoblab, matn qazish va mashinali o'qish tushunchalarini qo'lladim."
        ],stack:["Java","SQL","Spring MVC","CSS","HTML","JavaScript"]},
      {company:"EnsightMedia",role:"Android Developer",period:"2012-okt — 2014-may",loc:"Seul, Koreya",team:"",
        bullets:[
          "Noldan e-kitob o'qish ilovasini ishlab chiqdim — moslashuvchan, ko'p qurilmali UI komponentlarini yaratdim va Facebook hamda Twitter API larini integratsiya qildim."
        ],stack:["Java","Android","Linux"]},
      {company:"KodaSystem",role:".NET / Android Developer",period:"2009-iyun — 2012-okt",loc:"Seul, Koreya",team:"",
        bullets:[
          "30% ga mehnatni kamaytirgan va operatsion xarajatlarni pastga tushirgan fitnes-klub a'zolik boshqaruv tizimini ishlab chiqdim.",
          "Maydon xodimlari uchun qo'lda bajariladigan jarayonlarni qisqartirgan aktivlar boshqaruvi uchun mobil ilova qurdim."
        ],stack:["C#","Java","Android","ASP.NET","MySQL"]}
    ],
    stackTitle:"Texnologiyalar",
    stackGroups:[
      {t:"Tillar",items:["Java","Python","TypeScript","JavaScript","Hack","Perl","C#","SQL"]},
      {t:"Frontend",items:["React","HTML","CSS","Chat UI"]},
      {t:"Backend & Infra",items:["GraphQL","Spring MVC","ASP.NET","Hadoop","HBase","MySQL","Kesh strategiyalari"]},
      {t:"AI / ML",items:["LLM (Llama)","RAG","Prompt muhandisligi","TF-IDF","Mashinali o'qish","AI skill'lar"]},
      {t:"Platformalar",items:["Android","Linux","MySQL","Oracle","Hadoop"]},
      {t:"Jarayonlar",items:["A/B testing","Data-driven refaktoring","E2E testlar","Mentorlik"]}
    ],
    eduTitle:"Ta'lim",
    education:[
      {deg:"Kompyuter fanlari bo'yicha magistr",school:"Kookmin Universiteti, Seul, Koreya",period:"2007 – 2009",major:"Yo'nalish: Axborot tizimlari"},
      {deg:"Injenerlik bo'yicha bakalavr",school:"Toshkent Axborot Texnologiyalari Universiteti, O'zbekiston",period:"2003 – 2007",major:"Yo'nalish: Injeneriya"}
    ],
    langTitle:"Tillar",
    languages:["Inglizcha","Koreyscha","Ruscha","O'zbekcha"],
    contactTitle:"Aloqa o'rnataylik",
    contactText:"Yangi loyiha, imkoniyat yoki hamkorlik haqida gaplashmoqchimisiz? Men bilan bog'laning — javob berishga har doim tayyorman.",
    contactKeys:{email:"Email",phone:"Telefon",location:"Joylashuv",telegram:"Telegram",blog:"Blog"},
    cLocation:"Diemen, Niderlandiya",
    footNote:"Java · AI · Masshtabli tizimlar",
    langLevel:"erkin"
  },

  ru:{
    nav:["Обо мне","Опыт","Технологии","Контакты"],
    eyebrow:"Senior Software Engineer",
    tagline:"Инженер с более чем 12-летним опытом построения сложных масштабируемых систем — прочная база в Java и недавний практический опыт внедрения LLM-продуктов и AI-конвейеров в продакшен.",
    location:"Димен, Нидерланды",
    availability:"Открыт к новым возможностям",
    ctaDownload:"Скачать CV",
    ctaContact:"Связаться",
    fcLabel:"Вкратце",
    stats:[
      {v:"12",s:"+",c:"лет опыта"},
      {v:"7",s:"",c:"компаний"},
      {v:"4",s:"",c:"языка"},
      {v:"3",s:"",c:"страны"}
    ],
    focusTitle:"Направления",
    focus:[
      {t:"AI и LLM-продукты",d:"RAG-конвейеры, промпт-инжиниринг, AI-ассистенты поддержки и AI-практики кодинга, внедрённые в продакшен."},
      {t:"Масштабируемые высоконагруженные системы",d:"Data-driven рефакторинг, стратегии кэширования и снижение нагрузки на высоконагруженные эндпоинты."},
      {t:"Полный цикл владения",d:"Бэкенд, фронтенд и тесты — владение фичей от анализа до релиза."},
      {t:"Наставничество и техническое лидерство",d:"Стратегия дорожных карт команды, менторинг инженеров и повышение стандартов разработки."}
    ],
    expTitle:"Опыт работы",
    experience:[
      {company:"Booking.com",role:"Freelance Software Engineer",period:"2026 — наст.",loc:"Амстердам, Нидерланды",team:"Messaging Security",
        bullets:[
          "Работаю независимым (freelance) инженером в команде Messaging Security Booking.com — над функциями безопасного обмена сообщениями и укреплением безопасности платформы."
        ],stack:["Java","Безопасность","Messaging"]},
      {company:"Adyen",role:"Software Engineer",period:"апр 2026 — 2026",loc:"Амстердам, Нидерланды",team:"Online Payments-Authentication",
        bullets:[
          "Владеет комплексной модернизацией процесса аутентификации платежей, которая призвана значительно сократить количество сбоев аутентификации 3DS. Выполнял первоначальное исследование данных, определение размера и разработку, а также писал внутренние, внешние и сквозные тесты.",
          "Внедрил в команде AI-практики кодинга: научил инженеров управлять контекстом проекта, строить диаграммы знаний кода, интегрировать AI с внутренними инструментами (Git, Jira, логи) и оптимизировать использование токенов через кастомные AI-скиллы."
        ],stack:["Java","React","Factory Droid"]},
      {company:"Meta",role:"E5 Software Engineer",period:"авг 2022 — дек 2025",loc:"Амстердам, Нидерланды",team:"Care Engineering",
        bullets:[
          "Руководил разработкой технической стратегии команды, одновременно добиваясь значительного улучшения производительности, включая устранение критических узких мест системы посредством рефакторинга на основе данных.",
          "Оптимизирована масштабируемость системы за счет перевода запросов GraphQL из механизма высокочастотного опроса в модель активной подписки, что снижает нагрузку на серверную часть на порядки.",
          "Полностью предоставил собственного помощника по искусственному интеллекту — построение всего конвейера RAG, быстрое проектирование и компоненты пользовательского интерфейса чата, одновременно сотрудничая с инженерами по обработке данных над базовыми конвейерами данных."
        ],stack:["Hack","React","TypeScript","Python","Внутренние БД","LLM (Llama)","GraphQL"]},
      {company:"Booking.com",role:"Senior Software Developer",period:"авг 2017 — авг 2022",loc:"Амстердам, Нидерланды",team:"Room Selection (Core Funnel)",
        bullets:[
          "Владел бэкенд-логикой страницы отеля и таблицы номеров, мигрируя и рефакторя ключевые сервисы для оптимизации эндпоинтов и обеспечения долгосрочной стабильности системы.",
          "Руководил и обучал членов серверной команды при создании уровня кэширования на уровне запросов поверх API базы данных; подключался к вызовам базы данных и переопределял методы для дедупликации запросов, что значительно снижало трафик на конечных точках с высоким трафиком.",
          "Инициировал и разработал функцию отображения цены для календарного приложения Booking.com, реализовав бэкенд и сотрудничая с дизайнерами и фронтенд-инженерами."
        ],stack:["Perl","Java","A/B-тестирование","SQL"]},
      {company:"CDNetworks",role:"Senior Software Engineer",period:"фев 2015 — май 2017",loc:"Сеул, Корея",team:"Cache Server Project",
        bullets:[
          "Предложил и возглавил проект, сокративший операции с диском на 70% (с 700 до 200 в секунду) на тысячах серверов за счёт стратегии кэширования с Bloom-фильтром.",
          "Оптимизировал производительность кэш-сервера под высокой нагрузкой: профилировал систему и заменил ключевые структуры данных с HashMap на ConcurrentHashMap.",
          "Расширил возможности системы, добавив поддержку IPv6, динамическое управление конфигурацией и улучшенное логирование ошибок."
        ],stack:["Java","Python","Администрирование Linux"]},
      {company:"KHResearch",role:"Senior Software Engineer",period:"авг 2013 — дек 2014",loc:"Сеул, Корея",team:"Influenza Forecasting Startup",
        bullets:[
          "Перенёс систему добычи данных из Twitter с Oracle на платформу на базе Hadoop.",
          "Применил концепции text mining и машинного обучения, вычисляя ежедневные TF-IDF матрицы терминов на HBase."
        ],stack:["Java","SQL","Spring MVC","CSS","HTML","JavaScript"]},
      {company:"EnsightMedia",role:"Android Developer",period:"окт 2012 — май 2014",loc:"Сеул, Корея",team:"",
        bullets:[
          "Разработал приложение для чтения E-книг с нуля, создав адаптивные UI-компоненты для разных устройств и интегрировав API Facebook и Twitter."
        ],stack:["Java","Android","Linux"]},
      {company:"KodaSystem",role:".NET / Android Developer",period:"июн 2009 — окт 2012",loc:"Сеул, Корея",team:"",
        bullets:[
          "Разработал систему управления членством в фитнес-клубе, сократив ручной труд на 30% и снизив операционные расходы.",
          "Создал мобильное приложение для управления активами, сократившее ручные процессы для полевых сотрудников."
        ],stack:["C#","Java","Android","ASP.NET","MySQL"]}
    ],
    stackTitle:"Технологии",
    stackGroups:[
      {t:"Языки",items:["Java","Python","TypeScript","JavaScript","Hack","Perl","C#","SQL"]},
      {t:"Frontend",items:["React","HTML","CSS","Chat UI"]},
      {t:"Backend & Infra",items:["GraphQL","Spring MVC","ASP.NET","Hadoop","HBase","MySQL","Стратегии кэширования"]},
      {t:"AI / ML",items:["LLM (Llama)","RAG","Промпт-инжиниринг","TF-IDF","Машинное обучение","AI-скиллы"]},
      {t:"Платформы",items:["Android","Linux","MySQL","Oracle","Hadoop"]},
      {t:"Процессы",items:["A/B-тестирование","Data-driven рефакторинг","E2E-тесты","Менторинг"]}
    ],
    eduTitle:"Образование",
    education:[
      {deg:"Магистр компьютерных наук",school:"Kookmin University, Сеул, Корея",period:"2007 – 2009",major:"Специальность: Информационные системы"},
      {deg:"Бакалавр инженерии",school:"Ташкентский университет информационных технологий, Узбекистан",period:"2003 – 2007",major:"Специальность: Инженерия"}
    ],
    langTitle:"Языки",
    languages:["Английский","Корейский","Русский","Узбекский"],
    contactTitle:"Давайте свяжемся",
    contactText:"Хотите обсудить новый проект, возможность или сотрудничество? Напишите мне — я всегда готов ответить.",
    contactKeys:{email:"Email",phone:"Телефон",location:"Расположение",telegram:"Telegram",blog:"Блог"},
    cLocation:"Димен, Нидерланды",
    footNote:"Java · AI · Масштабируемые системы",
    langLevel:"свободно"
  },

  en:{
    nav:["About","Experience","Stack","Contact"],
    eyebrow:"Senior Software Engineer",
    tagline:"Senior Software Engineer with 12+ years of experience building complex, scalable systems — a strong Java foundation, and recent hands-on work shipping LLM-based products and AI workflows to production.",
    location:"Diemen, Netherlands",
    availability:"Open to new opportunities",
    ctaDownload:"Download CV",
    ctaContact:"Get in touch",
    fcLabel:"At a glance",
    stats:[
      {v:"12",s:"+",c:"years of experience"},
      {v:"7",s:"",c:"companies"},
      {v:"4",s:"",c:"languages"},
      {v:"3",s:"",c:"countries"}
    ],
    focusTitle:"What I focus on",
    focus:[
      {t:"AI & LLM Products",d:"RAG pipelines, prompt engineering, AI support assistants, and AI-driven coding practices shipped to production."},
      {t:"Scalable, High-Performance Systems",d:"Data-driven refactoring, caching strategies, and load reduction on high-traffic endpoints."},
      {t:"End-to-End Ownership",d:"Backend, frontend, and testing — owning features from investigation through to release."},
      {t:"Mentoring & Technical Leadership",d:"Driving team roadmaps, mentoring engineers, and raising engineering standards."}
    ],
    expTitle:"Experience",
    experience:[
      {company:"Booking.com",role:"Freelance Software Engineer",period:"2026 — Present",loc:"Amsterdam, Netherlands",team:"Messaging Security",
        bullets:[
          "Working as an independent (freelance) engineer with the Booking.com Messaging Security team — on secure messaging features and strengthening the platform's security posture."
        ],stack:["Java","Security","Messaging"]},
      {company:"Adyen",role:"Software Engineer",period:"Apr 2026 — 2026",loc:"Amsterdam, Netherlands",team:"Online Payments-Authentication",
        bullets:[
          "Owned the end-to-end revamp of the payment authentication flow, projected to measurably reduce 3DS authentication failures. Handled the initial data investigation, sizing, and development, and wrote the backend, frontend, and end-to-end tests.",
          "Introduced AI-driven coding practices to the team — teaching engineers to manage project context, map code knowledge diagrams, integrate AI with internal tools (Git, Jira, logs), and optimize token usage via custom AI skills."
        ],stack:["Java","React","Factory Droid"]},
      {company:"Meta",role:"E5 Software Engineer",period:"Aug 2022 — Dec 2025",loc:"Amsterdam, Netherlands",team:"Care Engineering",
        bullets:[
          "Led the team's technical roadmap strategy while driving significant performance improvements, including eliminating critical system bottlenecks through data-driven refactoring.",
          "Optimized system scalability by migrating GraphQL queries from a high-frequency polling mechanism to a live subscription model, reducing backend load by orders of magnitude.",
          "Solely delivered an in-house AI assistant from end to end — building the entire RAG pipeline, prompt engineering, and chat UI components while collaborating with data engineers on underlying data pipelines."
        ],stack:["Hack","React","TypeScript","Python","Internal databases","LLM (Llama)","GraphQL"]},
      {company:"Booking.com",role:"Senior Software Developer",period:"Aug 2017 — Aug 2022",loc:"Amsterdam, Netherlands",team:"Room Selection (Core Funnel)",
        bullets:[
          "Owned the backend logic for the hotel page and rooms table, migrating and refactoring core services to optimize endpoints and ensure long-term system stability.",
          "Led and mentored backend team members while building a request-level caching layer on top of the database API; hooked into database calls and overrode methods to deduplicate queries, significantly reducing traffic on high-traffic endpoints.",
          "Initiated and developed a pricing indication feature for the Booking.com calendar app, implementing the backend and collaborating across disciplines with designers and frontend engineers."
        ],stack:["Perl","Java","A/B testing","SQL"]},
      {company:"CDNetworks",role:"Senior Software Engineer",period:"Feb 2015 — May 2017",loc:"Seoul, Korea",team:"Cache Server Project",
        bullets:[
          "Proposed and led a project that reduced disk operations by 70% (from 700 to 200 per second) across thousands of servers by implementing a Bloom filter caching strategy.",
          "Optimized cache server performance under heavy load by profiling the system and switching key data structures from HashMap to ConcurrentHashMap.",
          "Expanded system capabilities by adding IPv6 support, dynamic configuration management, and improved error logging."
        ],stack:["Java","Python","Linux administration"]},
      {company:"KHResearch",role:"Senior Software Engineer",period:"Aug 2013 — Dec 2014",loc:"Seoul, Korea",team:"Influenza Forecasting Startup",
        bullets:[
          "Migrated a Twitter data mining system from Oracle to a Hadoop-based platform.",
          "Applied text mining and machine learning concepts by computing daily TF-IDF term matrices on HBase."
        ],stack:["Java","SQL","Spring MVC","CSS","HTML","JavaScript"]},
      {company:"EnsightMedia",role:"Android Developer",period:"Oct 2012 — May 2014",loc:"Seoul, Korea",team:"",
        bullets:[
          "Developed an E-book reading app from scratch, building responsive, multi-device UI components and integrating Facebook and Twitter APIs."
        ],stack:["Java","Android","Linux"]},
      {company:"KodaSystem",role:".NET / Android Developer",period:"Jun 2009 — Oct 2012",loc:"Seoul, Korea",team:"",
        bullets:[
          "Developed a gym membership management system that cut labor by 30% and lowered operational expenses.",
          "Built a mobile app for asset management that reduced manual workflows for field workers."
        ],stack:["C#","Java","Android","ASP.NET","MySQL"]}
    ],
    stackTitle:"Tech stack",
    stackGroups:[
      {t:"Languages",items:["Java","Python","TypeScript","JavaScript","Hack","Perl","C#","SQL"]},
      {t:"Frontend",items:["React","HTML","CSS","Chat UI"]},
      {t:"Backend & Infra",items:["GraphQL","Spring MVC","ASP.NET","Hadoop","HBase","MySQL","Caching strategies"]},
      {t:"AI / ML",items:["LLM (Llama)","RAG","Prompt engineering","TF-IDF","Machine learning","AI skills"]},
      {t:"Platforms",items:["Android","Linux","MySQL","Oracle","Hadoop"]},
      {t:"Process",items:["A/B testing","Data-driven refactoring","E2E testing","Mentoring"]}
    ],
    eduTitle:"Education",
    education:[
      {deg:"Master of Computer Science",school:"Kookmin University, Seoul, Korea",period:"2007 – 2009",major:"Major: Information Systems"},
      {deg:"Bachelor of Engineering",school:"Tashkent University of Information Technologies, Uzbekistan",period:"2003 – 2007",major:"Major: Engineering"}
    ],
    langTitle:"Languages",
    languages:["English","Korean","Russian","Uzbek"],
    contactTitle:"Let's connect",
    contactText:"Want to discuss a new project, opportunity, or collaboration? Reach out — I'm always happy to reply.",
    contactKeys:{email:"Email",phone:"Phone",location:"Location",telegram:"Telegram",blog:"Blog"},
    cLocation:"Diemen, Netherlands",
    footNote:"Java · AI · Scalable systems",
    langLevel:"fluent"
  },

  nl:{
    nav:["Over mij","Ervaring","Technologie","Contact"],
    eyebrow:"Senior Software Engineer",
    tagline:"Senior Software Engineer met meer dan 12 jaar ervaring in het bouwen van complexe, schaalbare systemen — een sterke Java-basis en recente praktijk in het leveren van LLM-gebaseerde producten en AI-workflows naar productie.",
    location:"Diemen, Nederland",
    availability:"Open voor nieuwe kansen",
    ctaDownload:"CV downloaden",
    ctaContact:"Contact opnemen",
    fcLabel:"In het kort",
    stats:[
      {v:"12",s:"+",c:"jaar ervaring"},
      {v:"7",s:"",c:"bedrijven"},
      {v:"4",s:"",c:"talen"},
      {v:"3",s:"",c:"landen"}
    ],
    focusTitle:"Waar ik me op richt",
    focus:[
      {t:"AI & LLM-producten",d:"RAG-pipelines, prompt engineering, AI-supportassistenten en AI-gedreven codeerpraktijken, ingezet in productie."},
      {t:"Schaalbare, hoogwaardige systemen",d:"Data-gedreven refactoring, cache-strategieën en verminderde belasting op endpoints met hoog verkeer."},
      {t:"End-to-end eigenaarschap",d:"Backend, frontend en tests — features bezitten van analyse tot release."},
      {t:"Mentoring & technisch leiderschap",d:"Teamroadmaps aansturen, engineers mentoren en engineeringstandaarden verhogen."}
    ],
    expTitle:"Ervaring",
    experience:[
      {company:"Booking.com",role:"Freelance Software Engineer",period:"2026 — nu",loc:"Amsterdam, Nederland",team:"Messaging Security",
        bullets:[
          "Werkt als onafhankelijke (freelance) engineer bij het Messaging Security-team van Booking.com — aan veilige messaging-functies en het versterken van de beveiliging van het platform."
        ],stack:["Java","Beveiliging","Messaging"]},
      {company:"Adyen",role:"Software Engineer",period:"apr 2026 — 2026",loc:"Amsterdam, Nederland",team:"Online Payments-Authentication",
        bullets:[
          "Eigenaar van de end-to-end vernieuwing van de betalingsauthenticatiestroom, die naar verwachting het aantal 3DS-authenticatiefouten meetbaar zal verminderen. Verzorgde het initiële dataonderzoek, de omvang en de ontwikkeling ervan, en schreef de backend-, frontend- en end-to-end-tests.",
          "Introduceerde AI-gedreven codeerpraktijken in het team — engineers leerden projectcontext beheren, code-kennisdiagrammen tekenen, AI integreren met interne tools (Git, Jira, logs) en tokengebruik optimaliseren via aangepaste AI-skills."
        ],stack:["Java","React","Factory Droid"]},
      {company:"Meta",role:"E5 Software Engineer",period:"aug 2022 — dec 2025",loc:"Amsterdam, Nederland",team:"Care Engineering",
        bullets:[
          "Leidde de technische roadmapstrategie van het team en zorgde tegelijkertijd voor aanzienlijke prestatieverbeteringen, waaronder het elimineren van kritieke systeemknelpunten door middel van datagestuurde refactoring.",
          "Geoptimaliseerde systeemschaalbaarheid door GraphQL-query's te migreren van een hoogfrequent pollingmechanisme naar een live abonnementsmodel, waardoor de backend-belasting met ordes van grootte wordt verminderd.",
          "Solely leverde van begin tot eind een interne AI-assistent: bouwde de volledige RAG-pijplijn, snelle engineering en chat-UI-componenten, terwijl we samenwerkten met data-ingenieurs aan de onderliggende datapijplijnen."
        ],stack:["Hack","React","TypeScript","Python","Interne databases","LLM (Llama)","GraphQL"]},
      {company:"Booking.com",role:"Senior Software Developer",period:"aug 2017 — aug 2022",loc:"Amsterdam, Nederland",team:"Room Selection (Core Funnel)",
        bullets:[
          "Bezette de backend-logica van de hotelpagina en de kamertabel, met migratie en refactoring van kernservices om endpoints te optimaliseren en de langetermijnstabiliteit van het systeem te waarborgen.",
          "Leden van het backend-team geleid en begeleid bij het bouwen van een cachinglaag op verzoekniveau bovenop de database-API; aangesloten op databaseaanroepen en overschreven methoden om zoekopdrachten te ontdubbelen, waardoor het verkeer op eindpunten met veel verkeer aanzienlijk werd verminderd.",
          "Initieerde en ontwikkelde een prijsindicatiefunctie voor de Booking.com-kalenderapp, met implementatie van de backend en samenwerking met designers en frontend-engineers."
        ],stack:["Perl","Java","A/B testing","SQL"]},
      {company:"CDNetworks",role:"Senior Software Engineer",period:"feb 2015 — mei 2017",loc:"Seoel, Korea",team:"Cache Server Project",
        bullets:[
          "Stelde en leidde een project dat diskoperaties met 70% verlaagde (van 700 naar 200 per seconde) op duizenden servers door een cache-strategie met Bloom filter toe te passen.",
          "Optimaliseerde cache-serverprestaties onder zware belasting door het systeem te profileren en cruciale datastructuren van HashMap naar ConcurrentHashMap te verplaatsen.",
          "Breidde de systeemcapaciteit uit met IPv6-ondersteuning, dynamische configuratiebeheer en verbeterde foutregistratie."
        ],stack:["Java","Python","Linux-administratie"]},
      {company:"KHResearch",role:"Senior Software Engineer",period:"aug 2013 — dec 2014",loc:"Seoel, Korea",team:"Influenza Forecasting Startup",
        bullets:[
          "Migreerde een Twitter-datamining-systeem van Oracle naar een Hadoop-gebaseerd platform.",
          "Pastte text-mining- en machine-learningconcepten toe door dagelijkse TF-IDF-termematriksen te berekenen op HBase."
        ],stack:["Java","SQL","Spring MVC","CSS","HTML","JavaScript"]},
      {company:"EnsightMedia",role:"Android Developer",period:"okt 2012 — mei 2014",loc:"Seoel, Korea",team:"",
        bullets:[
          "Ontwikkelde een e-boekleesapp van nul af, met responsieve, multi-device UI-componenten en integratie van Facebook- en Twitter-API's."
        ],stack:["Java","Android","Linux"]},
      {company:"KodaSystem",role:".NET / Android Developer",period:"juni 2009 — okt 2012",loc:"Seoel, Korea",team:"",
        bullets:[
          "Ontwikkelde een lidmaatschapsbeheersysteem voor fitnessclubs dat handarbeid met 30% verlaagde en operationele kosten verlaagde.",
          "Bouwde een mobiele app voor assetbeheer die handmatige workflows voor veldwerkers verminderde."
        ],stack:["C#","Java","Android","ASP.NET","MySQL"]}
    ],
    stackTitle:"Tech stack",
    stackGroups:[
      {t:"Talen",items:["Java","Python","TypeScript","JavaScript","Hack","Perl","C#","SQL"]},
      {t:"Frontend",items:["React","HTML","CSS","Chat UI"]},
      {t:"Backend & Infra",items:["GraphQL","Spring MVC","ASP.NET","Hadoop","HBase","MySQL","Cache-strategieën"]},
      {t:"AI / ML",items:["LLM (Llama)","RAG","Prompt engineering","TF-IDF","Machine learning","AI-skills"]},
      {t:"Platforms",items:["Android","Linux","MySQL","Oracle","Hadoop"]},
      {t:"Process",items:["A/B testing","Data-gedreven refactoring","E2E testing","Mentoring"]}
    ],
    eduTitle:"Opleiding",
    education:[
      {deg:"Master Computer Science",school:"Kookmin University, Seoel, Korea",period:"2007 – 2009",major:"Richting: Informatiesystemen"},
      {deg:"Bachelor Engineering",school:"Tashkent University of Information Technologies, Oezbekistan",period:"2003 – 2007",major:"Richting: Engineering"}
    ],
    langTitle:"Talen",
    languages:["Engels","Koreaans","Russisch","Oezbeeks"],
    contactTitle:"Laten we contact opnemen",
    contactText:"Wil je een nieuw project, mogelijkheid of samenwerking bespreken? Neem contact met me op — ik antwoord altijd graag.",
    contactKeys:{email:"E-mail",phone:"Telefoon",location:"Locatie",telegram:"Telegram",blog:"Blog"},
    cLocation:"Diemen, Nederland",
    footNote:"Java · AI · Schaalbare systemen",
    langLevel:"vaardig"
  },

  ko:{
    nav:["소개","경력","기술","연락처"],
    eyebrow:"Senior Software Engineer",
    tagline:"복잡하고 확장 가능한 시스템을 구축한 12년 이상의 경험을 가진 시니어 소프트웨어 엔지니어. 견고한 Java 기반과 최근 LLM 기반 제품 및 AI 워크플로우를 프로덕션에 배포한 실무 경험을 보유하고 있습니다.",
    location:"디멘, 네덜란드",
    availability:"새로운 기회에 열려 있음",
    ctaDownload:"CV 다운로드",
    ctaContact:"연락하기",
    fcLabel:"한눈에 보기",
    stats:[
      {v:"12",s:"+",c:"년 경력"},
      {v:"7",s:"",c:"개 회사"},
      {v:"4",s:"",c:"개 언어"},
      {v:"3",s:"",c:"개 국가"}
    ],
    focusTitle:"집중 분야",
    focus:[
      {t:"AI & LLM 제품",d:"RAG 파이프라인, 프롬프트 엔지니어링, AI 지원 어시스턴트, 프로덕션에 배포된 AI 기반 코딩 실무."},
      {t:"확장 가능한 고성능 시스템",d:"데이터 기반 리팩토링, 캐싱 전략, 고트래픽 엔드포인트의 부하 감소."},
      {t:"엔드투엔드 소유",d:"백엔드, 프런트엔드, 테스트 — 분석부터 릴리스까지 기능을 통째로 소유."},
      {t:"멘토링 & 기술 리더십",d:"팀 로드맵 주도, 엔지니어 멘토링, 엔지니어링 표준 향상."}
    ],
    expTitle:"경력",
    experience:[
      {company:"Booking.com",role:"Freelance Software Engineer",period:"2026 — 현재",loc:"암스테르담, 네덜란드",team:"Messaging Security",
        bullets:[
          "Booking.com의 Messaging Security 팀에서 독립(freelance) 엔지니어로 근무 중 — 안전한 메시징 기능과 플랫폼 보안 강화에 집중."
        ],stack:["Java","보안","Messaging"]},
      {company:"Adyen",role:"Software Engineer",period:"2026-04 — 2026",loc:"암스테르담, 네덜란드",team:"Online Payments-Authentication",
        bullets:[
          "결제 인증 흐름의 엔드투엔드 개편을 담당하여 3DS 인증 실패를 눈에 띄게 줄일 것으로 예상됩니다. 초기 데이터 조사, 크기 조정 및 개발을 처리하고 백엔드, 프런트엔드 및 엔드투엔드 테스트를 작성했습니다.",
          "팀에 AI 기반 코딩 실무를 도입 — 엔지니어들에게 프로젝트 컨텍스트 관리, 코드 지식 다이어그램 작성, 내부 도구(Git, Jira, 로그)와의 AI 통합, 커스텀 AI 스킬을 통한 토큰 사용량 최적화를 교육."
        ],stack:["Java","React","Factory Droid"]},
      {company:"Meta",role:"E5 Software Engineer",period:"2022-08 — 2025-12",loc:"암스테르담, 네덜란드",team:"Care Engineering",
        bullets:[
          "데이터 기반 리팩토링을 통해 중요한 시스템 병목 현상을 제거하는 등 상당한 성능 개선을 추진하는 동시에 팀의 기술 로드맵 전략을 주도했습니다.",
          "GraphQL 쿼리를 고주파 폴링 메커니즘에서 라이브 구독 모델로 마이그레이션하여 시스템 확장성을 최적화하고 백엔드 로드를 몇 배나 줄였습니다.",
          "기본 데이터 파이프라인에서 데이터 엔지니어와 협력하면서 전체 RAG 파이프라인, 프롬프트 엔지니어링 및 채팅 UI 구성 요소를 구축하는 등 처음부터 끝까지 사내 AI 도우미를 단독으로 제공했습니다."
        ],stack:["Hack","React","TypeScript","Python","내부 데이터베이스","LLM (Llama)","GraphQL"]},
      {company:"Booking.com",role:"Senior Software Developer",period:"2017-08 — 2022-08",loc:"암스테르담, 네덜란드",team:"Room Selection (Core Funnel)",
        bullets:[
          "호텔 페이지와 객실 테이블의 백엔드 로직을 소유 — 핵심 서비스의 마이그레이션과 리팩토링을 통해 엔드포인트를 최적화하고 시스템의 장기적 안정성을 보장.",
          "데이터베이스 API 위에 요청 수준 캐싱 계층을 구축하는 동안 백엔드 팀 구성원을 이끌고 멘토링했습니다. 데이터베이스 호출에 연결되고 쿼리 중복을 제거하는 메서드를 재정의하여 트래픽이 많은 엔드포인트의 트래픽을 크게 줄입니다.",
          "Booking.com 캘린더 앱의 가격 표시 기능을 기획·개발 — 백엔드를 구현하고 디자이너 및 프런트엔드 엔지니어와 다학제 협업."
        ],stack:["Perl","Java","A/B testing","SQL"]},
      {company:"CDNetworks",role:"Senior Software Engineer",period:"2015-02 — 2017-05",loc:"서울, 한국",team:"Cache Server Project",
        bullets:[
          "Bloom filter 캐싱 전략을 적용해 수천 대의 서버에서 디스크 운영을 70% 감소(초당 700 → 200)시킨 프로젝트를 제안하고 주도.",
          "시스템 프로파일링을 통해 핵심 데이터 구조를 HashMap에서 ConcurrentHashMap으로 전환, 고부하 환경의 캐시 서버 성능을 최적화.",
          "IPv6 지원, 동적 구성 관리, 개선된 에러 로깅을 추가해 시스템 기능을 확장."
        ],stack:["Java","Python","Linux 관리"]},
      {company:"KHResearch",role:"Senior Software Engineer",period:"2013-08 — 2014-12",loc:"서울, 한국",team:"Influenza Forecasting Startup",
        bullets:[
          "Twitter 데이터 마이닝 시스템을 Oracle에서 Hadoop 기반 플랫폼으로 마이그레이션.",
          "HBase에서 일일 TF-IDF 단어 행렬을 계산해 텍스트 마이닝과 머신러닝 개념을 적용."
        ],stack:["Java","SQL","Spring MVC","CSS","HTML","JavaScript"]},
      {company:"EnsightMedia",role:"Android Developer",period:"2012-10 — 2014-05",loc:"서울, 한국",team:"",
        bullets:[
          "e-북 리더 앱을 처음부터 개발 — 반응형 멀티디바이스 UI 컴포넌트를 만들고 Facebook 및 Twitter API를 통합."
        ],stack:["Java","Android","Linux"]},
      {company:"KodaSystem",role:".NET / Android Developer",period:"2009-06 — 2012-10",loc:"서울, 한국",team:"",
        bullets:[
          "인력 30% 절감 및 운영비 하락을 이룬 피트니스 클럽 회원 관리 시스템을 개발.",
          "현장 직원용 수동 프로세스를 줄이는 자산 관리용 모바일 앱을 구축."
        ],stack:["C#","Java","Android","ASP.NET","MySQL"]}
    ],
    stackTitle:"기술 스택",
    stackGroups:[
      {t:"언어",items:["Java","Python","TypeScript","JavaScript","Hack","Perl","C#","SQL"]},
      {t:"프런트엔드",items:["React","HTML","CSS","Chat UI"]},
      {t:"백엔드 & 인프라",items:["GraphQL","Spring MVC","ASP.NET","Hadoop","HBase","MySQL","캐싱 전략"]},
      {t:"AI / ML",items:["LLM (Llama)","RAG","프롬프트 엔지니어링","TF-IDF","머신러닝","AI 스킬"]},
      {t:"플랫폼",items:["Android","Linux","MySQL","Oracle","Hadoop"]},
      {t:"프로세스",items:["A/B 테스트","데이터 기반 리팩토링","E2E 테스트","멘토링"]}
    ],
    eduTitle:"학력",
    education:[
      {deg:"컴퓨터 과학 석사",school:"Kookmin University, 서울, 한국",period:"2007 – 2009",major:"전공: 정보 시스템"},
      {deg:"공학 학사",school:"Tashkent University of Information Technologies, 우즈베키스탄",period:"2003 – 2007",major:"전공: 공학"}
    ],
    langTitle:"언어",
    languages:["영어","한국어","러시아어","우즈베크어"],
    contactTitle:"연락합시다",
    contactText:"새로운 프로젝트, 기회, 협업에 대해 이야기하고 싶으신가요? 연락 주세요 — 항상 답변하겠습니다.",
    contactKeys:{email:"이메일",phone:"전화",location:"위치",telegram:"텔레그램",blog:"블로그"},
    cLocation:"디멘, 네덜란드",
    footNote:"Java · AI · 확장 가능한 시스템",
    langLevel:"유창"
  }
};
