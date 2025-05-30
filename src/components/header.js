"use client";

import React, {useState, useEffect} from "react";
import Link from "next/link";
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="sticky top-0 bg-black border-b border-gray-700 py-4 z-50">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link
                    href="https://flockiq.streamlit.app/"
                    className="flex items-center gap-2 text-white no-underline">
                    <div className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-lg font-bold">
                        FQ
                    </div>
                    <span
                        className={`text-xl font-semibold transition-all duration-300 ease-in-out ${
                            isScrolled
                                ? "opacity-0 translate-y-[-10px]"
                                : "opacity-100 translate-y-0"
                        }`}>
                        FlockIQ
                    </span>
                </Link>
                <div className="flex gap-4 items-center">
                    <a
                        href="https://flockiq.streamlit.app/"
                        className="text-gray-400 hover:text-white transition">
                        Features
                    </a>
                    <a
                        href="https://flockiq.streamlit.app/"
                        className="text-gray-400 hover:text-white transition">
                        Analytics
                    </a>
                    <a
                        href="https://flockiq.streamlit.app/"
                        className="text-gray-400 hover:text-white transition">
                        Comparison
                    </a>
                    <a
                        href="https://flockiq.streamlit.app/"
                        className="text-gray-400 hover:text-white transition">
                        About
                    </a>
                    <Link
                        href="https://flockiq.streamlit.app/"
                        className="border border-gray-500 text-gray-400 hover:text-white px-6 py-2 rounded-lg transition">
                        Login
                    </Link>
                    <a
                        href="https://flockiq.streamlit.app/"
                        className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition">
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
}
