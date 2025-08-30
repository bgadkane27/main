import { competency } from "../constants";
import CompetenciesList from "./CompetenciesList"

const Competencies = () => {
    return (
        <div id="" className="relative py-20">
            <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-l from-white to-violet-600 blur-3xl"></div>
            <div className="absolute top-10 right-0 w-1/6 h-1/2 bg-gradient-to-br from-white to-yellow-300 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gradient-to-br from-white to-green-400 blur-3xl"></div>
            <div className="relative z-10 flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 text-2xl font-bold">
                    B
                </div>
                <div className="uppercase px-4 py-2 border-2 rounded-full font-bold tracking-wide">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                        _Core Competencies_
                    </span>
                </div>
            </div>
            <div className="relative z-10 flex items-center justify-center mb-6 w-full max-w-7xl mx-auto px-4">
                <div className="text-center py-4">
                    <h1 className="text-base md:text-3xl font-bold">
                        My approach is to focus on developing —
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                            &nbsp;skills, maintaining consistency, fostering expertise, and creating scalable solutions.&nbsp;
                        </span>
                    </h1>
                </div>
            </div>
            <CompetenciesList items={competency} />
        </div>
    )
}

export default Competencies;