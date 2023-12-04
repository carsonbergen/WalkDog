import { Camera } from "phosphor-react";

export default function CameraButton(props) {
    return (
        <>
            <div 
                className="border-4 border-secondary bg-purple w-24 h-24 rounded-full p-4 z-50 focus:ring-2 ring-yellow"
                onClick={props.onClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="button-icon w-full h-full stroke-4 z-30">
                    <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36,36,0,0,1,164,132Z"></path>
                </svg>
            </div>
        </>
    );
}