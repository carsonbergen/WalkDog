import { useEffect, useState } from "react";
import WalkTracker from "../components/WalkTracker";
import { AcceptButton, RejectButton } from "../components/Button";
import Map from "../components/Map";
import Cookies from "js-cookie";
import { getUserData } from "../lib/file";
import Modal from "../components/Modal";

export default function WalkPage() {
    const email = Cookies.get("user");
    const [userData, setUserData] = useState(getUserData(email));

    const [walkStarted, setWalkedStarted] = useState(false);
    const [walkEnded, setWalkEnded] = useState(false);

    const [distanceTraveled, setDistanceTraveled] = useState(0);
    const [photosTaken, setPhotosTaken] = useState(0);
    const [walkInProgress, setWalkInProgress] = useState(false);

    const [cancelWalkDialogOpen, setCancelWalkDialogOpen] = useState(false);

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
                        onClick={() => {setCancelWalkDialogOpen(false)}}
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
                />) : walkEnded ? (
                    <>
                        <div className="h-screen w-full justify-center items-center pt-20 pb-40 px-4 space-y-2">
                            <span className="text-3xl font-black">
                                Congratulations!
                            </span>
                            <div className="flex flex-col">
                                <div>
                                    You walked {distanceTraveled} km with {userData.dogs[0].name} and took {photosTaken} photos!
                                </div>
                                <div>
                                    {/* Display photos taken. */}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                <>
                    <div className="h-screen w-full justify-center items-center pt-20 pb-40 px-4 space-y-2">
                        <Map />
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