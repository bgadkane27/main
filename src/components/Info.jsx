import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export const Info = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-br from-white to-green-600 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gradient-to-br from-white to-violet-600 blur-3xl"></div>
            <div className="relative z-10 flex flex-col text-center font-bold w-full max-w-7xl mx-auto px-4 py-20">
                <Link
                    heading="Crafting Quality"
                    quote="Quality isn't a task — it's a discipline."
                    imgSrc="/imgs/backg1.avif"
                />
                <Link
                    heading="Ensuring Excellence"
                    quote="Excellence isn't a skill — it's an attitude."
                    imgSrc="/imgs/backg2.avif"
                />
                <Link
                    heading="Take Challenges"
                    quote="Challenges don't stop progress — they create opportunities."
                    imgSrc="/imgs/backg3.avif"
                />
                <Link
                    heading="Building Trust"
                    quote="To make a real difference."
                    imgSrc="/imgs/backg4.avif"
                />
            </div>
        </section>
    );
};

const Link = ({ heading, imgSrc, quote }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="group relative flex items-center justify-between border-b-2 border-blue-300 py-4 transition-colors duration-500 hover:border-blue-500 md:py-8"
        >
            <div>
                <motion.span
                    variants={{
                        initial: { x: 0 },
                        whileHover: { x: -16 },
                    }}
                    transition={{
                        type: "spring",
                        staggerChildren: 0.075,
                        delayChildren: 0.25,
                    }}
                    className="relative z-10 block text-xl font-bold transition-colors duration-500 md:text-6xl"
                >
                    {heading.split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: 16 },
                            }}
                            transition={{ type: "spring" }}
                            className="inline-block mr-4"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.span>
            </div>

            <motion.img
                style={{
                    top,
                    left,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={{
                    initial: { scale: 0, rotate: "-7.5deg" },
                    whileHover: { scale: 1, rotate: "7.5deg" },
                }}
                transition={{ type: "spring" }}
                src={imgSrc}
                className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-36 md:w-56"
                alt={`Image representing for a ${heading}`}
            />

            <motion.div
                variants={{
                    initial: {
                        x: "25%",
                        opacity: 0,
                    },
                    whileHover: {
                        x: "0%",
                        opacity: 1,
                    },
                }}
                transition={{ type: "spring" }}
                className="relative z-10 p-4"
            >
                {quote}
            </motion.div>
        </motion.div>
    );
};