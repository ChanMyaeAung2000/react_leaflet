import LeafletMap from './LeafletMap'
import data from './data.json'

function getTotal(products) {
  return products.reduce((sum, p) => sum + p.amount, 0)
}

function App() {
  const total = getTotal(data.products)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Leaflet Map Test</h1>
      <LeafletMap />
      <div className="mt-6 bg-white p-4 rounded-lg shadow text-center">
        <p className="text-lg font-semibold text-gray-700">
          Total Amount: <span className="text-blue-600">{total.toLocaleString()} MMK</span>
        </p>
      </div>
    </div>
  )
}

export default App
