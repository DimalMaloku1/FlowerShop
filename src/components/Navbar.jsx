import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-primary-800">
              Bloom Boutique
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : 'nav-link'
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : 'nav-link'
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/shop" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : 'nav-link'
              }
            >
              Shop
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
            <Link to="/shop" className="btn btn-primary ml-4">
              Shop Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? 'nav-link-active' : 'nav-link'
                  }
                  onClick={() => setIsMenuOpen(false)}
                  end
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? 'nav-link-active' : 'nav-link'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </NavLink>
                <NavLink 
                  to="/shop" 
                  className={({ isActive }) => 
                    isActive ? 'nav-link-active' : 'nav-link'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    isActive ? 'nav-link-active' : 'nav-link'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
                <Link 
                  to="/shop" 
                  className="btn btn-primary w-full text-center mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop Now
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar