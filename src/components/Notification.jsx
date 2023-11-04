export default function Notification(props) {
    if (props.notificationData.type === "Achievement") {
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
    } else {
        <>
            <div
                id={props.id}
                className={`
                    bg-primary text-secondary border-secondary border-2 w-full h-auto rounded-md p-2 ring-0
                    hover:bg-yellow hover:ring-2 hover:ring-cyan
                `}
            >
                <div className="flex flex-row flex-wrap text-center justify-start items-center space-x-1">
                    <div className="flex flex-row flex-wrap">
                        Default notification
                    </div>
                </div>
            </div>
        </>
    }
}