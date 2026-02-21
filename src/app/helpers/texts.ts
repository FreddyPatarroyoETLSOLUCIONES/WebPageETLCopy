export const Text: any = {
    Navbar: {
        Menu:[
            {title: 'Inicio', subMenu: [], link:'/principal'},
            {title: 'Servicios', subMenu: [
                {subTitle: 'Gestión de Operaciones de TI', link:'/services/itOperationsManagementService'},
                {subTitle: 'Gestión de Datos', link:'/services/dataManagementService'},
                {subTitle: 'Automatización de Procesos', link:'/services/processAutomationService'},
                {subTitle: 'Fabrica de Software', link:'/services/softwareFactoryService'},
                {subTitle: 'Calidad de Software', link:'/services/softwareQualityService'},
            ], link:''},
            {title: 'Productos', subMenu: [
                {subTitle: 'Infocusnews', link:'/products/infocusnwesProduct'},
                {subTitle: 'Business Intelligence', link:'/products/businessIntelligenceProduct'},
                {subTitle: 'Innovación', link:'/products/innovationProduct'},
            ], link:''},
            {title: 'Nosotros', subMenu: [], link:'/aboutUs'}
        ]
    },
    Principal: {
        Welcome: {
            Title1: 'El camino de la Evolución Digital',
            Subtitle1: 'Soluciones Tecnológicas de Alto Impacto',
            Text1: 'Más de 10 años de experiencia, desarrollando soluciones tecnológicas innovadoras para sectores clave. Transformamos industrias con proyectos de alto impacto'
        },
        Services: {
            Title: 'SERVICIOS TI',
            Text: 'A través de las mejores prácticas de TI, damos soluciones de gran valor a nuestros clientes a través de nuestros servicios.',
            ServicesList: [
                {
                    title: 'Gestión de Operaciones de TI',
                    description: 'Servicio integral orientado a asegurar que los recursos tecnológicos de su organización operen con el máximo rendimiento, estabilidad y disponibilidad.',
                    image: './assets/images/consultoria.jpg',
                    circle1: './assets/icons/circle1.png',
                    circle2: './assets/icons/circle2.png',
                    url: '/services/itOperationsManagementService'
                },
                {
                    title: 'Gestión de Datos',
                    description: 'Servicio enfocado en administrar la información de forma segura, confiable y alineada con los objetivos estratégicos del negocio.',
                    image: './assets/images/data_serivce_wallpaper.png',
                    circle1: './assets/icons/circle1.png',
                    circle2: './assets/icons/circle2.png',
                    url: '/services/dataManagementService'
                },
                {
                    title: 'Automatización de Procesos',
                    description: 'Servicio de automatización inteligente para optimizar flujos de trabajo, reducir errores y aumentar la productividad operacional de su organización.',
                    image: './assets/images/automation_serivce_wallpaper.png',
                    circle1: './assets/icons/circle1.png',
                    circle2: './assets/icons/circle2.png',
                    url: '/services/processAutomationService'
                },
                {
                    title: 'Fábrica de Software',
                    description: 'Servicio de desarrollo de software personalizado para crear soluciones escalables, robustas y alineadas con los objetivos estratégicos de su organización.',
                    image: './assets/images/dev_serivce_wallpaper.png',
                    circle1: './assets/icons/circle1.png',
                    circle2: './assets/icons/circle2.png',
                    url: '/services/softwareFactoryService'
                },
                {
                    title: 'Calidad de Software',
                    description: 'Servicio de aseguramiento de calidad para garantizar que cada solución tecnológica cumpla con los más altos estándares de funcionalidad, rendimiento y seguridad.',
                    image: './assets/images/qa_serivce_wallpaper.png',
                    circle1: './assets/icons/circle1.png',
                    circle2: './assets/icons/circle2.png',
                    url: '/services/softwareQualityService'
                },
            ]
        },
        Skills: {
            Title1: 'Proyectos, Requerimientos, Soporte y Mantenimiento',
            SkillsList: [
                'Manejo de Solicitudes de desarrollo.',
                'Liderazgo del proyecto end to end.',
                'Gestión de Solicitudes: Incidencias, requerimientos y proyectos.',
                'Construcción y liberación con “victorias tempranas”.',
                'Piezas de software solventes, autónomas y de valor para el negocio.',
                'Análisis de las inquietudes del negocios para traducirlas en iniciativas de tecnología de rápida y solvente aplicación.'
            ]
        },
        Products: {
            Title1: 'Innovar con las tendencias tecnológicas',
            Text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            ProductsList: [
                { 
                    title: 'Infocusnews', 
                    icon: './assets/icons/text.png', 
                    text: 'Diario digital que descubre información de valor en su compañía utilizando modelos estadísticos…', 
                    url:'/products/infocusnwesProduct' 
                },
                { 
                    title: 'ETL (BI) Business Intelligence', 
                    icon: './assets/icons/db.png', 
                    text: 'Servicio de gestión en nube o infraestructura propia del cliente para diseñar…', 
                    url:'/products/businessIntelligenceProduct' 
                },
                { 
                    title: 'Motor de Sugerencias', 
                    icon: './assets/icons/start.png', 
                    text: 'El motor de sugerencia mide las preferencias de los clientes a cada una de ellas…', 
                    url:'/products/infocusnwesProduct' 
                },
                { 
                    title: 'Innovación', 
                    icon: './assets/icons/podio.png', 
                    text: 'Identificación de las preferencias individuales de sus clientes con máximo detalle…', 
                    url:'/products/innovationProduct' 
                },
            ]
        },
        InfoValues: {
            Services: [
                {
                    title: 'Atención Inmediata',
                    description: 'Somos oportunos en cada requerimiento solicitado por nuestros clientes.',
                    image: './assets/wallpapers/atencioninmediata.jpg'
                },
                {
                    title: 'Estrategia',
                    description: 'No solo buscamos estrategias y herramientas sino soluciones que impacten.',
                    image: './assets/wallpapers/estrategia.jpg'
                },
                {
                    title: 'Optimización',
                    description: 'Continuamente queremos mantener nuestras aplicaciones de manera óptima y efectiva.',
                    image: './assets/wallpapers/optimizacion.jpg'
                },
                {
                    title: 'Innovación',
                    description: 'Queremos siempre estar a la vanguardia en la utilización del desarrollo y las tecnologías.',
                    image: './assets/wallpapers/innovacion_2.jpg'
                }
            ]
        },
        Counter: {
            Info: [
                {
                    number: 100,
                    description: 'Proyectos Completados'
                },
                {
                    number: 700.000,
                    description: 'Casos de soporte atendidos'
                },
                {
                    number: 9,
                    description: 'Años de experiencia'
                },
                {
                    number: 45,
                    description: 'Proyectos TI implementados'
                }
            ]
        }
    },
    Services: {
        ItOperationsManagement: {
            Title:{
                Title: 'Gestión de Operaciones de TI',
                Text: 'Garantizamos la eficiencia y disponibilidad de su infraestructura tecnológica',
                Img: './assets/wallpapers/wallp_consultoria.jpg'
            },
            Description: {
                Title: 'Supervisión y Optimización Continua',
                Text1: 'Servicio integral orientado a asegurar que los recursos tecnológicos de su organización operen con el máximo rendimiento, estabilidad y disponibilidad.',
                Img: './assets/images/ti_service.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>La gestión de operaciones de TI se encarga de administrar, monitorear y optimizar la infraestructura tecnológica, incluyendo redes, aplicaciones, bases de datos y recursos informáticos, tanto en entornos On-Premise como en la nube.</p>
                        </br> 
                        <p>En ETL Soluciones hemos desarrollado un modelo basado en experiencia multisectorial que permite supervisar y optimizar continuamente las operaciones tecnológicas mediante el uso de Inteligencia Artificial en procesos como:</p> 
                        </br> 
                        <ul class="list" >
                            <li><strong>Análisis predictivo:</strong> anticipación de fallos y cuellos de botella.</li>
                            <li><strong>Procesamiento de lenguaje natural:</strong> gestión eficiente de tickets e interacción con usuarios mediante chatbots.</li>
                            <li><strong>Detección de anomalías:</strong> identificación de comportamientos inusuales en tiempo real.</li>
                        </ul> 
                        </br> 
                        <p>Combinamos estas capacidades con automatización de monitoreo, gestión de errores conocidos y despliegues continuos, garantizando estabilidad, eficiencia y alto desempeño.</p>
                        </br> 
                        <p>Adoptar IA y automatización no solo mejora la operación actual, sino que prepara a las organizaciones para un entorno tecnológico más ágil, resiliente y competitivo.</p>`
            },
            Contact: {
                Title: 'Contáctenos',
                Text: 'Contáctenos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_consultoria.jpg'
            }
        },
        DataManagement: {
            Title:{
                Title: 'Gestión de Datos',
                Text: 'Transforme sus datos en activos estratégicos de valor',
                Img: './assets/wallpapers/data_wallpaper.png'
            },
            Description: {
                Title: 'Calidad, Gobernanza y Analítica Avanzada',
                Text1: 'Servicio enfocado en administrar la información de forma segura, confiable y alineada con los objetivos estratégicos del negocio.',
                Img: './assets/images/data_service.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>La gestión de datos organiza, protege y asegura la disponibilidad de la información, supervisando su recolección, almacenamiento, integración y gobierno en entornos locales y en la nube.</p>
                        </br> 
                        <p>Nuestro modelo, probado en múltiples industrias, permite maximizar el valor de los datos mediante Inteligencia Artificial aplicada a:</p> 
                        </br> 
                        <ul class="list" >
                            <li><strong>Análisis predictivo:</strong> descubrimiento de tendencias y patrones en grandes volúmenes de información.</li>
                            <li><strong>Calidad de datos:</strong> detección automática de inconsistencias, duplicados y errores.</li>
                            <li><strong>Clasificación inteligente:</strong> catalogación y etiquetado para una gobernanza eficiente.</li>
                        </ul> 
                        </br> 
                        <p>Integramos estas capacidades con monitoreo continuo y cumplimiento normativo, asegurando confiabilidad y aprovechamiento estratégico de la información.</p>
                        </br> 
                        <p>La adopción de IA en la gestión de datos impulsa decisiones oportunas, mejora la eficiencia operativa y fortalece la competitividad empresarial.</p>`
            },
            Contact: {
                Title: 'Contáctenos',
                Text: '¡Contáctenos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_innovation.png'
            }
        },
        ProcessAutomation: {
            Title:{
                Title: 'Automatización de Procesos',
                Text: 'Optimice sus operaciones y libere recursos estratégicos',
                Img: './assets/wallpapers/automation_wallpaper.png'
            },
            Description: {
                Title: 'RPA y Transformación Digital',
                Text1: 'Servicio de automatización inteligente para optimizar flujos de trabajo, reducir errores y aumentar la productividad operacional de su organización.',
                Img: './assets/images/automation_service.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>La automatización de procesos permite ejecutar de forma autónoma tareas repetitivas y coordinar flujos de trabajo complejos en procesos de negocio y operaciones tecnológicas.</p> 
                        </br>
                        <p>En ETL Soluciones aplicamos un enfoque de mejora continua respaldado por IA a través de:</p>
                        </br>
                        <ul class="list" >
                            <li><strong>RPA inteligente:</strong> robots capaces de aprender y adaptarse a los procesos.</li>
                            <li><strong>Procesamiento inteligente de documentos:</strong> extracción y clasificación automática de información.</li>
                            <li><strong>Orquestación de workflows:</strong> coordinación eficiente de procesos entre múltiples sistemas.</li>
                        </ul> 
                        </br>
                        <p>Estas capacidades se integran con tecnologías RPA, BPM, APIs y orquestación de servicios, logrando continuidad operativa, reducción de tiempos y mayor productividad.</p> 
                        </br> 
                        <p>La automatización inteligente permite a las organizaciones enfocarse en actividades de alto valor y avanzar con solidez en su transformación digital.</p>`
            },
            Contact: {
                Title: 'Contáctenos',
                Text: '¡Contáctenos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_bpo.png'
            }
        },
        SoftwareFactory: {
            Title:{
                Title: 'Fábrica de Software',
                Text: 'Desarrollamos soluciones tecnológicas a la medida de su negocio',
                Img: './assets/wallpapers/dev_wallpaper.png'
            },
            Description: {
                Title: 'Desarrollo Ágil y Entrega Continua',
                Text1: 'Servicio de desarrollo de software personalizado para crear soluciones escalables, robustas y alineadas con los objetivos estratégicos de su organización.',
                Img: './assets/images/dev_service.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>Nuestra fábrica de software cubre todo el ciclo de vida del desarrollo: análisis, diseño, construcción, pruebas, despliegue y soporte de aplicaciones web, móviles y sistemas empresariales.</p> 
                        </br>
                        <p>El modelo de ETL Soluciones integra prácticas ágiles y capacidades de Inteligencia Artificial como:</p>
                        </br>
                        <ul class="list" >
                            <li><strong>Desarrollo asistido por IA:</strong> generación de código, detección de errores y optimización.</li>
                            <li><strong>Testing inteligente:</strong> automatización de pruebas y ampliación de cobertura.</li>
                            <li><strong>Análisis de código:</strong> revisión continua de calidad, seguridad y buenas prácticas.</li>
                        </ul> 
                        </br>
                        <p>Apoyados en DevOps, integración continua y despliegue automatizado, entregamos soluciones robustas, seguras y preparadas para crecer con el negocio.</p> 
                        </br> 
                        <p>La combinación de agilidad e IA acelera la innovación y fortalece la ventaja competitiva en el entorno digital.</p>`
            },
            Contact: {
                Title: 'Contáctenos',
                Text: '¡Contáctenos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_bpo.png'
            }
        },
        SoftwareQuality: {
            Title:{
                Title: 'Calidad de Software',
                Text: 'Aseguramos la excelencia en cada entrega tecnológica',
                Img: './assets/wallpapers/qa_wallpaper.png'
            },
            Description: {
                Title: 'Testing Inteligente y Aseguramiento Continuo',
                Text1: 'Servicio de aseguramiento de calidad para garantizar que cada solución tecnológica cumpla con los más altos estándares de funcionalidad, rendimiento y seguridad.',
                Img: './assets/images/qa_service.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>La calidad de software supervisa y valida cada etapa del desarrollo para asegurar que las soluciones cumplan con estándares técnicos y expectativas del negocio, tanto en sistemas nuevos como existentes.</p> 
                        </br>
                        <p>Nuestro enfoque incorpora Inteligencia Artificial en:</p>
                        </br>
                        <ul class="list" >
                            <li><strong>Testing predictivo:</strong> identificación temprana de áreas críticas y generación de casos de prueba.</li>
                            <li><strong>Análisis de defectos:</strong> detección de patrones para prevenir errores recurrentes.</li>
                            <li><strong>Optimización de performance:</strong> monitoreo y mejora continua del rendimiento.</li>
                        </ul> 
                        </br>
                        <p>Complementamos estas prácticas con pruebas funcionales, de seguridad, rendimiento y automatización continua, asegurando entregas confiables y de alto nivel.</p> 
                        </br> 
                        <p>La calidad impulsada por IA reduce riesgos, mejora la experiencia del usuario y permite una transformación digital sólida y sostenible.</p>`
            },
            Contact: {
                Title: 'Contáctenos',
                Text: '¡Contáctenos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_bpo.png'
            }
        },
        //Esta ruta se debe validar con el cliente
        EnvironmentAutomation: {
            Title:{
                Title: 'Automatización de la Gestión de Ambientes de QA',
                Text: 'Optimiza y simplifica tus entornos de prueba',
                Img: './assets/wallpapers/wallp_qa.png'
            },
            Description: {
                Title: 'Lorem ipsum dolor',
                Text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                Img: './assets/images/qa_left.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>La automatización en ambientes de QA (Quality Assurance) permite reducir tareas manuales, mejorar la consistencia en los entornos y maximizar el tiempo que los equipos dedican a la creación de valor.  </p> 
                        </br> 
                        <p>Con nuestra solución, podrás optimizar la gestión y configuración de tus entornos de prueba de manera ágil y escalable. </p>`
            },
            Contact: {
                Title: 'Contáctenos',
                Text: '¡Contáctenos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_qa.png'
            },
            Question: {
                Title: `¿Por Qué Automatizar <span class="highlight">Ambientes de QA?</span>`,
                Text: 'Automatizar los ambientes de QA significa lograr procesos más consistentes, reducir tiempos y mejorar la eficiencia operativa. Descubre los beneficios clave que esta tecnología puede ofrecer a tu equipo y proyecto.',
                Items: [
                    {Title: 'Consistencia y eficiencia', Text: 'Minimiza errores y asegura que los entornos de prueba se configuren de manera uniforme.'},
                    {Title: 'Reducción de costos y tiempos', Text: 'Menos tareas manuales, más tiempo para tareas estratégicas.'},
                    {Title: 'Escalabilidad', Text: 'Crea y gestiona nuevos entornos rápidamente, adaptándose a las necesidades de tus proyectos.'},
                    {Title: 'Control de versiones', Text: 'Rastrea cambios y mantiene coherencia en cada entorno.'}
                ],
                Img: './assets/icons/sun.png' 
            },
            Numbers: {
                Title: '¿Cómo Funciona Nuestro Proceso de Automatización?',
                Text: 'Nuestro proceso de automatización es integral y se adapta a las necesidades de cada proyecto. Desde la evolución inicial hasta la implementación de herramientas avanzadas, cada paso está diseñado para optimizar y simplificar la gestión de tus entornos de QA.',
                Items: [
                    {Title: 'Evaluación de Requisitos', Text: 'Identificamos los entornos necesarios y las herramientas más adecuadas para cada proyecto.'},
                    {Title: 'Selección de Herramientas', Text: 'Utilizamos tecnologías avanzadas como Docker, Kubernetes y Terraform para optimizar cada entorno.'},
                    {Title: 'Definición de Arquitectura', Text: 'Diseñamos la infraestructura ideal de QA, asegurando servidores, bases de datos y servicios confiables.'},
                    {Title: 'Configuración Automatizada', Text: 'mplementamos CI/CD para la automatización, agilizando la creación y configuración de pruebas.'},
                ]
            },
            Accordion: {
                Title: 'Apoyo Completo en <span class="highlight">Documentación y Capacitación</span>',
                Text: 'Nos aseguramos de que todo el proceso y las configuraciones queden documentados de manera clara y concisa. Además, capacitamos a tu equipo en el uso de herramientas y procesos, garantizando una fácil adopción y mantenimiento del sistema.',
                Img: './assets/images/image_automation.jpg',
                Items: [
                    {Text: 'Accesibilidad'},
                    {Text: 'Practicidad'},
                    {Text: 'Visualización'},
                    {Text: 'Refuerzo'},
                ]
            }
        }
    },
    Products: {
        Infocusnews: {
            Title:{
                Title: 'Infocusnews',
                Text: 'Modelos estadísticos y de tendencia',
                Img: './assets/wallpapers/wallp_infocusnews.png'
            },
            Description: {
                Title: 'Información de valor de las compañías',
                Text1: 'Diario digital que descubre información de valor en su compañía utilizando modelos estadísticos y de tendencia sobre múltiples variables. Diseño, implementación, soporte a soluciones de telefonía de última generación con PBX I P.',
                Img: './assets/images/bi_right.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>El análisis de datos y la gestión adecuada de la información son unos componentes decisivos para el crecimiento de una compañía.</p> 
                            </br> 
                            <p>Por eso en ETL Soluciones implementamos innovadores modelos para ello.</p>
                            </br> 
                            <p>¿Qué esperas? Consúltanos.</p>`
            },
            Contact: {
                Title: 'Contáctenos',
                Text: '¡Contáctenos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_infocusnews.png'
            }
        },
        BusinessIntelligence: {
            Title:{
                Title: 'ETL (BI) Business Intelligence',
                Text: 'En Tiempo Real',
                Img: './assets/wallpapers/wallp_bi.png'
            },
            Description: {
                Title: 'Análisis y Comportamiento de Mercados',
                Text1: 'Servicios gestionables con herramientas en nube, que permiten visualizar en tiempo real y en términos de negocio, el comportamiento de variables claves para mejorar el proceso de toma de decisiones en una organización.',
                Img: './assets/images/bi_right.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>Conjunto de procesos, aplicaciones y tecnologías que facilitan la obtención de datos, de manera que puedan ser aprovechados para la toma de decisiones.</p> 
                            </br> 
                            <p>A través de esta línea brindamos asesoría a nuestros clientes en el diseño e implementación de procesos, software y tecnología, para gestionar sus datos existentes en múltiples fuentes, convirtiéndolos en información de valor en la compañía.</p>
                            </br> 
                            <p>Consúltanos ahora y dale a tu empresa el impulso que te ofrece ETL Soluciones.</p>`
            },
            Contact: {
                Title: 'Contáctenos',
                Text: '¡Contáctenos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_bi.png'
            }
        },
        Innovation: {
            Title:{
                Title: 'Innovación',
                Text: 'Productos de mayor interés o necesidad',
                Img: './assets/wallpapers/wallp_innovation_p.png'
            },
            Description: {
                Title: 'Análisis y Comportamiento de Mercados',
                Text1: 'Identificación de las preferencias individuales de sus clientes con máximo detalle, le sugerirá en base a éstas qué productos pueden resultar de mayor interés o necesidad para cada cliente.',
                Img: './assets/images/bi_right.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>Los departamentos de TI han evolucionado con el tiempo, ahora se han vuelto un bien indispensable para las empresas al momento de cambios y soluciones innovadoras, transformando a los negocios y haciendo más notable su presencia en el mercado.</p> 
                        </br> 
                        <p>Consúltanos ahora y encuentra las soluciones ideales para tu empresa. En ETL Soluciones, estamos para servirte.</p>`
            },
            Contact: {
                Title: 'Contáctenos',
                Text: '¡Contáctenos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_innovation_p.png'
            }
        },
    },
    AboutUs:{
        Title: {
            Title: 'ETL SOLUCIONES',
            Text: 'Nuestra Empresa',
            Img: './assets/wallpapers/image_aboutUs.png'
        },
        Info: {
            Title: 'Expertos en soluciones de Alto Impacto',
            Text: 'Somos una empresa joven, con ganas y experiencia de profesionales con más de 10 años en el mercado de servicios de tecnología y Sistemas de información, contamos con la participación en proyectos de alto impacto, desarrollamos soluciones de TI aplicadas en sectores como comunicaciones, transporte, comercio, logística, solidario, salud, legal y servicios.',
            Item: [
                {
                    titleCard: 'Mejorar',
                    descriptionCard: 'Modernización de aplicaciones existentes.'
                },
                {
                    titleCard: 'Diseñar y Mejorar',
                    descriptionCard: 'Diseño y desarrollo de aplicaciones Web y Desktop, configurable, escalables y seguras.'
                },
                {
                    titleCard: 'Mantener y Soportar',
                    descriptionCard: 'Integración de aplicaciones y servicios.'
                }
            ]
        },
        Ability:{
            Title: 'Competencias y Habilidades de Desarrollo',
            SubTitle: 'Software a la medida',
            Abilities: [
                {
                    title: 'Tecnologías de Presentación',
                    frontImage: 'assets/icons/sphere.png',
                    description: [
                        'Aplicaciones Web Responsive: ASP. Net Web Forms',
                        'ASP.Net MVC, HTML5, CSS3, Ajax',
                        'JavaServer Pages (JSP)'
                    ]
                },
                {
                    title: 'Tecnologías de Capas Intermedias y Servicios Distribuidos',
                    frontImage: 'assets/icons/blocks-and-arrows.png',
                    description: [
                        '.NET Remoting',
                        '.Net Web Services',
                        'Windows Communications Foundation (WCF)',
                        'ASP.NET Web API 2 (Servicios REST)',
                        'Azure Appfabric',
                        'OSB (Oracle Service Bus)'
                    ]
                },
                {
                    title: 'Acceso a Datos y ORM',
                    frontImage: 'assets/icons/data-display.png',
                    description: ['ODBC', 'ADO', 'ADO.NET', 'Entity Framework', 'Hibernate']
                },
                {
                    title: 'Base de Datos',
                    frontImage: 'assets/icons/database-code.png',
                    description: [
                        'SQL Server 2008-2007',
                        'MySQL (4.x,5.x)',
                        'Oracle NoSQL (MongoDB, Oracle y otros)',
                        'ETL, Teradata, Integración de Datos, SSIS'
                    ]
                },
                {
                    title: 'Workflows',
                    frontImage: 'assets/icons/spanner.png',
                    description: ['Windows Workflow Foundation (WPF)']
                },
                {
                    title: 'Reportes',
                    frontImage: 'assets/icons/log.png',
                    description: [
                        'SQL Server Reporting Services',
                        'Oracle Reports',
                        'Crystal Reports'
                    ]
                },
                {
                    title: 'IDE',
                    frontImage: 'assets/icons/text-recognition.png',
                    description: [
                        'Visual Studio 2008-2007',
                        'Toad',
                        'Delphi',
                        'NetBeans'
                    ]
                },
                {
                    title: 'Frameworks',
                    frontImage: 'assets/icons/folder-code-one.png',
                    description: ['.NET 1.1-4.6', 'Java EE', 'Spring Framework', 'JBoss Seam']
                },
                {
                    title: 'Lenguajes',
                    frontImage: 'assets/icons/file-code.png',
                    description: [
                        'C, C++',
                        'C#, Visual Basic, VB.NET',
                        'Java, HTML, JavaScript',
                        'XML, XAML',
                        'T-SQL, PL-SQL',
                        'RPG, MongoDB, Teradata',
                        'Shell Script, Object Pascal y otros'
                    ]
                }
            ]
        }
    },
    Footer: {
        ContentFooter: {
            ContactInformation: {
                Text1: "Es fundamental para nosotros tener una comunicación fluída con nuestros clientes y poder hacer excelentes proyectos y negocios.",
                MeansContact: [
                    {
                        MeansContact1: [
                            {img:'./assets/icons/phone.png', text: 'Números', info: '(601) 615 4362'},
                            {img:'./assets/icons/mail.png', text: 'Correo', info: 'info@etlsoluciones.com'}
                        ]
                    },
                    {
                        MeansContact2: [
                            {img:'./assets/icons/whatsapp.png', text: 'WhatsApp', info: '+57 311 5613101'},
                            {img:'./assets/icons/ubication.png', text: 'Oficina', info: 'Carrera 72 # 81 B 13 – Edificio Connecta 80 – Torre Fura – Piso 5, Bogotá, Colombia'}
                        ]
                    }
                ]
            }
        },
        SubFooter: {
            Logo: "./assets/logo/logo_white.png",
            Text1: 'ETL Soluciones presenta permanentemente nuevas oportunidades para profesionales interesados en un lugar de trabajo creciente, apasionado y orientado al equipo.',
            socialNetworks: [
                {name: 'Facebook', Url: 'https://www.facebook.com/', img: './assets/socialNetworks/facebook.png'},
                {name: 'Instagram', Url: 'https://www.instagram.com/', img: './assets/socialNetworks/instagram.png'},
                {name: 'Linkedin', Url: 'https://co.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F', img: './assets/socialNetworks/linkedin.png'}
            ],
            
            Title1: "Menu",
            Menu: [
                'Inicio',
                'Servicio',
                'Productos',
                'Nosotros',
            ],
            Img:"./assets/images/image1.png",
            Text2: "&copy; 2024 ETL Soluciones. Todos los derechos reservados."
        }
    }
}