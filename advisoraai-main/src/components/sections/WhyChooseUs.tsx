"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Users2, Globe2, Zap } from "lucide-react";

export function WhyChooseUs() {
    const { t } = useLanguage();

    const features = [
        {
            title: t.whyChooseUs.items.engineers.title,
            icon: Users2,
        },
        {
            title: t.whyChooseUs.items.delivery.title,
            icon: Globe2,
        },
        {
            title: t.whyChooseUs.items.scaling.title,
            icon: Zap,
        },
    ];

    return (
        <section className="bg-secondary py-32 relative overflow-hidden">
            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl font-bold text-white mb-6 font-heading sm:text-7xl"
                        >
                            {t.whyChooseUs.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-white/60 mb-12"
                        >
                            {t.whyChooseUs.subtitle}
                        </motion.p>
                    </div>

                    <div className="grid gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <span className="text-2xl font-bold text-white font-heading">
                                    {feature.title}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
