import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'

const skinTypeData = {
  oily: {
    title: "Oily Skin",
    image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=800&q=80",
    description: [
      "Oily skin is characterized by excessive sebum production, which can lead to a shiny or greasy appearance, particularly in the T-zone (forehead, nose, and chin). This skin type is more prone to enlarged pores, blackheads, and acne breakouts due to the overactive sebaceous glands.",
      "While having oily skin can be frustrating, it actually has some benefits. The natural oils can help keep your skin more hydrated and may help prevent premature aging and wrinkles. The key is finding the right balance in your skincare routine."
    ],
    affects: [
      "Hormonal changes",
      "Humidity and hot weather",
      "Stress",
      "Certain medications",
      "Genetics",
      "Over-washing or harsh products"
    ],
    avoid: [
      "Heavy, oil-based products",
      "Alcohol-based products that dry out skin",
      "Touching face frequently",
      "Heavy makeup",
      "Sleeping with makeup on",
      "Hot water washing"
    ],
    products: [
      {
        category: "Cleanser",
        recommendation: "Use a gentle, foaming cleanser with salicylic acid or benzoyl peroxide"
      },
      {
        category: "Toner",
        recommendation: "Alcohol-free toner with niacinamide or witch hazel"
      },
      {
        category: "Moisturizer",
        recommendation: "Light, oil-free, non-comedogenic moisturizer"
      },
      {
        category: "Sunscreen",
        recommendation: "Light, gel-based sunscreen with at least SPF 30"
      }
    ],
    diet: [
      "Reduce dairy consumption",
      "Limit sugary and processed foods",
      "Increase omega-3 rich foods (fish, nuts)",
      "Eat zinc-rich foods (pumpkin seeds, lean meats)",
      "Include vitamin A-rich foods (sweet potatoes, carrots)",
      "Stay hydrated with water",
      "Green tea for antioxidants"
    ]
  },
  dry: {
    title: "Dry Skin",
    image: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&w=800&q=80",
    description: [
      "Dry skin produces less sebum than normal skin, leading to a lack of the lipids needed to retain moisture and build a protective shield against external influences. This results in a compromised skin barrier function, making the skin more susceptible to environmental stressors.",
      "People with dry skin often experience tightness, flaking, and roughness. In severe cases, the skin might become red, itchy, and show signs of fine lines more prominently. However, with proper care and hydration, dry skin can be managed effectively."
    ],
    affects: [
      "Cold or dry weather",
      "Hot showers and baths",
      "Harsh soaps and cleansers",
      "Indoor heating",
      "Dehydration",
      "Aging process",
      "Certain medical conditions"
    ],
    avoid: [
      "Hot water when washing",
      "Harsh, soap-based cleansers",
      "Alcohol-containing products",
      "Over-exfoliation",
      "Long, hot showers",
      "Fragranced products",
      "Waiting too long to moisturize after cleansing"
    ],
    products: [
      {
        category: "Cleanser",
        recommendation: "Cream or oil-based gentle cleanser with ceramides or hyaluronic acid"
      },
      {
        category: "Moisturizer",
        recommendation: "Rich, emollient cream with ingredients like shea butter, ceramides, and glycerin"
      },
      {
        category: "Treatment",
        recommendation: "Hydrating serums with hyaluronic acid and niacinamide"
      },
      {
        category: "Sunscreen",
        recommendation: "Moisturizing sunscreen with at least SPF 30 and added hydrating ingredients"
      }
    ],
    diet: [
      "Foods rich in omega-3 fatty acids (salmon, flaxseeds)",
      "Avocados for healthy fats",
      "Foods high in vitamin E (nuts, seeds)",
      "Water-rich fruits and vegetables",
      "Adequate water intake throughout the day",
      "Foods rich in vitamin C for collagen production",
      "Zinc-rich foods for skin repair"
    ]
  },
  combination: {
    title: "Combination Skin",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    description: [
      "Combination skin is characterized by having different skin types in different areas of the face. Typically, the T-zone (forehead, nose, and chin) is oily, while the cheeks and other areas are normal to dry. This makes skincare particularly challenging as different areas require different treatments.",
      "The key to managing combination skin is finding the right balance in your skincare routine and using products that can address both oily and dry areas without aggravating either condition. Multi-masking and targeted treatments can be particularly effective for this skin type."
    ],
    affects: [
      "Hormonal changes",
      "Seasonal changes",
      "Incorrect product usage",
      "Diet and lifestyle",
      "Genetics",
      "Stress levels",
      "Environmental factors"
    ],
    avoid: [
      "Using the same products all over face",
      "Very heavy or very light products",
      "Harsh exfoliants",
      "Skipping moisturizer",
      "Over-treating oily areas",
      "Ignoring dry areas",
      "Using too many products"
    ],
    products: [
      {
        category: "Cleanser",
        recommendation: "Gentle, balanced pH cleanser that won't strip or over-moisturize"
      },
      {
        category: "Toner",
        recommendation: "Alcohol-free balancing toner with hydrating properties"
      },
      {
        category: "Moisturizer",
        recommendation: "Lightweight, oil-free gel-cream for T-zone; richer cream for dry areas"
      },
      {
        category: "Treatment",
        recommendation: "Targeted treatments: mattifying for T-zone, hydrating for dry areas"
      }
    ],
    diet: [
      "Balance of omega-3 and omega-6 fatty acids",
      "Antioxidant-rich foods",
      "Zinc-rich foods for oil control",
      "Hydrating foods and adequate water intake",
      "Green tea for antioxidants",
      "Foods rich in vitamin A and C",
      "Probiotics for skin balance"
    ]
  }
}

function SkinTypePage() {
  const { type } = useParams()
  const data = skinTypeData[type]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16"
    >
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              {data.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-200"
            >
              {data.description[0]}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Understanding & Effects */}
          <div className="md:col-span-2 space-y-12">
            {/* Understanding Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Skin</h2>
              {data.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.section>

            {/* What Affects Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Affects Your Skin</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {data.affects.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary">•</span>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Quick Tips */}
          <div className="space-y-8">
            {/* What to Avoid Card */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-red-800 mb-4">What to Avoid</h2>
              <ul className="space-y-3">
                {data.avoid.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2 text-red-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Product Recommendations */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended Products</h2>
              <div className="space-y-4">
                {data.products.map((product, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-primary mb-2">{product.category}</h3>
                    <p className="text-gray-600">{product.recommendation}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>

        {/* Diet Recommendations */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Diet</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.diet.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-md"
              >
                <div className="text-green-600 mb-2">✓</div>
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Skincare Routine?</h2>
          <Link
            to="/analysis"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            Get Your Personalized Analysis
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SkinTypePage 