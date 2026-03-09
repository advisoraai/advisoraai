"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLanguage } from "@/lib/i18n";

const footerLinks = {
    // ... items removed as they were not being used in the render loop or are replaced by inline use of t
};

// ... imports

export function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="bg-background relative pt-32 pb-16 overflow-hidden">
            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-7xl font-bold text-white font-heading uppercase leading-[0.8] tracking-tighter mb-8">
                            Let's<br />
                            Make<br />
                            <span className="text-primary">History.</span>
                        </h2>
                        <div className="flex gap-4">
                            <MagneticButton size="lg" className="h-16 px-8 text-xl font-bold uppercase bg-white text-black hover:bg-primary border-none">
                                {t.footer.startProject}
                            </MagneticButton>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 lg:pt-4">
                        <div>
                            <h3 className="font-heading text-xl text-primary uppercase mb-6 tracking-wider">{t.footer.socials}</h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-white/60 hover:text-white text-lg transition-colors">Twitter</Link></li>
                                <li><Link href="#" className="text-white/60 hover:text-white text-lg transition-colors">LinkedIn</Link></li>
                                <li><Link href="#" className="text-white/60 hover:text-white text-lg transition-colors">Instagram</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-heading text-xl text-primary uppercase mb-6 tracking-wider">{t.footer.sitemap}</h3>
                            <ul className="space-y-4">
                                <li><Link href="/privacy" className="text-white/60 hover:text-white text-lg transition-colors">{t.legal.privacy.title}</Link></li>
                                <li><Link href="/terms" className="text-white/60 hover:text-white text-lg transition-colors">{t.legal.terms.title}</Link></li>
                                <li><Link href="/contact" className="text-white/60 hover:text-white text-lg transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-2xl font-bold tracking-tighter text-white font-heading">
                        Advisora<span className="text-primary">AI</span>
                    </div>
                    <div className="text-white/40 text-sm font-mono">
                        © {new Date().getFullYear()} AdvisoraAI. {t.footer.rights}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
