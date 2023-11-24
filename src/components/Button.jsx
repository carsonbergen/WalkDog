export default function Button(props) {
    return (
        <>
            <button
                id={props.id}
                onClick={props.onClick}
                className={props.className}
            >
                {props.children}
            </button>
        </>
    );
}

export function AcceptButton(props) {
    return (
        <>
            <Button 
                onClick={props.onClick}
                className={`w-full h-10 rounded-md font-black border-2 hover:ring-2 text-lg border-secondary bg-green text-secondary ring-green`}
            >
                {props.children}
            </Button>
        </>
    );
}

export function RejectButton(props) {
    return (
        <>
            <Button 
                onClick={props.onClick}
                className={`w-full h-10 rounded-md font-black border-2 hover:ring-2 text-lg border-secondary bg-red text-secondary ring-red`}
            >
                {props.children}
            </Button>
        </>
    );
}

export function OptionalButton(props) {
    return (
        <>
            <Button
                onClick={props.onClick}
                className={`w-full h-10 rounded-md font-black border-2 hover:ring-2 text-lg border-secondary bg-orange text-secondary ring-orange`}
            >
                {props.children}
            </Button>
        </>
    )
}