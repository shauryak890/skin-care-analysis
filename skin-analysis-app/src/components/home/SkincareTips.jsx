import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  SunIcon, 
  MoonIcon, 
  SparklesIcon,
  FaceSmileIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  CloudIcon,
  ClockIcon,
  ArrowPathIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline'

function SkincareTips() {
  const [activeCategory, setActiveCategory] = useState('daily')

  const categories = {
    daily: {
      title: "Daily Essentials",
      description: "Foundation steps for healthy skin every day",
      tips: [
        {
          title: "Morning Cleanse",
          time: "AM",
          description: "Start with a gentle cleanser to remove overnight buildup",
          steps: [
            "Use lukewarm water",
            "Apply cleanser in circular motions",
            "Rinse thoroughly",
            "Pat dry with clean towel"
          ],
          Icon: SunIcon
        },
        {
          title: "Sun Protection",
          time: "AM",
          description: "Shield your skin from harmful UV rays",
          steps: [
            "Apply SPF 30+ sunscreen",
            "Reapply every 2-3 hours",
            "Use extra protection in direct sun",
            "Don't forget neck and ears"
          ],
          Icon: SparklesIcon
        },
        {
          title: "Evening Routine",
          time: "PM",
          description: "Remove the day's buildup and nourish your skin",
          steps: [
            "Double cleanse if wearing makeup",
            "Apply treatments/serums",
            "Use night cream/moisturizer",
            "Consider eye cream"
          ],
          Icon: MoonIcon
        }
      ]
    },
    weekly: {
      title: "Weekly Care",
      description: "Deep treatment for lasting results",
      tips: [
        {
          title: "Exfoliation",
          time: "1-2x Weekly",
          description: "Remove dead skin cells for brighter complexion",
          steps: [
            "Choose gentle exfoliator",
            "Apply with light pressure",
            "Focus on rough areas",
            "Don't over-exfoliate"
          ],
          Icon: SparklesIcon
        },
        {
          title: "Face Mask",
          time: "1-2x Weekly",
          description: "Deep nourishment and treatment",
          steps: [
            "Cleanse face thoroughly",
            "Apply mask evenly",
            "Leave on as directed",
            "Follow with moisturizer"
          ],
          Icon: FaceSmileIcon
        },
        {
          title: "Skin Check",
          time: "Weekly",
          description: "Monitor your skin's health and needs",
          steps: [
            "Check for new spots",
            "Monitor existing concerns",
            "Assess product effectiveness",
            "Adjust routine as needed"
          ],
          Icon: MagnifyingGlassIcon
        }
      ]
    },
    lifestyle: {
      title: "Lifestyle Habits",
      description: "Holistic approaches for skin health",
      tips: [
        {
          title: "Sleep Care",
          time: "Daily",
          description: "Optimize your beauty sleep",
          steps: [
            "Use silk pillowcase",
            "Sleep on back when possible",
            "Get 7-8 hours sleep",
            "Keep room humidity balanced"
          ],
          Icon: HeartIcon
        },
        {
          title: "Stress Management",
          time: "Ongoing",
          description: "Minimize stress impact on skin",
          steps: [
            "Practice meditation",
            "Regular exercise",
            "Adequate hydration",
            "Healthy diet choices"
          ],
          Icon: SparklesIcon
        },
        {
          title: "Environmental Protection",
          time: "Daily",
          description: "Shield from environmental damage",
          steps: [
            "Use antioxidants",
            "Avoid excessive sun",
            "Stay hydrated",
            "Protect from pollution"
          ],
          Icon: CloudIcon
        }
      ]
    }
  }

  return (
    <section id="tips" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Essential Skincare Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover expert-recommended practices for maintaining healthy, radiant skin at every stage of your routine.
          </p>
        </motion.div>

        {/* Category Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-white text-primary shadow-md'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {categories[category].title}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 italic">
            {categories[activeCategory].description}
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories[activeCategory].tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6">
                <div className="flex items-center justify-between mb-4">
                  <tip.Icon className="w-8 h-8 text-primary" />
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {tip.time}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>

              {/* Steps */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  How to:
                </h4>
                <ul className="space-y-3">
                  {tip.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-center text-gray-700">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm mr-3">
                        {stepIndex + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pro Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/5 via-white to-secondary/5 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pro Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-md">
              <ClockIcon className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Timing Matters</h4>
              <p className="text-gray-600">Apply products in order of thickness, waiting 1-2 minutes between each for optimal absorption.</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-md">
              <ArrowPathIcon className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Consistency is Key</h4>
              <p className="text-gray-600">Stick to your routine for at least 6-8 weeks to see real results. Your skin needs time to adjust.</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-md">
              <ClipboardDocumentListIcon className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Track Your Progress</h4>
              <p className="text-gray-600">Keep a skin diary to monitor how your skin reacts to different products and treatments.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkincareTips 