export default function ToggleSwitch(props) {
    return (
        <>
            <div className="">
                <label className="relative inline-flex items-center cursor-pointer">
                    {/* 
                            Modified version of the second toggle switch found here https://flowbite.com/docs/forms/toggle/ 
                            Last accessed 2023-10-30
                        */}
                    <input
                        type="checkbox"
                        value=""
                        className="sr-only peer" 
                        onChange={props.onChange}
                    />
                    <div
                        className={`
                                w-12 h-6 bg-red border-secondary border-2
                                peer-focus:outline-none
                                rounded-full peer 
                                peer-checked:after:translate-x-full peer-checked:after:border-secondary 
                                after:content-[''] after:absolute after:top-[0px] after:left-[0px] after:bg-primary after:border-secondary
                                after:border-2 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green
                                hover:ring-2 ring-secondary ring-offset-1
                            `}
                    />
                </label>
            </div>
        </>
    );
}