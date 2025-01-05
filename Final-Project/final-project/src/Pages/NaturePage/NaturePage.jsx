import { motion } from "framer-motion"
import PageTemplate from "../../Components/Layout/PageTemplate"

const NaturePage = () => {
  return (
    <PageTemplate
      title="Nature Photography"
      description="Capturing Earth's breathtaking moments"
      heroImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074"
    >
      <div className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {naturePhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square group overflow-hidden"
            >
              <img 
                src={photo.url} 
                alt={photo.description}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-sm">{photo.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTemplate>
  )
}

const naturePhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070",
    description: "Mountain Sunrise"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070",
    description: "Serene Lake"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071",
    description: "Forest Light"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=2070",
    description: "Mountain Lake Reflection"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?q=80&w=2070",
    description: "Ocean Waves"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076",
    description: "Desert Sunset"
  }
]

export default NaturePage