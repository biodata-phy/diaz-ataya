import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import BackgroundDecor from './components/BackgroundDecor'
import Home from './pages/Home'

// Lazy load non-critical pages
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  const location = useLocation()
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <BackgroundDecor />
      <CursorGlow />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <Suspense fallback={
            <div style={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="dot-pulse" style={{ scale: 1.5 }} />
            </div>
          }>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
