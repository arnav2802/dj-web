'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { navLinks } from '@/constants';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <nav className="w-full fixed top-0 z-50 bg-transparent backdrop-blur-sm">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-5">

                <a href="/" onClick={(e) => handleScroll(e, 'home')} className="flex items-center gap-2">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                </a>


                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={`#${link.href}`}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-white hover:text-purple-400 transition-colors cursor-pointer"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>


                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>


            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm">
                    <ul className="flex flex-col items-center py-4">
                        {navLinks.map((link) => (
                            <li key={link.label} className="w-full">
                                <a
                                    href={`#${link.href}`}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className="text-white hover:text-purple-400 transition-colors cursor-pointer block py-3 text-center"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;