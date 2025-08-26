import { SquareArrowOutUpRight } from "lucide-react";
import { projects } from "../constants";
import ChromaGrid from "./ChromaGrid.JSX";

const items = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "HRMS",
      subtitle: "Enfinity HRMS, a user-friendly cloud-based HR software in MENA which simplifies HR management, from recruitment to retirement, helps you retain talent and build a high-performing workforce.",
      handle: "@alexrivera",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://github.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=11",
      title: "ERP",
      subtitle: "DevOps Engineer",
      handle: "@jordanchen",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg,#10B981,#000)",
      url: "https://linkedin.com/in/",
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "CRM",
      subtitle: "UI/UX Designer",
      handle: "@morganblake",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg,#F59E0B,#000)",
      url: "https://dribbble.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=16",
      title: "RETAIL",
      subtitle: "Data Scientist",
      handle: "@caseypark",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg,#EF4444,#000)",
      url: "https://kaggle.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=25",
      title: "RESTAURANT",
      subtitle: "Mobile Developer",
      handle: "@thesamkim",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg,#8B5CF6,#000)",
      url: "https://github.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=60",
      title: "SUBSCRIPTION",
      subtitle: "Cloud Architect",
      handle: "@tylerrod",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      url: "https://aws.amazon.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=60",
      title: "REAL-ESTATE",
      subtitle: "Cloud Architect",
      handle: "@tylerrod",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      url: "https://aws.amazon.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=60",
      title: "LOAN ORIGINATION SYSTEM",
      subtitle: "Cloud Architect",
      handle: "@tylerrod",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      url: "https://aws.amazon.com/",
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
