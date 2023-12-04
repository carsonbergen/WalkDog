import { CircleNotch } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Cookies from 'js-cookie';
import { getUserData } from '../lib/file';

export default function Map() {
    const email = Cookies.get("user");
    const [userData, setUserData] = useState(getUserData(email));
    const [position, setPosition] = useState(userData.location);
    const routeCoordinates = [
        [51.0754748, -114.1365543],
        [51.0755748, -114.1367543],
        [51.0756948, -114.1367543],
      ];

    return (
        <>
            <div className="flex justify-center items-end h-full w-full border-2 border-secondary rounded-lg overflow-clip z-0">
                <MapContainer
                    center={position}
                    zoom={20}
                    style={{ width: '100vw', height: '100vh' }}
                    className='z-0'
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Polyline positions={routeCoordinates} color='blue' />
                    <Marker position={position}>
                        <Popup>
                            This is you!
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    );
}