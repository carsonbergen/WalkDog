export default function Achievement(props) {
    return (
        <>
            <div className="bg-purple border-2 border-secondary rounded-md px-1 max-w-[10rem]">
                <div className="flex flex-row space-x-1 justify-start items-center">
                    {/* Readd icons */}
                    <span className="font-black text-lg">{props.title ?? 'Error: No title given!'}</span>
                </div>
                <p className="font-semibold">{props.description}</p>
            </div>
        </>
    );
}