"use client";

import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-black">
            <Navbar />
            <div className="pt-40 pb-32">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-bold font-heading mb-8 text-white tracking-tighter"
                        >
                            {t.aboutPage.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl text-white/60 mb-20 leading-relaxed font-medium"
                        >
                            {t.aboutPage.subtitle}
                        </motion.p>

                        <div className="grid md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="p-10 bg-white/5 rounded-3xl border border-white/10"
                            >
                                <h2 className="text-3xl font-bold text-primary mb-4 font-heading">{t.aboutPage.mission.title}</h2>
                                <p className="text-xl text-white/70 leading-relaxed">{t.aboutPage.mission.content}</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="p-10 bg-white/5 rounded-3xl border border-white/10"
                            >
                                <h2 className="text-3xl font-bold text-primary mb-4 font-heading">{t.aboutPage.vision.title}</h2>
                                <p className="text-xl text-white/70 leading-relaxed">{t.aboutPage.vision.content}</p>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
