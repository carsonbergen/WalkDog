import '../css/MyProfile.css';
import TextInput from "../components/TextInput";
import Achievement from '../components/Achievement';
import { Gear } from 'phosphor-react';
import StatHighlight from '../components/StatHighlight';
import { SettingsModal } from '../components/Modal';
import { useState } from "react";
import { getUserData } from "./../lib/file";
import Cookies from 'js-cookie';
import { Fire, PersonSimpleWalk, Camera } from 'phosphor-react';

const settings = 
    {
        id: 1,
        name: "Carson",
        username: "slipperychicken14",
        dog: "Juno"
    }
    
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
                            value={userData ? useState.name : "empty"}
                            className="bg-grey"
                        />
                </div>                    
            </div>
            <div className="section-header font-bold">Dog's name(s):</div>
                        {userData && (userData.dogs.map((dog) => (
                            <>
                                <StatHighlight 
                                    value={dog.name}
                                    className="bg-grey mb-1 inline-flex"
                                />
                            </>
                        )))}
            <div className="section-header font-bold">My Statistics</div>
            {/* Line 1 of statistics */}
            <div className="flex">
                <div className="box-container">
                    <div className="flex">
                        <Fire size={30} color="#ff9f00" />
                        <div className="">
                            <StatHighlight
                                value={userData ? userData.dogs[0].times_walked : -1}
                                className="bg-orange"
                            />
                        </div>
                    </div>
                    Days of Walking 
                    <span className='mx-1 bg-cyan border-2 border-secondary rounded-md px-1 font-bold max-h-min'>
                        {userData ? userData.dogs[0].name : "empty"}
                    </span>
                </div>
                <div className="box-container">
                    <div className="flex">
                        <Camera size={30} color="#ff9f00" />
                        <StatHighlight
                            value={userData ? userData.stats.photos_shared : -1}
                            className="bg-orange"
                        />
                    </div>
                    Photos shared!
                </div>
            </div>

            {/* Line 2 of Statistics*/}
            <div className="flex flex-wrap mt-2">
                <div className="box-container flex">
                    <PersonSimpleWalk size={30} color="#ff9f00" />
                    You have walked      
                    <StatHighlight
                        value={userData ? userData.stats.total_distance_walked : -1}
                        className="bg-orange mb-1"
                    />
                    km!
                </div>
            </div>
            <div className="section-header font-bold">My Achievements</div>
            <div className='flex flex-row space-x-2'>
                {userData && (userData.achievements.map((achievement) => (
                    <>
                        <Achievement 
                            icon={achievement.icon}
                            title={achievement.title}
                            description={achievement.description}
                            dateAchieved={achievement.date_achieved}
                        />
                    </>
                )))}
            </div>
        </>
    );
}