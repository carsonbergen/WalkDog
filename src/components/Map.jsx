import { CircleNotch } from 'phosphor-react';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map() {
    const [position, setPosition] = useState(undefined);

    return (
        <>
            <div className="flex justify-center items-end h-full w-full border-2 border-secondary rounded-lg overflow-clip">
                {position ?
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position} />
                    </MapContainer>
                    :
                    <>
                        <div className='w-full h-full flex justify-center items-center'>
                            <CircleNotch className='animate-spin w-12 h-12'/>
                        </div>
                    </>
                }
            </div>
        </>
    );
}