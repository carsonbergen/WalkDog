import '../css/MyProfile.css';
import TextInput from "../components/TextInput";
import Achievement from '../components/Achievement';
import { Gear } from 'phosphor-react';
import StatHighlight from '../components/StatHighlight';
import { SettingsModal } from '../components/Modal';
import { useState } from "react";
import { getUserData } from "./../lib/file";
import Cookies from 'js-cookie';
import Modal from '../components/Modal';
const settings = 
    {
        id: 1,
        name: "Carson",
        username: "slipperychicken14",
        dog: "Juno"
    }
    
export default function MyProfile() {
    
    const [HelpOpen, setHelpOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const email = Cookies.get("user");
    const [userData, setUserData] = useState(getUserData(email));

    return (
        <>
        <Modal
                onClose={() => {
                    setHelpOpen(false);
                }}
                open={HelpOpen}
            />
                    <SettingsModal
                onClose={() => {
                    setSettingsOpen(false);
                }}
                open={settingsOpen}
                userData={userData}
            />
            <div className="profile-container">
                <div className="rounded-md border-2 border-secondary mr-4 min-w-[150px] min-h-[150px] max-w-[150px] max-h-[150px] overflow-clip">
                    <img src={userData.avatar_src} alt="profilePicture" className="" />
                </div>
                <div className="relative">
                        <button
                            className="absolute end-0 bottom-28"
                            size={32} 
                            weight="fill"
                            onClick={() => {
                                setSettingsOpen(!settingsOpen);
                            }}
                        >
                            <Gear size={32} weight="fill"/>
                        </button>
                        <button
                        className="absolute end-0 bottom-28 right-8"  // Adjust position as needed
                        onClick={() => {
                            setHelpOpen(!HelpOpen);
                        }}
                    >
                        <Question size={32} weight="fill" />
                    </button>
                                                <div className="font-bold text-base">Username:</div>
                        <StatHighlight
                            value={userData.username}
                            className="bg-grey"
                        />
                        <div className="font-bold text-base">Name:</div>
                        <StatHighlight
                            value={userData.name}
                            className="bg-grey"
                        />
                </div>                    
            </div>
            <div className="font-bold text-base">Dog's name(s):</div>
                        {userData.dogs.map((dog) => (
                            <>
                                <StatHighlight 
                                    value={dog.name}
                                    className="bg-grey mb-1"
                                />
                            </>
                        ))}
            <div className="section-header font-bold">My Stats</div>
            <div className='flex flex-wrap mt-1'>
                You've walked
                <span className='mx-1 bg-cyan border-2 border-secondary rounded-md px-1 font-bold max-h-min'>
                    {userData.dogs[0].name}
                </span>
                <StatHighlight
                    value={userData.dogs[0].times_walked}
                    className="bg-orange"
                />
                times in a row!
            </div>
            <div className='flex flex-wrap mt-1'>
                Total distance walked (km):
                <StatHighlight
                    value={userData.stats.total_distance_walked}
                    className="bg-orange"
                />
            </div>
            <div className='flex flex-wrap mt-1'>
                Photos shared:
                <StatHighlight
                    value={userData.stats.photos_shared}
                    className="bg-orange"
                />
            </div>
            <div className="section-header font-bold">My Achievements</div>
            <div className='flex flex-row space-x-2'>
                {userData.achievements.map((achievement) => (
                    <>
                        <Achievement 
                            icon={achievement.icon}
                            title={achievement.title}
                            description={achievement.description}
                            dateAchieved={achievement.date_achieved}
                        />
                    </>
                ))}
            </div>
        </>
    );
}