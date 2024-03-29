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
import { Fire, PersonSimpleWalk, Camera, Question } from 'phosphor-react';
import { getAchievement } from '../lib/achievementChecker';

export default function MyProfile() {
    const [helpOpen, setHelpOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const email = Cookies.get("user");
    const [userData, setUserData] = useState(getUserData(email));

    const faqs = [
        {
            question: 'How do I update my profile?',
            answer: 'After closing this pop-up, you can press the gear button besides the question mark button to open the settings pop-up. There you can edit relevant profile data, and permission settings. '
        },
        {
            question: 'What is the purpose of this app?',
            answer: 'This app helps you keep track of you and your dog\'s activity. Additionally, you can share photos with friends!'
        },
        {
            question: 'Who can see my data?',
            answer: 'Any sensitive data like your email address, and account password and not shown publicly. Other data, like the name you entered, your dog\'s name and location may be shared with other users whom you have added as friends on this application.'
        },
        {
            question: 'How do I earn achievements?',
            answer: 'Achievements can be earned on walks by meeting a certain criteria. You can earn achievements more than once, but it will only be displayed on the my profile page once.'
        },
        {
            question: 'Who can see my stats?',
            answer: 'Only you can see your stats.'
        },
        {
            question: 'Who can see my achievements?',
            answer: 'Only you can see the achievements you have earned.'
        },
    ];

    return (
        <>
            <Modal
                onClose={() => {
                    setHelpOpen(false);
                }}
                open={helpOpen}
                height="h-full"
                width="w-full"
            >
                <div className="help-container">
                    <h2 className='text-lg font-black'>Frequently Asked Questions</h2>
                    <div className="faqs">
                        {faqs.map((faq, index) => (
                            <div key={index} className="p-1">
                                <h3 className='font-bold text-secondary'>
                                    {faq.question}
                                </h3>
                                <p className='border-l-2 border-grey pl-2'>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
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
                        <Gear size={32} weight="fill" />
                    </button>
                    <button
                        className="absolute end-0 bottom-28 right-8"  // Adjust position as needed
                        onClick={() => {
                            setHelpOpen(!helpOpen);
                        }}
                    >
                        <Question size={32} weight="fill" />
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