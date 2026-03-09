module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/my-project/advisoraai-main/src/components/ui/SmoothScroll.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmoothScroll",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$advisoraai$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/advisoraai-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$advisoraai$2d$main$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/advisoraai-main/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function SmoothScroll() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$advisoraai$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$advisoraai$2d$main$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            duration: 1.2,
            easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return ()=>{
            lenis.destroy();
        };
    }, []);
    return null;
}
}),
"[project]/my-project/advisoraai-main/src/lib/i18n.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$advisoraai$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/advisoraai-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$advisoraai$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/advisoraai-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const translations = {
    es: {
        nav: {
            services: "Servicios",
            about: "Nosotros",
            process: "Proceso",
            caseStudies: "Casos de Éxito",
            bookCall: "Agendar Llamada"
        },
        hero: {
            headline: {
                line1: "Tu Marca,",
                line2: "Potenciada por",
                highlight: "Tecnología"
            },
            subheadline: "¿Tienes una visión? Nosotros la construimos.",
            ctaPrimary: "Empezar Ahora",
            ctaSecondary: "Ver Portafolio",
            sidebarText: "¿Tienes una startup? \n Nosotros la escalamos."
        },
        services: {
            title: "Nuestras Soluciones",
            subtitle: "Tecnología de alto impacto para empresas ambiciosas.",
            items: {
                ai: {
                    title: "Ingeniería de IA y ML",
                    desc: "Soluciones de IA personalizadas desde el desarrollo del modelo hasta el despliegue en producción: pipelines de MLOps, ingeniería de datos y automatización inteligente construida para escalar."
                },
                cloud: {
                    title: "Migración a la Nube",
                    desc: "Migra tu infraestructura a la nube con estrategias de tiempo de inactividad cero y orientación experta."
                },
                security: {
                    title: "Ingeniería de Ciberseguridad",
                    desc: "Protege tus sistemas con pruebas de penetración, modelado de amenazas y arquitectura de seguridad empresarial."
                },
                data: {
                    title: "Ingeniería de Datos",
                    desc: "Diseña y construye pipelines de datos escalables, almacenes y plataformas de analítica desde cero."
                },
                devops: {
                    title: "Ingeniería DevOps",
                    desc: "Acelera los ciclos de entrega con pipelines de CI/CD, infraestructura como código y automatización en la nube."
                },
                talent: {
                    title: "Adquisición de Talento Global",
                    desc: "Recluta y despliega talento de ingeniería especializado de una red global de profesionales previamente evaluados."
                },
                support: {
                    title: "Soporte Técnico",
                    desc: "Soporte técnico experto 24/7 para mantener tus sistemas funcionando al máximo rendimiento."
                },
                custom: {
                    title: "Desarrollo de Software a Medida",
                    desc: "Construye soluciones de software personalizadas diseñadas según tus especificaciones exactas y objetivos de negocio."
                }
            }
        },
        whyChooseUs: {
            title: "Por Qué Elegirnos",
            subtitle: "Diseñado para la calidad a escala.",
            items: {
                engineers: {
                    title: "Ingenieros de Dominio Especializados"
                },
                delivery: {
                    title: "Entrega Multi-Región"
                },
                scaling: {
                    title: "Escalado Elástico de Equipos"
                }
            }
        },
        process: {
            label: "Cómo Trabajamos",
            title: {
                line1: "De la Idea al",
                highlight: "Imperio"
            },
            steps: {
                discovery: {
                    title: "Descubrimiento",
                    desc: "Analizamos las necesidades de tu negocio y requerimientos técnicos."
                },
                strategy: {
                    title: "Estrategia",
                    desc: "Diseñamos una hoja de ruta integral y la arquitectura perfecta."
                },
                build: {
                    title: "Desarrollo",
                    desc: "Desarrollo ágil con actualizaciones constantes y feedback."
                },
                scale: {
                    title: "Escalado",
                    desc: "Lanzamiento, monitoreo y optimización para el crecimiento."
                }
            }
        },
        trustedBy: {
            title: {
                highlight: "Fundadores",
                rest: "que Hemos Tenido la Suerte de Apoyar"
            }
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
            rights: "Todos los derechos reservados."
        },
        faq: {
            title: "Preguntas frecuentes",
            subtitle: "Al ofrecer respuestas concisas e informativas, esta sección ayuda a los usuarios a encontrar soluciones sin necesidad de contactar al soporte, ahorrando tiempo",
            categories: {
                general: "General",
                changelog: "Historial de cambios",
                privacy: "Privacidad",
                terms: "Términos y condiciones"
            },
            items: [
                {
                    question: "¿Qué son los términos y condiciones?",
                    answer: "Aceptar los Términos y Condiciones garantiza que comprendes tus derechos, responsabilidades y nuestras políticas al utilizar nuestros servicios. Protege tanto a ti como a nuestra plataforma."
                },
                {
                    question: "¿Por qué debo aceptar los términos y condiciones?",
                    answer: "Es un acuerdo legal que define las reglas de uso de nuestra plataforma, asegurando un entorno seguro y justo para todos los usuarios."
                },
                {
                    question: "¿Pueden cambiar los términos y condiciones?",
                    answer: "Sí, podemos actualizarlos periódicamente para reflejar cambios en nuestros servicios o en la legislación. Te notificaremos sobre cambios significativos."
                },
                {
                    question: "¿Qué pasa si infrinjo los términos y condiciones?",
                    answer: "El incumplimiento puede resultar en la suspensión temporal o permanente de tu cuenta, dependiendo de la gravedad de la infracción."
                },
                {
                    question: "¿Dónde puedo leer los términos y condiciones completos?",
                    answer: "Puedes encontrarlos en nuestra página dedicada a Términos y Condiciones, accesible desde el pie de página de nuestro sitio."
                },
                {
                    question: "¿Qué tipo de actividades están prohibidas bajo sus términos?",
                    answer: "Prohibimos cualquier uso ilegal, abusivo o que interfiera con el funcionamiento normal de nuestros servicios o la experiencia de otros usuarios."
                }
            ]
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
                        results: [
                            "Reducción del 40% en latencia",
                            "Disponibilidad del 99.99%",
                            "Procesamiento de 1M+ tps"
                        ]
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
                        results: [
                            "Incremento del 35% en conversión",
                            "Optimización de stock del 25%",
                            "ROI alcanzado en 4 meses"
                        ]
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
                        results: [
                            "Equipo de 25+ ingenieros",
                            "Time-to-hire reducido 60%",
                            "Eficiencia operativa mejorada"
                        ]
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
                content: "Tu privacidad es importante para nosotros. Esta política explica cómo recopilamos, usamos y protegemos tu información personal..."
            },
            terms: {
                title: "Términos y Condiciones",
                content: "Al utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones..."
            }
        }
    },
    en: {
        nav: {
            services: "Services",
            about: "About",
            process: "Process",
            caseStudies: "Case Studies",
            bookCall: "Book a Call"
        },
        hero: {
            headline: {
                line1: "Your Brand,",
                line2: "Powered by",
                highlight: "Technology"
            },
            subheadline: "Have a vision? We build it.",
            ctaPrimary: "Start Now",
            ctaSecondary: "View Portfolio",
            sidebarText: "Running a startup? \n We scale it."
        },
        services: {
            title: "Our Solutions",
            subtitle: "High-impact technology for ambitious companies.",
            items: {
                ai: {
                    title: "AI & Machine Learning Engineering",
                    desc: "Custom AI solutions from model development to production deployment — MLOps pipelines, data engineering, and intelligent automation built to scale."
                },
                cloud: {
                    title: "Cloud Migration",
                    desc: "Migrate your infrastructure to the cloud with zero-downtime strategies and expert guidance."
                },
                security: {
                    title: "Cybersecurity Engineering",
                    desc: "Protect your systems with penetration testing, threat modeling, and enterprise security architecture."
                },
                data: {
                    title: "Data Engineering",
                    desc: "Design and build scalable data pipelines, warehouses, and analytics platforms from the ground up."
                },
                devops: {
                    title: "DevOps Engineering",
                    desc: "Accelerate delivery cycles with CI/CD pipelines, infrastructure-as-code, and cloud automation."
                },
                talent: {
                    title: "Global Talent Acquisition",
                    desc: "Recruit and deploy specialized engineering talent from a global network of pre-vetted professionals."
                },
                support: {
                    title: "Technical Support",
                    desc: "24/7 expert technical support to keep your systems running at peak performance."
                },
                custom: {
                    title: "Custom Software Development",
                    desc: "Build bespoke software solutions engineered to your exact specifications and business goals."
                }
            }
        },
        whyChooseUs: {
            title: "Why Choose Us",
            subtitle: "Engineered for quality at scale.",
            items: {
                engineers: {
                    title: "Specialized Domain Engineers"
                },
                delivery: {
                    title: "Multi-Region Delivery"
                },
                scaling: {
                    title: "Elastic Team Scaling"
                }
            }
        },
        process: {
            label: "How We Work",
            title: {
                line1: "From Idea to",
                highlight: "Empire"
            },
            steps: {
                discovery: {
                    title: "Discovery",
                    desc: "We analyze your business needs and technical requirements."
                },
                strategy: {
                    title: "Strategy",
                    desc: "We design a comprehensive roadmap and architecture."
                },
                build: {
                    title: "Build",
                    desc: "Agile development with regular updates and feedback loops."
                },
                scale: {
                    title: "Scale",
                    desc: "Launch, monitor, and optimize for growth."
                }
            }
        },
        trustedBy: {
            title: {
                highlight: "Founders",
                rest: "We've Been Lucky to Back"
            }
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
            rights: "All rights reserved."
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "By providing concise and informative answers, this section helps users find solutions without needing to contact support, saving time.",
            categories: {
                general: "General",
                changelog: "Changelog",
                privacy: "Privacy",
                terms: "Terms & Conditions"
            },
            items: [
                {
                    question: "What are terms & conditions?",
                    answer: "Accepting the Terms & Conditions ensures that you understand your rights, responsibilities, and our policies while using our services. It protects both you and our platform."
                },
                {
                    question: "Why do I need to accept the terms & conditions?",
                    answer: "It is a legal agreement that defines the rules for using our platform, ensuring a safe and fair environment for all users."
                },
                {
                    question: "Can the terms & conditions change?",
                    answer: "Yes, we may update them periodically to reflect changes in our services or the law. We will notify you of any significant changes."
                },
                {
                    question: "What happens if I violate the terms & conditions?",
                    answer: "Violation may result in temporary or permanent suspension of your account, depending on the severity of the breach."
                },
                {
                    question: "Where can I read the full terms & conditions?",
                    answer: "You can find them on our dedicated Terms & Conditions page, accessible from the footer of our site."
                },
                {
                    question: "What kind of activities are prohibited under your terms?",
                    answer: "We prohibit any illegal or abusive use, or any activity that interferes with the normal operation of our services or the experience of other users."
                }
            ]
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
                        results: [
                            "40% latency reduction",
                            "99.99% availability",
                            "1M+ tps processing"
                        ]
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
                        results: [
                            "35% conversion increase",
                            "25% stock optimization",
                            "ROI achieved in 4 months"
                        ]
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
                        results: [
                            "25+ engineer team",
                            "Time-to-hire reduced by 60%",
                            "Improved operational efficiency"
                        ]
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
                content: "Your privacy is important to us. This policy explains how we collect, use, and protect your personal information..."
            },
            terms: {
                title: "Terms & Conditions",
                content: "By using our services, you agree to comply with the following terms and conditions..."
            }
        }
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$advisoraai$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$advisoraai$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("es");
    const toggleLanguage = ()=>{
        setLanguage((prev)=>prev === "es" ? "en" : "es");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$advisoraai$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t: translations[language],
            toggleLanguage
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/my-project/advisoraai-main/src/lib/i18n.tsx",
        lineNumber: 571,
        columnNumber: 9
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$advisoraai$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
}),
"[project]/my-project/advisoraai-main/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/my-project/advisoraai-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/my-project/advisoraai-main/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/my-project/advisoraai-main/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lenis
]);
// package.json
var version = "1.3.17";
// packages/core/src/maths.ts
function clamp(min, input, max) {
    return Math.max(min, Math.min(input, max));
}
function lerp(x, y, t) {
    return (1 - t) * x + t * y;
}
function damp(x, y, lambda, deltaTime) {
    return lerp(x, y, 1 - Math.exp(-lambda * deltaTime));
}
function modulo(n, d) {
    return (n % d + d) % d;
}
// packages/core/src/animate.ts
var Animate = class {
    isRunning = false;
    value = 0;
    from = 0;
    to = 0;
    currentTime = 0;
    // These are instanciated in the fromTo method
    lerp;
    duration;
    easing;
    onUpdate;
    /**
   * Advance the animation by the given delta time
   *
   * @param deltaTime - The time in seconds to advance the animation
   */ advance(deltaTime) {
        if (!this.isRunning) return;
        let completed = false;
        if (this.duration && this.easing) {
            this.currentTime += deltaTime;
            const linearProgress = clamp(0, this.currentTime / this.duration, 1);
            completed = linearProgress >= 1;
            const easedProgress = completed ? 1 : this.easing(linearProgress);
            this.value = this.from + (this.to - this.from) * easedProgress;
        } else if (this.lerp) {
            this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
            if (Math.round(this.value) === this.to) {
                this.value = this.to;
                completed = true;
            }
        } else {
            this.value = this.to;
            completed = true;
        }
        if (completed) {
            this.stop();
        }
        this.onUpdate?.(this.value, completed);
    }
    /** Stop the animation */ stop() {
        this.isRunning = false;
    }
    /**
   * Set up the animation from a starting value to an ending value
   * with optional parameters for lerping, duration, easing, and onUpdate callback
   *
   * @param from - The starting value
   * @param to - The ending value
   * @param options - Options for the animation
   */ fromTo(from, to, { lerp: lerp2, duration, easing, onStart, onUpdate }) {
        this.from = this.value = from;
        this.to = to;
        this.lerp = lerp2;
        this.duration = duration;
        this.easing = easing;
        this.currentTime = 0;
        this.isRunning = true;
        onStart?.();
        this.onUpdate = onUpdate;
    }
};
// packages/core/src/debounce.ts
function debounce(callback, delay) {
    let timer;
    return function(...args) {
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            timer = void 0;
            callback.apply(context, args);
        }, delay);
    };
}
// packages/core/src/dimensions.ts
var Dimensions = class {
    constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}){
        this.wrapper = wrapper;
        this.content = content;
        if (autoResize) {
            this.debouncedResize = debounce(this.resize, debounceValue);
            if (this.wrapper instanceof Window) {
                window.addEventListener("resize", this.debouncedResize, false);
            } else {
                this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
                this.wrapperResizeObserver.observe(this.wrapper);
            }
            this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
            this.contentResizeObserver.observe(this.content);
        }
        this.resize();
    }
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    // These are instanciated in the constructor as they need information from the options
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    destroy() {
        this.wrapperResizeObserver?.disconnect();
        this.contentResizeObserver?.disconnect();
        if (this.wrapper === window && this.debouncedResize) {
            window.removeEventListener("resize", this.debouncedResize, false);
        }
    }
    resize = ()=>{
        this.onWrapperResize();
        this.onContentResize();
    };
    onWrapperResize = ()=>{
        if (this.wrapper instanceof Window) {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        } else {
            this.width = this.wrapper.clientWidth;
            this.height = this.wrapper.clientHeight;
        }
    };
    onContentResize = ()=>{
        if (this.wrapper instanceof Window) {
            this.scrollHeight = this.content.scrollHeight;
            this.scrollWidth = this.content.scrollWidth;
        } else {
            this.scrollHeight = this.wrapper.scrollHeight;
            this.scrollWidth = this.wrapper.scrollWidth;
        }
    };
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        };
    }
};
// packages/core/src/emitter.ts
var Emitter = class {
    events = {};
    /**
   * Emit an event with the given data
   * @param event Event name
   * @param args Data to pass to the event handlers
   */ emit(event, ...args) {
        let callbacks = this.events[event] || [];
        for(let i = 0, length = callbacks.length; i < length; i++){
            callbacks[i]?.(...args);
        }
    }
    /**
   * Add a callback to the event
   * @param event Event name
   * @param cb Callback function
   * @returns Unsubscribe function
   */ on(event, cb) {
        this.events[event]?.push(cb) || (this.events[event] = [
            cb
        ]);
        return ()=>{
            this.events[event] = this.events[event]?.filter((i)=>cb !== i);
        };
    }
    /**
   * Remove a callback from the event
   * @param event Event name
   * @param callback Callback function
   */ off(event, callback) {
        this.events[event] = this.events[event]?.filter((i)=>callback !== i);
    }
    /**
   * Remove all event listeners and clean up
   */ destroy() {
        this.events = {};
    }
};
// packages/core/src/virtual-scroll.ts
var LINE_HEIGHT = 100 / 6;
var listenerOptions = {
    passive: false
};
var VirtualScroll = class {
    constructor(element, options = {
        wheelMultiplier: 1,
        touchMultiplier: 1
    }){
        this.element = element;
        this.options = options;
        window.addEventListener("resize", this.onWindowResize, false);
        this.onWindowResize();
        this.element.addEventListener("wheel", this.onWheel, listenerOptions);
        this.element.addEventListener("touchstart", this.onTouchStart, listenerOptions);
        this.element.addEventListener("touchmove", this.onTouchMove, listenerOptions);
        this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
    }
    touchStart = {
        x: 0,
        y: 0
    };
    lastDelta = {
        x: 0,
        y: 0
    };
    window = {
        width: 0,
        height: 0
    };
    emitter = new Emitter();
    /**
   * Add an event listener for the given event and callback
   *
   * @param event Event name
   * @param callback Callback function
   */ on(event, callback) {
        return this.emitter.on(event, callback);
    }
    /** Remove all event listeners and clean up */ destroy() {
        this.emitter.destroy();
        window.removeEventListener("resize", this.onWindowResize, false);
        this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
        this.element.removeEventListener("touchstart", this.onTouchStart, listenerOptions);
        this.element.removeEventListener("touchmove", this.onTouchMove, listenerOptions);
        this.element.removeEventListener("touchend", this.onTouchEnd, listenerOptions);
    }
    /**
   * Event handler for 'touchstart' event
   *
   * @param event Touch event
   */ onTouchStart = (event)=>{
        const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
        this.touchStart.x = clientX;
        this.touchStart.y = clientY;
        this.lastDelta = {
            x: 0,
            y: 0
        };
        this.emitter.emit("scroll", {
            deltaX: 0,
            deltaY: 0,
            event
        });
    };
    /** Event handler for 'touchmove' event */ onTouchMove = (event)=>{
        const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
        const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
        const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
        this.touchStart.x = clientX;
        this.touchStart.y = clientY;
        this.lastDelta = {
            x: deltaX,
            y: deltaY
        };
        this.emitter.emit("scroll", {
            deltaX,
            deltaY,
            event
        });
    };
    onTouchEnd = (event)=>{
        this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event
        });
    };
    /** Event handler for 'wheel' event */ onWheel = (event)=>{
        let { deltaX, deltaY, deltaMode } = event;
        const multiplierX = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.width : 1;
        const multiplierY = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.height : 1;
        deltaX *= multiplierX;
        deltaY *= multiplierY;
        deltaX *= this.options.wheelMultiplier;
        deltaY *= this.options.wheelMultiplier;
        this.emitter.emit("scroll", {
            deltaX,
            deltaY,
            event
        });
    };
    onWindowResize = ()=>{
        this.window = {
            width: window.innerWidth,
            height: window.innerHeight
        };
    };
};
// packages/core/src/lenis.ts
var defaultEasing = (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t));
var Lenis = class {
    _isScrolling = false;
    // true when scroll is animating
    _isStopped = false;
    // true if user should not be able to scroll - enable/disable programmatically
    _isLocked = false;
    // same as isStopped but enabled/disabled when scroll reaches target
    _preventNextNativeScrollEvent = false;
    _resetVelocityTimeout = null;
    _rafId = null;
    /**
   * Whether or not the user is touching the screen
   */ isTouching;
    /**
   * The time in ms since the lenis instance was created
   */ time = 0;
    /**
   * User data that will be forwarded through the scroll event
   *
   * @example
   * lenis.scrollTo(100, {
   *   userData: {
   *     foo: 'bar'
   *   }
   * })
   */ userData = {};
    /**
   * The last velocity of the scroll
   */ lastVelocity = 0;
    /**
   * The current velocity of the scroll
   */ velocity = 0;
    /**
   * The direction of the scroll
   */ direction = 0;
    /**
   * The options passed to the lenis instance
   */ options;
    /**
   * The target scroll value
   */ targetScroll;
    /**
   * The animated scroll value
   */ animatedScroll;
    // These are instanciated here as they don't need information from the options
    animate = new Animate();
    emitter = new Emitter();
    // These are instanciated in the constructor as they need information from the options
    dimensions;
    // This is not private because it's used in the Snap class
    virtualScroll;
    constructor({ wrapper = window, content = document.documentElement, eventsTarget = wrapper, smoothWheel = true, syncTouch = false, syncTouchLerp = 0.075, touchInertiaExponent = 1.7, duration, // in seconds
    easing, lerp: lerp2 = 0.1, infinite = false, orientation = "vertical", // vertical, horizontal
    gestureOrientation = orientation === "horizontal" ? "both" : "vertical", // vertical, horizontal, both
    touchMultiplier = 1, wheelMultiplier = 1, autoResize = true, prevent, virtualScroll, overscroll = true, autoRaf = false, anchors = false, autoToggle = false, // https://caniuse.com/?search=transition-behavior
    allowNestedScroll = false, // @ts-ignore: this will be deprecated in the future
    __experimental__naiveDimensions = false, naiveDimensions = __experimental__naiveDimensions, stopInertiaOnNavigate = false } = {}){
        window.lenisVersion = version;
        if (!wrapper || wrapper === document.documentElement) {
            wrapper = window;
        }
        if (typeof duration === "number" && typeof easing !== "function") {
            easing = defaultEasing;
        } else if (typeof easing === "function" && typeof duration !== "number") {
            duration = 1;
        }
        this.options = {
            wrapper,
            content,
            eventsTarget,
            smoothWheel,
            syncTouch,
            syncTouchLerp,
            touchInertiaExponent,
            duration,
            easing,
            lerp: lerp2,
            infinite,
            gestureOrientation,
            orientation,
            touchMultiplier,
            wheelMultiplier,
            autoResize,
            prevent,
            virtualScroll,
            overscroll,
            autoRaf,
            anchors,
            autoToggle,
            allowNestedScroll,
            naiveDimensions,
            stopInertiaOnNavigate
        };
        this.dimensions = new Dimensions(wrapper, content, {
            autoResize
        });
        this.updateClassName();
        this.targetScroll = this.animatedScroll = this.actualScroll;
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false);
        this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: true
        });
        if (this.options.anchors || this.options.stopInertiaOnNavigate) {
            this.options.wrapper.addEventListener("click", this.onClick, false);
        }
        this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, false);
        this.virtualScroll = new VirtualScroll(eventsTarget, {
            touchMultiplier,
            wheelMultiplier
        });
        this.virtualScroll.on("scroll", this.onVirtualScroll);
        if (this.options.autoToggle) {
            this.checkOverflow();
            this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
                passive: true
            });
        }
        if (this.options.autoRaf) {
            this._rafId = requestAnimationFrame(this.raf);
        }
    }
    /**
   * Destroy the lenis instance, remove all event listeners and clean up the class name
   */ destroy() {
        this.emitter.destroy();
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false);
        this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
            capture: true
        });
        this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, false);
        if (this.options.anchors || this.options.stopInertiaOnNavigate) {
            this.options.wrapper.removeEventListener("click", this.onClick, false);
        }
        this.virtualScroll.destroy();
        this.dimensions.destroy();
        this.cleanUpClassName();
        if (this._rafId) {
            cancelAnimationFrame(this._rafId);
        }
    }
    on(event, callback) {
        return this.emitter.on(event, callback);
    }
    off(event, callback) {
        return this.emitter.off(event, callback);
    }
    onScrollEnd = (e)=>{
        if (!(e instanceof CustomEvent)) {
            if (this.isScrolling === "smooth" || this.isScrolling === false) {
                e.stopPropagation();
            }
        }
    };
    dispatchScrollendEvent = ()=>{
        this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
            bubbles: this.options.wrapper === window,
            // cancelable: false,
            detail: {
                lenisScrollEnd: true
            }
        }));
    };
    get overflow() {
        const property = this.isHorizontal ? "overflow-x" : "overflow-y";
        return getComputedStyle(this.rootElement)[property];
    }
    checkOverflow() {
        if ([
            "hidden",
            "clip"
        ].includes(this.overflow)) {
            this.internalStop();
        } else {
            this.internalStart();
        }
    }
    onTransitionEnd = (event)=>{
        if (event.propertyName.includes("overflow")) {
            this.checkOverflow();
        }
    };
    setScroll(scroll) {
        if (this.isHorizontal) {
            this.options.wrapper.scrollTo({
                left: scroll,
                behavior: "instant"
            });
        } else {
            this.options.wrapper.scrollTo({
                top: scroll,
                behavior: "instant"
            });
        }
    }
    onClick = (event)=>{
        const path = event.composedPath();
        const anchorElements = path.filter((node)=>node instanceof HTMLAnchorElement && node.getAttribute("href"));
        if (this.options.anchors) {
            const anchor = anchorElements.find((node)=>node.getAttribute("href")?.includes("#"));
            if (anchor) {
                const href = anchor.getAttribute("href");
                if (href) {
                    const options = typeof this.options.anchors === "object" && this.options.anchors ? this.options.anchors : void 0;
                    const target = `#${href.split("#")[1]}`;
                    this.scrollTo(target, options);
                }
            }
        }
        if (this.options.stopInertiaOnNavigate) {
            const internalLink = anchorElements.find((node)=>node.host === window.location.host);
            if (internalLink) {
                this.reset();
            }
        }
    };
    onPointerDown = (event)=>{
        if (event.button === 1) {
            this.reset();
        }
    };
    onVirtualScroll = (data)=>{
        if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false) return;
        const { deltaX, deltaY, event } = data;
        this.emitter.emit("virtual-scroll", {
            deltaX,
            deltaY,
            event
        });
        if (event.ctrlKey) return;
        if (event.lenisStopPropagation) return;
        const isTouch = event.type.includes("touch");
        const isWheel = event.type.includes("wheel");
        this.isTouching = event.type === "touchstart" || event.type === "touchmove";
        const isClickOrTap = deltaX === 0 && deltaY === 0;
        const isTapToStop = this.options.syncTouch && isTouch && event.type === "touchstart" && isClickOrTap && !this.isStopped && !this.isLocked;
        if (isTapToStop) {
            this.reset();
            return;
        }
        const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
        if (isClickOrTap || isUnknownGesture) {
            return;
        }
        let composedPath = event.composedPath();
        composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
        const prevent = this.options.prevent;
        if (!!composedPath.find((node)=>node instanceof HTMLElement && (typeof prevent === "function" && prevent?.(node) || node.hasAttribute?.("data-lenis-prevent") || isTouch && node.hasAttribute?.("data-lenis-prevent-touch") || isWheel && node.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(node, {
                deltaX,
                deltaY
            })))) return;
        if (this.isStopped || this.isLocked) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        const isSmooth = this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel;
        if (!isSmooth) {
            this.isScrolling = "native";
            this.animate.stop();
            event.lenisStopPropagation = true;
            return;
        }
        let delta = deltaY;
        if (this.options.gestureOrientation === "both") {
            delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
        } else if (this.options.gestureOrientation === "horizontal") {
            delta = deltaX;
        }
        if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) {
            event.lenisStopPropagation = true;
        }
        if (event.cancelable) {
            event.preventDefault();
        }
        const isSyncTouch = isTouch && this.options.syncTouch;
        const isTouchEnd = isTouch && event.type === "touchend";
        const hasTouchInertia = isTouchEnd;
        if (hasTouchInertia) {
            delta = Math.sign(this.velocity) * Math.pow(Math.abs(this.velocity), this.options.touchInertiaExponent);
        }
        this.scrollTo(this.targetScroll + delta, {
            programmatic: false,
            ...isSyncTouch ? {
                lerp: hasTouchInertia ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }
        });
    };
    /**
   * Force lenis to recalculate the dimensions
   */ resize() {
        this.dimensions.resize();
        this.animatedScroll = this.targetScroll = this.actualScroll;
        this.emit();
    }
    emit() {
        this.emitter.emit("scroll", this);
    }
    onNativeScroll = ()=>{
        if (this._resetVelocityTimeout !== null) {
            clearTimeout(this._resetVelocityTimeout);
            this._resetVelocityTimeout = null;
        }
        if (this._preventNextNativeScrollEvent) {
            this._preventNextNativeScrollEvent = false;
            return;
        }
        if (this.isScrolling === false || this.isScrolling === "native") {
            const lastScroll = this.animatedScroll;
            this.animatedScroll = this.targetScroll = this.actualScroll;
            this.lastVelocity = this.velocity;
            this.velocity = this.animatedScroll - lastScroll;
            this.direction = Math.sign(this.animatedScroll - lastScroll);
            if (!this.isStopped) {
                this.isScrolling = "native";
            }
            this.emit();
            if (this.velocity !== 0) {
                this._resetVelocityTimeout = setTimeout(()=>{
                    this.lastVelocity = this.velocity;
                    this.velocity = 0;
                    this.isScrolling = false;
                    this.emit();
                }, 400);
            }
        }
    };
    reset() {
        this.isLocked = false;
        this.isScrolling = false;
        this.animatedScroll = this.targetScroll = this.actualScroll;
        this.lastVelocity = this.velocity = 0;
        this.animate.stop();
    }
    /**
   * Start lenis scroll after it has been stopped
   */ start() {
        if (!this.isStopped) return;
        if (this.options.autoToggle) {
            this.rootElement.style.removeProperty("overflow");
            return;
        }
        this.internalStart();
    }
    internalStart() {
        if (!this.isStopped) return;
        this.reset();
        this.isStopped = false;
        this.emit();
    }
    /**
   * Stop lenis scroll
   */ stop() {
        if (this.isStopped) return;
        if (this.options.autoToggle) {
            this.rootElement.style.setProperty("overflow", "clip");
            return;
        }
        this.internalStop();
    }
    internalStop() {
        if (this.isStopped) return;
        this.reset();
        this.isStopped = true;
        this.emit();
    }
    /**
   * RequestAnimationFrame for lenis
   *
   * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
   */ raf = (time)=>{
        const deltaTime = time - (this.time || time);
        this.time = time;
        this.animate.advance(deltaTime * 1e-3);
        if (this.options.autoRaf) {
            this._rafId = requestAnimationFrame(this.raf);
        }
    };
    /**
   * Scroll to a target value
   *
   * @param target The target value to scroll to
   * @param options The options for the scroll
   *
   * @example
   * lenis.scrollTo(100, {
   *   offset: 100,
   *   duration: 1,
   *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
   *   lerp: 0.1,
   *   onStart: () => {
   *     console.log('onStart')
   *   },
   *   onComplete: () => {
   *     console.log('onComplete')
   *   },
   * })
   */ scrollTo(target, { offset = 0, immediate = false, lock = false, programmatic = true, // called from outside of the class
    lerp: lerp2 = programmatic ? this.options.lerp : void 0, duration = programmatic ? this.options.duration : void 0, easing = programmatic ? this.options.easing : void 0, onStart, onComplete, force = false, // scroll even if stopped
    userData } = {}) {
        if ((this.isStopped || this.isLocked) && !force) return;
        if (typeof target === "string" && [
            "top",
            "left",
            "start",
            "#"
        ].includes(target)) {
            target = 0;
        } else if (typeof target === "string" && [
            "bottom",
            "right",
            "end"
        ].includes(target)) {
            target = this.limit;
        } else {
            let node;
            if (typeof target === "string") {
                node = document.querySelector(target);
                if (!node) {
                    if (target === "#top") {
                        target = 0;
                    } else {
                        console.warn("Lenis: Target not found", target);
                    }
                }
            } else if (target instanceof HTMLElement && target?.nodeType) {
                node = target;
            }
            if (node) {
                if (this.options.wrapper !== window) {
                    const wrapperRect = this.rootElement.getBoundingClientRect();
                    offset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
                }
                const rect = node.getBoundingClientRect();
                target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll;
            }
        }
        if (typeof target !== "number") return;
        target += offset;
        target = Math.round(target);
        if (this.options.infinite) {
            if (programmatic) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const distance = target - this.animatedScroll;
                if (distance > this.limit / 2) {
                    target = target - this.limit;
                } else if (distance < -this.limit / 2) {
                    target = target + this.limit;
                }
            }
        } else {
            target = clamp(0, target, this.limit);
        }
        if (target === this.targetScroll) {
            onStart?.(this);
            onComplete?.(this);
            return;
        }
        this.userData = userData ?? {};
        if (immediate) {
            this.animatedScroll = this.targetScroll = target;
            this.setScroll(this.scroll);
            this.reset();
            this.preventNextNativeScrollEvent();
            this.emit();
            onComplete?.(this);
            this.userData = {};
            requestAnimationFrame(()=>{
                this.dispatchScrollendEvent();
            });
            return;
        }
        if (!programmatic) {
            this.targetScroll = target;
        }
        if (typeof duration === "number" && typeof easing !== "function") {
            easing = defaultEasing;
        } else if (typeof easing === "function" && typeof duration !== "number") {
            duration = 1;
        }
        this.animate.fromTo(this.animatedScroll, target, {
            duration,
            easing,
            lerp: lerp2,
            onStart: ()=>{
                if (lock) this.isLocked = true;
                this.isScrolling = "smooth";
                onStart?.(this);
            },
            onUpdate: (value, completed)=>{
                this.isScrolling = "smooth";
                this.lastVelocity = this.velocity;
                this.velocity = value - this.animatedScroll;
                this.direction = Math.sign(this.velocity);
                this.animatedScroll = value;
                this.setScroll(this.scroll);
                if (programmatic) {
                    this.targetScroll = value;
                }
                if (!completed) this.emit();
                if (completed) {
                    this.reset();
                    this.emit();
                    onComplete?.(this);
                    this.userData = {};
                    requestAnimationFrame(()=>{
                        this.dispatchScrollendEvent();
                    });
                    this.preventNextNativeScrollEvent();
                }
            }
        });
    }
    preventNextNativeScrollEvent() {
        this._preventNextNativeScrollEvent = true;
        requestAnimationFrame(()=>{
            this._preventNextNativeScrollEvent = false;
        });
    }
    checkNestedScroll(node, { deltaX, deltaY }) {
        const time = Date.now();
        const cache = node._lenis ??= {};
        let hasOverflowX, hasOverflowY, isScrollableX, isScrollableY, scrollWidth, scrollHeight, clientWidth, clientHeight;
        const gestureOrientation = this.options.gestureOrientation;
        if (time - (cache.time ?? 0) > 2e3) {
            cache.time = Date.now();
            const computedStyle = window.getComputedStyle(node);
            cache.computedStyle = computedStyle;
            const overflowXString = computedStyle.overflowX;
            const overflowYString = computedStyle.overflowY;
            hasOverflowX = [
                "auto",
                "overlay",
                "scroll"
            ].includes(overflowXString);
            hasOverflowY = [
                "auto",
                "overlay",
                "scroll"
            ].includes(overflowYString);
            cache.hasOverflowX = hasOverflowX;
            cache.hasOverflowY = hasOverflowY;
            if (!hasOverflowX && !hasOverflowY) return false;
            if (gestureOrientation === "vertical" && !hasOverflowY) return false;
            if (gestureOrientation === "horizontal" && !hasOverflowX) return false;
            scrollWidth = node.scrollWidth;
            scrollHeight = node.scrollHeight;
            clientWidth = node.clientWidth;
            clientHeight = node.clientHeight;
            isScrollableX = scrollWidth > clientWidth;
            isScrollableY = scrollHeight > clientHeight;
            cache.isScrollableX = isScrollableX;
            cache.isScrollableY = isScrollableY;
            cache.scrollWidth = scrollWidth;
            cache.scrollHeight = scrollHeight;
            cache.clientWidth = clientWidth;
            cache.clientHeight = clientHeight;
        } else {
            isScrollableX = cache.isScrollableX;
            isScrollableY = cache.isScrollableY;
            hasOverflowX = cache.hasOverflowX;
            hasOverflowY = cache.hasOverflowY;
            scrollWidth = cache.scrollWidth;
            scrollHeight = cache.scrollHeight;
            clientWidth = cache.clientWidth;
            clientHeight = cache.clientHeight;
        }
        if (!hasOverflowX && !hasOverflowY || !isScrollableX && !isScrollableY) {
            return false;
        }
        if (gestureOrientation === "vertical" && (!hasOverflowY || !isScrollableY)) return false;
        if (gestureOrientation === "horizontal" && (!hasOverflowX || !isScrollableX)) return false;
        let orientation;
        if (gestureOrientation === "horizontal") {
            orientation = "x";
        } else if (gestureOrientation === "vertical") {
            orientation = "y";
        } else {
            const isScrollingX = deltaX !== 0;
            const isScrollingY = deltaY !== 0;
            if (isScrollingX && hasOverflowX && isScrollableX) {
                orientation = "x";
            }
            if (isScrollingY && hasOverflowY && isScrollableY) {
                orientation = "y";
            }
        }
        if (!orientation) return false;
        let scroll, maxScroll, delta, hasOverflow, isScrollable;
        if (orientation === "x") {
            scroll = node.scrollLeft;
            maxScroll = scrollWidth - clientWidth;
            delta = deltaX;
            hasOverflow = hasOverflowX;
            isScrollable = isScrollableX;
        } else if (orientation === "y") {
            scroll = node.scrollTop;
            maxScroll = scrollHeight - clientHeight;
            delta = deltaY;
            hasOverflow = hasOverflowY;
            isScrollable = isScrollableY;
        } else {
            return false;
        }
        const willScroll = delta > 0 ? scroll < maxScroll : scroll > 0;
        return willScroll && hasOverflow && isScrollable;
    }
    /**
   * The root element on which lenis is instanced
   */ get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    /**
   * The limit which is the maximum scroll value
   */ get limit() {
        if (this.options.naiveDimensions) {
            if (this.isHorizontal) {
                return this.rootElement.scrollWidth - this.rootElement.clientWidth;
            } else {
                return this.rootElement.scrollHeight - this.rootElement.clientHeight;
            }
        } else {
            return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
    }
    /**
   * Whether or not the scroll is horizontal
   */ get isHorizontal() {
        return this.options.orientation === "horizontal";
    }
    /**
   * The actual scroll value
   */ get actualScroll() {
        const wrapper = this.options.wrapper;
        return this.isHorizontal ? wrapper.scrollX ?? wrapper.scrollLeft : wrapper.scrollY ?? wrapper.scrollTop;
    }
    /**
   * The current scroll value
   */ get scroll() {
        return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    /**
   * The progress of the scroll relative to the limit
   */ get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    /**
   * Current scroll state
   */ get isScrolling() {
        return this._isScrolling;
    }
    set isScrolling(value) {
        if (this._isScrolling !== value) {
            this._isScrolling = value;
            this.updateClassName();
        }
    }
    /**
   * Check if lenis is stopped
   */ get isStopped() {
        return this._isStopped;
    }
    set isStopped(value) {
        if (this._isStopped !== value) {
            this._isStopped = value;
            this.updateClassName();
        }
    }
    /**
   * Check if lenis is locked
   */ get isLocked() {
        return this._isLocked;
    }
    set isLocked(value) {
        if (this._isLocked !== value) {
            this._isLocked = value;
            this.updateClassName();
        }
    }
    /**
   * Check if lenis is smooth scrolling
   */ get isSmooth() {
        return this.isScrolling === "smooth";
    }
    /**
   * The class name applied to the wrapper element
   */ get className() {
        let className = "lenis";
        if (this.options.autoToggle) className += " lenis-autoToggle";
        if (this.isStopped) className += " lenis-stopped";
        if (this.isLocked) className += " lenis-locked";
        if (this.isScrolling) className += " lenis-scrolling";
        if (this.isScrolling === "smooth") className += " lenis-smooth";
        return className;
    }
    updateClassName() {
        this.cleanUpClassName();
        this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
    }
};
;
 //# sourceMappingURL=lenis.mjs.map
}),
"[project]/my-project/advisoraai-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/my-project/advisoraai-main/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2a40c760._.js.map