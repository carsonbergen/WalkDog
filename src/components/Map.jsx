import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Cookies from 'js-cookie';
import { getUserData } from '../lib/file';
import L from "leaflet";
import WalkStats from './WalkStats';
import haversine from 'haversine';

export default function Map(props) {
    const mapRef = useRef(null);

    const email = Cookies.get("user");
    const userData = getUserData(email);

    const [routePoints, setRoutePoints] = useState(userData.walks[0].points)
    const [currentPoint, setCurrentPoint] = useState(0);
    let pointsPictureTaken = [];

    const center = routePoints[currentPoint];

    const mapPinIcon = new L.Icon({
        iconUrl: '/resources/map-pin-fill.svg',
        iconSize: [32, 32],
    });

    const mapStartIcon = new L.Icon({
        iconUrl: '/resources/flag-fill.svg',
        iconSize: [32, 32],
    });

    const cameraIcon = new L.Icon({
        iconUrl: '/resources/camera-fill.svg',
        iconSize: [32, 32],
    });

    useEffect(() => {
        let animationFrame;
        let prevTimeStamp;

        const animate = (timeStamp) => {
            if (props.paused) return;
            if (!prevTimeStamp) prevTimeStamp = timeStamp;

            const dt = timeStamp - prevTimeStamp;

            if (dt >= 200) {
                setCurrentPoint(currentPoint + 1);
                prevTimeStamp = timeStamp;
            }
            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrame);
    }, [props.paused, currentPoint]);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setView(routePoints[currentPoint] ?? routePoints[routePoints.length - 1], 20);
        }
    }, [currentPoint]);

    return (
        <>
            <div className='flex flex-col h-full w-full space-y-2'>
                <WalkStats
                    mood={0}
                    distance={
                        haversine(
                            {
                                latitude: routePoints[0][0],
                                longitude: routePoints[0][1]
                            },
                            {
                                latitude: routePoints[currentPoint] !== undefined ? routePoints[currentPoint][0] : routePoints[routePoints.length - 1][0],
                                longitude: routePoints[currentPoint] !== undefined ? routePoints[currentPoint][1] : routePoints[routePoints.length - 1][1]
                            },
                            {
                                unit: 'km'
                            }
                        ).toFixed(2)
                    }
                    photosTaken={props.photosTaken}
                    goal={5}
                    walkData={userData.walks[0]}
                    className='z-50'
                />
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
                        {
                            pointsPictureTaken.map((point) => {
                                <Marker position={point} icon={cameraIcon} />
                            })
                        }
                    </MapContainer>
                </div>
            </div>
        </>
    );
}