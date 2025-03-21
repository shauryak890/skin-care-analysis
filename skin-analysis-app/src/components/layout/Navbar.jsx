import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Skin Types', href: location.pathname === '/' ? '#skin-types' : '/#skin-types', isRoute: false },
    { name: 'Tips', href: location.pathname === '/' ? '#tips' : '/#tips', isRoute: false },
    { name: 'Analysis', href: '/analysis', isRoute: true }
  ]

  const handleNavClick = (item, e) => {
    if (!item.isRoute && item.href.startsWith('#')) {
      e.preventDefault()
      if (location.pathname !== '/') {
        navigate('/')
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(item.href.split('#')[1])
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        const element = document.querySelector(item.href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">SkinCare AI</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              )
            ))}
            <button 
              onClick={() => navigate('/analysis')}
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(item, e)}
                    className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <button 
                onClick={() => {
                  navigate('/analysis')
                  setIsMenuOpen(false)
                }}
                className="w-full mt-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 