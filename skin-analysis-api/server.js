import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// Middleware
app.use(cors())
app.use(express.json())

// Add file type validation
const fileFilter = (req, file, cb) => {
  // Accept only jpeg, jpg, and png
  if (file.mimetype === 'image/jpeg' || 
      file.mimetype === 'image/jpg' || 
      file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('Invalid file type. Only JPEG and PNG are allowed.'), false)
  }
}

// Update multer configuration
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter
})

// Add error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ 
        error: 'File too large. Maximum size is 5MB.' 
      })
    }
  }
  if (err.message === 'Invalid file type. Only JPEG and PNG are allowed.') {
    return res.status(400).json({ error: err.message })
  }
  next(err)
})

// Routes
app.post('/api/analyze', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' })
    }

    const b64 = Buffer.from(req.file.buffer).toString('base64')
    const dataURI = `data:${req.file.mimetype};base64,${b64}`

    // Upload to Cloudinary with optimization
    const uploadResponse = await cloudinary.uploader.upload(dataURI, {
      folder: 'skin-analysis',
      transformation: [
        { width: 800, height: 800, crop: 'limit' }, // Resize large images
        { quality: 'auto' }, // Automatic quality optimization
        { fetch_format: 'auto' } // Automatic format optimization
      ],
      resource_type: 'auto'
    })

    // Mock analysis (you'll replace this with real AI analysis later)
    const mockAnalysis = {
      skinType: "combination",
      concerns: [
        { type: "hydration", level: "moderate" },
        { type: "sensitivity", level: "low" },
        { type: "oiliness", level: "high in t-zone" }
      ],
      recommendations: {
        morning: [
          "Gentle foaming cleanser",
          "Alcohol-free toner",
          "Light moisturizer",
          "SPF 30+ sunscreen"
        ],
        evening: [
          "Oil-based cleanser",
          "Hydrating serum",
          "Moisturizer for combination skin"
        ]
      }
    }

    res.json({
      success: true,
      imageUrl: uploadResponse.secure_url,
      analysis: mockAnalysis
    })

  } catch (error) {
    console.error('Error processing image:', error)
    if (error.http_code) {
      // Cloudinary error
      return res.status(error.http_code).json({ 
        error: 'Error uploading image to cloud storage' 
      })
    }
    res.status(500).json({ 
      error: 'Error processing image. Please try again.' 
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) 