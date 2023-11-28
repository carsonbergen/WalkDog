import { useEffect, useState } from "react";
import WalkTracker from "../components/WalkTracker";
import { AcceptButton, RejectButton } from "../components/Button";
import Map from "../components/Map";

export default function WalkPage() {
    const [walkStarted, setWalkedStarted] = useState(false);

    const [distanceTraveled, setDistanceTraveled] = useState(0);
    const [walkInProgress, setWalkInProgress] = useState(false);

    return (
        <>
            {walkStarted ?
                <WalkTracker
                    distanceTraveled={distanceTraveled}
                    walkInProgress={walkInProgress}
                    onWalkInProgressChanged={(c) => { setWalkInProgress(c) }}
                />
                :
                <>
                    <div className="h-screen w-full justify-center items-center pt-20 pb-40 px-4 space-y-2">
                        <Map>

                        </Map>
                        <AcceptButton
                            className="flex flex-row items-center justify-center w-full h-12"
                            onClick={() => {setWalkedStarted(true)}}
                        >
                            Click here to start a walk!
                        </AcceptButton>
                    </div>
                </>
            }
        </>
    )
}