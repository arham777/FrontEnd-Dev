import { motion } from "framer-motion"
import PageTemplate from "../../Components/Layout/PageTemplate"

const WeddingPage = () => {
  return (
    <PageTemplate
      title="Wedding Photography"
      description="Capturing your special moments with elegance"
      heroImage="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070"
    >
      <div className="py-20 px-4 sm:px-6 md:px-8">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {weddingPhotos.map((photo, index) => (
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

const weddingPhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
    description: "First Dance"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2070",
    description: "Wedding Ceremony"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069",
    description: "Bride Preparation"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2071",
    description: "Wedding Details"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070",
    description: "Couple Portrait"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?q=80&w=2070",
    description: "Reception Moments"
  }
]

export default WeddingPage