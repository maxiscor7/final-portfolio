
import './ContactMap.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const ContactMap = () => {
    return (

        <div className='conteiner-map' >

            <div className='map-wrap'>


                <MapContainer center={[-34.687915622786676, -58.505536534932055]} zoom={10} className='leaflet-container'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                    />
                    <Marker position={[-34.687915622786676, -58.505536534932055]} >
                        <Popup >
                            Hi there ! 😃
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}
export default ContactMap