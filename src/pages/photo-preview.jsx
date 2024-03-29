export default function PhotoPreview() {
    return (
        <>
            <div className="h-[80vh] w-full flex flex-col items-center bg-slate-300 border-secondary border-2 rounded-md">
                <div className="flex-grow flex flex-col items-center justify-center px-10">
                    <h2 className="text-2xl mb-4 z-0">View of user's camera</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="fill-gray-600 z-0">
                        <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36,36,0,0,1,164,132Z"></path>
                    </svg>
                    <span className="absolute bottom-[20vh] left-[7vw] z-10 justify-self-start bg-orange border-2 border-secondary rounded-md p-2">
                        Location of the photo
                    </span>
                    <span className="absolute bottom-[12vh] left-[7vw] z-10 justify-self-start bg-orange border-2 border-secondary rounded-md p-2">
                        Date the photo was taken
                    </span>
                </div>
            </div>
            <div>
                
            </div>
        </>
    );
}