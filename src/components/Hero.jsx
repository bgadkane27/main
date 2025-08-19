const Hero = () => {

    return (
        <section
            id="hero"
            className="relative w-full min-h-screen py-20 flex items-end transition-colors duration-500"
        >
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-blue-500 to-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-1 right-0 w-1/3 h-1/2 bg-gradient-to-br from-white to-green-600 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-1/4 h-1/3 bg-gradient-to-br from-white to-blue-500 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4">
                <div className="font-serif">
                    <h1 className="uppercase max-w-fit text-6xl md:text-[10vw] tracking-tight">
                        Baburao
                    </h1>
                    <p className="text-2xl font-medium">
                        A QA & QC Engineer
                    </p>
                </div>
                <div className="mt-8 md:mt-0 md:ml-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 text-2xl font-bold">
                            B
                        </div>
                        <div className="uppercase px-4 py-2 border-2 rounded-full font-bold tracking-wide">
                            _Introduction_
                        </div>
                    </div>
                    <p
                        className="text-sm md:text-lg max-w-xs font-semibold leading-relaxed mb-4 text-justify">
                        A QA & QC Engineer at
                        <span className="text-blue-600"> Expert Business Solutions</span>, specializing in comprehensive test strategies for
                        <span className="text-blue-600"> HRMS</span>,
                        <span className="text-blue-600"> ERP</span>,
                        <span className="text-blue-600"> Retail</span>,
                        <span className="text-blue-600"> Restaurant</span>,
                        <span className="text-blue-600"> CRM</span>,
                        <span className="text-blue-600"> Subscription</span>, and
                        <span className="text-blue-600"> Real Estate</span> domains.
                    </p>
                    <div className="flex items-center justify-end PX-4">
                        <img
                            src="/imgs/arrowdown.gif"
                            alt="Move down"
                            className="w-20 h-20"
                        />
                        <span>SCROLL</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
