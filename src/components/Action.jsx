import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
} from "framer-motion";
import { useRef } from "react";

export const Action = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const scrollVelocity = useVelocity(scrollYProgress);

    const skewXRaw = useTransform(
        scrollVelocity,
        [-0.5, 0.5],
        ["45deg", "-45deg"]
    );
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

    return (
        <section
            ref={targetRef}
            className="relative h-[240vh] md:h-[300vh] bg-[#d2d2d2]"
        >            
            <div className="absolute top-80 left-50 w-1/3 h-1/2 bg-gradient-to-tr from-yellow-500/30 to-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-br from-white to-green-600 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-1/4 h-1/3 bg-gradient-to-br from-white to-violet-500 rounded-full blur-3xl"></div>
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.p
                    style={{ skewX, x }}
                    className="origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
                >
                    Let's team up — 
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                            &nbsp;your ideas, my expertise, and a commitment to quality&nbsp;
                    </span>                     
                    every step of the way.
                </motion.p>
            </div>
        </section>
    );
};