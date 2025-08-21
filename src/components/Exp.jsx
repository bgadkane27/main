import { Disc } from "lucide-react"
import { experiences } from "../constants"

const Exp = () => {
    return (
        <section id="exp" className="relative w-full container min-h-screen overflow-hidden py-20">
            {/* <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-l from-white to-violet-600 blur-3xl"></div>
            <div className="absolute top-10 right-0 w-1/6 h-1/2 bg-gradient-to-br from-white to-yellow-300 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gradient-to-br from-white to-green-400 blur-3xl"></div> */}
            <div className="relative flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 text-2xl font-bold">
                    B
                </div>
                <div className="uppercase px-4 py-2 border-2 rounded-full font-bold tracking-wide">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                        _Experience_
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="text-center py-4">
                    <h1 className="text-base md:text-3xl font-bold">
                        It's not a just about existence.<br /> It's about
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                            &nbsp;impact and cultivating&nbsp;
                        </span>
                        a legacy that transcends time.
                    </h1>
                </div>
            </div>
            {/* <div className="relative w-full max-w-7xl mx-auto px-4 h-1/2 overflow-hidden mt-10">
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4">
                    {experiences.map((experience, index) => (
                        <div
                            key={experience.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="relative w-full h-auto group overflow-hidden rounded-xl bg-[#cde3fd] flex flex-col gap-4"
                        >
                            <img
                                src="/imgs/back1.png"
                                alt="card background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="relative z-10 p-4 h-full flex flex-col">
                                <div className="flex items-center justify-center gap-2 rounded-full py-1.5 mb-2 bg-[#8fbef6]">
                                    <CircleDot size={16} color="blue"/>
                                    <h2 className="text-center text-sm md:text-lg font-semibold">{experience.title}</h2>
                                </div>
                                <p className="text-sm">{experience.company_name}</p>
                                <p className="text-xs mb-2">{experience.period}</p>
                                <div className="">
                                    <ul className="mt-2 space-y-2 mb-2">
                                        {experience.points.map((point, pointIndex) => (
                                            <li key={pointIndex} className="text-sm text-justify">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="container max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-6">
                    {experiences.map((experience, i) => (
                        <div
                            key={i}
                            className="group relative rounded-[1rem] p-6 flex flex-col justify-between bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 backdrop-blur-xl border border-white/10 shadow-lg overflow-hidden"
                        >
                            {/* Top label */}
                            <div className="inline-block px-5 py-2 rounded-full bg-neutral-800/80 text-white font-semibold text-sm border border-purple-500/50">
                                <span className="flex items-center gap-2">
                                    <Disc size={16} color="blue" />
                                    {experience.title}
                                </span>
                            </div>

                            {/* Content wrapper (desc + button) */}                            
                            <div className="mt-4 flex flex-col gap-2">
                                {/* Company & Period together */}
                                <div className="translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                    <p className="text-white text-sm font-bold leading-snug">
                                        {experience.company_name}
                                    </p>
                                    <p className="text-white text-base font-medium leading-snug">
                                        {experience.period}
                                    </p>
                                </div>

                                {/* Button / Points */}
                                <div className="h-[300px] min-h-[300] translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-out delay-150">
                                    <ul className="mt-2 space-y-2 mb-2">
                                        {experience.points.map((point, pointIndex) => (
                                            <li key={pointIndex} className="text-sm text-white text-justify">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Exp