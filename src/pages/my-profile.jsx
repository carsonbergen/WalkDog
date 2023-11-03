import React from 'react';
import myImage from '../assets/images/profilePicture.jpg';
import '../css/MyProfile.css';
import TextInput from "../components/TextInput";
import Achievement from '../components/Achievement';
import { PawPrint, Aperture, FireSimple } from 'phosphor-react';
import ToggleSwitch from '../components/ToggleSwitch';
import StatHighlight from '../components/StatHighlight';

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
            <div className='flex flex-wrap mt-1'>
                You've walked 
                <span className='mx-1 bg-cyan border-2 border-secondary rounded-md px-1 font-bold max-h-min'>name of dog</span> 
                <StatHighlight
                    value="number of times"
                    className="bg-orange"
                /> 
                times in a row!
            </div>
            <div className='flex flex-wrap mt-1'>
                Total distance walked: 
                <StatHighlight
                    value="distance walked"
                    className="bg-orange"
                />
            </div>
            <div className='flex flex-wrap mt-1'>
                Photos shared:
                <StatHighlight
                    value="number of photos shared"
                    className="bg-orange"
                />
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
                <span>Enable geolocation services</span> <ToggleSwitch></ToggleSwitch> 
            </div>
            <div className='flex flex-row space-x-2'>
                <span>Enable geolocation services</span> <ToggleSwitch></ToggleSwitch> 
            </div>
        </>
    );
}