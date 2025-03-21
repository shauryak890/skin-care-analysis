import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  SparklesIcon, 
  ShieldCheckIcon, 
  BeakerIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline'

function Hero() {
  const navigate = useNavigate()

  const features = [
    {
      title: "AI-Powered Analysis",
      description: "Advanced technology that analyzes your skin condition with high accuracy",
      icon: SparklesIcon,
      color: "bg-primary-100 text-primary-600"
    },
    {
      title: "Personalized Care",
      description: "Get tailored skincare recommendations based on your unique skin profile",
      icon: ShieldCheckIcon,
      color: "bg-secondary-100 text-secondary-600"
    },
    {
      title: "Expert Insights",
      description: "Access professional skincare knowledge and proven treatment methods",
      icon: BeakerIcon,
      color: "bg-accent-100 text-accent-600"
    }
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      {/* Main Content */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Text */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight"
            >
              Discover Your Perfect
              <span className="block mt-2 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                Skincare Routine
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Experience personalized skincare analysis powered by AI. Get expert recommendations tailored to your unique skin profile.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => navigate('/analysis')}
                className="inline-flex items-center px-8 py-3 rounded-full text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl font-medium"
              >
                Start Your Analysis
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => document.getElementById('skin-types').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-3 rounded-full text-primary-700 bg-primary-50 hover:bg-primary-100 transform hover:scale-105 transition-all border-2 border-primary-200 font-medium"
              >
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-white px-6 py-8 rounded-2xl shadow-xl">
                  <div className={`inline-flex p-3 rounded-xl ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: "98%", label: "Accuracy Rate" },
              { number: "10K+", label: "Happy Users" },
              { number: "24/7", label: "AI Support" },
              { number: "100%", label: "Personalized" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600">{stat.number}</div>
                <div className="mt-1 text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero 