const Contactus = () => {
    return (
        <section className="relative w-full min-h-[60vh] bg-black py-20 md:py-32">

            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-[url('/images/3.png')] bg-cover bg-center"
                    style={{ backgroundPosition: '50% 33%' }}
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>


            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

                <div className="flex justify-center mb-12">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">04</span>
                    </div>
                </div>


                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">

                    <span className="text-purple-500 text-sm md:text-base uppercase tracking-wider">
                        GET IN TOUCH
                    </span>


                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Create Amazing Memories
                        <br />
                        Out of Your Next Festival
                    </h2>


                    <button
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg 
                            font-medium transition-all duration-300 transform hover:scale-105
                            shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                    >
                        Get Started
                    </button>
                </div>
            </div>


            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />


            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75" />
                <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-150" />
            </div>
        </section>
    );
};

export default Contactus;