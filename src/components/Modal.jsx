import Button, { AcceptButton, OptionalButton } from "./Button";
import Notification from "./Notification";
import SearchResult from "./SearchResult";
import TextInput from "./TextInput";
import ToggleSwitch from '../components/ToggleSwitch';
import { useEffect, useState } from "react";
import { getResults, getUserData, getUsers } from "./../lib/file";
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
                    ${props.className}
                `}
            >
                <div 
                    className={`
                        flex flex-col z-[9999] bg-primary border-secondary border-2 
                        rounded-md p-2 overflow-auto container
                        ${props.open ? "animate-jump-in" : "animate-jump-out pointer-events-none"}
                        ${props.height} ${props.width}
                        ${props.background}
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
                    <div className="p-2 scroll-auto overflow-scroll">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}


export function FriendSearchModal(props) {
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setResults(getResults(search));
    }, [search]);

    return (
        <>
            <Modal
                onClose={props.onClose}
                open={props.open}
                title="Search for friends"
                height="h-full"
                width="w-full"
            >
                <TextInput
                    title="Enter your friend's email below"
                    placeholder="johndoe@example.com"
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                />
                <div className="flex flex-col space-y-2 py-2">
                    {
                        results !== undefined ?
                            results.map((result) => (
                                <SearchResult
                                    key={getUserData(result).id}
                                    name={getUserData(result).name}
                                    username={getUserData(result).username}
                                    profilePicSrc={getUserData(result).avatar_src}
                                    email={getUserData(result).email}
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
                height="h-full"
                width="w-full"
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
    const [username, setUsername] = useState(props.userData.username);
    const [name, setName] = useState(props.userData.name);
    const [dogs, setDogs] = useState(props.userData.dogs);
    const [location, setLocation] = useState(props.userData.settings ? props.userData.settings.location : "");
    const [camera, setCamera] = useState(props.userData.settings ? props.userData.settings.camera : "");
    const [notification, setNotification] = useState(props.userData.settings ? props.userData.settings.notification : []);

    return (
        <>
            <Modal
                onClose={props.onClose}
                open={props.open}
                title="Settings"
            >
                <div className="flex flex-col space-y-2 py-2">
                    {
                        props.userData !== undefined || props.userData.settings === undefined ? 
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

export function ForgotPasswordModal(props) {
    const [emailSent, setEmailSent] = useState(false);

    return (
        <>
            <Modal
                onClose={props.onClose}
                open={props.open}
                title="Forgot password"
            >
                <div className="flex flex-col space-y-2 py-2">
                    {
                        !emailSent ? 
                        <div className="flex flex-col space-y-2 py-2">
                            <div>We'll send you an email with a reset password link.</div>
                            <TextInput
                                title="What is your account's email?"
                                type="text"
                                id="email"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        "email": e.target.value,
                                    });
                                }}
                                placeholder="johnDoe@gmail.com"
                            />
                            <div className="flex flex-col space-y-4 py-2 pt-7">
                                <AcceptButton
                                    onClick={() => {
                                        setEmailSent(true)
                                    }}
                                >
                                    Send reset link
                                </AcceptButton>
                                <OptionalButton
                                    onClick={props.onClose}
                                >
                                    Cancel
                                </OptionalButton>
                            </div>
                            
                        </div>
                        : <div>Email successfully sent!</div>
                    }
                </div>
               
            </Modal>
        </>
    )
}