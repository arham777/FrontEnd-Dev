import { motion } from "framer-motion"
import PageTemplate from "../../Components/Layout/PageTemplate"

const ProductsPage = () => {
  return (
    <PageTemplate
      title="Product Photography"
      description="Making your products stand out with professional imagery"
      heroImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2070"
    >
      <div className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {productPhotos.map((photo, index) => (
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

const productPhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999",
    description: "Premium Watch Photography"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080",
    description: "Athletic Footwear"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070",
    description: "Premium Headphones"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1486611367184-17759508999c?q=80&w=2066",
    description: "Luxury Timepiece"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974",
    description: "Minimal Product Shot"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968",
    description: "Perfume Collection"
  }
]

export default ProductsPage