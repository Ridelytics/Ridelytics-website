import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import LogoCarousel from './components/LogoCarousel'

function App() {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navigation />
      <Hero />
      <Features />
      <LogoCarousel />
    </div>
  )
}

export default App
