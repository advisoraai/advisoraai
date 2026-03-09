"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { Container } from "@/components/ui/container";

import { useLanguage } from "@/lib/i18n";

export function CTA() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Scribble */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none rotate-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q50,0 100,50 T200,50" fill="none" stroke="white" strokeWidth="2" />
            </svg>

            <Container className="relative z-10">
                <div className="relative overflow-hidden rounded-none border-2 border-primary/20 bg-[#002A30] px-6 py-20 text-center md:px-12 md:py-32">
                    <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
                    <div className="absolute bottom-0 right-0 w-2 h-20 bg-primary" />

                    <h2 className="mx-auto mb-8 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl font-heading leading-tight">
                        {t.cta.title.line1}<br /> <span className="text-primary">{t.cta.title.highlight}</span>
                    </h2>
                    <p className="mx-auto mb-12 max-w-xl text-xl text-white/80 leading-relaxed font-sans">
                        {t.cta.subtitle}
                    </p>
                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                        <MagneticButton size="lg" className="bg-primary text-black hover:bg-white hover:text-black w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-full border-none">
                            {t.cta.primary}
                        </MagneticButton>
                        <MagneticButton variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-black w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-full">
                            {t.cta.secondary}
                        </MagneticButton>
                    </div>
                </div>
            </Container>
        </section>
    );
}
