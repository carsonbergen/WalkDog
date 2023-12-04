import { useEffect, useState } from "react";
import WalkTracker from "../components/WalkTracker";
import { AcceptButton, RejectButton } from "../components/Button";
import Map from "../components/Map";
import Cookies from "js-cookie";
import { addDistanceToUserStats, addPhotosToUserStats, getUserData } from "../lib/file";
import Modal from "../components/Modal";
import Achievement from "../components/Achievement";
import { checkIfAchievementEarned, getAchievement } from "../lib/achievementChecker";

export default function WalkPage() {
    const minDistanceNeeded = 5;

    const email = Cookies.get("user");
    const [userData, setUserData] = useState(getUserData(email));

    const [walkStarted, setWalkedStarted] = useState(false);
    const [walkEnded, setWalkEnded] = useState(false);
    const [statsAdded, setStatsAdded] = useState(false);

    const [distanceTraveled, setDistanceTraveled] = useState(0);
    const [walkInProgress, setWalkInProgress] = useState(false);

    const [cancelWalkDialogOpen, setCancelWalkDialogOpen] = useState(false);

    useEffect(() => {
        console.log(walkEnded);
        if (walkEnded === true && statsAdded !== true) {
            addDistanceToUserStats(email, localStorage.getItem("total_distance_walked"));
            addPhotosToUserStats(email, localStorage.getItem("photos_taken"));
            setStatsAdded(true);
        }
    }, [walkEnded]);

    return (
        <>
            <Modal
                onClose={() => {
                    setCancelWalkDialogOpen(false);
                }}
                open={cancelWalkDialogOpen}
                title="End walk?"
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
                        <div className="absolute overflow-hidden flex flex-col h-screen w-full justify-center items-center pt-20 pb-40 px-4 space-y-2">
                            <span className="text-3xl font-black">
                                Congratulations!
                            </span>
                            <div>
                                You walked {localStorage.getItem("total_distance_walked")} km with {userData.dogs[0].name} and took {localStorage.getItem("photos_taken")} photos!
                            </div>
                            {/* Display photos taken. */}
                            <div className="carousel w-full h-full min-h-max rounded-box px-4 space-x-1 bg-secondary border-2 border-secondary flex justify-start items-center">
                                {
                                    userData.walks[0].photos.slice(0, localStorage.getItem("photos_taken")).map((photo_src) => (
                                        <div className="carousel-item w-full h-auto object-cover object-center">
                                            <img src={`${photo_src}`} />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="text-lg font-black">
                                Achievements earned
                            </div>
                            <div className="carousel h-full w-full min-h-min">
                                {/* Display achievements earned. */}
                                {
                                    userData.walks[0].possible_achievements.map((achievementId) => (
                                        <div className="m-1 w-fit h-fit carousel-item" key={achievementId}>
                                            {
                                                checkIfAchievementEarned(achievementId) ?
                                                    <Achievement
                                                        title={getAchievement(achievementId).title}
                                                        description={getAchievement(achievementId).description}
                                                    />
                                                    :
                                                    null
                                            }
                                        </div>
                                    ))
                                }
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
                        <Map paused={true} />
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