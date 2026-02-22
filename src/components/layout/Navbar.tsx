"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLanguage } from "@/lib/i18n";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const pathname = usePathname();
    const { t, language, toggleLanguage } = useLanguage();

    const navigation = [
        { name: t.nav.services, href: "/services" },
        { name: t.nav.about, href: "/about" },
        { name: t.nav.process, href: "/#process" },
        { name: t.nav.caseStudies, href: "/#case-studies" },
    ];

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-[#003840]/80 backdrop-blur-md border-b border-white/5 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <Container>
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-black font-bold text-lg font-heading group-hover:rotate-12 transition-transform">
                            A
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white font-heading uppercase">
                            Advisora
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider",
                                    pathname === item.href ? "text-primary" : "text-white/80"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <button
                            onClick={toggleLanguage}
                            className="text-white/80 hover:text-primary font-bold uppercase transition-colors text-sm"
                        >
                            {language === 'es' ? 'EN' : 'ES'}
                        </button>

                        <MagneticButton size="sm" className="bg-white text-black hover:bg-primary hover:text-black font-bold uppercase tracking-wide border-none h-10 px-6">
                            {t.nav.bookCall}
                        </MagneticButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="text-white md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </nav>
            </Container>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 top-[80px] z-40 bg-[#003840] md:hidden overflow-hidden"
                    >
                        <Container className="py-8 flex flex-col gap-8 h-full">
                            {navigation.map((item) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-4xl font-bold text-white/80 hover:text-primary font-heading uppercase"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                onClick={() => {
                                    toggleLanguage();
                                    setIsOpen(false);
                                }}
                                className="text-2xl font-bold text-white/80 hover:text-primary font-heading uppercase text-left"
                            >
                                {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                            </motion.button>

                            <div className="mt-auto pb-24">
                                <MagneticButton className="w-full h-16 text-xl font-bold uppercase bg-primary text-black border-none">
                                    {t.nav.bookCall}
                                </MagneticButton>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
