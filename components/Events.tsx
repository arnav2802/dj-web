"use client"
import { useState } from 'react';
import Image from 'next/image';

const benefitCards = [
    {
        id: 1,
        number: '1',
        title: 'Unlimited Photo',
        image: '/benefits/photo.jpg',
    },
    {
        id: 2,
        number: '2',
        title: 'Video Documentation',
        image: '/benefits/video.jpg',
    },
    {
        id: 3,
        number: '3',
        title: 'Manage Large Event',
        image: '/benefits/event.jpg',
    },
    {
        id: 4,
        number: '4',
        title: 'Custom Benefits',
        image: '/benefits/custom.jpg',
    },
    {
        id: 5,
        number: '5',
        title: 'Event Planning',
        image: '/benefits/planning.jpg',
    },
    {
        id: 6,
        number: '6',
        title: 'Support 24/7',
        image: '/benefits/support.jpg',
    },
];

const Benefits = () => {
    const [activeCard, setActiveCard] = useState(1);

    return (
        <section className="relative w-full bg-black py-20 md:py-32 overflow-hidden">
            {/* Section Title with Number */}
            <div className="absolute right-8 md:right-16 top-20 md:top-32 flex items-center gap-4">
                <h2 className="text-white text-2xl md:text-3xl font-bold">BENEFIT</h2>
                <div className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">02</span>
                </div>
            </div>

            {/* Benefits Cards Container */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    {benefitCards.map((card) => (
                        <div
                            key={card.id}
                            className={`relative group cursor-pointer transition-all duration-500 
                                ${activeCard === card.id ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`}
                            onClick={() => setActiveCard(card.id)}
                        >
                            {/* Card Content */}
                            <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

                                {/* Card Text */}
                                <div className="absolute bottom-0 left-0 p-6 z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-purple-500 text-lg">{card.number}</span>
                                        <div className="h-[1px] w-12 bg-purple-500"></div>
                                    </div>
                                    <h3 className="text-white text-xl md:text-2xl font-bold">{card.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center items-center gap-4 mt-8">
                    {benefitCards.map((card) => (
                        <button
                            key={card.id}
                            onClick={() => setActiveCard(card.id)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 
                                ${activeCard === card.id
                                ? 'bg-purple-500 w-6'
                                : 'bg-gray-600 hover:bg-gray-500'}`}
                            aria-label={`Go to benefit ${card.id}`}
                        />
                    ))}
                </div>
            </div>

            {/* Decorative Line */}
            <div className="absolute bottom-10 right-0 w-1/2 h-[2px]">
                <div className="relative h-full">
                    <div className="absolute right-8 md:right-16 w-full h-full border-b-2 border-dashed border-gray-700"></div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;