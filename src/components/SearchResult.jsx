import { At } from "phosphor-react";
import { Link } from "react-router-dom";

export default function SearchResult(props) {
    return (
        <>
            <div 
                id={props.id} 
                className={`
                    bg-primary text-secondary border-secondary border-2 w-full h-auto rounded-md p-2 ring-0
                    hover:bg-yellow hover:ring-2 hover:ring-cyan

                `}
            >
                <div className="flex flex-row flex-wraptext-center justify-start items-center space-x-1">
                    <img 
                        src={props.profilePicSrc} 
                        className={`
                            bg-yellow border-secondary border-2 rounded-full 
                            min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] h-auto
                            overflow-clip
                        `} 
                    />
                    <span className="bg-purple border-secondary border-2 rounded-md p-1">{props.name}</span>
                    
                    <Link 
                        className="bg-green border-secondary border-2 rounded-md p-1 flex flex-row space-x-2 items-center justify-start"
                        to={props.profileLink}
                        onClick={() => {
                            console.log("Going to ", props.profileLink)
                        }}
                    >
                        <At className="w-4 h-auto"/>
                        {props.username}
                    </Link>
                </div>
            </div>
        </>
    )
}