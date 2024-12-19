import Image from 'next/image';

const Artist = () => {
    return (
        <section id="artist" className="relative w-full bg-black py-20 md:py-32 " >
            {/* Dotted line path */}
            <div className="absolute left-8 md:left-16 mt:80px h-full w-[2px] hidden md:block ">
                <div className="relative h-full ">
                    {/* Circle with number */}
                    <div className="absolute top-0 -left-4 w-8 h-8 rounded-full border-2 border-gray-700 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">01</span>
                    </div>
                    {/* Dotted line */}
                    <div className="h-full w-[2px] border-l-2 border-dashed border-gray-700"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 max-w-xl">
                        <span className="text-purple-500 text-sm md:text-base">An incredible force</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Music is the Greater Uniter
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            About Artist ----------------------------------------
                            ----------------------------------------------------
                            ------------------------------------------------------
                            --------------------------------------------------------
                            ---------------------------------------------------------
                            -------------------------------------------------------------
                            --------------------------------------------------------------
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden">
                        <Image
                            src="/concert-crowd.jpg" // Add your concert image here
                            alt="Concert crowd"
                            fill
                            className="object-cover transition-transform hover:scale-105 duration-700"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Artist;