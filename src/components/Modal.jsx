import Button from "./Button";
import Notification from "./Notification";
import SearchResult from "./SearchResult";
import TextInput from "./TextInput";
import ToggleSwitch from '../components/ToggleSwitch';
import { useState } from "react";
import { getUserData } from "./../lib/file";
import Cookies from 'js-cookie';

/**
 * 
 * @param {*} props 
 * @param props.onClose 
 * @returns 
 */
export default function Modal(props) {
    return (
        <>
            <div 
                className={`
                    fixed w-full h-full z-30 py-20 px-4 backdrop-blur-sm 
                    shadow-md transition-all duration-500 top-0 left-0
                    ${props.open ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
            >
                <div 
                    className={`
                        flex flex-col w-full h-full z-[9999] bg-primary border-secondary border-2 
                        rounded-md p-2 overflow-auto container
                        ${props.open ? "animate-jump-in" : "animate-jump-out pointer-events-none"}
                    `}
                >
                    <div className="flex flex-row justify-between items-center">
                        {
                            props.title ?
                                <>
                                    <h1 className="text-2xl font-bold">
                                        {props.title}
                                    </h1>
                                </>
                                :
                                null
                        }
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


export function FriendSearchModal(props) {
    return (
        <>
            <Modal
                onClose={props.onClose}
                open={props.open}
                title="Search for friends"
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
                                    key={result.id}
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

export function NotificationsModal(props) {
    return (
        <>
            <Modal
                onClose={props.onClose}
                open={props.open}
                title="Notifications"
            >
                <div className="flex flex-col space-y-2 py-2">
                    {
                        props.notifications !== undefined ?
                            props.notifications.map((notification) => (
                                <Notification
                                    key={notification.id}
                                    name={notification.name}
                                    dog={notification.dog}
                                    profileLink={notification.profileLink}
                                    notificationData={notification.notificationData}
                                />
                            ))
                            :
                            <div>
                                No notifications!
                            </div>
                    }
                </div>
            </Modal>
        </>
    )
}

export function SettingsModal(props) {
    const email = Cookies.get("user");
    const [userData, setUserData] = useState(getUserData(email));
    const [username, setUsername] = useState(userData.username);
    const [name, setName] = useState(userData.name);
    const [dogs, setDogs] = useState(userData.dogs);
    const [location, setLocation] = useState(userData.settings.location);
    const [camera, setCamera] = useState(userData.settings.camera);
    const [notification, setNotification] = useState(userData.settings.notification);

    return (
        <>
            <Modal
                onClose={props.onClose}
                open={props.open}
                title="Settings"
            >
                <div className="flex flex-col space-y-2 py-2">
                    {
                        props.userData !== undefined ? 
                        <div>
                            <div className="pb-1 text-xl font-bold">General</div>
                            <TextInput
                                title="Username:"
                                onChange={(e) => {
                                    props.userData.username = e.target.value
                                    setUsername(e.target.value)
                                }}
                                text={username}
                            />
                            <TextInput
                                title="Name:"
                                onChange={(e) => {
                                    props.userData.name = e.target.value
                                    setName(e.target.value)
                                }}
                                text={name}
                            />
                            {props.userData.dogs.map((dog, index) => (
                                <>
                                    <TextInput
                                        title="Dog's name:"
                                        onChange={(e) => {
                                            dog.name = e.target.value
                                            setDogs(e.target.value)
                                        }}
                                        text={dog.name}
                                    />
                                </>
                            ))}
                            <div className="pt-6 pb-1 text-xl font-bold">Permissions</div>
                            <div className='flex flex-row space-x-2'>
                                <span>Enable geolocation services</span>
                                <ToggleSwitch 
                                    checked={location}
                                    onChange={(e) => {
                                        setLocation(e.target.checked)
                                    }}
                                />
                            </div>
                            <div className='flex flex-row space-x-2'>
                                <span>Enable camera service</span>
                                <ToggleSwitch 
                                    checked={camera}
                                    onChange={(e) => {
                                        setCamera(e.target.checked)
                                    }}
                                />
                            </div>
                            <div className='flex flex-row space-x-2'>
                                <span>Enable notifications</span>
                                <ToggleSwitch 
                                    checked={notification}
                                    onChange={(e) => {
                                        setNotification(e.target.checked)
                                    }}
                                />                           
                            </div>
                        </div>
                        : <div>No settings!</div>
                    }
                </div>
            </Modal>
        </>
    )
   
}
export function FriendSearchModal(props) {
    return (
        <>
            <Modal
                onClose={props.onClose}
                open={props.open}
                title="Help"
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
                                    key={result.id}
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