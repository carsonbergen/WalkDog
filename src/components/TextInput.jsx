export default function TextInput(props) {
    return (
        <>
            <div>
                {
                    props.title !== undefined ?
                    <>
                        <h1 className="font-bold text-base">
                            {props.title}
                        </h1>
                    </>
                    :
                    null
                }
                <input 
                    id={props.id}
                    className="w-full h-8 rounded-md border-2 bg-grey border-secondary px-2 py-1  text-dark_grey"
                    value={props.text}
                    onChange={props.onChange}
                    placeholder={props.placeholder ?? ''}
                    type={props.type ?? null}
                    name={props.name}
                >
                </input>
                {
                    props.error ?? '' != '' ?
                    
                    <div className="text-dark_red">
                        {
                            props.error == "required" ? "* This field is required" : props.error
                        }
                    </div>
                    : null
                }
                {props.children}
            </div>
        </>
    );
}