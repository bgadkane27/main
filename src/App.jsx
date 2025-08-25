import About from "./components/About"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import { Info } from "./components/Info"
import { Action } from "./components/Action"
import Video from "./components/Video"
import { TextParallaxContentExample } from "./components/TextParallaxContent"
import CardGrid from "./components/CardGrid"

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
      {/* <TextParallaxContentExample /> */}
    </main>
  )
}

export default App
