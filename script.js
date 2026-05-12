const LANGS = {
    ru: {
        'nav.services': 'Услуги', 'nav.about': 'О нас', 'nav.adv': 'Преимущества', 'nav.hl': 'Разделы', 'nav.process': 'Процесс', 'nav.contact': 'Контакты', 'nav.cta': 'Начать работу',
        'hero.badge': 'Премиум маркетинговое агентство', 'hero.sub': 'Мы строим мощные цифровые системы, бренды и маркетинговые механизмы для амбициозных компаний. Стратегия, технологии, результат.', 'hero.btn1': 'Начать проект', 'hero.btn2': 'Наши услуги', 'hero.m1': 'Проектов', 'hero.m2': 'Довольных клиентов', 'hero.m3': 'Лет на рынке',
        'mq.1': 'Брендинг', 'mq.2': 'SMM-маркетинг', 'mq.3': 'Веб-дизайн', 'mq.4': 'Перформанс-реклама', 'mq.5': 'Контент-продакшн', 'mq.6': 'SEO-продвижение', 'mq.7': 'Стратегия', 'mq.8': 'Аналитика',
        'srv.tag': 'Что мы делаем', 'srv.title': 'Услуги, которые', 'srv.title2': 'дают результат', 'srv.cta': 'Обсудить проект →',
        'srv.s1.name': 'Брендинг', 'srv.s1.txt': 'Создаём уникальные фирменные стили и визуальные идентичности, которые запоминаются и выделяют вас среди конкурентов.',
        'srv.s2.name': 'SMM-маркетинг', 'srv.s2.txt': 'Стратегическое ведение социальных сетей: контент, таргетинг, вовлечённость и рост подписчиков для вашего бизнеса.',
        'srv.s3.name': 'Веб-дизайн', 'srv.s3.txt': 'Сайты и лендинги премиум-уровня с детальной проработкой UX/UI, высокой конверсией и безупречной производительностью.',
        'srv.s4.name': 'Комплекс-маркетинг', 'srv.s4.txt': 'Полный набор маркетинговых действий, которые помогают бизнесу привлекать клиентов, продавать и развивать бренд системно.',
        'srv.s5.name': 'Контент-продакшн', 'srv.s5.txt': 'Фото, видео, текст, графика — всё это мы создаём под ключ. Контент, который вовлекает и продаёт на каждом этапе воронки.',
        'srv.s6.name': 'SEO-оптимизация', 'srv.s6.txt': 'Технический аудит, семантика, линкбилдинг и контент-стратегия для устойчивого органического роста в поисковых системах.',
        'about.tag': 'Кто мы', 'about.title': 'О компании', 'about.txt': 'Khan — это современная маркетинговая компания, специализирующаяся на построении премиального цифрового присутствия для амбициозных брендов. Мы объединяем глубокую стратегию, передовые технологии и высокую креативность, чтобы помогать бизнесу расти быстрее.',
        'about.f1.t': 'Прозрачная отчётность', 'about.f1.s': 'Ежемесячные отчёты по всем KPI и каналам', 'about.f2.t': 'Ориентация на результат', 'about.f2.s': 'Каждое решение измеримо и подкреплено данными', 'about.f3.t': 'Команда экспертов', 'about.f3.s': 'Специалисты с опытом в 10+ нишах', 'about.f4.t': 'Быстрый запуск', 'about.f4.s': 'Первые результаты уже через 2 недели работы',
        'about.st1': 'Завершённых проектов', 'about.st2': 'Довольных клиентов', 'about.st3': 'Лет на рынке',
        'adv.tag': 'Почему Khan', 'adv.title': 'Наши', 'adv.title2': 'преимущества', 'adv.desc': 'Мы не просто подрядчик — мы стратегический партнёр, который глубоко погружается в ваш бизнес и создаёт маркетинговые системы, которые работают без вашего постоянного контроля.',
        'adv.i1.t': 'Надёжность и прозрачность', 'adv.i1.p': 'Вы всегда знаете, что происходит с вашим бюджетом. Никаких скрытых платежей и размытых отчётов — только чёткие цифры и реальные результаты.',
        'adv.i2.t': 'Измеримые KPI', 'adv.i2.p': 'Каждая кампания запускается с чёткими целями и ключевыми метриками. Мы фокусируемся на тех показателях, которые реально влияют на ваш доход.',
        'adv.i3.t': 'Индивидуальный подход', 'adv.i3.p': 'Нет шаблонных решений. Мы изучаем ваш бизнес, рынок и аудиторию, чтобы создать стратегию, которая работает именно для вас.',
        'adv.i4.t': 'Скорость запуска', 'adv.i4.p': 'От первой встречи до старта рекламных кампаний — не более 7 рабочих дней. Быстрый онбординг без лишней бюрократии.',
        'adv.i5.t': 'Экспертиза в 10+ нишах', 'adv.i5.p': 'E-commerce, B2B, недвижимость, HoReCa, медицина, образование — у нас есть реальный опыт и кейсы в вашей индустрии.',
        'adv.i6.t': 'Выделенный менеджер', 'adv.i6.p': 'Один контакт — полная ответственность. Ваш менеджер на связи 5 дней в неделю и координирует всю команду внутри Khan.',
        'adv.i7.t': 'Гарантия качества', 'adv.i7.p': 'Если результаты не соответствуют согласованным KPI в первый месяц, мы продолжаем работу за свой счёт до их достижения.',
        'hl.tag': 'Навигация', 'hl.title': 'Разделы сайта',
        'hl.c1.lbl': 'Работы', 'hl.c1.title': 'ПОРТ-<br><span class="outline">ФОЛИО</span>', 'hl.c1.desc': 'Более 150 реализованных проектов в различных нишах', 'hl.c1.s1': 'Проектов', 'hl.c1.s2': 'Индустрий',
        'hl.c2.lbl': 'Компания', 'hl.c2.title': 'О НАС —<br><span class="outline">KHAN</span>', 'hl.c2.desc': 'Современное маркетинговое агентство, которое строит цифровые системы роста для амбициозных брендов',
        'hl.c3.lbl': 'Направления', 'hl.c3.title': 'УСЛУГИ', 'hl.tag1': 'Брендинг', 'hl.tag2': 'Реклама',
        'hl.c4.lbl': 'Клиенты', 'hl.c4.title': 'ПАРТНЁРЫ',
        'hl.c5.lbl': 'Как работаем', 'hl.c5.title': 'ПРО-<br>ЦЕСС',
        'hl.c6.lbl': 'Связаться', 'hl.c6.title': 'КОН-<br><span class="outline">ТАКТ</span>', 'hl.c6.desc': 'Напишите нам — ответим в течение часа и обсудим ваш проект',
        'proc.tag': 'Как мы работаем', 'proc.title': 'Наш процесс —', 'proc.title2': 'прозрачный и чёткий',
        'proc.s1.t': 'Брифинг и аудит', 'proc.s1.p': 'Проводим глубокий анализ вашего бизнеса, конкурентов и целевой аудитории. Изучаем текущие каналы и точки роста.',
        'proc.s2.t': 'Стратегия', 'proc.s2.p': 'Разрабатываем детальный маркетинговый план с чёткими KPI, бюджетным распределением и дорожной картой по каждому каналу.',
        'proc.s3.t': 'Запуск', 'proc.s3.p': 'Создаём все материалы, настраиваем кампании и запускаем продвижение в течение 7 рабочих дней после согласования стратегии.',
        'proc.s4.t': 'Рост и оптимизация', 'proc.s4.p': 'Непрерывно анализируем данные, тестируем гипотезы и масштабируем то, что работает лучше всего для вашего бизнеса.',
        'cont.tag': 'Обсудить проект', 'cont.title': 'Давайте построим', 'cont.title2': 'что-то великое', 'cont.desc': 'Готовы вывести ваш бренд на новый уровень? Напишите нам — и мы вернёмся в течение одного часа с первичным планом действий.',
        'cont.phone': 'Телефон', 'cont.addr': 'Адрес', 'cont.addr.val': 'Бухара, Узбекистан',
        'form.name': 'Ваше имя', 'form.name.ph': 'Имя Фамилия', 'form.phone': 'Телефон', 'form.msg': 'Сообщение', 'form.msg.ph': 'Расскажите о вашем проекте...', 'form.submit': 'Отправить заявку →',
        'footer.copy': '© 2025 Khan Marketing Company<br>Все права защищены',
        'toast.ok': 'Заявка успешно отправлена!', 'toast.err': 'Ошибка. Попробуйте ещё раз.'
    },
    en: {
        'nav.services': 'Services', 'nav.about': 'About', 'nav.adv': 'Advantages', 'nav.hl': 'Sections', 'nav.process': 'Process', 'nav.contact': 'Contact', 'nav.cta': 'Get Started',
        'hero.badge': 'Premium Marketing Agency', 'hero.sub': 'We build powerful digital systems, brands and marketing engines for ambitious companies. Strategy, technology, results.', 'hero.btn1': 'Start a Project', 'hero.btn2': 'Our Services', 'hero.m1': 'Projects', 'hero.m2': 'Happy Clients', 'hero.m3': 'Years on Market',
        'mq.1': 'Branding', 'mq.2': 'SMM Marketing', 'mq.3': 'Web Design', 'mq.4': 'Performance Ads', 'mq.5': 'Content Production', 'mq.6': 'SEO Promotion', 'mq.7': 'Strategy', 'mq.8': 'Analytics',
        'srv.tag': 'What we do', 'srv.title': 'Services that', 'srv.title2': 'deliver results', 'srv.cta': 'Discuss a Project →',
        'srv.s1.name': 'Branding', 'srv.s1.txt': 'We create unique brand identities and visual styles that stick in memory and set you apart from the competition.',
        'srv.s2.name': 'SMM Marketing', 'srv.s2.txt': 'Strategic social media management: content, targeting, engagement and subscriber growth for your business.',
        'srv.s3.name': 'Web Design', 'srv.s3.txt': 'Premium-level websites and landing pages with meticulous UX/UI, high conversion rates and flawless performance.',
        'srv.s4.name': 'Integrated Marketing', 'srv.s4.txt': 'A full suite of marketing actions that help businesses attract customers, sell more and grow their brand systematically.',
        'srv.s5.name': 'Content Production', 'srv.s5.txt': 'Photos, videos, copy, graphics — we produce it all turnkey. Content that engages and sells at every stage of the funnel.',
        'srv.s6.name': 'SEO Optimization', 'srv.s6.txt': 'Technical audits, semantics, link-building and content strategy for sustainable organic growth in search engines.',
        'about.tag': 'Who we are', 'about.title': 'About the Company', 'about.txt': 'Khan is a modern marketing company specialising in building premium digital presence for ambitious brands. We combine deep strategy, advanced technology and high creativity to help businesses grow faster.',
        'about.f1.t': 'Transparent Reporting', 'about.f1.s': 'Monthly reports on all KPIs and channels', 'about.f2.t': 'Results-Oriented', 'about.f2.s': 'Every decision is measurable and data-backed', 'about.f3.t': 'Expert Team', 'about.f3.s': 'Specialists with experience in 10+ niches', 'about.f4.t': 'Fast Launch', 'about.f4.s': 'First results within 2 weeks of starting',
        'about.st1': 'Completed Projects', 'about.st2': 'Happy Clients', 'about.st3': 'Years on Market',
        'adv.tag': 'Why Khan', 'adv.title': 'Our', 'adv.title2': 'Advantages', 'adv.desc': 'We are not just a contractor — we are a strategic partner who immerses deeply in your business and builds marketing systems that work without your constant oversight.',
        'adv.i1.t': 'Reliability & Transparency', 'adv.i1.p': 'You always know what is happening with your budget. No hidden fees or vague reports — only clear numbers and real results.',
        'adv.i2.t': 'Measurable KPIs', 'adv.i2.p': 'Every campaign is launched with clear goals and key metrics. We focus on the indicators that truly impact your revenue.',
        'adv.i3.t': 'Individual Approach', 'adv.i3.p': 'No cookie-cutter solutions. We study your business, market and audience to craft a strategy that works specifically for you.',
        'adv.i4.t': 'Speed of Launch', 'adv.i4.p': 'From first meeting to campaign go-live — no more than 7 business days. Fast onboarding with zero red tape.',
        'adv.i5.t': 'Expertise in 10+ Niches', 'adv.i5.p': 'E-commerce, B2B, real estate, HoReCa, medicine, education — we have real experience and case studies in your industry.',
        'adv.i6.t': 'Dedicated Manager', 'adv.i6.p': 'One contact, full responsibility. Your manager is available 5 days a week and coordinates the entire Khan team.',
        'adv.i7.t': 'Quality Guarantee', 'adv.i7.p': 'If results don\'t match agreed KPIs in the first month, we continue working at our own expense until they are achieved.',
        'hl.tag': 'Navigation', 'hl.title': 'Site Sections',
        'hl.c1.lbl': 'Works', 'hl.c1.title': 'PORT-<br><span class="outline">FOLIO</span>', 'hl.c1.desc': 'Over 150 completed projects across various niches', 'hl.c1.s1': 'Projects', 'hl.c1.s2': 'Industries',
        'hl.c2.lbl': 'Company', 'hl.c2.title': 'ABOUT —<br><span class="outline">KHAN</span>', 'hl.c2.desc': 'A modern marketing agency building digital growth systems for ambitious brands',
        'hl.c3.lbl': 'Directions', 'hl.c3.title': 'SERVICES', 'hl.tag1': 'Branding', 'hl.tag2': 'Advertising',
        'hl.c4.lbl': 'Clients', 'hl.c4.title': 'PARTNERS',
        'hl.c5.lbl': 'How we work', 'hl.c5.title': 'PRO-<br>CESS',
        'hl.c6.lbl': 'Reach out', 'hl.c6.title': 'CON-<br><span class="outline">TACT</span>', 'hl.c6.desc': 'Write to us — we\'ll reply within an hour and discuss your project',
        'proc.tag': 'How we work', 'proc.title': 'Our process —', 'proc.title2': 'transparent and clear',
        'proc.s1.t': 'Brief & Audit', 'proc.s1.p': 'We conduct a deep analysis of your business, competitors and target audience. We study current channels and growth points.',
        'proc.s2.t': 'Strategy', 'proc.s2.p': 'We develop a detailed marketing plan with clear KPIs, budget allocation and a roadmap for each channel.',
        'proc.s3.t': 'Launch', 'proc.s3.p': 'We create all materials, set up campaigns and launch promotion within 7 business days of strategy sign-off.',
        'proc.s4.t': 'Growth & Optimisation', 'proc.s4.p': 'We continuously analyse data, test hypotheses and scale what works best for your business.',
        'cont.tag': 'Discuss a Project', 'cont.title': 'Let\'s Build', 'cont.title2': 'Something Great', 'cont.desc': 'Ready to take your brand to the next level? Write to us — we\'ll get back within one hour with an initial action plan.',
        'cont.phone': 'Phone', 'cont.addr': 'Address', 'cont.addr.val': 'Bukhara, Uzbekistan',
        'form.name': 'Your Name', 'form.name.ph': 'First Last Name', 'form.phone': 'Phone', 'form.msg': 'Message', 'form.msg.ph': 'Tell us about your project...', 'form.submit': 'Send Request →',
        'footer.copy': '© 2025 Khan Marketing Company<br>All rights reserved',
        'toast.ok': 'Request sent successfully!', 'toast.err': 'Error. Please try again.'
    },
    uz: {
        'nav.services': 'Xizmatlar', 'nav.about': 'Biz haqimizda', 'nav.adv': 'Afzalliklar', 'nav.hl': 'Bo\'limlar', 'nav.process': 'Jarayon', 'nav.contact': 'Aloqa', 'nav.cta': 'Boshlash',
        'hero.badge': 'Premium marketing agentligi', 'hero.sub': 'Biz maqsadli kompaniyalar uchun kuchli raqamli tizimlar, brendlar va marketing mexanizmlari yaratamiz. Strategiya, texnologiya, natija.', 'hero.btn1': 'Loyiha boshlash', 'hero.btn2': 'Xizmatlarimiz', 'hero.m1': 'Loyihalar', 'hero.m2': 'Mamnun mijozlar', 'hero.m3': 'Yil tajriba',
        'mq.1': 'Brending', 'mq.2': 'SMM-marketing', 'mq.3': 'Veb-dizayn', 'mq.4': 'Performance reklama', 'mq.5': 'Kontent ishlab chiqarish', 'mq.6': 'SEO-ilgari surish', 'mq.7': 'Strategiya', 'mq.8': 'Tahlil',
        'srv.tag': 'Nima qilamiz', 'srv.title': 'Natija beradigan', 'srv.title2': 'xizmatlar', 'srv.cta': 'Loyihani muhokama qilish →',
        'srv.s1.name': 'Brending', 'srv.s1.txt': 'Raqobatchilar orasida ajralib turadigan va esda qoladigan noyob korporativ uslub hamda vizual identifikatsiya yaratamiz.',
        'srv.s2.name': 'SMM-marketing', 'srv.s2.txt': 'Strategik ijtimoiy tarmoqlar boshqaruvi: kontent, targeting, jalb qilish va biznesingiz uchun obunachilar o\'sishi.',
        'srv.s3.name': 'Veb-dizayn', 'srv.s3.txt': 'Yuqori konversiya va mukammal ishlash bilan UX/UI ni puxta ishlab chiqqan premium saytlar va lendinglar.',
        'srv.s4.name': 'Kompleks marketing', 'srv.s4.txt': 'Biznesga mijozlarni jalb qilish, sotish va brendni tizimli ravishda rivojlantirishga yordam beradigan to\'liq marketing harakatlari to\'plami.',
        'srv.s5.name': 'Kontent ishlab chiqarish', 'srv.s5.txt': 'Foto, video, matn, grafika — barchasini kalit ostida yaratamiz. Funnel har bir bosqichida jalb qiladigan va sotadigan kontent.',
        'srv.s6.name': 'SEO-optimallashtirish', 'srv.s6.txt': 'Qidiruv tizimlarida barqaror organik o\'sish uchun texnik audit, semantika, link-biding va kontent strategiyasi.',
        'about.tag': 'Biz kimiz', 'about.title': 'Kompaniya haqida', 'about.txt': 'Khan — bu maqsadli brendlar uchun premium imij qurishga ixtisoslashgan zamonaviy marketing kompaniyasi. Biz biznesga tezroq o\'sishga yordam berish uchun chuqur strategiya, ilg\'or texnologiyalar va yuqori ijodkorlikni birlashtiramiz.',
        'about.f1.t': 'Shaffof hisobot', 'about.f1.s': 'Barcha KPI va kanallar bo\'yicha oylik hisobotlar', 'about.f2.t': 'Natijaga yo\'nalganlik', 'about.f2.s': 'Har bir qaror o\'lchanadigan va ma\'lumotlarga asoslangan', 'about.f3.t': 'Ekspertlar jamoasi', 'about.f3.s': '10+ sohadagi tajribali mutaxassislar', 'about.f4.t': 'Tez ishga tushirish', 'about.f4.s': 'Ishni boshlashdan 2 hafta ichida birinchi natijalar',
        'about.st1': 'Tugallangan loyihalar', 'about.st2': 'Mamnun mijozlar', 'about.st3': 'Yil tajriba',
        'adv.tag': 'Nima uchun Khan', 'adv.title': 'Bizning', 'adv.title2': 'afzalliklarimiz', 'adv.desc': 'Biz shunchaki pudratchi emas — biz biznesingizga chuqur sho\'ng\'iydigan va doimiy nazoratisiz ishlaydigan marketing tizimlari yaratadigan strategik hamkormiz.',
        'adv.i1.t': 'Ishonchlilik va shaffoflik', 'adv.i1.p': 'Siz byudjetingiz bilan nima sodir bo\'layotganini har doim bilasiz. Hech qanday yashirin to\'lovlar va noaniq hisobotlar yo\'q — faqat aniq raqamlar va real natijalar.',
        'adv.i2.t': 'O\'lchanadigan KPI', 'adv.i2.p': 'Har bir kampaniya aniq maqsadlar va asosiy ko\'rsatkichlar bilan ishga tushiriladi. Biz daromadingizga haqiqatan ta\'sir qiladigan ko\'rsatkichlarga e\'tibor qaratamiz.',
        'adv.i3.t': 'Individual yondashuv', 'adv.i3.p': 'Shablon yechimlar yo\'q. Biz aynan siz uchun ishlaydigan strategiya yaratish uchun biznesingizni, bozorni va auditoriyani o\'rganamiz.',
        'adv.i4.t': 'Ishga tushirish tezligi', 'adv.i4.p': 'Birinchi uchrashuvdan reklama kampaniyalari boshlanishiga qadar — 7 ish kunidan ko\'p emas. Ortiqcha byurokratiyasiz tez onboarding.',
        'adv.i5.t': '10+ sohadagi tajriba', 'adv.i5.p': 'E-commerce, B2B, ko\'chmas mulk, HoReCa, tibbiyot, ta\'lim — sizning sohangizdagi real tajriba va keyslarimiz bor.',
        'adv.i6.t': 'Ajratilgan menejer', 'adv.i6.p': 'Bitta aloqa — to\'liq mas\'uliyat. Sizning menejeringiz haftaning 5 kuni aloqada va Khan ichidagi butun jamoani muvofiqlashtirsadi.',
        'adv.i7.t': 'Sifat kafolati', 'adv.i7.p': 'Agar natijalar birinchi oyda kelishilgan KPIlarga mos kelmasa, biz ularni erishguncha o\'z hisobimizdan ishlashda davom etamiz.',
        'hl.tag': 'Navigatsiya', 'hl.title': 'Sayt bo\'limlari',
        'hl.c1.lbl': 'Ishlar', 'hl.c1.title': 'PORT-<br><span class="outline">FOLIO</span>', 'hl.c1.desc': 'Turli sohalarda 150 dan ortiq amalga oshirilgan loyihalar', 'hl.c1.s1': 'Loyihalar', 'hl.c1.s2': 'Sohalar',
        'hl.c2.lbl': 'Kompaniya', 'hl.c2.title': 'BIZ —<br><span class="outline">HAQIMIZDA</span>', 'hl.c2.desc': 'Maqsadli brendlar uchun raqamli o\'sish tizimlarini quradigan zamonaviy marketing agentligi',
        'hl.c3.lbl': 'Yo\'nalishlar', 'hl.c3.title': 'XIZMATLAR', 'hl.tag1': 'Brending', 'hl.tag2': 'Reklama',
        'hl.c4.lbl': 'Mijozlar', 'hl.c4.title': 'HAMKORLAR',
        'hl.c5.lbl': 'Qanday ishlaymiz', 'hl.c5.title': 'JARA-<br>YON',
        'hl.c6.lbl': 'Bog\'lanish', 'hl.c6.title': 'ALO-<br><span class="outline">QA</span>', 'hl.c6.desc': 'Bizga yozing — bir soat ichida javob beramiz va loyihangizni muhokama qilamiz',
        'proc.tag': 'Qanday ishlaymiz', 'proc.title': 'Bizning jarayon —', 'proc.title2': 'shaffof va aniq',
        'proc.s1.t': 'Brifing va audit', 'proc.s1.p': 'Biznesingiz, raqobatchilar va maqsadli auditoriyani chuqur tahlil qilamiz. Joriy kanallar va o\'sish nuqtalarini o\'rganamiz.',
        'proc.s2.t': 'Strategiya', 'proc.s2.p': 'Har bir kanal bo\'yicha aniq KPI, byudjet taqsimoti va yo\'l xaritasi bilan batafsil marketing rejasini ishlab chiqamiz.',
        'proc.s3.t': 'Ishga tushirish', 'proc.s3.p': 'Barcha materiallarni yaratamiz, kampaniyalarni sozlaymiz va strategiya tasdiqlangandan so\'ng 7 ish kuni ichida reklamani boshlaymiz.',
        'proc.s4.t': 'O\'sish va optimallashtirish', 'proc.s4.p': 'Ma\'lumotlarni uzluksiz tahlil qilamiz, gipotezalarni sinab ko\'ramiz va biznesingiz uchun eng yaxshi ishlaydigan narsani kengaytiramiz.',
        'cont.tag': 'Loyihani muhokama qilish', 'cont.title': 'Keling birga', 'cont.title2': 'katta narsa qurаylik', 'cont.desc': 'Brendingizni yangi darajaga olib chiqishga tayyormisiz? Bizga yozing — bir soat ichida dastlabki harakat rejasi bilan qaytamiz.',
        'cont.phone': 'Telefon', 'cont.addr': 'Manzil', 'cont.addr.val': 'Buxoro, O\'zbekiston',
        'form.name': 'Ismingiz', 'form.name.ph': 'Ism Familiya', 'form.phone': 'Telefon', 'form.msg': 'Xabar', 'form.msg.ph': 'Loyihangiz haqida gapirib bering...', 'form.submit': 'Ariza yuborish →',
        'footer.copy': '© 2025 Khan Marketing Company<br>Barcha huquqlar himoyalangan',
        'toast.ok': 'Ariza muvaffaqiyatli yuborildi!', 'toast.err': 'Xato. Qayta urinib ko\'ring.'
    }
};

