import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { motion } from 'framer-motion'
import axios from 'axios'

function ImageUpload({ setAnalysisResult }) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)
  const [preview, setPreview] = useState(null)

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0]
    if (!file) return

    // Show preview
    setPreview(URL.createObjectURL(file))
    setError(null)
    setUploading(true)

    try {
      const formData = new FormData()
      formData.append('image', file)

      const response = await axios.post('http://localhost:5000/api/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      setAnalysisResult(response.data)
    } catch (err) {
      setError('Error analyzing image. Please try again.')
      console.error('Upload error:', err)
    } finally {
      setUploading(false)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    multiple: false
  })

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`border-2 border-dashed rounded-xl p-8 text-center ${
          isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300'
        }`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="space-y-4">
          <div className="text-4xl">📸</div>
          {preview ? (
            <img 
              src={preview} 
              alt="Preview" 
              className="mx-auto max-h-64 rounded-lg shadow-lg"
            />
          ) : (
            <p className="text-gray-600">
              {isDragActive
                ? "Drop your image here..."
                : "Drag & drop your skin image here, or click to select"}
            </p>
          )}
        </div>
      </motion.div>

      {uploading && (
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-gray-600">Analyzing your skin...</p>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center">
          {error}
        </div>
      )}
    </div>
  )
}

export default ImageUpload 