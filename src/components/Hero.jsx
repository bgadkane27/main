// const Hero = () => {
//     return (
//         <section
//             id="hero"
//             className="px-6 md:px-24 py-20 min-h-screen relative"
//         >
//             <div
//                 className="absolute inset-0 opacity-10"
//                 style={{
//                     backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
//                     backgroundSize: "50px 50px",
//                 }}
//             ></div>
//             <div className="flex justify-center pb-4">
//                 <div className="font-semibold px-6 py-1.5 rounded-full bg-[#9c7443]">
//                     <span className="uppercase text-[#fbf0da] tracking-wide">
//                         Introduction
//                     </span>
//                 </div>
//             </div>
//         </section>
//     );
// };

import { ArrowDownToDot, MoveDown } from "lucide-react";

// export default Hero;

const Hero = () => {
    return (
        <section
            className="relative min-h-screen flex items-end bg-cover bg-center"
            style={{
                backgroundImage: "url('/imgs/bbb.webp')", // Change to your image
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 pb-16">
                {/* Left side - big title */}
                <div className="font-serif">
                    <h1 className="uppercase text-6xl md:text-[12vw] tracking-tight text-outline">
                        Baburao
                    </h1>
                    <p className="text-2xl text-white font-medium">
                        QA and QC Engineer
                    </p>
                </div>


                {/* Right side - description */}
                <div className="mt-8 md:mt-0 md:ml-12 max-w-sm text-white">
                    <p className="text-xl mb-4 font-semibold text-yellow-500">_Introduction_</p>
                    <p
                        className="text-sm sm:text-lg max-w-xs leading-relaxed mb-4 text-justify">
                        A QA and QC Engineer at
                        <span className="text-blue-500 font-medium"> Expert Business Solutions</span>, designing test strategies that fulfill product needs across
                        <span className="text-blue-500 font-medium"> HRMS</span>,
                        <span className="text-blue-500 font-medium"> ERP</span>,
                        <span className="text-blue-500 font-medium"> Retail</span>,
                        <span className="text-blue-500 font-medium"> Restaurant</span>,
                        <span className="text-blue-500 font-medium"> CRM</span>,
                        <span className="text-blue-500 font-medium"> Subscription</span>, and
                        <span className="text-blue-500 font-medium"> Real Estate</span> domains.
                    </p>
                    <div className="flex items-center justify-end">
                        <img
                            src="/imgs/arrowdown.gif"
                            alt="Move down"
                            className="w-20 h-20"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;


