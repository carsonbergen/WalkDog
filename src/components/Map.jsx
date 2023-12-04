import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Cookies from 'js-cookie';
import { getUserData } from '../lib/file';
import L from "leaflet";
import { useSpring, animated } from '@react-spring/web';

export default function Map(props) {
    const mapRef = useRef(null);

    const email = Cookies.get("user");
    const [userData, setUserData] = useState(getUserData(email));
    const [position, setPosition] = useState(userData.location);
    const [routePoints, setRoutePoints] = useState(userData.walks[0].points)
    const [currentPoint, setCurrentPoint] = useState(0);
    const [center, setCenter] = useState(routePoints[currentPoint]);

    const mapPinIcon = new L.Icon({
        iconUrl: '/resources/map-pin-fill.svg',
        iconSize: [32, 32],
    });

    const mapStartIcon = new L.Icon({
        iconUrl: '/resources/flag-fill.svg',
        iconSize: [32, 32],
    })

    useEffect(() => {
        const animate = () => {
            console.log(props.walkInProgress)
            if (!props.walkInProgress) {
                return;
            }
            if (currentPoint < routePoints.length) {
                setCurrentPoint((currentPoint) => currentPoint + 1);
            } else {
                return;
            }
            setTimeout(animate, 1000);
        };
        console.log(props.walkInProgress);

        animate();

        return () => clearTimeout(animate);
    }, [props.walkInProgress]);


    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setView(routePoints[currentPoint] ?? routePoints[routePoints.length - 1], 20);
        }
    }, [currentPoint]);

    return (
        <>
            <div className="flex justify-center items-end h-full w-full border-2 border-secondary rounded-lg overflow-clip z-0">
                <MapContainer
                    ref={mapRef}
                    center={center}
                    zoom={20}
                    style={{ width: '100vw', height: '100vh' }}
                    className='z-0'
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Polyline positions={routePoints.slice(0, currentPoint + 1)} color='#BDB2FF' weight={6} />
                    <Marker position={routePoints[currentPoint] ?? routePoints[routePoints.length - 1]} icon={mapPinIcon}>
                        <Popup>
                            This is you!
                        </Popup>
                    </Marker>
                    {
                        routePoints[currentPoint] !== routePoints[0] ?
                            <Marker position={routePoints[0]} icon={mapStartIcon} />
                            :
                            null
                    }
                </MapContainer>
            </div>
        </>
    );
}