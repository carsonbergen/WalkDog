import { SmileyXEyes, SmileyBlank, SmileySad, SmileyMeh, Smiley } from "phosphor-react";

export default function WalkStats(props) {
    return (
        <>
            <div className="flex flex-col items-start justify-center bg-primary text-md font-semibold w-48 h-16 px-2 pb-2 rounded-bl-3xl rounded-tr-lg border-2 border-secondary">
                <div>
                    {props.distance} km
                </div>
                <div>
                    {props.photosTaken > 0 ? `Photos taken ${props.photosTaken}` : `No photos taken yet!`}
                </div>
                {/* Maybe a list of achievements earned */}
            </div>
        </>
    );
}