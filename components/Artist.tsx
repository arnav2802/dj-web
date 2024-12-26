import Image from 'next/image';

const Artist = () => {
    return (
        <section id="artist" className="relative w-full bg-black py-20 md:py-32 " >

            <div className="absolute left-8 md:left-16 h-full w-[2px]  md:block ">
                <div className="relative h-full mb-40">

                    <div className="absolute top-[-60] -left-4 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-sm">01</span>
                    </div>

                    {/*<div className="h-full w-[2px] border-l-2 border-dashed border-gray-700"></div>*/}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

                    <div className="space-y-6 max-w-xl">
                        <span className="text-purple-500 text-sm md:text-base">An incredible force</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Music is the Greater Uniter
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            <span className='text-white font-bold '>
                                Amitesh
                            </span>
                            {' '} is a dynamic DJ and music producer known for delivering electrifying performances that
                            captivate audiences. With a passion for blending genres and creating unique
                            soundscapes, <span className='text-white font-bold '>
                                Amitesh
                            </span>{' '} specializes in specific genres, e.g., house, techno, EDM, infusing every
                            set with energy and emotion.

                        </p>
                    </div>


                    <div className="relative h-[390px] md:h-[750px] lg:h-[650px] w-full rounded-2xl overflow-hidden">
                        <Image
                            src="/images/artist.png"
                            alt="Concert crowd"
                            fill
                            className="object-cover transition-transform hover:scale-105 duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Artist;