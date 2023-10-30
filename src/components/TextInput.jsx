export default function TextInput(props) {
    return (
        <>
            <div>
                {
                    props.title !== undefined ?
                    <>
                        <h1 className="font-black text-xl">
                            {props.title}
                        </h1>
                    </>
                    :
                    null
                }
                <input 
                    id={props.id}
                    className="w-full h-8 rounded-md border-2 bg-gray-300 border-secondary px-2 py-1 text-md"
                    value={props.text}
                    onChange={props.onChange}
                    placeholder={props.placeholder ?? ''}
                >
                </input>
            </div>
        </>
    );
}