let currentLang = 'ru';

function setLang(lang) {
    currentLang = lang;
    const t = LANGS[lang];
    document.documentElement.lang = lang;

    // Update all text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Update active button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
    });

    // Save preference
    try { localStorage.setItem('khan_lang', lang); } catch (e) { }
}

// Load saved language
try {
    const saved = localStorage.getItem('khan_lang');
    if (saved && LANGS[saved]) setLang(saved);
} catch (e) { }

// ══════════════════════════════════════════
// CURSOR
// ══════════════════════════════════════════
const cur = document.getElementById('cur'), ring = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px' });
(function animR() { rx += (mx - rx) * .1; ry += (my - ry) * .1; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(animR) })();
document.querySelectorAll('a,button,.srv-card,.adv-item,.hl-card,.ab-feat,.ab-stat,.proc-step,.soc,.ci-item,.mob-menu a,.lang-btn').forEach(el => {
    el.addEventListener('mouseenter', () => { cur.style.width = '12px'; cur.style.height = '12px'; ring.style.width = '48px'; ring.style.height = '48px'; ring.style.borderColor = 'rgba(107,63,231,.8)' });
    el.addEventListener('mouseleave', () => { cur.style.width = '6px'; cur.style.height = '6px'; ring.style.width = '32px'; ring.style.height = '32px'; ring.style.borderColor = 'rgba(107,63,231,.5)' });
});

