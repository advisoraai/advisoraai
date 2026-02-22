"use client";

import { Container } from "@/components/ui/container";
import { LogoPlaceholder } from "@/components/ui/LogoPlaceholder";
import { useLanguage } from "@/lib/i18n";

export function TrustedBy() {
    const { t } = useLanguage();
    return (
        <section className="bg-[#FFFCF0] py-32">
            <Container>
                <div className="mx-auto max-w-5xl text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] tracking-tight text-[#002A30]">
                        <span className="bg-primary px-2 inline-block -rotate-1 transform mr-3">{t.trustedBy.title.highlight}</span>
                        {t.trustedBy.title.rest}
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24 items-center justify-items-center opacity-80">
                    {Array(9).fill(null).map((_, index) => (
                        <div key={index} className="w-48 h-16 text-[#002A30] hover:text-black transition-colors duration-300">
                            <LogoPlaceholder className="w-full h-full" index={index} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
