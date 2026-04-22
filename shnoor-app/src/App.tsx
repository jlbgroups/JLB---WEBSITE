import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import IndustriesPage from './pages/IndustriesPage'
import CareersPage from './pages/CareersPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"            element={<HomePage />} />
        <Route path="/services"    element={<ServicesPage />} />
        <Route path="/about"       element={<AboutPage />} />
        <Route path="/industries"  element={<IndustriesPage />} />
        <Route path="/careers"     element={<CareersPage />} />
        <Route path="/contact"     element={<ContactPage />} />
        <Route path="*"            element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
