import Button from "./Button";
import SearchResult from "./SearchResult";
import TextInput from "./TextInput";

/**
 * 
 * @param {*} props 
 * @param props.onClose 
 * @returns 
 */
export default function Modal(props) {
    return (
        <>
            <div className="absolute w-full h-full z-30 py-24 px-4 backdrop-blur-sm shadow-md">
                <div className="flex flex-col w-full h-full z-[9999] bg-primary border-secondary border-2 rounded-md p-2">
                    <div className="flex flex-row">
                        <Button
                            onClick={props.onClose}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[42px] h-[42px] fill-secondary">
                                <path d="M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                            </svg>
                        </Button>
                    </div>
                    <div className="p-2">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}


export function FriendSearch(props) {
    return (
        <>
            <Modal
                onClose={props.onClose}
            >
                <TextInput
                    title="Enter your friend's username below"
                    placeholder="Name of your friend"
                />
                <div className="flex flex-col space-y-2 py-2">
                {
                    props.results !== undefined ?
                        props.results.map((result) => (
                            <SearchResult
                                id={result.id}
                                name={result.name}
                                username={result.username}
                                profilePicSrc={result.profilePicSrc}
                                profileLink={result.profileLink}
                            />
                        ))
                        :
                        <div>
                            No results!
                        </div>
                }
                </div>
            </Modal>
        </>
    );
}