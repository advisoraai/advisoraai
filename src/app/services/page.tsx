"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesPreview } from "@/components/sections/ServicesPreview";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-black">
            <Navbar />
            <div className="pt-20">
                <ServicesPreview />
            </div>
            <Footer />
        </main>
    );
}
