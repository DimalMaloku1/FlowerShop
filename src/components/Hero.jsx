import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Beautiful flowers background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="heading-xl mb-6">
            Beautiful Blooms for Every Occasion
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Handcrafted floral arrangements delivered with care. From celebrations to condolences, 
            let our flowers express what words cannot.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="btn btn-accent">
              Shop Our Collection
            </Link>
            <Link to="/contact" className="btn bg-white text-gray-800 hover:bg-gray-100">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero