"use client";

import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function TermsPage() {
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
                            {t.legal.terms.title}
                        </h1>
                        <div className="prose prose-invert prose-lg max-w-none text-white/60 leading-relaxed">
                            <p>{t.legal.terms.content}</p>
                            {/* In a real app, you'd have more structured content here */}
                            <div className="mt-12 space-y-8">
                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                                    <p>By accessing or using our services, you agree to be bound by these Terms and Conditions...</p>
                                </section>
                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">2. User Conduct</h2>
                                    <p>You agree not to engage in any prohibited activities on our platform...</p>
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
