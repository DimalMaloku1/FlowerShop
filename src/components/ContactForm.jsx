import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const validationErrors = validate()
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    // Form is valid - would normally submit to server here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8"
        >
          <svg 
            className="w-16 h-16 text-success-500 mx-auto mb-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="heading-sm mb-4">Thank You!</h3>
          <p className="text-gray-600 mb-6">Your message has been sent successfully. We'll get back to you soon!</p>
          <button 
            onClick={() => setSubmitted(false)} 
            className="btn btn-primary"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="heading-sm mb-6">Get in Touch</h3>
          
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.name ? 'border-error-500' : 'border-gray-300'
              }`}
            />
            {errors.name && (
              <p className="text-error-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.email ? 'border-error-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-error-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.message ? 'border-error-500' : 'border-gray-300'
              }`}
            />
            {errors.message && (
              <p className="text-error-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}

export default ContactForm