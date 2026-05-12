import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="min-h-screen bg-geo-obsidian selection:bg-geo-cyan/30 selection:text-white">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      
      <footer className="py-8 text-center border-t border-slate-800/50 bg-geo-obsidian">
        <p className="text-sm text-slate-500 font-display tracking-wider">
          © {new Date().getFullYear()} Luan Augusto Barboza Simão. Elaborado com precisão geográfica.
        </p>
      </footer>
    </div>
  )
}

export default App
