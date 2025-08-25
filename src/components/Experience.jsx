import { Disc } from "lucide-react"
import { experiences } from "../constants"

const Experience = () => {
    return (
        <section id="exp" className="relative min-h-screen overflow-hidden py-20">
            <div className="absolute inset-0">
                <video
                    src="/videos/007.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gray-100/60"></div>
            <div className="relative z-10 flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 text-2xl font-bold">
                    B
                </div>
                <div className="uppercase px-4 py-2 border-2 rounded-full font-bold tracking-wide">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                        _Experience_
                    </span>
                </div>
            </div>
            <div className="relative z-10 flex items-center justify-center mb-6 px-4">
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
            <div className="container w-full max-w-3xl mx-auto px-4 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((experience, i) => (
                        <div
                            key={i}
                            className="group relative rounded-[1rem] p-6 flex flex-col bg-gradient-to-b from-green-200/10 via-green-100/50 to-violet-500/30 backdrop-blur-xl shadow-lg overflow-hidden"
                        >
                            <div className="inline-block px-5 py-2 rounded-full bg-green-500/10 font-semibold text-sm">
                                <span className="flex items-center justify-center gap-2">
                                    <Disc size={16} color="violet" />
                                    {experience.title}
                                </span>
                            </div>

                            <div className="mt-4 flex flex-col gap-2">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                    <p className="text-base font-medium leading-snug">
                                        {experience.company_name}
                                    </p>
                                    <p className="text-xs font-normal text-gray-600 leading-snug">
                                        {experience.period}
                                    </p>
                                </div>
                                <div className="translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-out delay-150">
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
            </div>
        </section>
    )
}

export default Experience