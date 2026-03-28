"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

type Translations = {
    nav: {
        services: string;
        about: string;
        process: string;
        caseStudies: string;
        bookCall: string;
    };
    hero: {
        headline: {
            line1: string;
            line2: string;
            highlight: string;
        };
        subheadline: string;
        ctaPrimary: string;
        ctaSecondary: string;
        sidebarText: string;
    };
    services: {
        title: string;
        subtitle: string;
        items: {
            ai: { title: string; desc: string };
            cloud: { title: string; desc: string };
            security: { title: string; desc: string };
            data: { title: string; desc: string };
            devops: { title: string; desc: string };
            talent: { title: string; desc: string };
            support: { title: string; desc: string };
            custom: { title: string; desc: string };
        };
    };
    whyChooseUs: {
        title: string;
        subtitle: string;
        items: {
            engineers: { title: string };
            delivery: { title: string };
            scaling: { title: string };
        };
    };
    process: {
        label: string;
        title: {
            line1: string;
            highlight: string;
        };
        steps: {
            discovery: { title: string; desc: string };
            strategy: { title: string; desc: string };
            build: { title: string; desc: string };
            scale: { title: string; desc: string };
        };
    };
    cta: {
        title: {
            line1: string;
            highlight: string;
        };
        subtitle: string;
        primary: string;
        secondary: string;
    };
    footer: {
        title: {
            line1: string;
            line2: string;
            highlight: string;
        };
        startProject: string;
        socials: string;
        sitemap: string;
        rights: string;
    };
    caseStudies: {
        title: {
            highlight: string;
            rest: string;
        };
        detailsLabels?: {
            challenge: string;
            solution: string;
            results: string;
        };
        items: {
            title: string;
            category: string;
            desc: string;
            visualScheme: string;
            details: {
                challenge: string;
                solution: string;
                results: string[];
            };
        }[];
    };
    aboutPage: {
        title: string;
        subtitle: string;
        mission: {
            title: string;
            content: string;
        };
        vision: {
            title: string;
            content: string;
        };
    };
    contactPage: {
        title: string;
        subtitle: string;
        form: {
            name: string;
            email: string;
            message: string;
            submit: string;
            success: string;
        };
    };
    faq: {
        title: string;
        subtitle: string;
        categories: {
            general: string;
            changelog: string;
            privacy: string;
            terms: string;
        };
        items: {
            question: string;
            answer: string;
        }[];
    };
    legal: {
        privacy: {
            title: string;
            content: string;
        };
        terms: {
            title: string;
            content: string;
        };
    };
};

