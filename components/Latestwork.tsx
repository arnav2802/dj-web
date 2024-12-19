'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const works = [
    {
        id: 1,
        image: '/images/3.png',
        title: 'Summer Music Festival',
    },
    {
        id: 2,
        image: '/images/2.png',
        title: 'Concert Stage',
    },
    {
        id: 3,
        image: '/images/1.png',
        title: 'Live Performance',
    },

];

const Latestwork = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
        setScrollLeft(sliderRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <section className="relative w-full bg-black py-20 md:py-32">

            <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">03</span>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Latest work.
                    </h2>

                </div>
            </div>


            <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                <div
                    ref={sliderRef}
                    className="overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <div className="flex gap-6 pb-8">
                        {works.map((work) => (
                            <div
                                key={work.id}
                                className="relative flex-shrink-0 w-full md:w-[600px] h-[300px] md:h-[400px] rounded-2xl overflow-hidden"
                            >
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="absolute bottom-[-15] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
                    <div className="flex items-center gap-4">
                        <svg
                            className="w-6 h-6 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16l-4-4m0 0l4-4m-4 4h18"
                            />
                        </svg>
                        <span className="text-gray-500 uppercase text-sm tracking-wider">
                            Drag to explore
                        </span>
                        <svg
                            className="w-6 h-6 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </div>
                    <div className="w-32 h-[2px] bg-gray-800"></div>
                </div>
            </div>
        </section>
    );
};

export default Latestwork;