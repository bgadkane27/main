import { SquareArrowOutUpRight } from "lucide-react";
import { projects } from "../constants";
import ChromaGrid from "./ChromaGrid.JSX";

const items = [
    {
      image: "/imgs/hrms.png",
      video: "/videos/001.mp4",
      title: "HRMS",
      subtitle: "Enfinity HRMS, a user-friendly cloud-based HR software in MENA which simplifies HR management, from recruitment to retirement, helps you retain talent and build a high-performing workforce.",
      handle: "@alexrivera",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://www.onenfinity.com/hrms",
    },
    {
      image: "/imgs/erp.png",
      video: "/videos/002.mp4",
      title: "ERP",
      subtitle: "Enfinity ERP lies a comprehensive suite of applications, seamlessly integrating accounting, sales, purchase, inventory, fixed assets and service.",
      handle: "@jordanchen",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg,#10B981,#000)",
      url: "https://www.onenfinity.com/erp",
    },
    {
      image: "/imgs/crm.png",
      video: "/videos/003.mp4",
      title: "CRM",
      subtitle: "Enfinity CRM is a cutting-edge customer relationship management solution. Enfinity CRM simplifies it, focusing on efficient customer engagement, streamlining business processes, and enhancing productivity.",
      handle: "@morganblake",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg,#F59E0B,#000)",
      url: "https://www.onenfinity.com/crm",
    },
    {
      image: "/imgs/retail.png",
      video: "/videos/004.mp4",
      title: "RETAIL",
      subtitle: "Enfinity Retail is a cutting-edge cloud-based retail Point of Sale (POS) system, meticulously crafted to simplify and enhance the operational efficiency of retailers.",
      handle: "@caseypark",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg,#EF4444,#000)",
      url: "https://www.onenfinity.com/retail",
    },
    {
      image: "/imgs/restaurant.png",
      video: "/videos/004.mp4",
      title: "RESTAURANT",
      subtitle: "Enfinity Restaurant is a comprehensive Point-of-Sale (POS) and restaurant management system crafted to meet the diverse needs of modern restaurants.",
      handle: "@thesamkim",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg,#8B5CF6,#000)",
      url: "https://www.onenfinity.com/restaurant",
    },
    {
      image: "/imgs/hrms.png",
      video: "/videos/003.mp4",
      title: "SUBSCRIPTION",
      subtitle: "Enfinity Subscription is a cloud-based software designed for businesses aiming to optimize their subscription billing processes.",
      handle: "@tylerrod",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      url: "https://www.onenfinity.com/subscription",
    },
    {
      image: "/imgs/hrms.png",
      video: "/videos/002.mp4",
      title: "REAL-ESTATE",
      subtitle: "Enfinity Real-Estate is a cutting-edge cloud-based solution tailored for property rental management. From seamless rent collection to intuitive analytics, we offer comprehensive tools that make managing real estate assets a breeze.",
      handle: "@tylerrod",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      url: "https://www.onenfinity.com/real-estate",
    },
    {
      image: "/imgs/hrms.png",
      video: "/videos/001.mp4",
      title: "LOAN ORIGINATION SYSTEM",
      subtitle: "Loan Origination System streamlines the end-to-end loan process with a task-based workflow and real-time alerts. It ensures faster and more efficient loan approvals.",
      handle: "@tylerrod",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      url: "https://www.ltfinance.com/personal-loan",
    },
  ];

const CardGrid = () => {
  return (
    <div className="relative min-h-screen overflow-hidden py-20">
      <div className="relative z-10 flex items-center justify-center gap-3 mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 text-2xl font-bold">
          B
        </div>
        <div className="uppercase px-4 py-2 border-2 rounded-full font-bold tracking-wide">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            _Projects_
          </span>
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center mb-6 px-4">
        <div className="text-center py-4">
          <h1 className="text-base md:text-3xl font-bold">
            Projects Aren't Just Work — It Reflects
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              &nbsp;Passion, quality and reliability.&nbsp;
            </span>
          </h1>
        </div>
      </div>
      {/* <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => (cardRef.current[i] = el)}
              className="group relative p-6 rounded-2xl border border-gray-800"
            >
              <h3 className="text-lg font-semibold mb-3">{project.name}</h3>
              <p className="text-sm text-justify mb-4 leading-normal tracking-wide">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-green-200/50 px-2 py-1 rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3"
              >
                <SquareArrowOutUpRight size={20} />
              </a>
            </div>
          ))}
        </div>
      </div> */}


      <div className="relative min-h-screen">
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </div>
  );
};

export default CardGrid;
