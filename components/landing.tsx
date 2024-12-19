import Image from 'next/image';

const Landing = () => {
    return (
        <section className="relative min-h-screen w-full bg-black overflow-hidden ">

            <div>

                <div className="absolute inset-0 opacity-50  ">
                    <Image
                        src="/images/2.png"
                        alt="Background texture"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80  to-transparent"></div>

                </div>
            </div>


            <div className="padding-top: 80px relative z-10 max-w-7xl mx-auto px-4 pt-20 md:pt-32 bg-transparent">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-transparent">

                    <div className="space-y-6 md:space-y-8 text-center lg:text-left bg-transparent">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight bg-transparent">
                            Turn Your Festival Into{' '}
                            <span className="relative inline-block bg-transparent">
                                Memorable
                                <div className="absolute -bottom-2 left-0 w-full hidden sm:block bg-transparent">
                                    <svg className="w-full bg-transparent" height="15" viewBox="0 0 300 15">
                                        <path
                                            d="M3 13.0619C48.6667 6.06192 146.4 -4.93808 297 13.0619"
                                            stroke="#8B5CF6"
                                            strokeWidth="5"
                                            fill="none"
                                        />
                                    </svg>
                                </div>
                            </span>{' '}
                            Experience
                        </h1>

                        <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto lg:mx-0 bg-transparent">
                            Platform for planning and organizing your events. We provide you with the best ideas for any event, so that you can easily plan and organize your events.
                        </p>

                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 md:px-8 py-3 rounded-lg font-medium transition-colors">
                            Discover More
                        </button>
                    </div>


                    <div className="relative grid grid-cols-2 gap-3 md:gap-10 h-[400px] md:h-[750px] mt-8 lg:mt-0 bg-transparent ">
                        <div className="space-y-3 md:space-y-10 bg-transparent">
                            <div className="relative h-48 md:h-96 w-full rounded-xl md:rounded-2xl overflow-hidden bg-transparent">
                                <Image
                                    src="/images/4.png"
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-32 md:h-48 w-full rounded-xl md:rounded-2xl overflow-hidden bg-transparent">
                                <Image
                                    src="/images/5.png"
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-3 md:space-y-10 pt-8 md:pt-16 bg-transparent">
                            <div className="relative h-32 md:h-48 w-full rounded-xl md:rounded-2xl overflow-hidden bg-transparent">
                                <Image
                                    src="/images/10.png"
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-32 md:h-96 w-full rounded-xl md:rounded-2xl overflow-hidden bg-transparent">
                                <Image
                                    src="/images/11.png"
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;