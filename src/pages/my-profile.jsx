import React from 'react';
import myImage from '../assets/images/profilePicture.jpg';
import '../css/MyProfile.css';
import TextInput from "../components/TextInput";
import Achievement from '../components/Achievement';
import { PawPrint } from 'phosphor-react';

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
            <div className="section-header">My Stats</div>
            <div className="section-header">My Achievements</div>
            <Achievement
                icon={<PawPrint size={32} weight="fill" />}
                title="Avid Walker"
                description={
                    `You walked your dog over 5km!`
                }
            />
            <div className="section-header">General Settings</div>
        </>
    );
}