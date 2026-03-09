"use client";

import { Container } from "@/components/ui/container";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import { NetworkGraph, HexGrid, VerticalPipeline } from "@/components/ui/VisualSchemes";
import { useState, useEffect } from "react";

export function CaseStudies() {
    const { t } = useLanguage();
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // Prevent scrolling when a card is expanded
    useEffect(() => {
        if (selectedId !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [selectedId]);

    const selectedProject = selectedId !== null ? t.caseStudies.items[selectedId] : null;

    return (
        <section className="bg-background py-32 relative" id="case-studies">
            <Container>
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] tracking-tight text-white"
                    >
                        <span className="bg-primary px-2 inline-block -rotate-1 transform mr-3 text-black">
                            {t.caseStudies.title.highlight}
                        </span>
                        {t.caseStudies.title.rest}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.caseStudies.items.map((item, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-${index}`}
                            onClick={() => setSelectedId(index)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer relative bg-[#002A30]/50 border border-white/10 rounded-3xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                        >
                            {/* Visual Scheme Area */}
                            <motion.div
                                layoutId={`visual-${index}`}
                                className="h-64 relative bg-black/20 flex items-center justify-center p-8 border-b border-white/5"
                            >
                                {item.visualScheme === "network" && <NetworkGraph />}
                                {item.visualScheme === "hex" && <HexGrid />}
                                {item.visualScheme === "pipeline" && <VerticalPipeline />}

                                <div className="absolute top-4 right-4 z-10">
                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors bg-background/50 backdrop-blur-sm">
                                        <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                                    </div>
                                </div>
                            </motion.div>

                            <div className="p-8 flex flex-col flex-grow">
                                <motion.span
                                    layoutId={`category-${index}`}
                                    className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4"
                                >
                                    {item.category}
                                </motion.span>
                                <motion.h3
                                    layoutId={`title-${index}`}
                                    className="text-3xl font-bold text-white mb-4 font-heading transition-colors"
                                >
                                    {item.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`desc-${index}`}
                                    className="text-lg text-white/60 leading-relaxed mb-8 flex-grow"
                                >
                                    {item.desc}
                                </motion.p>
                                <motion.div
                                    layoutId={`line-${index}`}
                                    className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>

            {/* Expanded View */}
            <AnimatePresence>
                {selectedId !== null && selectedProject && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="fixed inset-0 bg-background/80 backdrop-blur-md z-[100]"
                        />

                        {/* Expanded Card Container */}
                        <div className="fixed inset-0 z-[101] overflow-y-auto pt-20 pb-20 px-4 md:px-0">
                            <div className="flex min-h-full items-center justify-center">
                                <motion.div
                                    layoutId={`card-${selectedId}`}
                                    className="bg-secondary w-full max-w-4xl rounded-[40px] overflow-hidden relative shadow-2xl border border-white/5"
                                >
                                    <div className="flex flex-col lg:flex-row h-full">
                                        {/* Left: Interactive Visual Sidebar */}
                                        <motion.div
                                            layoutId={`visual-${selectedId}`}
                                            className="lg:w-2/5 h-80 lg:h-auto bg-black/40 relative flex items-center justify-center p-12 lg:border-r border-white/5"
                                        >
                                            {selectedProject.visualScheme === "network" && <NetworkGraph />}
                                            {selectedProject.visualScheme === "hex" && <HexGrid />}
                                            {selectedProject.visualScheme === "pipeline" && <VerticalPipeline />}
                                        </motion.div>

                                        {/* Right: Detailed Content */}
                                        <div className="lg:w-3/5 p-8 md:p-12">
                                            <div className="flex justify-between items-start mb-8">
                                                <div>
                                                    <motion.span
                                                        layoutId={`category-${selectedId}`}
                                                        className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block"
                                                    >
                                                        {selectedProject.category}
                                                    </motion.span>
                                                    <motion.h2
                                                        layoutId={`title-${selectedId}`}
                                                        className="text-4xl md:text-5xl font-bold text-white font-heading"
                                                    >
                                                        {selectedProject.title}
                                                    </motion.h2>
                                                </div>
                                                <button
                                                    onClick={() => setSelectedId(null)}
                                                    className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors group"
                                                >
                                                    <X className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                                                </button>
                                            </div>

                                            <div className="space-y-10">
                                                {/* Summary */}
                                                <motion.p
                                                    layoutId={`desc-${selectedId}`}
                                                    className="text-xl text-white/70 leading-relaxed italic border-l-2 border-primary pl-6"
                                                >
                                                    {selectedProject.desc}
                                                </motion.p>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                    <div>
                                                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                            {t.caseStudies.detailsLabels?.challenge || "El Desafío"}
                                                        </h4>
                                                        <p className="text-white/60 text-lg leading-relaxed">
                                                            {selectedProject.details.challenge}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                            {t.caseStudies.detailsLabels?.solution || "Nuestra Solución"}
                                                        </h4>
                                                        <p className="text-white/60 text-lg leading-relaxed">
                                                            {selectedProject.details.solution}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="pt-8 border-t border-white/5">
                                                    <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                        {t.caseStudies.detailsLabels?.results || "Resultados Clave"}
                                                    </h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                                        {selectedProject.details.results.map((result, i) => (
                                                            <div key={i} className="bg-white/5 p-4 rounded-2xl flex items-center gap-3 group hover:bg-white/10 transition-colors">
                                                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                                                <span className="text-white font-medium text-sm leading-tight">{result}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <motion.div
                                                layoutId={`line-${selectedId}`}
                                                className="h-1.5 w-full bg-primary mt-12 mb-[-3rem] sm:mb-[-5rem]"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
