"use client";

import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function PrivacyPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-black">
            <Navbar />
            <div className="pt-40 pb-32">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-12 text-white">
                            {t.legal.privacy.title}
                        </h1>
                        <div className="prose prose-invert prose-lg max-w-none text-white/60 leading-relaxed">
                            <p>{t.legal.privacy.content}</p>
                            {/* In a real app, you'd have more structured content here */}
                            <div className="mt-12 space-y-8">
                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">1. Collection of Information</h2>
                                    <p>We collect information you provide directly to us through the website...</p>
                                </section>
                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">2. Use of Information</h2>
                                    <p>We use the information we collect to provide, maintain, and improve our services...</p>
                                </section>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
