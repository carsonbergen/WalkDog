import React, { useEffect, useState } from 'react';
import Map from '../components/Map';
import Button, { AcceptButton, OptionalButton, RejectButton } from '../components/Button';
import { Pause, Play, X } from 'phosphor-react';
import WalkStats from '../components/WalkStats';
import CameraButton from './CameraButton';
import Cookies from "js-cookie";
import { getUserData } from "../lib/file";

export default function WalkTracker(props) {
    const email = Cookies.get("user");
    const [userData, setUserData] = useState(getUserData(email));
    const [walkStarted, setWalkStarted] = useState(true);

    return (
        <>
            <div className={`absolute overflow-hidden h-screen w-full justify-center items-center pt-20 pb-40 px-4`}>
                <div className='absolute z-20 right-4'>
                    <WalkStats
                        mood={0}
                        distance={props.distanceTraveled}
                        goal={5}
                        walkData={userData.walks[0]}
                    />
                </div>
                <div className='absolute z-20 right-6 bottom-[10.5rem]'>
                    <CameraButton progress={props.progress}></CameraButton>
                </div>
                <Map walkInProgress={!props.walkInProgress}/>
                
                {/* Start, pause, and etc. buttons */}
                <div className='flex flex-row py-2 space-x-2'>
                    {props.walkInProgress ? (
                        <>
                            <RejectButton
                                className="flex flex-row items-center justify-center w-full h-12"
                                onClick={() => {
                                    props.onEndWalk();
                                }}
                            >
                                <X
                                    className='w-full h-full'
                                    weight='bold'
                                />
                            </RejectButton>
                            <AcceptButton
                                className="flex flex-row items-center justify-center w-full h-12"
                                onClick={() => {
                                    props.onWalkInProgressChanged(false);
                                }}
                            >
                                <Play
                                    className='w-full h-full'
                                    weight='fill'
                                />
                            </AcceptButton>
                        </>
                    ) : (
                        <OptionalButton
                            className="flex flex-row items-center justify-center w-full h-12"
                            onClick={() => {
                                props.onWalkInProgressChanged(true);
                            }}
                        >
                            <Pause
                                className='w-full h-full'
                                weight='fill'
                            />
                        </OptionalButton>

                    )
                    }
                </div>
            </div>
        </>
    );
}


