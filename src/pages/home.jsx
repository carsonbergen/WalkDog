/*export default function Home() {
    return (
        <>
            <div>
                <h1>
                    Home page
                </h1>
            </div>
     //</>
   // );*/
    import React from 'react';

export default function CameraComponent() {
    return (
        <div className="bg-gray-200 h-full w-full flex flex-col items-center">
            <header className="w-full bg-purple-200 p-4 flex justify-between items-center">
                <button className="text-purple-700">🔍</button>
                <button className="text-purple-700">🔒</button>
            </header>
            
            <div className="flex-grow flex flex-col items-center justify-center">
                <h1 className="text-purple-700 mb-4">Camera</h1>
                <div className="bg-gray-300 w-3/4 h-3/4 flex flex-col items-center justify-center">
                    <h2 className="text-2xl mb-4">View of user's camera</h2>
                    <div className="bg-gray-500 p-20 rounded-full flex items-center justify-center">
                        <div className="bg-white p-10 rounded-full"></div>
                    </div>
                </div>
            </div>
            
            <footer className="w-full bg-white p-4 flex justify-around items-center">
                <button className="text-purple-700">☰</button>
                <button className="text-purple-700 bg-purple-200 p-2 rounded-full">🐾</button>
                <button className="text-purple-700">👤</button>
            </footer>
        </div>
    );
}


