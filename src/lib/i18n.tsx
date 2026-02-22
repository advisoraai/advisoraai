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
            saas: { title: string; desc: string };
            web: { title: string; desc: string };
            marketing: { title: string; desc: string };
            security: { title: string; desc: string };
            consulting: { title: string; desc: string };
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
    trustedBy: {
        title: {
            highlight: string;
            rest: string;
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
                ai: { title: "Soluciones IA", desc: "Agentes de IA personalizados, integración LLM y flujos de automatización." },
                saas: { title: "Desarrollo SaaS", desc: "Arquitecturas escalables en la nube y aplicaciones web full-stack." },
                web: { title: "Web y Apps", desc: "Sitios web de alto rendimiento y aplicaciones móviles nativas." },
                marketing: { title: "Marketing Digital", desc: "Estrategias basadas en datos para hacer crecer tu marca y tus ingresos." },
                security: { title: "Ciberseguridad", desc: "Auditorías de seguridad empresarial y sistemas de protección." },
                consulting: { title: "Consultoría Tech", desc: "Hojas de ruta estratégicas y servicios de CTO para startups." },
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
        }
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
                ai: { title: "AI Solutions", desc: "Custom AI agents, LLM integration, and automation workflows." },
                saas: { title: "SaaS Development", desc: "Scalable cloud architectures and full-stack web applications." },
                web: { title: "Web & Apps", desc: "High-performance websites and native mobile applications." },
                marketing: { title: "Digital Marketing", desc: "Data-driven strategies to grow your brand and revenue." },
                security: { title: "Cybersecurity", desc: "Enterprise-grade security audits and protection systems." },
                consulting: { title: "Tech Consulting", desc: "Strategic roadmaps and CTO-as-a-service for startups." },
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
        }
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
