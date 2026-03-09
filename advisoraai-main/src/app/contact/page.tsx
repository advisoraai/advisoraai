"use client";

import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-black">
            <Navbar />
            <div className="pt-40 pb-32">
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-6xl md:text-8xl font-bold font-heading mb-6 text-white tracking-tighter">
                                {t.contactPage.title}
                            </h1>
                            <p className="text-xl text-white/60">
                                {t.contactPage.subtitle}
                            </p>
                        </motion.div>

                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10"
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert(t.contactPage.form.success);
                            }}
                        >
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-2">
                                    {t.contactPage.form.name}
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white text-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-2">
                                    {t.contactPage.form.email}
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white text-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-2">
                                    {t.contactPage.form.message}
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white text-lg resize-none"
                                />
                            </div>
                            <Button className="w-full h-16 bg-primary text-black hover:bg-white transition-all text-xl font-bold uppercase tracking-wide rounded-xl">
                                {t.contactPage.form.submit}
                            </Button>
                        </motion.form>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
