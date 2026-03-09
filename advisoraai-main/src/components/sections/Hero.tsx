"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

function AuroraBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[50%] -left-[10%] h-[150%] w-[150%] animate-aurora opacity-50 blur-[100px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
            <div className="absolute top-[20%] -right-[20%] h-[800px] w-[800px] rounded-full bg-primary/5 blur-[120px] mix-blend-screen animate-pulse-slow" />
            <div className="absolute -bottom-[20%] left-[20%] h-[600px] w-[600px] rounded-full bg-white/5 blur-[100px] mix-blend-overlay animate-float" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        </div>
    );
}

function ScrambleText({ text }: { text: string }) {
    const [display, setDisplay] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let iteration = 0;

        const scramble = () => {
            interval = setInterval(() => {
                setDisplay(
                    text
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) return text[index];
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        scramble();

        return () => clearInterval(interval);
    }, [text]);

    return <span>{display}</span>;
}

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20">
            <AuroraBackground />

            <Container className="relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="text-6xl font-bold tracking-tight text-white sm:text-8xl font-heading leading-[1.1] mb-8">
                                {t.hero.headline.line1}<br />
                                {t.hero.headline.line2}<br />
                                <span className="text-primary relative inline-block">
                                    {t.hero.headline.highlight}
                                    <svg className="absolute -right-12 -top-12 w-24 h-24 text-white rotate-12 animate-pulse-slow" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20,80 Q50,10 80,80" />
                                        <path d="M80,80 L70,60 M80,80 L90,60" />
                                    </svg>
                                </span>
                            </h1>

                            <div className="flex flex-col sm:flex-row gap-6 mt-12 items-start">
                                <MagneticButton size="lg" className="min-w-[200px] h-16 text-xl font-bold rounded-full bg-primary text-black hover:bg-white hover:text-black border-2 border-transparent transition-all">
                                    {t.hero.ctaPrimary} <ArrowRight className="ml-2 h-6 w-6" />
                                </MagneticButton>

                                <MagneticButton variant="outline" size="lg" className="min-w-[200px] h-16 text-xl font-bold rounded-full border-2 border-white/20 hover:bg-white hover:text-black hover:border-transparent transition-all">
                                    {t.hero.ctaSecondary}
                                </MagneticButton>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-4 relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 border-[20px] border-primary/20 rounded-full animate-float blur-xl" />
                            <div className="text-right">
                                <p className="text-white/60 text-lg font-mono mb-4 rotate-3 origin-right whitespace-pre-line">
                                    {t.hero.sidebarText}
                                </p>
                                <svg className="w-32 h-32 text-primary ml-auto rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M10,50 Q50,90 90,50" />
                                    <path d="M90,50 L70,40 M90,50 L70,60" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
