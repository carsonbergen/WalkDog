import { Check, DownloadSimple, X, Image } from "phosphor-react";
import { useState, useEffect, useRef } from "react";

export default function Notification(props) {
    if (props.notificationData.type === "achievement") {
        return (
            <>
                <div
                    id={props.id}
                    className={`
                        bg-purple text-secondary border-secondary border-2 w-full h-auto rounded-md p-2 ring-0
                        flex flex-col justify-start text-start space-y-2
                    `}
                >
                    <h1 className="bg-yellow border-secondary border-2 px-1 rounded-md text-lg font-black">
                        {props.notificationData.title}
                    </h1>
                    <div className="flex flex-row items-center justify-start space-x-2">
                        <div className="flex border-secondary bg-yellow w-full h-full max-h-[2.5rem] max-w-[2.5rem] min-h-[2.5rem] min-w-[2.5rem] justify-center items-center border-2 rounded-full">
                            {props.notificationData.icon}
                        </div>
                        <p>
                            <span className="bg-green border-2 border-secondary rounded-md px-1 font-bold">{props.name}</span>{props.notificationData.description}
                        </p>
                    </div>
                </div>
            </>
        );
    } else if (props.notificationData.type === "sent-friend-request") {
        const [visible, setVisible] = useState(true);
        const [rejected, setRejected] = useState(null);
        const elementRef = useRef(null);

        const handleAnimationEnd = () => {
            setVisible(false);
        };

        useEffect(() => {
            const element = elementRef.current;
            element.addEventListener('transitionend', handleAnimationEnd);

            return () => {
                element.removeEventListener('transitionend', handleAnimationEnd);
            };
        }, []);

        return (
            <>
                {visible ?
                    <div
                        id={props.id}
                        ref={elementRef}
                        className={`
                        bg-primary text-secondary border-secondary border-2 w-full h-auto rounded-md p-2 ring-0
                        flex flex-col justify-start text-start space-y-2 transition-all duration-300
                        ${(rejected === false) ? "animate-jump animate-once animate-duration-300 opacity-0" : ""}
                        ${(rejected === true) ? "animate-shake animate-once animate-duration-300 opacity-0" : ""}
                    `}
                    >
                        <div className={`
                            flex flex-row items-center justify-start space-x-2 
                            ${(rejected && rejected !== null) ? "animate-shake animate-once" : "animate-ping animate-once"}
                        `}
                        >
                            <div className="flex border-secondary bg-yellow w-full h-full max-h-[2.5rem] max-w-[2.5rem] min-h-[2.5rem] min-w-[2.5rem] justify-center items-center border-2 rounded-full">
                                <DownloadSimple weight="fill" className="w-8 h-8" />
                            </div>
                            <p>
                                <span className="bg-green border-2 border-secondary rounded-md px-1 font-bold">{props.name}</span>{props.notificationData.description}
                            </p>
                            <button
                                className="flex flex-row border-secondary bg-green w-full h-full max-h-[2.5rem] max-w-[2.5rem] min-h-[2.5rem] min-w-[2.5rem] justify-center items-center border-2 rounded-full"
                                onClick={() => {
                                    setRejected(false);
                                }}
                            >
                                <Check weight="fill" className="w-8 h-8" />
                            </button>
                            <button
                                className="flex flex-row border-secondary bg-red w-full h-full max-h-[2.5rem] max-w-[2.5rem] min-h-[2.5rem] min-w-[2.5rem] justify-center items-center border-2 rounded-full"
                                onClick={() => {
                                    setRejected(true);
                                }}
                            >
                                <X weight="fill" className="w-8 h-8" />
                            </button>
                        </div>
                    </div>
                    :
                    null
                }
            </>
        );
    } else if (props.notificationData.type === "accepted-friend-request") {
        return (
            <>
                <div
                    id={props.id}
                    className={`
                    bg-primary text-secondary border-secondary border-2 w-full h-auto rounded-md p-2 ring-0
                        flex flex-col justify-start text-start space-y-2
                    `}
                >
                    <div className="flex flex-row items-center justify-start space-x-2">
                        <div className="flex border-secondary bg-green w-full h-full max-h-[2.5rem] max-w-[2.5rem] min-h-[2.5rem] min-w-[2.5rem] justify-center items-center border-2 rounded-full">
                            <Check weight="fill" className="w-8 h-8" />
                        </div>
                        <p>
                            <span className="bg-green border-2 border-secondary rounded-md px-1 font-bold">{props.name}</span>{props.notificationData.description}
                        </p>
                    </div>
                </div>
            </>
        )
    } else if (props.notificationData.type === "friend-posted") {
        return (
            <>
                <div
                    id={props.id}
                    className={`
                    bg-primary text-secondary border-secondary border-2 w-full h-auto rounded-md p-2 ring-0
                        flex flex-col justify-start text-start space-y-2
                    `}
                >
                    <div className="flex flex-row items-center justify-start space-x-2">
                        <div className="flex border-secondary bg-green w-full h-full max-h-[2.5rem] max-w-[2.5rem] min-h-[2.5rem] min-w-[2.5rem] justify-center items-center border-2 rounded-full">
                            <Image weight="fill" className="w-8 h-8" />
                        </div>
                        <p>
                            <span className="bg-green border-2 border-secondary rounded-md px-1 font-bold">{props.name}</span>
                            {props.notificationData.description}
                            <span className="bg-yellow border-2 border-secondary rounded-md px-1 font-bold">{props.dog}</span>!
                        </p>
                    </div>
                </div>
            </>
        )
    } else {
        <>
            <div
                id={props.id}
                className={`
                bg-primary text-secondary border-secondary border-2 w-full h-auto rounded-md p-2 ring-0
                        flex flex-col justify-start text-start space-y-2
                    `}
            >
            </div>
        </>
    }
}