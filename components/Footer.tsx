'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from "react";

const footerLinks = {
    'Get In Touch': [
        { name: 'About Us', href: 'artist' },
        // { name: 'Contact Us', href: '/contact' },
    ],
    'Services': [
        { name: 'Events', href: 'events' },
        { name: 'Latest Work', href: 'latest-work' },
    ],
};



const Footer = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-20 mb-12">

                    <div className="col-span-2 md:col-span-1">
                        <Link href="" onClick={(e) => handleScroll(e, 'home')} className="inline-block">
                            <Image
                                src="/images/logo.png"
                                alt="Versai"
                                width={120}
                                height={40}
                                className="object-contain"
                            />
                        </Link>
                    </div>


                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="flex flex-col space-y-4">
                            <h3 className="text-sm font-semibold text-gray-300">
                                {title}
                            </h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-white transition-colors"
                                            onClick={(e) => handleScroll(e, link.href)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                    ))}
                            </ul>

                        </div>

                    ))}
                </div>



                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                    <p className="text-sm text-gray-400">
                        Versai 2024 • All rights reserved • Versai
                    </p>
                    <div className="flex space-x-6">
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;