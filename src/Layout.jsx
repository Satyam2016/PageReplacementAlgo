import React from 'react';
import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
            {/* Fixed Sidebar */}
            <div className="w-64 fixed top-0 left-0 h-full bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg text-white">
                <Sidebar />
            </div>

            {/* Main Content Area with left margin to avoid overlapping the sidebar */}
            <div className="ml-64 p-8">
                <div className="w-full max-w-4xl mx-auto  p-8 transform transition-transform duration-500 ease-in-out hover:scale-105">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default App;
