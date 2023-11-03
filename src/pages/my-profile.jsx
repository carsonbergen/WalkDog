import React from 'react';
import myImage from '../assets/images/profilePicture.jpg';
import '../css/MyProfile.css'; 

export default function MyProfile() {
    return (
        <>
            <div className="profile-container">
                <div className="profile-image-container">
                    <img src={myImage} alt="profilePicture" className="profile-image" />
                </div>
                <div className="profile-info">
                    <div className="profile-header">Profile Display Settings</div>
                    <div className="profile-label">Display name:</div>
                    <input type="text" defaultValue="Alex" className="profile-input" />
                    <div className="profile-label">Your dog's name:</div>
                    <input type="text" defaultValue="Rex" className="profile-input" />
                </div>
            </div>
            <div className="section-header">My Stats</div>
            <div className="section-header">My Achievements</div>
            <div className="section-header">General Settings</div>
        </>
    );
}