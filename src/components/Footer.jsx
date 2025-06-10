import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiTwitter, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Bloom Boutique</h3>
            <p className="text-primary-100 mb-4">
              Creating beautiful floral arrangements for all occasions. Bringing nature's beauty to your doorstep since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-primary-100 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="w-5 h-5 mr-3 mt-1 text-primary-300" />
                <span className="text-primary-100">
                  123 Blossom Street<br />
                  Flowertown, FT 12345
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="w-5 h-5 mr-3 text-primary-300" />
                <span className="text-primary-100">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FiMail className="w-5 h-5 mr-3 text-primary-300" />
                <span className="text-primary-100">hello@bloomboutique.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Store Hours</h3>
            <ul className="space-y-2">
              <li className="text-primary-100">
                <span className="font-medium">Monday - Friday:</span><br />
                9:00 AM - 7:00 PM
              </li>
              <li className="text-primary-100">
                <span className="font-medium">Saturday:</span><br />
                9:00 AM - 6:00 PM
              </li>
              <li className="text-primary-100">
                <span className="font-medium">Sunday:</span><br />
                10:00 AM - 4:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-primary-700 text-center text-primary-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Bloom Boutique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer