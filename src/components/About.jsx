import { competencies } from "../constants"

const About = () => {
    return (
        <section
            id="about"
            className="relative w-full min-h-screen overflow-hidden py-20 sm:py-0"
        >
            <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-l from-white to-violet-600 blur-3xl"></div>
            <div className="absolute top-10 right-0 w-1/6 h-1/2 bg-gradient-to-br from-white to-yellow-300 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gradient-to-br from-white to-green-400 blur-3xl"></div>
            <div className="relative w-full max-w-7xl mx-auto px-4 min-h-screen flex">
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div>
                        <p className="text-sm max-w-fit mb-4 font-semibold border px-4 py-1 rounded-full">_About Me_</p>
                        <h2 className="text-lg leading-relaxed mb-6">
                            I'm <strong>Baburao Adkane</strong>, a dedicated <strong>QA & QC Engineer</strong> with a passion for delivering flawless
                            software solutions through rigorous testing and continuous improvement.
                        </h2>
                        <p className="text-lg mb-6">
                            Over 3 years of experience across HRMS, ERP, Retail, Restaurant, CRM, Subscription, and Real Estate domains.
                        </p>                        
                        <div className="py-2">
                            <h2 className="uppercase text-center text-xl font-semibold mb-6">
                                Core Testing Competencies
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {competencies.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-2 text-center text-xs bg-green-200 shadow-md rounded-sm hover:shadow-lg transition"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl">
                            <img
                                src="/imgs/back2.png"
                                alt="About"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About