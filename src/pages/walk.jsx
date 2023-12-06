import { useEffect, useState } from "react";
import WalkTracker from "../components/WalkTracker";
import { AcceptButton, RejectButton } from "../components/Button";
import Map from "../components/Map";
import Cookies from "js-cookie";
import { addDistanceToUserStats, addPhotosToUserStats, addPost, getUserData } from "../lib/file";
import Modal from "../components/Modal";
import Achievement from "../components/Achievement";
import { checkIfAchievementEarned, getAchievement } from "../lib/achievementChecker";
import { Link } from "react-router-dom";

export default function WalkPage() {
    const createFormattedDate = (date) => {
        var formattedDate =
            date.getMonth() + '-' +
            date.getDate() + '-' +
            date.getFullYear();
        return formattedDate.toString();
    }

    const minDistanceNeeded = 5;

    const email = Cookies.get("user");
    const [userData, setUserData] = useState(getUserData(email));

    const [walkStarted, setWalkedStarted] = useState(false);
    const [walkEnded, setWalkEnded] = useState(false);
    const [statsAdded, setStatsAdded] = useState(false);

    const [distanceTraveled, setDistanceTraveled] = useState(0);
    const [walkInProgress, setWalkInProgress] = useState(false);

    const [cancelWalkDialogOpen, setCancelWalkDialogOpen] = useState(false);

    const [posted, setPosted] = useState(false);

    useEffect(() => {
        if (walkEnded === true && statsAdded !== true) {
            addDistanceToUserStats(email, localStorage.getItem("total_distance_walked"));
            addPhotosToUserStats(email, localStorage.getItem("photos_taken"));
            setStatsAdded(true);
        }
    }, [walkEnded]);

    if (userData.settings.location === false) {
        return (
            <>
                <div className="flex flex-col h-screen w-full pt-20 pb-24 px-4 space-y-2">
                    <h1 className="text-3xl font-black">
                        You must have location services turned on in order to use the walk feature!
                    </h1>
                    <p1 className="text-lg font-semibold">
                        You can change your settings on the my profile page.
                    </p1>
                    <AcceptButton>
                        <Link to={"/my-profile"}>
                            Take me there!
                        </Link>
                    </AcceptButton>

                </div>
            </>
        )
    }

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
            <Modal
                onClose={() => {
                    setPosted(false);

                    addPost(email,
                        {
                            "id": -1,
                            "author": userData.name,
                            "dog": userData.dogs[0].name,
                            "date": createFormattedDate(new Date()),
                            "distance": localStorage.getItem("total_distance_walked"),
                            "location": "River Park",
                            "content": `${userData.name} walked his dog at 10:55 AM today!`,
                            "imageSrc": `${userData.walks[0].photos[0]}`,
                            "profileLink": "/feed",
                            "liked": false,
                            "deleted": false
                        }
                    );
                }}
                open={posted}
                title="Posted!"
                className="flex flex-col justify-center items-center"
                width="w-full"
                height="h-auto"
            >
                <div className="flex flex-row space-x-2">
                    Your post has been posted to your friends' feed.
                </div>
            </Modal >
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
                        <div className="flex flex-col h-screen w-full pt-20 pb-24 px-4 space-y-2">
                            <span className="text-3xl font-black">
                                Congratulations!
                            </span>
                            <div>
                                You walked {localStorage.getItem("total_distance_walked")} km with {userData.dogs[0].name} and took {localStorage.getItem("photos_taken")} photos!
                            </div>
                            {/* Display photos taken. */}
                            <div className="carousel w-full h-full rounded-box px-4 space-x-1 bg-secondary border-2 border-secondary flex justify-start items-center">
                                {
                                    userData.walks[0].photos.slice(0, localStorage.getItem("photos_taken")).map((photo_src) => (
                                        <div className="carousel-item w-auto h-full">
                                            <img src={`${photo_src}`} className='w-auto h-full object-cover' />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="text-lg font-black">
                                Achievements earned
                            </div>
                            <div className="carousel h-auto w-full min-h-min pb-12">
                                {/* Display achievements earned. */}
                                {
                                    userData.walks[0].possible_achievements.map((achievementId) => (
                                        <div className="m-1 w-fit h-fit carousel-item" key={achievementId}>
                                            {
                                                checkIfAchievementEarned(achievementId) ?
                                                    <Achievement
                                                        title={getAchievement(achievementId).title}
                                                        description={getAchievement(achievementId).description}
                                                        className={'h-fit'}
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
                                    setPosted(true);
                                }}
                            >
                                Click here to post!
                            </AcceptButton>
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
                    <div className="flex flex-col h-full w-full pt-24 pb-32 px-4 space-y-2 absolute overflow-hidden justify-center items-center">
                        <div className="w-full h-full">
                            <Map paused={true} />
                        </div>
                        <AcceptButton
                            className="flex flex-row items-center justify-center min-h-[2.5rem] h-10 z-0"
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