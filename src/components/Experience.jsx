import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { experiences } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const cardsRef = useRef([]);

    useGSAP(() => {
        cardsRef.current.forEach((card, i) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: 80,
                    scale: 0.85,
                    rotateX: 15,
                    skewY: 5,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    skewY: 0,
                    duration: 1.25,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse",
                    },
                    delay: i * 0.25,
                }
            );
        });
    }, []);

    return (
        <section className="w-full min-h-screen overflow-hidden relative">
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-br from-white to-green-600 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gradient-to-br from-white to-violet-600 blur-3xl"></div>
            <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-white to-lime-400/60 blur-3xl"></div>
            <div className="w-full max-w-7xl mx-auto grid md:grid-cols-3 gap-4 px-4 py-24">
                <div className="md:col-span-1 flex flex-col justify-center z-50">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 text-2xl font-bold">
                            B
                        </div>
                        <div className="uppercase px-4 py-2 border-2 rounded-full font-bold tracking-wide">
                            _Experience_
                        </div>
                    </div>
                    <p className="mb-6 text-lg relative z-10">
                        It's not a just about existence. Its about <span className="text-blue-600 font-bold">impact and cultivating</span> a legacy that transcends time.
                    </p>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                    {experiences.map((experience, index) => (
                        <div
                            key={experience.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="relative w-full h-auto group overflow-hidden rounded-xl flex flex-col gap-4 border border-slate-700"
                        >
                            <img
                                src="/imgs/back1.png"
                                alt="card background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="relative z-10 p-4 h-full flex flex-col">
                                <h2 className="text-lg font-semibold">{experience.title}</h2>
                                <p className="text-sm">{experience.company_name}</p>
                                <p className="text-xs mb-2">{experience.period}</p>
                                <div className="">
                                    <ul className="mt-2 space-y-2 mb-6">
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
    );
};

export default Experience;