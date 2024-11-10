import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Sidebar = () => {
    const [active, setActive] = useState("");
    const dispatch = useDispatch();

    return (
        <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 h-screen text-white shadow-2xl flex flex-col">
            <div className="font-bold text-2xl py-8 flex items-center justify-center text-center">
                <p>🔄 Page Replacement <br /> Algorithms</p>
            </div>
            <hr className="border-gray-700 mb-4 mx-4" />

            <div
                className={`font-semibold px-6 py-4 flex items-center cursor-pointer rounded transition-all duration-200
                ${active === "Back to Home" ? "bg-gray-800" : "hover:bg-gray-700"}
                `}
                onClick={() => setActive("Back to Home")}
            >
                <Link to="/" className="flex items-center w-full space-x-2">
                    <span className="text-lg">🏠</span>
                    <p className="text-lg">Back to Home</p>
                </Link>
            </div>

            {/* Algorithm Selection */}
            <div className="font-semibold py-4 text-center border-t border-gray-700 mt-4 mb-2">
                <p>⚙️ Choose Algorithm</p>
            </div>
            <ol className="text-sm space-y-1 px-2">
                <Link to="/fifo">
                    <li
                        className={`py-3 px-6 font-mono transition-all duration-300 cursor-pointer rounded-md flex items-center space-x-3
                        ${active === "FIFO" ? "bg-blue-600 text-white" : "hover:bg-gray-700 hover:text-white"}
                        `}
                        onClick={() => setActive("FIFO")}
                    >
                        <span>🕸</span>
                        <p>FIFO</p>
                    </li>
                </Link>
                <Link to="/lru">
                    <li
                        className={`py-3 px-6 font-mono transition-all duration-300 cursor-pointer rounded-md flex items-center space-x-3
                        ${active === "LRU" ? "bg-blue-600 text-white" : "hover:bg-gray-700 hover:text-white"}
                        `}
                        onClick={() => setActive("LRU")}
                    >
                        <span>🔄</span>
                        <p>LRU</p>
                    </li>
                </Link>
                <Link to="/optimal">
                    <li
                        className={`py-3 px-6 font-mono transition-all duration-300 cursor-pointer rounded-md flex items-center space-x-3
                        ${active === "Optimal" ? "bg-blue-600 text-white" : "hover:bg-gray-700 hover:text-white"}
                        `}
                        onClick={() => setActive("Optimal")}
                    >
                        <span>🌟</span>
                        <p>Optimal</p>
                    </li>
                </Link>
                <Link to="/secondchance">
                    <li
                        className={`py-3 px-6 font-mono transition-all duration-300 cursor-pointer rounded-md flex items-center space-x-3
                        ${active === "Second Chance" ? "bg-blue-600 text-white" : "hover:bg-gray-700 hover:text-white"}
                        `}
                        onClick={() => setActive("Second Chance")}
                    >
                        <span>🔄</span>
                        <p>Second Chance</p>
                    </li>
                </Link>
            </ol>

            {/* Comparison Link */}
            <div
                className="font-semibold mt-auto mb-4 py-3 px-6 text-center text-gray-400 hover:text-white transition-all duration-200 cursor-pointer"
                onClick={() => alert("Comparison page coming soon!")}
            >
                📊 Compare Algorithms
            </div>
        </div>
    );
};

export default Sidebar;
