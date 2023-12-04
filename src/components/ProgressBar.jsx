// ProgressBar.js
import React, { useEffect, useState } from 'react';

export default function ProgressBar(props) {
    const [colour, setColour] = useState("red");

    useEffect(() => {
        if (props.percentage < 75) {
            setColour("orange");
        } else if (props.percentage < 100) {
            setColour("yellow");
        } else  if (props.percentage >= 100) {
            setColour("green");
        }
    }, [props.percentage]);

    return (
        <>
            <div className="flex flex-row w-full h-full items-center justify-start space-x-2">
                <div className="flex w-[100%] rounded-full bg-primary border-2 border-secondary h-4">
                    {/* Inner bar */}
                    <div
                        style={{ width: `${props.percentage}%` }}
                        className={`rounded-full bg-${colour} transition-all`}
                    />
                </div>
            </div>
        </>
    );
}

