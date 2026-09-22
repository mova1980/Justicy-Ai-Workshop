import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LanguageProvider, useLang } from './context/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Agenda from './pages/Agenda'
import Tools from './pages/Tools'
import Security from './pages/Security'
import Method from './pages/Method'
import Scenarios from './pages/Scenarios'
import Register from './pages/Register'
import Partners from './pages/Partners'
import Poster from './pages/Poster'
import NotFound from './pages/NotFound'

function ScrollTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash && hash.length > 1 && !hash.startsWith('#/')) return
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function TitleSync() {
  const { t } = useLang()
  useEffect(() => { document.title = t('meta.title') }, [t])
  return null
}

function Shell() {
  return (
    <div className="min-h-screen bg-persian-navy-900 text-white">
      <TitleSync />
      <ScrollTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/security" element={<Security />} />
          <Route path="/method" element={<Method />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/register" element={<Register />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/poster" element={<Poster />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Shell />
      </HashRouter>
    </LanguageProvider>
  )
}
