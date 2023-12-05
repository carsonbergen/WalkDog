import { SmileyXEyes, SmileyBlank, SmileySad, SmileyMeh, Smiley } from "phosphor-react";
import ProgressBar from "./ProgressBar";
import { useEffect } from "react";
import { addDistanceToUserStats } from "../lib/file";

export default function WalkStats(props) {
    localStorage.setItem("total_distance_walked", props.distance);

    return (
        <>
            <div className="flex flex-col items-start justify-center bg-primary text-md font-semibold w-full h-16 p-2 rounded-lg border-2 border-secondary">
                <div className="flex flex-row w-full h-full space-x-2 justify-stretch">
                    <ProgressBar percentage={(props.distance / 5) * 100} goal={props.goal} distance={props.distance} />
                    <div className="w-full h-full justify-self-end">
                        {props.distance} km out of 5 km
                    </div>
                </div>
                <div>
                    {props.photosTaken > 0 ? `Photos taken ${props.photosTaken}` : `No photos taken yet!`}
                </div>
            </div>
        </>
    );
}