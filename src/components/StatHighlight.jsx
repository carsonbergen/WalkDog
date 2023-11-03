export default function StatHighlight(props) {
    return (
        <>
            <span className={`flex flex-row max-w-fit mx-1 items-center border-2 border-secondary rounded-md px-1 font-bold ${props.className}`}>
                {props.value}
                {props.icon}
            </span>
        </>
    );
}