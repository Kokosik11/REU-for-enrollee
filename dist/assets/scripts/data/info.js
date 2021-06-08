const bachalorInfo = [
    {
        programName: "“Управление IT-инфраструктурой предприятия”",
        programDirection: "38.03.05 Бизнес-информатика",
        enterExams: "математика",
        formOfStudy: "очная, очно-заочная (вечерняя)",
        directionNameTwo: "Бизнес-информатика",
        directionInfo: " - одно из самых молодых и перспективных направлений подготовки современного высшего образования, новая область профессиональной деятельности, формирующаяся на стыке экономики, менеджмента и информационно-коммуникационных технологий (ИКТ)."
    },
    {
        programName: "“Цифровой маркетинг”, “Антикризисное управление”, “Менеджмент организации”",
        programDirection: "38.03.02 Менеджмент",
        enterExams: "математика",
        formOfStudy: "очная, очно-заочная (вечерняя)",
        directionNameTwo: "Менеджмент",
        directionInfo: " - освоение современных управленческих технологий, обеспечивающих эффективность менеджмента на практике; обучение на основе комплекса программно-технических средств менеджмента, используемых компаниями-лидерами; эффективное применение элементов электронного образования; участия в международных и всероссийских олимпиадах, конференциях, бизнес-неделях и летних студенческих школах; использование современных образовательных методик и технологий, обеспечивающих формирование компетентностного потенциала выпускника."
    },
    {
        programName: "“Бизнес-статистика и аналитика”, “Финансы и банковское дело”, “Бухгалтерский учёт, анализ и аудит”",
        programDirection: "38.03.01 Экономика",
        enterExams: "математика",
        formOfStudy: "очная, очно-заочная (вечерняя)",
        directionNameTwo: "Экономика",
        directionInfo: " максимально охватывает различные специализации современного аналитика-финансиста, что позволяет овладеть широким спектром его важнейших профессиональных навыков. Это позволяет свободно выбрать профессию в любой области учета, налогообложения, анализа и финансов."
    }
]

const masterInfo = [
    {
        programName: "“Стратегическое и корпоративное управление”",
        programDirection: "38.04.02 Менеджмент",
        enterExams: "математэкономическая теория, финансы и кредитика",
        formOfStudy: "заочная (2,5 года)",
        directionNameTwo: "Менеджмент",
        directionInfo: " - подготавливаем высококвалифицированных менеджеров в области стратегического и корпоративного управления, способных разрабатывать стратегии развития организаций, формировать команды для решения организационно-управленческих задач, руководить подразделениями предприятий и организаций, органами государственной власти."
    },
    {
        programName: "“Профессионально-образовательный цикл современного бухглатерского учёта, анализа и аудита”",
        programDirection: "38.04.01 Экономика",
        enterExams: "математик	экономическая теория, теория менеджментаа",
        formOfStudy: "заочная (2,5 года)",
        directionNameTwo: "Экономика",
        directionInfo: " - подготавливаем квалифицированных экономистов в области современного бухгалтерского учета, анализа и аудита, способных руководить экономическими службами и подразделениями, прогнозировать динамику основных социально-экономических показателей деятельности предприятий, отрасли, региона и экономики в целом."
    }
]

