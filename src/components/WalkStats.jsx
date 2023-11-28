import { SmileyXEyes, SmileyBlank, SmileySad, SmileyMeh, Smiley } from "phosphor-react";
import ProgressBar from "./ProgressBar";

export default function WalkStats(props) {
    return (
        <>
            <div className="flex flex-col items-start justify-center bg-primary text-md font-semibold w-48 h-16 px-2 pb-2 rounded-bl-3xl rounded-tr-lg border-2 border-secondary">
                <ProgressBar percentage={(props.distance/5)*100} goal={props.goal} distance={props.distance} />
                <div>
                    {props.photosTaken > 0 ? `Photos taken ${props.photosTaken}` : `No photos taken yet!`}
                </div>
                {/* Maybe a list of achievements earned */}
            </div>
        </>
    );
}