import { At } from "phosphor-react";
import { useEffect } from "react"

export default function SearchResult(props) {
    useEffect(() => {
        console.log("Hello world")
    }, []);
    return (
        <>
            <div 
                id={props.id} 
                className={`
                    bg-primary text-secondary border-secondary border-2 w-full h-auto rounded-md p-2 ring-0
                    hover:bg-purple hover:ring-2 hover:ring-cyan

                `}
            >
                <div className="flex flex-row text-center space-x-1">
                    <span className="bg-yellow border-secondary border-2 rounded-md p-1">{props.name}</span>
                    <At className="w-6 h-auto"/>
                    <span className="bg-yellow border-secondary border-2 rounded-md p-1">{props.username}</span>
                </div>
            </div>
        </>
    )
}