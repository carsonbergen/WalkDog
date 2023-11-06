import { Link } from "react-router-dom";

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
                className={`w-full h-10 rounded-md font-black border-2 text-lg border-secondary bg-green text-secondary`}
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
                className={`w-full h-10 rounded-md font-black border-2 text-lg border-secondary bg-red text-secondary`}
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
                className={`w-full h-10 rounded-md font-black border-2 text-lg border-secondary bg-orange text-secondary`}
            >
                {props.children}
            </Button>
        </>
    )
}

export function UserButton(props) {
    return (
        <>
            <Link
                to={props.to}
            >
                <Button
                    onClick={props.onClick}
                    className={`w-auto h-auto px-1 rounded-md font-semibold border-2 text-lg border-secondary bg-green text-secondary`}
                >
                    {props.children}
                </Button>
            </Link>
        </>
    );
}