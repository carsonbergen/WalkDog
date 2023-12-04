import { useEffect, useState } from "react";
import WalkTracker from "../components/WalkTracker";
import { AcceptButton, RejectButton } from "../components/Button";
import Map from "../components/Map";
import Cookies from "js-cookie";
import { getUserData } from "../lib/file";
import Modal from "../components/Modal";

export default function WalkPage() {
    const minDistanceNeeded = 5;

    const email = Cookies.get("user");
    const [userData, setUserData] = useState(getUserData(email));

    const [walkStarted, setWalkedStarted] = useState(false);
    const [walkEnded, setWalkEnded] = useState(false);

    const [distanceTraveled, setDistanceTraveled] = useState(0);
    const [photosTaken, setPhotosTaken] = useState(0);
    const [walkInProgress, setWalkInProgress] = useState(false);

    const [cancelWalkDialogOpen, setCancelWalkDialogOpen] = useState(false);

    const [photos, setPhotos] = useState([]);
    const [achievements, setAchievements] = useState([]);


    return (
        <>
            <Modal
                onClose={() => {
                    setCancelWalkDialogOpen(false);
                }}
                open={cancelWalkDialogOpen}
                title="Cancel walk?"
                className="flex flex-col justify-center items-center"
                width="w-full"
                height="h-auto"
            >
                <div className="flex flex-row space-x-2">
                    <RejectButton
                        onClick={() => { setCancelWalkDialogOpen(false) }}
                    >
                        No!
                    </RejectButton>
                    <AcceptButton
                        onClick={() => {
                            setWalkEnded(true);
                            setCancelWalkDialogOpen(false);
                        }}
                    >
                        Yes!
                    </AcceptButton>
                </div>
            </Modal>
            {walkStarted && !walkEnded ? (
                <WalkTracker
                    distanceTraveled={distanceTraveled}
                    walkInProgress={walkInProgress}
                    onWalkInProgressChanged={(c) => { setWalkInProgress(c) }}
                    onEndWalk={() => {
                        setCancelWalkDialogOpen(true);
                    }}
                    progress={(distanceTraveled / minDistanceNeeded) * 100}
                />) : walkEnded ? (
                    <>
                        <div className="absolute overflow-hidden h-screen w-full justify-center items-center pt-20 pb-40 px-4 space-y-2">
                            <span className="text-3xl font-black">
                                Congratulations!
                            </span>
                            <div>
                                You walked {localStorage.getItem("total_distance_walked")} km with {userData.dogs[0].name} and took {localStorage.getItem("photos_taken")} photos!
                            </div>
                            {/* Display photos taken. */}
                            <div className="carousel h-full w-full max-h-[82%] rounded-box px-4 space-x-1 bg-secondary border-2 border-secondary flex justify-start items-center">
                                {
                                    userData.walks[0].photos.map((photo_src) => (
                                        <div className="carousel-item w-full h-full object-cover object-center">
                                            <img src={`${photo_src}`} />
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                {/* Display achievements earned. */}
                            </div>
                            <AcceptButton
                                className="flex flex-row items-center justify-center w-full h-12"
                                onClick={() => {
                                    setWalkedStarted(true);
                                    setWalkEnded(false);
                                }}
                            >
                                Click here to start another walk!
                            </AcceptButton>
                        </div>
                    </>
                ) : (
                <>
                    <div className="h-screen w-full justify-center items-center pt-20 pb-40 px-4 space-y-2">
                        <Map paused={true}/>
                        <AcceptButton
                            className="flex flex-row items-center justify-center w-full h-12"
                            onClick={() => { setWalkedStarted(true) }}
                        >
                            Click here to start a walk!
                        </AcceptButton>
                    </div>
                </>)
            }
        </>
    )
}