const translations: Record<Language, Translations> = {
    es: {
        nav: {
            services: "Servicios",
            about: "Nosotros",
            process: "Proceso",
            caseStudies: "Casos de Éxito",
            bookCall: "Agendar Llamada",
        },
        hero: {
            headline: {
                line1: "Tu Marca,",
                line2: "Potenciada por",
                highlight: "Tecnología",
            },
            subheadline: "¿Tienes una visión? Nosotros la construimos.",
            ctaPrimary: "Empezar Ahora",
            ctaSecondary: "Ver Portafolio",
            sidebarText: "¿Tienes una startup? \n Nosotros la escalamos.",
        },
        services: {
            title: "Nuestras Soluciones",
            subtitle: "Tecnología de alto impacto para empresas ambiciosas.",
            items: {
                ai: { title: "Ingeniería de IA y ML", desc: "Soluciones de IA personalizadas desde el desarrollo del modelo hasta el despliegue en producción: pipelines de MLOps, ingeniería de datos y automatización inteligente construida para escalar." },
                cloud: { title: "Migración a la Nube", desc: "Migra tu infraestructura a la nube con estrategias de tiempo de inactividad cero y orientación experta." },
                security: { title: "Ingeniería de Ciberseguridad", desc: "Protege tus sistemas con pruebas de penetración, modelado de amenazas y arquitectura de seguridad empresarial." },
                data: { title: "Ingeniería de Datos", desc: "Diseña y construye pipelines de datos escalables, almacenes y plataformas de analítica desde cero." },
                devops: { title: "Ingeniería DevOps", desc: "Acelera los ciclos de entrega con pipelines de CI/CD, infraestructura como código y automatización en la nube." },
                talent: { title: "Adquisición de Talento Global", desc: "Recluta y despliega talento de ingeniería especializado de una red global de profesionales previamente evaluados." },
                support: { title: "Soporte Técnico", desc: "Soporte técnico experto 24/7 para mantener tus sistemas funcionando al máximo rendimiento." },
                custom: { title: "Desarrollo de Software a Medida", desc: "Construye soluciones de software personalizadas diseñadas según tus especificaciones exactas y objetivos de negocio." },
            },
        },
        whyChooseUs: {
            title: "Por Qué Elegirnos",
            subtitle: "Diseñado para la calidad a escala.",
            items: {
                engineers: { title: "Ingenieros de Dominio Especializados" },
                delivery: { title: "Entrega Multi-Región" },
                scaling: { title: "Escalado Elástico de Equipos" },
            },
        },
        process: {
            label: "Cómo Trabajamos",
            title: {
                line1: "De la Idea al",
                highlight: "Imperio",
            },
            steps: {
                discovery: { title: "Descubrimiento", desc: "Analizamos las necesidades de tu negocio y requerimientos técnicos." },
                strategy: { title: "Estrategia", desc: "Diseñamos una hoja de ruta integral y la arquitectura perfecta." },
                build: { title: "Desarrollo", desc: "Desarrollo ágil con actualizaciones constantes y feedback." },
                scale: { title: "Escalado", desc: "Lanzamiento, monitoreo y optimización para el crecimiento." },
            },
        },
        cta: {
            title: {
                line1: "¿Listo para Construir Tu",
                highlight: "Legado?"
            },
            subtitle: "Hablemos de cómo podemos transformar tu negocio con tecnología de vanguardia.",
            primary: "Agendar Consultoría",
            secondary: "Ver Trabajos"
        },
        footer: {
            title: {
                line1: "Hagamos",
                line2: "Historia",
                highlight: "."
            },
            startProject: "Iniciar Proyecto",
            socials: "Redes",
            sitemap: "Mapa",
            rights: "Todos los derechos reservados.",
        },
        faq: {
            title: "Preguntas frecuentes",
            subtitle: "Al ofrecer respuestas concisas e informativas, esta sección ayuda a los usuarios a encontrar soluciones sin necesidad de contactar al soporte, ahorrando tiempo",
            categories: {
                general: "General",
                changelog: "Historial de cambios",
                privacy: "Privacidad",
                terms: "Términos y condiciones",
            },
            items: [
                {
                    question: "¿Qué son los términos y condiciones?",
                    answer: "Aceptar los Términos y Condiciones garantiza que comprendes tus derechos, responsabilidades y nuestras políticas al utilizar nuestros servicios. Protege tanto a ti como a nuestra plataforma.",
                },
                {
                    question: "¿Por qué debo aceptar los términos y condiciones?",
                    answer: "Es un acuerdo legal que define las reglas de uso de nuestra plataforma, asegurando un entorno seguro y justo para todos los usuarios.",
                },
                {
                    question: "¿Pueden cambiar los términos y condiciones?",
                    answer: "Sí, podemos actualizarlos periódicamente para reflejar cambios en nuestros servicios o en la legislación. Te notificaremos sobre cambios significativos.",
                },
                {
                    question: "¿Qué pasa si infrinjo los términos y condiciones?",
                    answer: "El incumplimiento puede resultar en la suspensión temporal o permanente de tu cuenta, dependiendo de la gravedad de la infracción.",
                },
                {
                    question: "¿Dónde puedo leer los términos y condiciones completos?",
                    answer: "Puedes encontrarlos en nuestra página dedicada a Términos y Condiciones, accesible desde el pie de página de nuestro sitio.",
                },
                {
                    question: "¿Qué tipo de actividades están prohibidas bajo sus términos?",
                    answer: "Prohibimos cualquier uso ilegal, abusivo o que interfiera con el funcionamiento normal de nuestros servicios o la experiencia de otros usuarios.",
                },
            ],
        },
        caseStudies: {
            title: {
                highlight: "Casos",
                rest: "de Éxito"
            },
            detailsLabels: {
                challenge: "El Desafío",
                solution: "Nuestra Solución",
                results: "Resultados Clave"
            },
            items: [
                {
                    title: "Revolución Fintech",
                    category: "Desarrollo Cloud",
                    desc: "Escalamos una plataforma de pagos para manejar millones de transacciones por segundo.",
                    visualScheme: "network",
                    details: {
                        challenge: "El cliente enfrentaba latencias críticas durante picos de tráfico, poniendo en riesgo la confianza de los usuarios en procesamientos de tiempo real.",
                        solution: "Arquitectura de microservicios reactivos en AWS con auto-scaling masivo y bases de datos distribuidas con consistencia eventual optimizada.",
                        results: ["Reducción del 40% en latencia", "Disponibilidad del 99.99%", "Procesamiento de 1M+ tps"]
                    }
                },
                {
                    title: "IA en Retail",
                    category: "IA & ML",
                    desc: "Implementamos modelos predictivos que aumentaron las ventas en un 35%.",
                    visualScheme: "hex",
                    details: {
                        challenge: "Falta de precisión en la gestión de inventarios y personalización de ofertas, resultando en pérdidas por stock no vendido.",
                        solution: "Modelos de Deep Learning para predicción de demanda y motores de recomendación hiper-personalizados integrados en el CRM.",
                        results: ["Incremento del 35% en conversión", "Optimización de stock del 25%", "ROI alcanzado en 4 meses"]
                    }
                },
                {
                    title: "Talento Global",
                    category: "Staffing",
                    desc: "Construimos un equipo de ingeniería distribuido en 4 continentes en tiempo récord.",
                    visualScheme: "pipeline",
                    details: {
                        challenge: "Escasez de talento especializado local para un proyecto de infraestructura crítica con tiempos de entrega agresivos.",
                        solution: "Pipeline de reclutamiento basado en IA y evaluaciones técnicas rigurosas para desplegar ingenieros Senior en múltiples zonas horarias.",
                        results: ["Equipo de 25+ ingenieros", "Time-to-hire reducido 60%", "Eficiencia operativa mejorada"]
                    }
                }
            ]
        },
        aboutPage: {
            title: "Nuestra Esencia",
            subtitle: "No solo construimos software, forjamos el motor tecnológico que impulsa a los líderes del mañana.",
            mission: {
                title: "Propósito",
                content: "Transformar la ambición en infraestructura digital de élite, permitiendo que las ideas disruptivas escalen sin fricción y con precisión absoluta."
            },
            vision: {
                title: "Visión de Futuro",
                content: "Establecer el nuevo estándar global de excelencia en ingeniería, siendo el aliado estratégico de quienes rediseñan las industrias del siglo XXI."
            }
        },
        contactPage: {
            title: "Hablemos",
            subtitle: "¿Listo para empezar? Cuéntanos sobre tu visión.",
            form: {
                name: "Nombre",
                email: "Email",
                message: "Mensaje",
                submit: "Enviar Mensaje",
                success: "¡Gracias! Nos pondremos en contacto pronto."
            }
        },
        legal: {
            privacy: {
                title: "Política de Privacidad",
                content: "Tu privacidad es importante para nosotros. Esta política explica cómo recopilamos, usamos y protegemos tu información personal...",
            },
            terms: {
                title: "Términos y Condiciones",
                content: "Al utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones...",
            },
        },
    },
    en: {
        nav: {
            services: "Services",
            about: "About",
            process: "Process",
            caseStudies: "Case Studies",
            bookCall: "Book a Call",
        },
        hero: {
            headline: {
                line1: "Your Brand,",
                line2: "Powered by",
                highlight: "Technology",
            },
            subheadline: "Have a vision? We build it.",
            ctaPrimary: "Start Now",
            ctaSecondary: "View Portfolio",
            sidebarText: "Running a startup? \n We scale it.",
        },
        services: {
            title: "Our Solutions",
            subtitle: "High-impact technology for ambitious companies.",
            items: {
                ai: { title: "AI & Machine Learning Engineering", desc: "Custom AI solutions from model development to production deployment — MLOps pipelines, data engineering, and intelligent automation built to scale." },
                cloud: { title: "Cloud Migration", desc: "Migrate your infrastructure to the cloud with zero-downtime strategies and expert guidance." },
                security: { title: "Cybersecurity Engineering", desc: "Protect your systems with penetration testing, threat modeling, and enterprise security architecture." },
                data: { title: "Data Engineering", desc: "Design and build scalable data pipelines, warehouses, and analytics platforms from the ground up." },
                devops: { title: "DevOps Engineering", desc: "Accelerate delivery cycles with CI/CD pipelines, infrastructure-as-code, and cloud automation." },
                talent: { title: "Global Talent Acquisition", desc: "Recruit and deploy specialized engineering talent from a global network of pre-vetted professionals." },
                support: { title: "Technical Support", desc: "24/7 expert technical support to keep your systems running at peak performance." },
                custom: { title: "Custom Software Development", desc: "Build bespoke software solutions engineered to your exact specifications and business goals." },
            },
        },
        whyChooseUs: {
            title: "Why Choose Us",
            subtitle: "Engineered for quality at scale.",
            items: {
                engineers: { title: "Specialized Domain Engineers" },
                delivery: { title: "Multi-Region Delivery" },
                scaling: { title: "Elastic Team Scaling" },
            },
        },
        process: {
            label: "How We Work",
            title: {
                line1: "From Idea to",
                highlight: "Empire",
            },
            steps: {
                discovery: { title: "Discovery", desc: "We analyze your business needs and technical requirements." },
                strategy: { title: "Strategy", desc: "We design a comprehensive roadmap and architecture." },
                build: { title: "Build", desc: "Agile development with regular updates and feedback loops." },
                scale: { title: "Scale", desc: "Launch, monitor, and optimize for growth." },
            },
        },
        cta: {
            title: {
                line1: "Ready to Build Your",
                highlight: "Legacy?"
            },
            subtitle: "Let's discuss how we can help you transform your business with cutting-edge technology.",
            primary: "Book Consultation",
            secondary: "View Work"
        },
        footer: {
            title: {
                line1: "Let's Make",
                line2: "History",
                highlight: "."
            },
            startProject: "Start a Project",
            socials: "Socials",
            sitemap: "Sitemap",
            rights: "All rights reserved.",
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "By providing concise and informative answers, this section helps users find solutions without needing to contact support, saving time.",
            categories: {
                general: "General",
                changelog: "Changelog",
                privacy: "Privacy",
                terms: "Terms & Conditions",
            },
            items: [
                {
                    question: "What are terms & conditions?",
                    answer: "Accepting the Terms & Conditions ensures that you understand your rights, responsibilities, and our policies while using our services. It protects both you and our platform.",
                },
                {
                    question: "Why do I need to accept the terms & conditions?",
                    answer: "It is a legal agreement that defines the rules for using our platform, ensuring a safe and fair environment for all users.",
                },
                {
                    question: "Can the terms & conditions change?",
                    answer: "Yes, we may update them periodically to reflect changes in our services or the law. We will notify you of any significant changes.",
                },
                {
                    question: "What happens if I violate the terms & conditions?",
                    answer: "Violation may result in temporary or permanent suspension of your account, depending on the severity of the breach.",
                },
                {
                    question: "Where can I read the full terms & conditions?",
                    answer: "You can find them on our dedicated Terms & Conditions page, accessible from the footer of our site.",
                },
                {
                    question: "What kind of activities are prohibited under your terms?",
                    answer: "We prohibit any illegal or abusive use, or any activity that interferes with the normal operation of our services or the experience of other users.",
                },
            ],
        },
        caseStudies: {
            title: {
                highlight: "Case",
                rest: "Studies"
            },
            detailsLabels: {
                challenge: "The Challenge",
                solution: "Our Solution",
                results: "Key Results"
            },
            items: [
                {
                    title: "Fintech Revolution",
                    category: "Cloud Development",
                    desc: "Scaled a payments platform to handle millions of transactions per second.",
                    visualScheme: "network",
                    details: {
                        challenge: "The client faced critical latencies during traffic peaks, risking user trust in real-time processing.",
                        solution: "Reactive microservices architecture on AWS with massive auto-scaling and optimized distributed databases.",
                        results: ["40% latency reduction", "99.99% availability", "1M+ tps processing"]
                    }
                },
                {
                    title: "AI in Retail",
                    category: "AI & ML",
                    desc: "Implemented predictive models that increased sales by 35%.",
                    visualScheme: "hex",
                    details: {
                        challenge: "Inaccurate inventory management and offer personalization led to losses from unsold stock.",
                        solution: "Deep Learning models for demand forecasting and hyper-personalized recommendation engines integrated into the CRM.",
                        results: ["35% conversion increase", "25% stock optimization", "ROI achieved in 4 months"]
                    }
                },
                {
                    title: "Global Talent",
                    category: "Staffing",
                    desc: "Built a distributed engineering team across 4 continents in record time.",
                    visualScheme: "pipeline",
                    details: {
                        challenge: "Scarcity of local specialized talent for a critical infrastructure project with aggressive delivery timelines.",
                        solution: "AI-driven recruitment pipeline and rigorous technical assessments to deploy Senior engineers across multiple time zones.",
                        results: ["25+ engineer team", "Time-to-hire reduced by 60%", "Improved operational efficiency"]
                    }
                }
            ]
        },
        aboutPage: {
            title: "Our Essence",
            subtitle: "We don't just build software; we forge the technological engine that powers tomorrow's leaders.",
            mission: {
                title: "Purpose",
                content: "To transform ambition into elite digital infrastructure, enabling disruptive ideas to scale without friction and with absolute precision."
            },
            vision: {
                title: "Future Vision",
                content: "To set the new global standard for engineering excellence, serving as the strategic partner for those redesigning the industries of the 21st century."
            }
        },
        contactPage: {
            title: "Let's Talk",
            subtitle: "Ready to start? Tell us about your vision.",
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                submit: "Send Message",
                success: "Thank you! We'll be in touch soon."
            }
        },
        legal: {
            privacy: {
                title: "Privacy Policy",
                content: "Your privacy is important to us. This policy explains how we collect, use, and protect your personal information...",
            },
            terms: {
                title: "Terms & Conditions",
                content: "By using our services, you agree to comply with the following terms and conditions...",
            },
        },
    },
};

const LanguageContext = createContext<{
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
    toggleLanguage: () => void;
} | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("es");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "es" ? "en" : "es"));
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
