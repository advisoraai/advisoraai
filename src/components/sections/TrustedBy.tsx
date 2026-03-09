"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import {
    StripeLogo,
    OpenAILogo,
    AirbnbLogo,
    UberLogo,
    SpotifyLogo,
    CoinbaseLogo,
    FigmaLogo
} from "@/components/ui/StartupLogos";
import { useLanguage } from "@/lib/i18n";

export function TrustedBy() {
    const { t } = useLanguage();

    const logos = [
        { component: StripeLogo, name: "Stripe" },
        { component: OpenAILogo, name: "OpenAI" },
        { component: AirbnbLogo, name: "Airbnb" },
        { component: UberLogo, name: "Uber" },
        { component: SpotifyLogo, name: "Spotify" },
        { component: CoinbaseLogo, name: "Coinbase" },
        { component: FigmaLogo, name: "Figma" },
    ];

    return (
        <section className="bg-background py-24 md:py-32 border-y border-white/5 overflow-hidden">
            <Container>
                <div className="mx-auto max-w-5xl text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold font-heading leading-[1.1] tracking-tight text-white">
                        <span className="bg-primary px-2 inline-block -rotate-1 transform mr-3 text-black">{t.trustedBy.title.highlight}</span>
                        {t.trustedBy.title.rest}
                    </h2>
                </div>

                <div className="relative w-full overflow-hidden">
                    {/* Fading Masks */}
                    <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent md:w-48" />
                    <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent md:w-48" />

                    <motion.div
                        className="flex items-center gap-x-12 md:gap-x-24 w-max"
                        animate={{
                            x: [0, -100 * logos.length - 24 * (logos.length - 1)],
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {/* First set of logos */}
                        {logos.map((logo, index) => (
                            <div key={`logo-1-${index}`} className="w-28 md:w-40 lg:w-48 h-12 md:h-16 flex items-center justify-center group flex-shrink-0">
                                <logo.component className="w-full h-full object-contain text-white/40 group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
                            </div>
                        ))}
                        {/* Second set of logos for seamless loop */}
                        {logos.map((logo, index) => (
                            <div key={`logo-2-${index}`} className="w-28 md:w-40 lg:w-48 h-12 md:h-16 flex items-center justify-center group flex-shrink-0">
                                <logo.component className="w-full h-full object-contain text-white/40 group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
