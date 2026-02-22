"use client";

import { Container } from "@/components/ui/container";
import {
    Bot,
    Code2,
    Smartphone,
    Megaphone,
    Shield,
    Terminal
} from "lucide-react";
import { motion } from "framer-motion";


import { useRef, useState } from "react";

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,214,0,0.15), transparent 40%)`,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
}

// ... imports
import { useLanguage } from "@/lib/i18n";

export function ServicesPreview() {
    const { t } = useLanguage();

    const services = [
        {
            title: t.services.items.ai.title,
            description: t.services.items.ai.desc,
            icon: Bot,
        },
        {
            title: t.services.items.saas.title,
            description: t.services.items.saas.desc,
            icon: Code2,
        },
        {
            title: t.services.items.web.title,
            description: t.services.items.web.desc,
            icon: Smartphone,
        },
        {
            title: t.services.items.marketing.title,
            description: t.services.items.marketing.desc,
            icon: Megaphone,
        },
        {
            title: t.services.items.security.title,
            description: t.services.items.security.desc,
            icon: Shield,
        },
        {
            title: t.services.items.consulting.title,
            description: t.services.items.consulting.desc,
            icon: Terminal,
        },
    ];

    return (
        <section className="bg-background py-32 relative overflow-hidden" id="services">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 text-5xl font-bold text-white tracking-tight font-heading sm:text-7xl"
                    >
                        {t.services.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto max-w-2xl text-xl text-white/70"
                    >
                        {t.services.subtitle}
                    </motion.p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <SpotlightCard className="h-full p-8 hover:border-primary/50 transition-all duration-300 bg-[#002A30]/50 border-white/5 group">
                                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-none border-2 border-primary/20 bg-transparent text-primary transition-colors group-hover:bg-primary group-hover:text-black group-hover:border-primary">
                                    <service.icon className="h-8 w-8" />
                                </div>
                                <h3 className="mb-4 text-3xl font-bold text-white font-heading tracking-wide">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed text-lg">
                                    {service.description}
                                </p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
