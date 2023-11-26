import React, { useEffect, useState } from 'react';
import '../css/MyProfile.css';
import TextInput from "../components/TextInput";
import Achievement from '../components/Achievement';
import { PawPrint, Aperture, FireSimple } from 'phosphor-react';
import ToggleSwitch from '../components/ToggleSwitch';
import StatHighlight from '../components/StatHighlight';
import { getUserData } from "./../lib/file";
import Cookies from 'js-cookie';

export default function MyProfile() {
    const email = Cookies.get("user");
    const [userData, setUserData] = useState(getUserData(email));

    return (
        <>
            <div className="profile-container">
                <div className="rounded-md border-2 border-secondary mr-4 min-w-[150px] min-h-[150px] max-w-[150px] max-h-[150px] overflow-clip">
                    <img src={userData.avatar_src} alt="profilePicture" className="" />
                </div>
                <div className="profile-info">
                    <div className="profile-header">Profile Display Settings</div>
                    <TextInput
                        title="Display name:"
                        placeholder={userData.name}
                    />
                    <TextInput
                        title="Your dog's name:"
                        placeholder={userData.dogs[0].name}
                    />
                </div>
            </div>
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
                Total distance walked:
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
            <div className="section-header font-bold">General Settings</div>
            <div className='flex flex-row space-x-2'>
                <span>Enable geolocation services</span> <ToggleSwitch></ToggleSwitch>
            </div>
            <div className='flex flex-row space-x-2'>
                <span>Enable geolocation services</span> <ToggleSwitch></ToggleSwitch>
            </div>
        </>
    );
}