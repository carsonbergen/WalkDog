import React from 'react';
import '../css/MyProfile.css';
import TextInput from "../components/TextInput";
import Achievement from '../components/Achievement';
import { PawPrint, Aperture, Gear } from 'phosphor-react';
import StatHighlight from '../components/StatHighlight';
import { SettingsModal } from '../components/Modal';
import { useState } from "react";

const settings = 
    {
        id: 1,
        name: "Carson",
        username: "slipperychicken14",
        dog: "Juno"
    }

export default function MyProfile() {
    const myImagePath = '/images/profilePicture.jpg';
    const [settingsOpen, setSettingsOpen] = useState(false);

    return (
        <>
            <SettingsModal
                onClose={() => {
                    setSettingsOpen(false);
                }}
                open={settingsOpen}
                settings={settings}
            />
            <div className="profile-container">
                <div className="rounded-md border-2 border-secondary mr-4 max-w-[150px] max-h-[150px] overflow-clip">
                    <img src={myImagePath} alt="profilePicture" className="" />
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
                        <TextInput
                            title="Username:"
                            text={settings.name}
                        />
                        <TextInput
                            title="Dog's name:"
                            text={settings.dog}
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
        </>
    );
}