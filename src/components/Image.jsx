export default function Image(props) {
    return (
        <>
            <div className={`post-image relative overflow-hidden border-secondary w-full max-w-[100px] h-auto ${props.className}`}>
                <img
                    src={props.src}
                    alt={props.alt}
                    className="w-full h-full object-cover"
                />
            </div>
        </>
    );
}