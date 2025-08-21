import About from "./components/About"
import Exp from "./components/Exp"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import { Info } from "./components/Info"
import Video from "./components/Video"

function App() {

  return (
    <main>
      <Hero />      
      <Info />
      <About />
      <Video />
      <Exp />
      {/* <Experience /> */}
    </main>
  )
}

export default App
