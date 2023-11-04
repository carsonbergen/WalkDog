import Button from "./Button";

/**
 * 
 * @param {*} props 
 * @param props.onClose 
 * @returns 
 */
export default function Modal(props) {
    return (
        <>
            <div className="absolute w-full h-full z-50 py-24 px-10 backdrop-blur-sm shadow-md"
                onClick={props.onClose}
            >
                <div className="flex flex-col w-full h-full z-50 bg-primary border-secondary border-2 rounded-md">
                    <div className="flex flex-row">
                        <Button
                            onClick={props.onClose}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                <path d="M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                            </svg>
                        </Button>
                    </div>
                    <div className="p-2">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}