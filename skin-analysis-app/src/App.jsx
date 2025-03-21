import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'
import SkinTypes from './components/home/SkinTypes'
import SkincareTips from './components/home/SkincareTips'
import SkinTypePage from './pages/SkinTypePage'
import ImageUpload from './components/ImageUpload'
import Results from './components/Results'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <SkinTypes />
              <SkincareTips />
            </>
          } />
          <Route path="/skin-types/:type" element={<SkinTypePage />} />
          <Route path="/analysis" element={
            <div className="pt-20 p-4">
              <div className="max-w-4xl mx-auto">
                <ImageUpload />
              </div>
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App 