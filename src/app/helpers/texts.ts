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
            // {title: 'Productos', subMenu: [
            //     {subTitle: 'Infocusnews', link:'/products/infocusnwesProduct'},
            //     {subTitle: 'Business Intelligence', link:'/products/businessIntelligenceProduct'},
            //     {subTitle: 'Innovación', link:'/products/innovationProduct'},
            // ], link:''},
            {title: 'Nosotros', subMenu: [], link:'/aboutUs'}
        ]
    },
    Principal: {
        Welcome: {
            Title1: 'El camino de la Evolución Digital',
            Subtitle1: 'Soluciones Tecnológicas de Alto Impacto',
            Text1: 'Integramos tecnología, datos, automatización e Inteligencia Artificial para fortalecer la operación de organizaciones de diferentes industrias y sectores. Contamos con más de 12 años de experiencia desarrollando soluciones eficientes, escalables y orientadas a resultados.'
        },
        Services: {
            Title: 'SERVICIOS TI',
            Text: 'A través de las mejores prácticas de TI, ofrecemos soluciones de gran valor a nuestros clientes mediante nuestros servicios.',
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
            Title1: 'Gestión de Operaciones de TI, Datos, Automatización, Fábrica y Calidad de Software',
            SkillsList: [
                'Manejo integral de la operación tecnológica.',
                'Automatización de procesos orientada a eficiencia y reducción de errores.',
                'Soluciones tecnológicas robustas, autónomas y de alto valor para el negocio.',
                'Gestión y gobierno de datos para la toma de decisiones.',
                'Desarrollo de soluciones mediante fábrica de software.',
                'Aseguramiento de la calidad en todo el ciclo de vida del software.',
                'Construcción y liberación con enfoque en “victorias tempranas”.',
                'Análisis de las necesidades del negocio para traducirlas en iniciativas tecnológicas ágiles y efectivas.'
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
                Img: './assets/wallpapers/wallp_consultoria.png'
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
                Title: 'Gestión de Datos, BI y Analítica Avanzada',
                Text1: 'Ofrecemos un servicio integral para administrar y potenciar la información, asegurando que los datos sean seguros, confiables y alineados con los objetivos estratégicos del negocio.',
                Img: './assets/images/data_service.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>Nuestra gestión de datos organiza, protege y asegura la disponibilidad de la información, supervisando su recolección, almacenamiento, integración y gobernanza, tanto en entornos locales como en la nube. Al mismo tiempo, nuestras soluciones de Inteligencia de Negocios (BI) transforman los datos en información accionable, facilitando la toma de decisiones estratégicas.</p>
                        </br>
                        <p><strong>Tecnologías clave:</strong></p>
                        </br>
                        <p>Utilizamos una combinación de bases de datos modernas, plataformas de almacenamiento y procesamiento de datos, herramientas de visualización y dashboards interactivos, así como soluciones de catalogación, integración y gobernanza que garantizan control, seguridad y trazabilidad de la información.</p>
                        </br>
                        <p><strong>Valor agregado mediante Inteligencia Artificial y BI:</strong></p>
                        <ul class="list" >
                            <li><strong>Análisis predictivo:</strong> identificación de tendencias y patrones en grandes volúmenes de datos.</li>
                            <li><strong>Calidad de datos:</strong> detección automática de inconsistencias, duplicados y errores.</li>
                            <li><strong>Clasificación inteligente:</strong> catalogación y etiquetado que optimiza la gobernanza.</li>
                            <li><strong>Visualización y BI:</strong> dashboards y reportes interactivos que convierten datos en insights claros y oportunos.</li>
                        </ul>
                        </br>
                        <p>Estas capacidades se complementan con monitoreo continuo y cumplimiento normativo, asegurando confiabilidad y máximo aprovechamiento estratégico de la información.</p>
                        </br>
                        <p>La adopción de IA y BI en la gestión de datos impulsa decisiones más inteligentes, mejora la eficiencia operativa y fortalece la competitividad empresarial.</p>`
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
                Text1: 'Ofrecemos un servicio integral de automatización de procesos diseñado para optimizar flujos de trabajo, reducir errores y aumentar la productividad operacional de su organización, más allá de cualquier herramienta o tecnología específica.',
                Img: './assets/images/automation_service.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>La automatización de procesos permite ejecutar de manera autónoma tareas repetitivas, coordinar flujos complejos y mejorar la eficiencia en procesos de negocio y operaciones tecnológicas, liberando tiempo para actividades de mayor valor estratégico.</p>
                        </br>
                        <p><strong>Nuestro enfoque de mejora continua incluye:</strong></p>
                        <ul class="list" >
                            <li><strong>Automatización inteligente de tareas:</strong> sistemas capaces de aprender y adaptarse a los procesos.</li>
                            <li><strong>Procesamiento inteligente de información:</strong> extracción, clasificación y estructuración automática de datos y documentos.</li>
                            <li><strong>Orquestación de procesos y flujos de trabajo:</strong> coordinación eficiente de actividades entre múltiples sistemas y plataformas.</li>
                        </ul>
                        </br>
                        <p>Estas capacidades se integran de manera flexible con diferentes tecnologías —RPA, BPM, APIs o plataformas de orquestación— garantizando continuidad operativa, reducción de tiempos y mayor eficiencia sin depender de un producto específico.</p>
                        </br>
                        <p>La automatización inteligente permite a las organizaciones concentrarse en actividades de alto valor, optimizar recursos y avanzar con solidez en su transformación digital, creando procesos más ágiles, confiables y escalables.</p>`
            },
            Features: [
                {
                    Icon: 'assets/icons/tareas-repetitivas.png',
                    Title: 'Eliminación de tareas repetitivas',
                    Text: 'Eliminación de tareas repetitivas ejecutadas manualmente y que están basadas en reglas de negocio.'
                },
                {
                    Icon: 'assets/icons/data-display.png',
                    Title: 'Simulación del usuario',
                    Text: 'Simulación del usuario en interacción y clics frente a una pantalla.'
                },
                {
                    Icon: 'assets/icons/spanner.png',
                    Title: 'Integración de procesos técnicos',
                    Text: 'Integración de procesos técnicos sin ejecuciones manuales disminuyendo errores por ejecuciones de analistas y/o usuarios.'
                }
            ],
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
                Text1: 'Ofrecemos servicios de desarrollo de software a medida, diseñados para crear soluciones robustas, escalables y alineadas con los objetivos estratégicos de su organización.',
                Img: './assets/images/dev_service.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>Nuestra Fábrica de Software cubre todo el ciclo de vida del desarrollo: análisis, diseño, construcción, pruebas, despliegue y soporte. Trabajamos con diversos entornos de desarrollo y plataformas tecnológicas, integrando prácticas ágiles y capacidades de Inteligencia Artificial para desarrollo asistido, testing predictivo, análisis de código y optimización de performance. Gracias a DevOps y despliegue automatizado, entregamos soluciones seguras, eficientes y escalables, garantizando una experiencia de usuario superior.</p>
                        </br>
                        <p><strong>Nuestras capacidades clave incluyen:</strong></p>
                        <ul class="list" >
                            <li><strong>Desarrollo asistido por IA:</strong> generación de código, detección de errores y optimización continua.</li>
                            <li><strong>Testing inteligente:</strong> automatización de pruebas y ampliación de cobertura para garantizar calidad.</li>
                            <li><strong>Análisis de código:</strong> revisión continua de seguridad, buenas prácticas y performance.</li>
                        </ul>
                        </br>
                        <p>Apoyados en DevOps, integración continua y despliegue automatizado, diseñamos soluciones que se adaptan a distintos entornos y tecnologías, asegurando escalabilidad y evolución constante con el negocio.</p>
                        </br>
                        <p>La combinación de agilidad, experiencia multitecnológica e Inteligencia Artificial acelera la innovación, fortalece la competitividad digital y garantiza resultados medibles y sostenibles.</p>`
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
                Text1: 'Ofrecemos un servicio integral de aseguramiento de calidad que garantiza que cada solución tecnológica cumpla con los más altos estándares de funcionalidad, rendimiento y seguridad.',
                Img: './assets/images/qa_service.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>La calidad de software supervisa y valida cada etapa del desarrollo, asegurando que las soluciones cumplan con los requisitos técnicos y objetivos estratégicos del negocio.</p>
                        </br>
                        <p>Nuestro enfoque combina aseguramiento de calidad con asesoría estratégica, identificando oportunidades de mejora, diseñando planes de acción y acompañando su implementación, para entregar soluciones confiables, eficientes y con resultados medibles.</p>
                        </br>
                        <p><strong>Valor agregado mediante Inteligencia Artificial:</strong></p>
                        <ul class="list" >
                            <li><strong>Testing predictivo:</strong> identificación temprana de áreas críticas y generación de casos de prueba automatizados.</li>
                            <li><strong>Análisis de defectos:</strong> detección de patrones para prevenir errores recurrentes y mejorar la calidad general.</li>
                            <li><strong>Optimización de performance:</strong> monitoreo y mejora continua del rendimiento de las aplicaciones.</li>
                        </ul>
                        </br>
                        <p>Estas capacidades se integran con pruebas funcionales, de seguridad, rendimiento y automatización continua, asegurando entregas confiables, escalables y de alto nivel.</p>
                        </br>
                        <p>La calidad impulsada por IA y mejores prácticas reduce riesgos, mejora la experiencia del usuario y permite una transformación digital sólida, sostenible y orientada a resultados.</p>`
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
        MisionVision: {
            VideoUrl: 'https://www.youtube.com/embed/rHWsKnwpmec',
            Mision: {
                Title: 'Nuestra Misión',
                Text: 'Impulsar la transformación de las empresas mediante soluciones tecnológicas innovadoras que optimicen procesos y mejoren la calidad de vida. Fomentamos una cultura colaborativa, sostenible y orientada a la excelencia, adaptándonos de forma ágil a las necesidades del mercado y garantizando la satisfacción de nuestros clientes a través de un servicio personalizado y de alto valor.'
            },
            Vision: {
                Title: 'Nuestra Visión',
                Text: 'Para el 2030, ser una empresa referente en soluciones tecnológicas innovadoras, liderando la transformación digital de las industrias y promoviendo un futuro más sostenible, conectado y centrado en la experiencia del cliente, el talento y la responsabilidad social.'
            }
        },
        Info: {
            Title: 'Expertos en soluciones de Alto Impacto',
            Text: 'Más de 12 años transformando la tecnología en resultados nos respaldan con experiencia en el desarrollo de soluciones de TI, ejecutadas por un equipo altamente calificado que garantiza el óptimo desempeño y continuidad de los sistemas críticos en cada proyecto de alto impacto.  Nuestra trayectoria abarca sectores como comunicaciones, logística, comercio, financiero, salud, legal y servicios, tanto en el sector público como privado, entregando resultados eficientes, escalables e innovadores.',
            Item: [
                {
                    titleCard: 'Calidad de Datos',
                    descriptionCard: 'Aseguramos datos confiables, consistentes y alineados al negocio.'
                },
                {
                    titleCard: 'Desarrollo y Mejora',
                    descriptionCard: 'Diseño y desarrollo de aplicaciones Web y Desktop, configurable, escalables y seguras.'
                },
                {
                    titleCard: 'Mantenimiento y Soporte',
                    descriptionCard: 'Integración de aplicaciones y servicios.'
                }
            ]
        },
        Ability:{
            Title: 'Competencias y Habilidades de Desarrollo',
            SubTitle: 'Software a la medida',
            Abilities: [
                {
                    title: 'Integración de Datos (ETL / ELT)',
                    frontImage: 'assets/icons/data-display.png',
                    description: 'Diseñamos soluciones que conectan sistemas, eliminan silos de información y garantizan datos confiables.',
                    tecnologies: [
                        'Oracle Data Integrator (ODI)',
                        'Talend',
                        ' Pentaho',
                        'SSIS',
                        'Apache NiFi'
                    ],
                    value:[
                        "Migraciones masivas de datos.",
                        "Integración entre sistemas legacy y modernos.",
                        "Procesos robustos y escalables."
                    ]
                },
                {
                    title: 'Bases de Datos & Data Platforms',
                    frontImage: 'assets/icons/database-code.png',
                    description: 'Gestionamos plataformas de datos orientadas a rendimiento, calidad y disponibilidad.',
                    tecnologies: [
                        "Oracle",
                        "Snowflake",
                        "SQL Server",
                        "PostgreSQL",
                        "MySQL / MariaDB",
                        "Teradata",
                        "Amazon RDS",
                        "NoSQL / MongoDB"
                    ],
                    value:[
                        "Optimización de consultas.",
                        "Modelado de datos empresarial.",
                        "Procesamiento de grandes volúmenes."
                    ]
                },
                {
                    title: 'Cloud & Arquitecturas Modernas',
                    frontImage: 'assets/icons/sphere.png',
                    description: 'Diseñamos soluciones escalables en la nube que acompañan el crecimiento del negocio.',
                    tecnologies: [
                        "AWS (RDS, S3, Lambda, EC2)",
                        "Azure (Data Factory, Synapse)",
                        "Google Cloud"
                    ],
                    value:[
                        "Capacidad de mover cargas entre nubes o entornos.",
                        "Uso de servicios gestionados.",
                        "Capacidad de comunicarse con diferentes sistemas."
                    ]
                },
                {
                    title: 'Desarrollo de Software & APIs',
                    frontImage: 'assets/icons/file-code.png',
                    description: 'Desarrollamos soluciones empresariales robustas, integrables y orientadas a microservicios.',
                    tecnologies: [
                        '.NET (C#, ASP.NET Core, Web APIs)',
                        'Node.js / NestJS',
                        'Java (Spring Boot)',
                        'Python (FastAPI / Flask)',
                        'Angular',
                        'React',
                        'Flutter',
                        'React Native',
                        'Ionic'
                    ],
                    value: [
                        'Desarrollo de aplicaciones empresariales.',
                        'Integración de sistemas.',
                        'APIs REST / SOAP.',
                        'Arquitecturas desacopladas.'
                    ]
                },
                {
                    title: 'Automatización & RPA',
                    frontImage: 'assets/icons/automation-rpa.png',
                    description: 'Automatizamos procesos para reducir costos, errores y tiempos operativos.',
                    tecnologies: [
                        'UiPath, Automation Anywhere',
                        'Power Automate',
                        'Scripts (Python / Shell)',
                        'Google Workspace',
                        'N8N'
                    ],
                    value: [
                        'Reducción de costos operativos.',
                        'Minimización de errores humanos.',
                        'Optimización de tiempos de ejecución.',
                    ]
                },
                {
                    title: 'Analítica & Business Intelligence',
                    frontImage: 'assets/icons/analytics-bi.png',
                    description: 'Convertimos los datos en información estratégica para la toma de decisiones.',
                    tecnologies: [
                        'Power BI',
                        'Tableau',
                        'Oracle Analytics'
                    ],
                    value: [
                        'Toma de decisiones basada en datos.',
                        'Visualización de indicadores clave.',
                        'Análisis predictivo y descriptivo.',
                        'Dashboards interactivos.'
                    ]
                },
                {
                    title: 'DevOps & Contenedores',
                    frontImage: 'assets/icons/folder-code-one.png',
                    description: 'Implementamos prácticas modernas para acelerar el desarrollo y despliegue.',
                    tecnologies: [
                        'Docker, Kubernetes, OpenShift',
                        'Git, CI/CD',
                        'Azure Dev Ops',
                        'Jenkins'
                    ],
                    value: [
                        'Aceleración del ciclo de desarrollo.',
                        'Despliegues continuos y confiables.',
                        'Escalabilidad y portabilidad de aplicaciones.'
                    ]
                },
                {
                    title: 'Integración de Aplicaciones',
                    frontImage: 'assets/icons/spanner.png',
                    description: 'Diseñamos soluciones que orquestan sistemas complejos y garantizan una conectividad escalable y robusta.',
                    tecnologies: [
                        'Mulesoft',
                        'TIBCO'
                    ],
                    value: [
                        'Garantizar que la información viaje al instante.',
                        'Asegurar que solo las personas y sistemas correctos tengan acceso.',
                        'Procesos robustos y escalables.'
                    ]
                },
                {
                    title: 'Diseños UX/UI',
                    frontImage: 'assets/icons/ux-ui-design.png',
                    description: 'Diseñamos interfaces visuales que unifican el producto, eliminan la inconsistencia estética, garantizando sistemas de diseño escalables y experiencias digitales fluidas.',
                    tecnologies: [
                        'Figma',
                        'Adobe XD'
                    ],
                    value: [
                        'Sistemas de diseño escalables y consistentes',
                        'Modernización de interfaces',
                        'Experiencias digitales fluidas'
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
                {name: 'Facebook', Url: 'https://www.facebook.com/share/1G1eRTfbXr/', img: './assets/socialNetworks/facebook.png'},
                {name: 'Instagram', Url: 'https://www.instagram.com/etlsoluciones/', img: './assets/socialNetworks/instagram.png'},
                {name: 'Linkedin', Url: 'https://co.linkedin.com/company/etl-solucionescol', img: './assets/socialNetworks/linkedin.png'}
            ],
            
            Title1: "Menu",
            Menu: [
                'Inicio',
                'Servicio',
                //'Productos',
                'Nosotros',
            ],
            Img:"./assets/images/image1.png",
            Text2: "&copy; 2026 ETL Soluciones. Todos los derechos reservados."
        }
    }
}