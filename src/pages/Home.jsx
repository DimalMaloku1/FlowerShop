import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div>
      <Hero />
      
      <FeaturedProducts />
      
      <section className="py-16 bg-accent-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-4">Bespoke Floral Arrangements for Every Occasion</h2>
              <p className="text-gray-600 mb-6">
                Whether you're celebrating a special milestone, expressing sympathy, or simply brightening someone's day, 
                our expert florists craft the perfect arrangement to convey your sentiments.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Weddings & Special Events</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Corporate Arrangements</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Sympathy & Funeral Flowers</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Seasonal Bouquets & Gifts</span>
                </li>
              </ul>
              <Link to="/shop" className="btn btn-primary">
                Explore Our Collections
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.pexels.com/photos/2111192/pexels-photo-2111192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Florist arranging flowers" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <section className="py-16 bg-primary-800 text-white relative">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">Same-Day Flower Delivery</h2>
            <p className="text-primary-100 mb-8 text-lg">
              Order by 1 PM for same-day delivery within our local delivery area. Brighten someone's day with a beautiful arrangement.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-gray-100">
              Contact Us Today
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/1179026/pexels-photo-1179026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Flower pattern" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  )
}

export default Home