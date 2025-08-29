import About from "./components/About"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import { Info } from "./components/Info"
import { Action } from "./components/Action"
import Video from "./components/Video"
import CardGrid from "./components/CardGrid"
import Marquee from "./components/Marquee"

function App() {

  return (
    <main>
      <Hero />      
      <Info />
      <About />
      <Video />
      <Experience />
      <Action />
      <CardGrid />
      <Marquee />      
    </main>
  )
}

export default App
