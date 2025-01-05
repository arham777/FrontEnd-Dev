import { motion, AnimatePresence } from "framer-motion"
import PageTemplate from "../../Components/Layout/PageTemplate"
import { useRef, useState } from "react"

const ContactPage = () => {
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const subjectRef = useRef()
  const messageRef = useRef()
  const formRef = useRef()
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Collect form data
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value
    }

    // Log the form data
    console.log('Form submitted:', formData)

    // Reset the form
    formRef.current.reset()
    
    // Show success message
    setShowSuccess(true)
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <PageTemplate
      title="Contact Us"
      description="Let's create something beautiful together"
      heroImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072"
    >
      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span>Message sent successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 h-fit"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p>03264002982</p>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p>arhamawan200@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-1">Address</h3>
                  <p>College road Lahore</p>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-1">Appointment Hours</h3>
                  <div className="space-y-1">
                    <p>Monday-Friday | 9 am - 7 pm</p>
                    <p>Saturday-Sunday | 10 am - 4 pm</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      ref={firstNameRef}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      ref={lastNameRef}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    ref={emailRef}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Type of Photography *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    ref={subjectRef}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="">Select a type</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Photography</option>
                    <option value="nature">Nature Photography</option>
                    <option value="product">Product Photography</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    ref={messageRef}
                    required
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:border-white transition-colors"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}

export default ContactPage 