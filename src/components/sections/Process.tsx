"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";


// ... imports
import { useLanguage } from "@/lib/i18n";

export function Process() {
    const { t } = useLanguage();

    const steps = [
        {
            number: "01",
            title: t.process.steps.discovery.title,
            description: t.process.steps.discovery.desc,
        },
        {
            number: "02",
            title: t.process.steps.strategy.title,
            description: t.process.steps.strategy.desc,
        },
        {
            number: "03",
            title: t.process.steps.build.title,
            description: t.process.steps.build.desc,
        },
        {
            number: "04",
            title: t.process.steps.scale.title,
            description: t.process.steps.scale.desc,
        },
    ];

    return (
        <section className="bg-[#002A30] relative py-32 overflow-hidden" id="process">
            {/* Background Scribble */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 C30,30 70,30 100,0 L100,100 L0,100 Z" fill="white" />
            </svg>

            <Container className="relative z-10">
                <div className="mb-24">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
                    >
                        {t.process.label}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl font-bold text-white sm:text-7xl font-heading leading-tight"
                    >
                        {t.process.title.line1}<br />
                        <span className="text-primary italic">{t.process.title.highlight}</span>
                    </motion.h2>
                </div>

                <div className="grid gap-16 md:grid-cols-4 relative">
                    {/* Hand-drawn connecting line */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-20 z-0 pointer-events-none opacity-40">
                        <svg width="100%" height="100%" viewBox="0 0 1200 100" preserveAspectRatio="none">
                            <path d="M50,50 C200,80 400,20 600,50 S 900,80 1150,50" fill="none" stroke="#FFD600" strokeWidth="2" strokeDasharray="10,5" />
                        </svg>
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="mb-4 text-8xl font-bold text-primary/20 font-heading select-none relative">
                                {step.number}
                                <span className="absolute top-0 left-0 text-primary blur-lg opacity-40">{step.number}</span>
                            </div>

                            <h3 className="mb-4 text-2xl font-bold text-white font-heading uppercase tracking-wide">
                                {step.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed text-lg">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
