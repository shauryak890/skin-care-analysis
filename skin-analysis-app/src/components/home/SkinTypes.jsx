import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function SkinTypes() {
  const navigate = useNavigate()

  const skinTypes = [
    {
      type: "Oily Skin",
      description: "Characterized by excess sebum production, leading to shine and potential acne concerns",
      image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=800&q=80",
      path: "/skin-types/oily"
    },
    {
      type: "Dry Skin",
      description: "Lacks natural moisture, resulting in tight, flaky, or rough texture",
      image: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&w=800&q=80",
      path: "/skin-types/dry"
    },
    {
      type: "Combination Skin",
      description: "Features both oily and dry areas, typically with an oily T-zone and dry cheeks",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
      path: "/skin-types/combination"
    }
  ]

  return (
    <section id="skin-types" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Understanding Different Skin Types
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skinTypes.map((skin, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => navigate(skin.path)}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={skin.image} 
                  alt={skin.type}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">{skin.type}</h3>
                  <p className="text-sm text-gray-200">{skin.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkinTypes 