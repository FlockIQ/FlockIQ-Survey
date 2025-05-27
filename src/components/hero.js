// src/components/Hero.js
import React from "react";

export default function Hero() {
    return (
        <section className="hero py-24 text-center bg-[var(--background)]">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-6 text-[var(--foreground)]">
                    Forms Evolved with Intelligence
                </h1>
                <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
                    The simplicity of Google Forms meets the power of advanced
                    analytics. Built for teams who need deeper insights.
                </p>
                <div className="flex justify-center gap-4">
                    {/* Updated the 'Start Free Trial' button to be white */}
                    <a
                        href="https://flockiq.streamlit.app/"
                        className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 transition">
                        Start Free Trial
                    </a>
                    <a
                        href="https://flockiq.streamlit.app/"
                        className="border border-gray-500 text-gray-500 px-6 py-2 rounded-lg hover:border-white hover:text-white transition">
                        View Demo
                    </a>
                </div>
            </div>
        </section>
    );
}
