import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <>
            <div className="absolute top-0 left-0 w-full py-2 px-8">
                <div className="absolute bottom-0 left-0 z-0 w-full h-full py-2 px-8">
                    <div className="h-full w-full border-2 border-secondary rounded-lg">
                    </div>
                </div>
                <div className="relative flex flex-row justify-between w-full items-baseline px-1 py-1">
                    <div className="flex-shrink-0 w-[25%] flex flex-row justify-center">
                        <Link
                            to="feed"
                            className={`flex items-center justify-center rounded-lg bg-purple w-16 h-10 p-4 border-secondary border-2 stroke-2`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="stroke-[2rem] fill-yellow stroke-black paint-stroke">
                                <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="flex-grow flex flex-row justify-center">
                        {/* Empty */}
                    </div>
                    <div className="flex-shrink-0 w-[25%] flex flex-row justify-center">
                        <Link
                            to="my-profile"
                            className={`flex items-center justify-center rounded-lg bg-purple w-16 h-10 p-4 border-secondary border-2`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="stroke-[2rem] fill-yellow stroke-black paint-stroke">
                                <path d="M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68ZM172,224a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,224Z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}