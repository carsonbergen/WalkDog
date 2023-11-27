// Scale of 0 to 3

import { SmileyXEyes, SmileyBlank, SmileySad, SmileyMeh, Smiley } from "phosphor-react";

export default function DogHappinessMeter(props) {
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-primary w-26 h-30 px-2 pb-2 rounded-bl-3xl border-l-2 border-b-2 border-secondary">
                <span className="font-black text-xl flex flex-row w-full justify-center items-center">
                    Mood
                </span>
                {
                    (props.scale === 0) ? (
                        <SmileyXEyes
                            className="w-16 h-16"
                            weight="bold"
                        />
                    ) : (props.scale === 1) ? (
                        <SmileySad
                            className="w-16 h-16"
                            weight="bold"
                        />
                    ) : (props.scale === 2) ? (
                        <SmileyMeh
                            className="w-16 h-16 animate-wiggle animate-infinite"
                            weight="bold"
                        />
                    ) : (props.scale === 3) ? (
                        <Smiley
                            className="w-16 h-16 animate-wiggle-more animate-infinite"
                            weight="bold"
                        />
                    ) : (
                        <SmileyBlank 
                            className="w-16 h-16"
                            weight="bold"
                        />
                    )
                }
            </div>
        </>
    );
}