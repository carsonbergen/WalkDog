import React from 'react';
import myImage from '../assets/images/profilePicture.jpg';
import '../css/MyProfile.css';
import TextInput from "../components/TextInput";
import Achievement from '../components/Achievement';
import { PawPrint, Aperture } from 'phosphor-react';
import ToggleSwitch from '../components/ToggleSwitch';

export default function MyProfile() {
    return (
        <>
            <div className="profile-container">
                <div className="rounded-md border-2 border-secondary mr-4 max-w-[150px] max-h-[150px] overflow-clip">
                    <img src={myImage} alt="profilePicture" className="" />
                </div>
                <div className="profile-info">
                    <div className="profile-header">Profile Display Settings</div>
                    <TextInput
                        title="Display name:"
                    />
                    <TextInput
                        title="Your dog's name:"
                    />
                </div>
            </div>
            <div className="section-header font-bold">My Stats</div>
            <div>
                <div className='stats'>
                    You've walked 
                    [name of dog] 
                    [times walked] 
                    times in a row!
                </div>
                <div className='stats'>
                    Total distance walked: 
                    [distance walked]
                </div>
                <div className='stats'>
                    Photos shared:
                    [photos shared]
                </div>
            </div>
            <div className="section-header font-bold">My Achievements</div>
            <div className='flex flex-row space-x-2'> 
                    <Achievement
                        icon={<Aperture size={32} weight="fill" />}
                        title="The Photographer"
                        description={
                            `You've taken 5 photos`
                        }
                    />
                    <Achievement 
                        icon={<PawPrint size={32} weight="fill" />}
                        title="Avid Walker"
                        description={
                            `You walked your dog over 5km!`
                        }
                    />
                </div>
            <div className="section-header font-bold">General Settings</div>
            <div className='flex flex-row space-x-2'>
                Enable geolocation services<ToggleSwitch></ToggleSwitch> 
            </div>
            <div className='flex flex-row space-x-2'>
                Enable geolocation services<ToggleSwitch></ToggleSwitch> 
            </div>
        </>
    );
}