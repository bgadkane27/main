import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
    const containerRef = useRef(null);
    const headingRefs = useRef([]);

    const addToRefs = (el) => {
        if (el && !headingRefs.current.includes(el)) {
            headingRefs.current.push(el);
        }
    };

    useGSAP(() => {
        headingRefs.current.forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, scale: 0.85 },
                {
                    opacity: 1,
                    scale: 1,
                    ease: "power4.inOut",
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        end: "top 60%",
                        scrub: true,
                        toggleActions: "play reverse play reverse",
                    },
                }
            );
        });
    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-br from-white to-green-600 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gradient-to-br from-white to-violet-600 blur-3xl"></div>
            <div className="relative z-10 flex flex-col text-center font-bold w-full max-w-5xl mx-auto px-4">
                <h1 ref={addToRefs} className="uppercase text-4xl md:text-[5rem] leading-tight mb-2">
                    Crafting <span className="text-blue-600">Quality</span>,
                </h1>
                <h1 ref={addToRefs} className="uppercase text-4xl md:text-[5rem] leading-tight mb-2">
                    Ensuring <span className="text-blue-600">Excellence</span>,
                </h1>
                <h1 ref={addToRefs} className="uppercase text-4xl md:text-[5rem] leading-tight mb-2">
                    Take <span className="text-blue-600">Challenges</span>,
                </h1>
                <h1 ref={addToRefs} className="uppercase text-4xl md:text-[5rem] leading-tight mb-2">
                    Building <span className="text-blue-600">Trust</span>
                </h1>
                <span className="sm:text-2xl text-lg font-medium mt-12">To Make a real difference.</span>
            </div>
        </div>
    );
};

export default Intro;