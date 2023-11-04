
export default function Page(props) {
    return (
        <>
            <div className={`w-full pt-12 pb-24`}>
                <h1 className="text-3xl font-nunito font-black">
                    {props.title}
                </h1>
                {props.children}
            </div>
        </>
    );
}