import About from "./components/About"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import { Info } from "./components/Info"
import { Action } from "./components/Action"
import Video from "./components/Video"
import Projects from "./components/Projects"
import Competencies from "./components/Competencies"
import Contact from "./components/Contact"

function App() {

  return (
    <main>
      <Hero />      
      <Info />
      <About />
      <Competencies /> 
      <Action />
      <Video />
      <Experience />      
      <Projects />
      <Contact />
    </main>
  )
}

export default App
