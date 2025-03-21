function Results({ result }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Analysis Results</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-700">Skin Type</h3>
          <p className="text-gray-600 mt-1">{result.skinType}</p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-700">Concerns</h3>
          <ul className="list-disc list-inside text-gray-600 mt-1">
            {result.concerns.map((concern, index) => (
              <li key={index}>{concern}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-700">Recommended Products</h3>
          <div className="grid gap-4 mt-2">
            {result.recommendations.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <h4 className="font-medium text-gray-800">{product.name}</h4>
                <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results 