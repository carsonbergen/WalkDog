import '../css/MyProfile.css';
import TextInput from "../components/TextInput";
import Achievement from '../components/Achievement';
import { Gear } from 'phosphor-react';
import StatHighlight from '../components/StatHighlight';
import { SettingsModal } from '../components/Modal';
import { useState } from "react";
import { getUserData } from "./../lib/file";
import Cookies from 'js-cookie';
import { getAchievement } from '../lib/achievementChecker';
    
export default function MyProfile() {

    const [settingsOpen, setSettingsOpen] = useState(false);
    const email = Cookies.get("user");
    const [userData, setUserData] = useState(getUserData(email));

    return (
        <>
            <SettingsModal
                onClose={() => {
                    setSettingsOpen(false);
                }}
                open={settingsOpen}
                userData={userData ? userData : undefined}
            />
            <div className="profile-container">
                <div className="rounded-md border-2 border-secondary mr-4 min-w-[150px] min-h-[150px] max-w-[150px] max-h-[150px] overflow-clip">
                    <img src={userData.avatar_src ?? "/avatars/default.png"} alt="profilePicture" className="" />
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
                        <div className="font-bold text-base">Username:</div>
                        <StatHighlight
                            value={userData ? userData.username : "empty"}
                            className="bg-grey"
                        />
                        <div className="font-bold text-base">Name:</div>
                        <StatHighlight
                            value={userData ? userData.name : "empty"}
                            className="bg-grey"
                        />
                </div>                    
            </div>
            <div className="font-bold text-base">Dog's name(s):</div>
                        {userData && (userData.dogs.map((dog) => (
                            <>
                                <StatHighlight 
                                    value={dog.name}
                                    className="bg-grey mb-1"
                                />
                            </>
                        )))}
            <div className="section-header font-bold">My Stats</div>
            <div className='flex flex-wrap mt-1'>
                You've walked
                <span className='mx-1 bg-cyan border-2 border-secondary rounded-md px-1 font-bold max-h-min'>
                    {userData ? userData.dogs[0].name : "empty"}
                </span>
                <StatHighlight
                    value={userData ? userData.dogs[0].times_walked : -1}
                    className="bg-orange"
                />
                times in a row!
            </div>
            <div className='flex flex-wrap mt-1'>
                Total distance walked (km):
                <StatHighlight
                    value={userData ? userData.stats.total_distance_walked : -1}
                    className="bg-orange"
                />
            </div>
            <div className='flex flex-wrap mt-1'>
                Photos shared:
                <StatHighlight
                    value={userData ? userData.stats.photos_shared : -1}
                    className="bg-orange"
                />
            </div>
            <div className="section-header font-bold">My Achievements</div>
            <div className='grid grid-cols-2'>
                {userData.achievements.map((achievementId) => (

                    <>
                    <div className='p-1 w-full h-full'>
                        <Achievement 
                            title={getAchievement(achievementId).title}
                            description={getAchievement(achievementId).description}
                            dateAchieved={getAchievement(achievementId).date_achieved}
                        />
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}