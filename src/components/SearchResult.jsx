import { At, Check } from "phosphor-react";
import { Link } from "react-router-dom";
import { Plus } from "phosphor-react";
import { useEffect, useState } from "react";
import { addFriendRequestSent } from "../lib/file";
import Cookies from "js-cookie";
import { getUserData } from "../lib/file";

export default function SearchResult(props) {
    const email = Cookies.get("user");
    const userData= getUserData(email);

    console.log(userData.friend_requests.includes(props.email));

    const [requestSent, setRequestSent] = useState(false);

    useEffect(() => {
        console.log(userData);
        if (userData.friend_requests.includes(props.email)) {
            setRequestSent(true);
        }
    }, [userData]);

    return (
        <>
            <div
                id={props.id}
                className={`
                    bg-primary text-secondary border-secondary border-2 w-full h-auto rounded-md p-2 ring-0
                    hover:bg-yellow hover:ring-2 hover:ring-cyan

                `}
            >
                <div className={`
                            flex flex-row items-center justify-start space-x-2 
                            ${(requestSent) ? "animate-jump animate-once" : ""}
                        `}>
                    <img
                        src={props.profilePicSrc}
                        className={`
                            bg-yellow border-secondary border-2 rounded-full 
                            min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] h-auto
                            overflow-clip
                        `}
                    />
                    <span className="bg-purple border-secondary border-2 rounded-md p-1">{props.name}</span>
                    {/* {props.showUsername ?
                        <Link
                            className="bg-green border-secondary border-2 rounded-md p-1 flex flex-row space-x-2 items-center justify-start"
                            to={props.profileLink}
                            onClick={() => {
                                console.log("Going to ", props.profileLink)
                            }}
                        >
                            <At className="w-4 h-auto" />
                            {props.username}
                        </Link>
                        :
                        null
                    } */}
                    <button
                        className="flex flex-row border-secondary bg-green w-full h-full max-h-[2.5rem] max-w-[2.5rem] min-h-[2.5rem] min-w-[2.5rem] justify-center items-center border-2 rounded-full"
                        onClick={() => {
                            setRequestSent(true);
                            addFriendRequestSent(email, props.email);
                        }}
                    >
                        {
                            !requestSent ?
                            <Plus weight="fill" className="w-8 h-8" />
                            :
                            <Check weight="fill" className="w-8 h-8" />
                        }
                    </button>
                </div>
            </div>
        </>
    )
}