// NAV
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('sc', scrollY > 60));

// MOBILE MENU
function tM() { const m = document.getElementById('mobMenu'), b = document.getElementById('bur'); m.classList.toggle('open'); b.classList.toggle('open') }
function cM() { document.getElementById('mobMenu').classList.remove('open'); document.getElementById('bur').classList.remove('open') }

// REVEAL
const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target) } }), { threshold: .1 });
document.querySelectorAll('.rv').forEach(el => obs.observe(el));

// COUNTERS
function animCount(el) {
    const t = parseInt(el.dataset.t), s = el.dataset.s || '+';
    let c = 0; const step = t / 60;
    const iv = setInterval(() => { c = Math.min(c + step, t); el.textContent = Math.floor(c) + s; if (c >= t) clearInterval(iv) }, 18);
}
const cObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('[data-t]').forEach(animCount); cObs.unobserve(e.target) } }), { threshold: .3 });
document.querySelectorAll('.ab-stats').forEach(el => cObs.observe(el));

// PARALLAX
window.addEventListener('scroll', () => {
    const y = scrollY;
    const hv = document.querySelector('.hv');
    if (hv) hv.style.transform = `translateY(${y * .08}px)`;
});

// FORM
// ═══ КОНФИГ ═══
const TG_TOKEN  = '8633219020:AAGJ8Pii9YYvMGtzKbvoVuk0RJQFtwawHew';   // от @BotFather
const TG_CHATID = '-1003783758823';        // например: -1001234567890

