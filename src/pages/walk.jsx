import React from 'react';
import Map from '../components/Map';
import DogHappinessMeter from '../components/DogHappinessMeter';

export default function Walk() {
    return (
        <>
            <div className='overflow-hidden h-screen w-full justify-center items-center pt-20 pb-24 px-4'>
                <div className='absolute z-50 right-4 '>
                    <DogHappinessMeter
                        scale={0}
                    />
                </div>
                <Map>

                </Map>
                {/* Start, pause, and etc. buttons */}
            </div>
        </>
    );
}


