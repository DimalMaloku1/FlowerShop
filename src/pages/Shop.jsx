import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { products } from '../data/products'

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'bouquets', name: 'Bouquets' },
    { id: 'arrangements', name: 'Arrangements' },
    { id: 'plants', name: 'Plants' },
    { id: 'gifts', name: 'Gifts' }
  ]

  useEffect(() => {
    filterProducts(activeCategory, searchTerm)
  }, [activeCategory, searchTerm])

  const filterProducts = (category, term) => {
    let filtered = products
    
    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category)
    }
    
    // Filter by search term
    if (term) {
      const lowerCaseTerm = term.toLowerCase()
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(lowerCaseTerm) || 
        product.description.toLowerCase().includes(lowerCaseTerm)
      )
    }
    
    setFilteredProducts(filtered)
  }

  return (
    <div className="pt-24">
      {/* Shop Hero */}
      <section className="bg-primary-50 py-12">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="heading-lg mb-4">Our Collection</h1>
            <p className="max-w-2xl mx-auto text-gray-600">
              Browse our handcrafted floral arrangements, bouquets, plants, and gifts for every occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Categories */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 -mx-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 mx-2 whitespace-nowrap rounded-full transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="card group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="btn bg-white text-gray-800 hover:bg-gray-100">
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-serif font-bold">{product.name}</h3>
                      <span className="text-accent-600 font-medium">${product.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <button className="btn btn-primary w-full">
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="heading-sm mb-4">No products found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button 
                onClick={() => {
                  setActiveCategory('all')
                  setSearchTerm('')
                }}
                className="btn btn-primary"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-primary-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600">
                Order by 1 PM for same-day delivery within our local delivery area.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-primary-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold mb-2">Secure Payment</h3>
              <p className="text-gray-600">
                All transactions are secure and your information is protected.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-primary-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                Not completely satisfied? Contact us within 24 hours for a replacement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop