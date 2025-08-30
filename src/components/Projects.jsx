import ProjectsGrid from "./ProjectsGrid.JSX";
import { projects } from '../constants'

const Projects = () => {
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
      <div className="relative min-h-screen">
        <ProjectsGrid
          items={projects}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </div>
  );
};

export default Projects;
