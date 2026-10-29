import { motion } from "framer-motion"
import { useRef } from "react"
import PageTransition from "../../Components/Layout/PageTransition"

const HomePage = () => {
  const collectionsRef = useRef(null)
  
  const scrollToCollections = () => {
    collectionsRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[100vh] -mt-24 pt-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2070"
            alt="Professional photographer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div 
            className="max-w-3xl"
            {...fadeIn}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6">
              Capturing Life's Beautiful Moments
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8">
              Professional photography that tells your story
            </p>
            <motion.button
              onClick={scrollToCollections}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              View Gallery
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section ref={collectionsRef} className="py-20 bg-gray-900">
        <div className="px-4">
          <motion.h2 
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Collections
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300 text-sm">{category.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              With over a decade of experience in photography, I specialize in capturing 
              the essence of special moments. From intimate weddings to stunning landscapes, 
              my passion is creating timeless images that tell your unique story.
            </motion.p>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

const categories = [
  {
    title: "Weddings",
    description: "Timeless moments of love and celebration",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070",
  },
  {
    title: "Portraits",
    description: "Capturing personality and character",
    image: "https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?q=80&w=2070",
  },
  {
    title: "Nature",
    description: "The beauty of the natural world",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070",
  },
  {
    title: "Products",
    description: "Professional product photography",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070",
  }
]

export default HomePage