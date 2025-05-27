// src/app/page.js
import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Analytics from "@/components/analytics";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import UserFeedback from "@/components/userfeedback";

export default function Home() {
    return (
        <div className="bg-black">
            <Header />
            <Hero />
            <Features />
            <Analytics />
            <CTA />
            <UserFeedback />
            <Footer />
        </div>
    );
}
