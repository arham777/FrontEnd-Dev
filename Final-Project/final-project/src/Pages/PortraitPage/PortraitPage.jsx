import { motion } from "framer-motion"
import PageTemplate from "../../Components/Layout/PageTemplate"

const PortraitPage = () => {
  return (
    <PageTemplate
      title="Portrait Photography"
      description="Capturing personalities, one frame at a time"
      heroImage="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2070"
    >
      <div className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {portraitPhotos.map((photo, index) => (
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

const portraitPhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?q=80&w=2070",
    description: "Natural Light Portrait"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070",
    description: "Studio Portrait"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070",
    description: "Professional Headshot"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2069",
    description: "Outdoor Portrait"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2070",
    description: "Lifestyle Portrait"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2070",
    description: "Black & White Portrait"
  }
]

export default PortraitPage