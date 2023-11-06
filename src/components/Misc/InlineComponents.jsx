export function DogSpan(props) {
    return (
        <>
            <span className="w-auto h-auto px-1 rounded-md font-semibold border-2 border-secondary bg-cyan text-secondary">
                {props.children}
            </span>
        </>
    );
}

export function DateSpan(props) {
    return (
        <>
            <span className="w-auto h-auto px-1 rounded-md font-semibold border-2 border-secondary bg-purple text-secondary">
                {props.children}
            </span>
        </>
    );
}

export function DistanceSpan(props) {
    return (
        <>
            <span className="w-auto h-auto px-1 rounded-md font-semibold border-2 border-secondary bg-purple text-secondary">
                {props.children}
            </span>
        </>
    );
}

export function LocationSpan(props) {
    return (
        <>
            <span className="w-auto h-auto px-1 rounded-md font-semibold border-2 border-secondary bg-orange text-secondary">
                {props.children}
            </span>
        </>
    );
}