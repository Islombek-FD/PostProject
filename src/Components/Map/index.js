import React from "react";
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import { FaMapMarkerAlt } from "react-icons/fa";
import 'mapbox-gl/dist/mapbox-gl.css';
const token = "pk.eyJ1IjoiampreXVsZGFzaG92IiwiYSI6ImNrdGd1Y2NzdjBsa2oyb251cnZnaGNmeTQifQ.kfOmH4NG1USGAawwb8aQBw"

const Map = ReactMapboxGl({ accessToken: token });



function SimpleMap() {
   return (
      <div style={{ height: '100vh', width: '100%' }}>
         <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
               height: '235px',
               width: '386px'
            }}
            center={[69.24089136496995, 41.3256869915585]}
         >
            <Marker longitude={69.24089136496995} latitude={41.3256869915585} coordinates={[69.24089136496995, 41.3256869915585]} anchor="bottom" >
               <FaMapMarkerAlt color='red' style={{ width: "40px", height: "32px" }} />
            </Marker>
         </Map>
      </div>
   )
}

export default SimpleMap;