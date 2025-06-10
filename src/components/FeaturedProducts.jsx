import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { featuredProducts } from '../data/products'

const FeaturedProducts = () => {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Featured Arrangements</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our most popular seasonal arrangements, handcrafted with care using the freshest blooms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {hoveredId === product.id && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Link 
                      to="/shop" 
                      className="btn bg-white text-gray-800 hover:bg-gray-100"
                    >
                      View Details
                    </Link>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-serif font-bold">{product.name}</h3>
                  <span className="text-accent-600 font-medium">${product.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link to="/shop" className="text-primary-600 font-medium hover:text-primary-700">
                  Shop now →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn btn-outline">
            View All Arrangements
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts