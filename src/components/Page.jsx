
export default function Page(props) {
    return (
        <>
            <div className={`w-full h-full pt-16 pb-24 px-4`}>
                <h1 className="text-3xl font-nunito font-black">
                    {props.title}
                </h1>
                {props.children}
            </div>
        </>
    );
}