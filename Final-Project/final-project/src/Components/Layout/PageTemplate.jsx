import { motion } from "framer-motion"
import PageTransition from "./PageTransition"

const PageTemplate = ({ title, description, heroImage, children }) => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[60vh] -mt-24 pt-24">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-900 min-h-screen">
        {children}
      </section>
    </PageTransition>
  )
}

export default PageTemplate 