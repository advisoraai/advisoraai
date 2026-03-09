"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { ChevronDown, Plus, Minus } from "lucide-react";

export function FAQ() {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("general");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const categories = [
        { id: "general", label: t.faq.categories.general },
        { id: "changelog", label: t.faq.categories.changelog },
        { id: "privacy", label: t.faq.categories.privacy },
        { id: "terms", label: t.faq.categories.terms },
    ];

    return (
        <section className="bg-background py-32 relative overflow-hidden" id="faq">
            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl font-bold text-white mb-6 font-heading sm:text-7xl"
                        >
                            {t.faq.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-white/60"
                        >
                            {t.faq.subtitle}
                        </motion.p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeCategory === category.id
                                    ? "bg-primary border-primary text-black font-bold"
                                    : "bg-transparent border-white/10 text-white/60 hover:border-white/30"
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-4">
                        {t.faq.items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="border border-white/5 bg-white/5 rounded-2xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full p-6 text-left flex items-center justify-between group"
                                >
                                    <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                        {item.question}
                                    </span>
                                    <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                                        <ChevronDown className="w-6 h-6 text-white/40" />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-lg text-white/60 leading-relaxed border-t border-white/5 pt-4">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
