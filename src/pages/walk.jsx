import React from 'react';
import Map from '../components/Map';
import DogHappinessMeter from '../components/DogHappinessMeter';
import Button, { AcceptButton } from '../components/Button';
import { Play } from 'phosphor-react';

export default function Walk() {
    return (
        <>
            <div className='overflow-hidden h-screen w-full justify-center items-center pt-20 pb-40 px-4'>
                <div className='absolute z-50 right-4 '>
                    <DogHappinessMeter
                        scale={0}
                    />
                </div>
                <Map>

                </Map>
                {/* Start, pause, and etc. buttons */}
                <div className='flex flex-row py-2 space-x-2'>
                    <AcceptButton
                        className="flex flex-row items-center justify-center w-full h-12"
                    >
                        <Play 
                            className='w-full h-full'
                            weight='bold'
                        />
                    </AcceptButton>
                </div>
            </div>
        </>
    );
}