async function sendForm(e) {
    e.preventDefault();
    const btn = document.getElementById('sbtn'),
          lr  = document.getElementById('lr'),
          st  = document.getElementById('stxt');

    btn.disabled = true;
    st.style.opacity = '0';
    st.style.display = "none"
    lr.style.display = 'block';

    const name    = document.getElementById('fn').value;
    const email   = document.getElementById('fe').value;
    const phone   = document.getElementById('fp').value;
    const message = document.getElementById('fm').value;
    const date    = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' });

    const text =
`🚀 *Новая заявка с сайта Khan*

👤 *Имя:* ${name}
📧 *Email:* ${email}
📞 *Телефон:* ${phone}
💬 *Сообщение:*
${message}

🕐 *Дата:* ${date}`;

    let ok = false;
    try {
        const res = await fetch(
            `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id:    TG_CHATID,
                    text:       text,
                    parse_mode: 'Markdown'
                })
            }
        );
        const data = await res.json();
        ok = data.ok;
    } catch (err) {
        ok = false;
    }

    btn.disabled = false;
    st.style.opacity = '1';
    lr.style.display = 'none';

    const t = LANGS[currentLang];
    toast(ok ? t['toast.ok'] : t['toast.err'], ok ? 'ok' : 'err');
    if (ok) document.getElementById('cform').reset();
}

function toast(msg, type) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.className = 'show ' + type;
    setTimeout(() => { t.className = '' }, 4200);
}