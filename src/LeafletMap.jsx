import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function LeafletMap() {
  const position = [16.8409, 96.1735];

  return (
    <MapContainer center={position} zoom={13} className="h-[500px] w-full rounded-lg">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* CartoDB Dark Matte map */}
      {/* <TileLayer
  attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
/> */}
      <Marker position={position}>
        <Popup>
          Hello from Leaflet!
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default LeafletMap