const degreeInfo = [
    {
        degreeID: "0",
        title: "Бизнес-информатика, Бакалавриат",
        content: [
            `<h2>Управление ИТ-инфраструктурой предприятия</h2>`,
            `<b>ИТ-инфраструктура</b> – это комплекс взаимосвязанных информационных систем и сервисов, обеспечивающих функционирование и развитие предприятия.`,
            `Ключевой задачей управления ИТ-инфраструктурой предприятия является контроль происходящих в такой инфраструктуре изменений. Для этого принимаются решения, связанные с инвентаризацией программно-аппаратных средств, в том числе решения по автоматизированному получению данных для проведения учета изменений в составе и в настройках компонентов.`,
            `Выпускник профиля «Управление ИТ-инфраструктурой предприятия» получает знания и навыки, которые позволят ему осуществлять анализ потребностей бизнеса и на его основе разрабатывать концепцию его развития на основе информационно-коммуникационных технологий, разрабатывать архитектуру ИТ-инфраструктуры предприятия, осуществлять систематическое планирование и развитие ИТ-инфраструктуры, принимать стратегические решения в части выбора и внедрения информационных систем (ИС) и информационно-коммуникационных технологий (ИКТ) на предприятии.`,
            `<h3>Область профессиональной деятельности:</h3>
            Специалисты, получившие степень бакалавра, подготовлены к деятельности в составе группы исполнителей, а также как менеджеры сервисов и систем. Бакалавр бизнес-информатики – это специалист, который получил образование в области экономики, менеджмента, права и ИКТ и занимается проектированием, внедрением, анализом и сопровождением корпоративных информационных систем (КИС).`,
            `<h3>Вид профессиональной деятельности:</h3>
            По оценкам экспертов российскому рынку труда требуется порядка 150 тысяч юристов, управленцев и экономистов, непосредственно связанных с ИКТ. Специалисты бизнес-информатики востребованы во всех сферах бизнеса. На сегодняшний день неудовлетворенная потребность в специалистах такого профиля составляет только в России порядка 10 тысяч человек в год. Кроме того, в соответствии с Болонской декларацией, диплом любой страны-участницы процесса действителен без ограничений во всех странах-участниках, для бакалавров Бизнес-информатики открываются не только отечественный, но и зарубежный рынок труда в сфере ИКТ.`,
            `<h3>Основные места работы:</h3>
            Государственные и частные предприятия, акционерные общества, научно-производственные объединения, научные конструкторские и проектные организации, органы государственного управления и социальной инфраструктуры народного хозяйства, органы государственного и муниципального управления.`,
            `<h3>Возможные должности:</h3>
            <ul>
                <li>Руководитель IT-отдела</li>
                <li>Cпециалист IT-отдела</li>
                <li>Программист</li>
            </ul>`,
            `<h3>Основные базовые дисциплины:</h3>
            <ul>
                <li>Высшая математика</li>
                <li>Сетевая экономика</li>
                <li>Информационные системы управления</li>
                <li>Операционные системы</li>
                <li>Электронный документооборот</li>
                <li>Эконометрика</li>
                <li>Информационная безопасность</li>
                <li>Рынки ИКТ и организация продаж</li>
                <li>Управление ИТ-сервисами и контентом</li>
                <li>Электронный бизнес</li>
            </ul>`
        ]
    },
    {
        degreeID: "1",
        title: "Менеджмент, Бакалавриат",
        content: [
            `<h2>Цифровой маркетинг</h2>`,
            `Программа готовит студентов к профессиональной деятельности на должностях маркетолога, способного разрабатывать, планировать и реализовывать оперативные планы и программы маркетинга с помощью современных информационных технологий и программного обеспечения. Серьезные знания и навыки анализа, планирования и управления маркетинговыми программами позволят выпускникам успешно управлять программами маркетинговых активностей, и процессов создания и донесения ценности до потребителей.`,
            `<h3>Основные места работы:</h3>
            Отечественные и зарубежные производственные компании, средства массовой информации, исследовательские и маркетинговые агентства, отечественные и зарубежные торговые компании.`,
            `<h3>Профессиональные навыки:</h3>
            <ul>
                <li>Продвижение бренда и привлечение клиентов с помощью всех возможных цифровых каналов</li>
                <li>Работа с различными видами интернет-продвижения: SEO, PPC, SMM, email-маркетинг и др.</li>
                <li>Оптимизация бюджета и настройка контекстной рекламы на целевую аудиторию</li>
                <li>Аналитика и управление маркетинг-проектами</li>
                <li>Анализ международных экономических проблем</li>
            </ul>`,

            `<h2>Антикризисное управление</h2>`,
            `Программа позволяет подготовить менеджеров высочайшего класса, которые могут провести анализ бизнеса, выявить сильные и слабые места и выработать ряд мероприятий, позволяющих собственникам выйти из кризиса с минимальными потерями.`,
            `<h3>Основные места работы:</h3>
            Предприятия и организации любых форм собственности, находящиеся на стадии банкротства.`,
            `<h3>Профессиональные навыки:</h3>
            <ul>
                <li>Становление и уведомление выявленных кредиторов должника о возбуждении процедуры банкротства</li>
                <li>Проведение анализа финансового состояния должника</li>
                <li>Определение наличия признаков фиктивного и преднамеренного банкротства</li>
                <li>Получение и рассмотрение установленных требований кредиторов</li>
                <li>Составление и ведение реестра требований кредиторов</li>
                <li>Проведение инвентаризации имущества предприятия-должника и анализа его состояния</li>
                <li>Принятие мер по защите имущества предприятия</li>
                <li>Оптимизация финансовых потоков и др.</li>
            </ul>`,

            `<h2>Менеджмент организации</h2>`,
            `Программа позволяет подготовить менеджеров, обладающих знаниями, ориентированными на успешную профессиональную деятельность в сфере анализа, финансового планирования и прогнозирования, инноваций и инвестиций, выявления основных тенденций развития компаний в условиях глобализации финансовых и товарных рынков, и владеющих навыками использования современных финансовых технологий и инструментов для решения поставленных задач.`,
            `<h3>Основные места работы:</h3>
            Предприятия любой организационно-правовой формы, органы государственного управления, консалтинговые агентства и исследовательские организации.`,
            `<h3>Профессиональные навыки:</h3>
            <ul>
                <li>Разработка стратегии управления организацией</li>
                <li>Реализация корпоративной, конкурентной и функциональных стратегий организации</li>
                <li>Обеспечение операционной деятельности организации</li>
                <li>Организационное проектирование, планирование деятельности организации</li>
                <li>Формирование эффективных команд</li>
                <li>Создание и использование эффективных систем контроля и др.</li>
            </ul>`
        ]
    },
    {
        degreeID: "2",
        title: "Экономика, Бакалавриат",
        content: [
            `<h2>Бизнес-статистика и аналитика</h2>`,
            `Программа подготовки студентов в рамках этого профиля предполагает приобретение ими знаний, умений и навыков в области математики, экономики и управления социально-экономическими процессами, что открывает перед выпускниками широкие возможности для работы в различных организациях, научно-исследовательских институтах в качестве специалистов, умеющих решать широкий круг задач по анализу, прогнозированию, разработке и принятию решений в экономической сфере.`,
            `<h3>Основные места работы:</h3>
            Органы государственной власти (в т.ч. министерства и ведомства различных уровней), экономические, финансовые, производственно-экономические и аналитические службы организаций различных отраслей, сфер и форм собственности.`,
            `<h3>Профессиональные навыки:</h3>
            <ul>
                <li>Анализ и моделирование экономических процессов на микро- и макро-уровнях</li>
                <li>Методологию прогнозирования и программирования экономических систем</li>
                <li>Финансовый анализ, анализ фондового рынка</li>
                <li>Анализ нечисловой информации</li>
                <li>Современный прикладной математический аппарат</li>
                <li>Анализ международных экономических проблем</li>
            </ul>`,

            `<h2>Бухгалтерский учет, анализ и аудит</h2>`,
            `Теоретические знания и практические навыки, полученные в процессе подготовки, позволят выпускникам данной программы самостоятельно ставить и решать профессиональные задачи в данной области, участвовать в разработке управленческих решений, направленных на повышение эффективности деятельности своего предприятия и позволит им стать конкурентоспособными специалистами на российских и международных рынках труда.`,
            `<h3>Основные места работы:</h3>
            Экономические, финансовые, производственно-экономические и аналитические службы организаций различных отраслей, сфер и форм собственности.`,
            `<h3>Профессиональные навыки:</h3>
            <ul>
                <li>Стандарты и методика ведения бухгалтерского учета и составления бухгалтерской отчетности</li>
                <li>Международные стандарты учета и финансовой отчетности</li>
                <li>Стандарты и методика ведения налогового учета и составления отчетности</li>
                <li>Особенности ведения бухгалтерского и налогового учета в банковском, страховом секторе, а также на рынке ценных бумаг и др.</li>
            </ul>`,

            `<h2>Финансы и Банковское дело</h2>`,
            `Программа максимально охватывает различные специализации современного финансиста, что позволяет овладеть широким спектром его важнейших профессиональных навыков. Это определяет в дальнейшем свободный выбор профессии в любой области финансов. Программа построена на принципе комплексного подхода к изучению финансовой системы и финансового рынка как единого целого.`,
            `<h3>Основные места работы:</h3>
            Органы государственной власти (в т.ч. министерства и ведомства различных уровней); финансовые подразделения российских и зарубежных компаний малого, среднего и крупного бизнеса, финансовые организации, в т.ч. банки, инвестиционные и страховые компании, государственные учреждения, аудиторские компании и аналитические агентства.`,
            `<h3>Профессиональные навыки:</h3>
            <ul>
                <li>Оценка бюджетов и финансовой политики органов власти, привлечение и использоватние бюджетного финансирования</li>
                <li>Прогнозирование и аналитика развития финансовых рынков и поведение экономических агентов</li>
                <li>Финансовый анализ корпоративной и бюджетной отчетности</li>
                <li>Построение финансовых моделей и оценка эффективности инвестиционных проектов</li>
                <li>Разработка ценовой политики и ценовой стратегии компании</li>
            </ul>`
        ]
    },
    {
        degreeID: "3",
        title: "Менеджмент, Магистратура",
        content: [
            `<h2>Стратегическое и корпоративное управление</h2>`,
            `<b>Цель программы</b> – расширение базовых знаний и навыков студентов в области стратегического и корпоративного управления компаниями. Программа ориентирована на овладение знаниями и навыками планирования деятельности фирмы, построения внутрифирменной системы управления, обеспечения поступательного развития компании и др.`,
            `<h3>Основные места работы:</h3>
            Департаменты стратегического планирования и развития корпораций, менеджмента качества, в том числе в соответствующих департаментах компаний, антикризисное управления и консалтинг, различные уровни систем управления корпораций.`,
            `<h3>Профессиональные навыки:</h3>
            <ul>
                <li>Моделировние экономических процессы, как внутри предприятия, так и за его пределами</li>
                <li>Применение методов организационного проектирования</li>
                <li>Планирование развития организации</li>
                <li>Использование инструментария стратегического менеджмента</li>
                <li>Выстраивание информационных потоков при прогнозировании и реализации стратегии</li>
            </ul>`
        ]
    },
    {
        degreeID: "4",
        title: "Экономика, Магистратура",
        content: [
            `<h2>Цифровой бизнес</h2>`,
            `Программа ориентирована на подготовку специалистов, владеющих знаниями и комплексом методологических, технологических и инструментальных средств, которые направлены на управление электронным бизнесом, интернет-проектами и облачными сервисами и позволяют эффективно осуществлять аналитическую, организационно-управленческую, проектную и научно-исследовательскую деятельность.`,
            `<h3>Основные места работы:</h3>
            Сфера управления электронным бизнесом, облачные сервисы, специалисты в области Интернет-маркетинга, ИТ-консультанты, менеджеры и специалисты по управлению корпоративными информационными системами и Интернет-проектами.`,
            `<h3>Профессиональные навыки:</h3>
            <ul>
                <li>Подготовка аналитических материалов для оценки мероприятий и выработки стратегических решений в области ИКТ</li>
                <li>Анализ инновационной деятельности предприятия</li>
                <li>Разработка стратегии развития архитектуры предприятия</li>
            </ul>`
        ]
    }
]