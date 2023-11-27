import React, { useState } from 'react';
import Map from '../components/Map';
import DogHappinessMeter from '../components/DogHappinessMeter';
import Button, { AcceptButton, OptionalButton } from '../components/Button';
import { Pause, Play } from 'phosphor-react';

export default function Walk() {
    const [walkInProgress, setWalkInProgress] = useState(true);
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
                    {
                        walkInProgress ? (
                            <>
                                <OptionalButton
                                    className="flex flex-row items-center justify-center w-full h-12"
                                >
                                    <Pause
                                        className='w-full h-full'
                                        weight='bold'
                                    />
                                </OptionalButton>
                            </>
                        ) : (
                            <AcceptButton
                                className="flex flex-row items-center justify-center w-full h-12"
                            >
                                <Play
                                    className='w-full h-full'
                                    weight='bold'
                                />
                            </AcceptButton>
                        )
                    }

                </div>
            </div>
        </>
    );
}


