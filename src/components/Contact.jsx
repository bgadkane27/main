import { contact } from "../constants";

const Contact = () => {

    return (
        <section id="contact" className="px-6 md:px-24 py-20 min-h-screen relative Z-50">
            <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-l from-white to-green-300 blur-3xl"></div>
            <div className="absolute top-10 right-0 w-1/6 h-1/2 bg-gradient-to-br from-white to-yellow-300 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gradient-to-br from-white to-violet-400 blur-3xl"></div>
            <div className="relative z-10 flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 text-2xl font-bold">
                    B
                </div>
                <div className="uppercase px-4 py-2 border-2 rounded-full font-bold tracking-wide">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                        _Contact_
                    </span>
                </div>
            </div>
            <div className="relative z-10 flex items-center justify-center mb-4 w-full max-w-7xl mx-auto px-4">
                <div className="text-center py-4">
                    <h1 className="text-base md:text-3xl font-bold">
                        Let's team up — for a
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                            &nbsp;seamless collaboration.&nbsp; 
                        </span>
                    </h1>
                </div>
            </div>
            

            <h2 className="text-[4rem] md:text-[9rem] font-serif font-bold text-center my-16 relative z-100">
                Baburao Adkane
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center relative Z-10">
                {contact.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div key={item.id}>
                            <div className="flex justify-center">
                                <Icon className="mb-3 text-violet-600" size={24} />
                            </div>
                            <h3 className="font-semibold">{item.label}</h3>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold text-violet-600 hover:text-violet-800 mt-1 block"
                            >
                                {item.value}
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Contact;
