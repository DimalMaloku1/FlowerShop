import { motion } from 'framer-motion'
import { teamMembers } from '../data/team'

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading-lg mb-6">Our Story</h1>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Bloom Boutique began as a small family-owned flower shop with a 
                passion for creating beautiful floral arrangements that bring joy to people's lives.
              </p>
              <p className="text-gray-600">
                Over the years, we've grown into a beloved local institution, known for our exceptional 
                quality, creativity, and personalized service. Our team of skilled florists brings years 
                of experience and a genuine love for their craft to every arrangement we create.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.pexels.com/photos/2088170/pexels-photo-2088170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our flower shop" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg mb-8">
              At Bloom Boutique, our mission is to create memorable moments through the language of flowers. 
              We believe that a thoughtfully crafted floral arrangement has the power to express emotions, 
              commemorate milestones, and bring beauty into everyday life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-primary-50 p-6 rounded-lg"
              >
                <div className="text-primary-600 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We source the freshest flowers and ensure each arrangement meets our high standards.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-50 p-6 rounded-lg"
              >
                <div className="text-primary-600 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold mb-2">Creativity</h3>
                <p className="text-gray-600">
                  Our designs blend traditional techniques with innovative approaches for unique arrangements.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-primary-50 p-6 rounded-lg"
              >
                <div className="text-primary-600 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold mb-2">Service</h3>
                <p className="text-gray-600">
                  We provide personalized attention to ensure each customer's needs are met with care.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Meet Our Team</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our talented team of florists brings years of experience and passion to every arrangement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary-600 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="heading-md mb-6">Our Values</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2">Sustainability</h3>
                  <p className="text-gray-600">
                    We are committed to environmentally responsible practices, from sourcing locally 
                    whenever possible to using eco-friendly packaging and minimizing waste.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2">Community</h3>
                  <p className="text-gray-600">
                    We take pride in being a part of our local community, supporting local events, 
                    and giving back through donations to community organizations.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2">Education</h3>
                  <p className="text-gray-600">
                    We believe in sharing our knowledge and passion for flowers through workshops 
                    and classes for both aspiring florists and flower enthusiasts.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Sustainable practices" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/5874617/pexels-photo-5874617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Community involvement" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/6913380/pexels-photo-6913380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Floral education" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/4506235/pexels-photo-4506235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Flower workshop" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About