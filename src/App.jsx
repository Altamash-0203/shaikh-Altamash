import './App.css'
import Navbar from './components/Navbar'
import Contact from './sections/Contact'
import Education from './sections/Education'
import GitHubStats from './sections/Git'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Projects/>
    <Education/>
    <GitHubStats/>
    <Contact/>
    </>
  )
}

export default App
