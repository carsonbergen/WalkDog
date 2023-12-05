import React, { useEffect, useState } from 'react';
import Map from '../components/Map';
import Button, { AcceptButton, OptionalButton, RejectButton } from '../components/Button';
import { Pause, Play, X } from 'phosphor-react';
import WalkStats from '../components/WalkStats';
import CameraButton from './CameraButton';
import Cookies from "js-cookie";
import { getUserData } from "../lib/file";
import Modal from './Modal';

export default function WalkTracker(props) {
    const email = Cookies.get("user");
    const userData = getUserData(email);

    const [cameraModalOpen, setCameraModalOpen] = useState(false);

    const [photoIndex, setPhotoIndex] = useState(0);
    const [photosTaken, setPhotosTaken] = useState(0);

    useEffect(() => {
        localStorage.setItem("photos_taken", 0);
    }, []);

    return (
        <>
            <Modal
                open={cameraModalOpen}
                onClose={() => { setCameraModalOpen(false) }}
                height={"h-full"}
                width={"w-full"}
            >
                <div className='flex flex-col space-y-2'>
                    <div className='w-full h-full max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%] overflow-clip border-2 border-secondary rounded-md'>
                        <img
                            src={`${userData.walks[0].photos[photoIndex]}`}
                        />
                    </div>
                    <AcceptButton
                        onClick={() => {
                            setPhotoIndex(photoIndex + 1);
                            setPhotosTaken(photoIndex + 1);
                            if (photoIndex > userData.walks[0].photos.length - 2) {
                                setPhotoIndex(userData.walks[0].photos.length - 1);
                            }
                            localStorage.setItem("photos_taken", photoIndex + 1);
                            setCameraModalOpen(false);
                        }}
                    >
                        Take photo
                    </AcceptButton>
                </div>
            </Modal>

            <div className="flex flex-col h-full w-full pt-24 pb-32 px-4 space-y-2 absolute overflow-hidden justify-center items-center">
                <div className='absolute z-20 right-6 bottom-[10.5rem]'>
                    <CameraButton
                        onClick={() => {
                            setCameraModalOpen(true);
                        }}
                    />
                </div>
                <div className="w-full h-full">
                    <Map paused={props.walkInProgress} photosTaken={photosTaken} />
                </div>
                {props.walkInProgress ? (
                    <div className='flex flex-row justify-stretch space-x-2 w-full h-full'>
                        <RejectButton
                            className="flex flex-row items-center justify-center w-full h-12 z-0"
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
                            className="flex flex-row items-center justify-center w-full h-12 z-0"
                            onClick={() => {
                                props.onWalkInProgressChanged(false);
                            }}
                        >
                            <Play
                                className='w-full h-full'
                                weight='fill'
                            />
                        </AcceptButton>
                    </div>
                ) : (
                    <OptionalButton
                        className="flex flex-row items-center justify-center w-full h-12 z-0"
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
        </>
    );
}


