import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Sidebar = () => {
     const [active, setActive] = useState("");
     const dispatch = useDispatch();

     return (
          <div className="w-64 bg-gray-900 h-screen text-white shadow-lg">
            
               <div className="font-bold text-lg hover:bg-gray-800 py-6 rounded h-20 flex items-center justify-center text-center">
                    <p>Page Replacement Algorithms</p>
               </div>
               <hr className="border-gray-700" />
               <div 
                    className={`font-semibold px-4 py-3 flex items-center cursor-pointer transition-all duration-200
                    ${active === "Back to Home" ? "bg-gray-800" : "hover:bg-gray-700"}
                    `}
                    onClick={() => setActive("Back to Home")}
               >
                    <Link to="/" className="flex items-center w-full">
                         <p className="text-lg">🏠 Back to Home</p>
                    </Link>
               </div>

               {/* Algorithm Selection */}
               <div className="font-semibold py-3 text-center border-t border-gray-700">
                    <p>⚙️ Select Algorithm</p>
               </div>
               <ol className="text-sm">
                    <Link to="/fifo">
                         <li 
                              className={`py-4 px-6 font-mono transition-all duration-200 cursor-pointer 
                              ${active === "FIFO" ? "bg-gray-800 text-white rounded-md" : "hover:bg-gray-700 hover:text-white rounded-md"}
                              `}
                              onClick={() => setActive("FIFO")}
                         >
                              🕸 FIFO
                         </li>
                    </Link>
                    <Link to="/lru">
                         <li 
                              className={`py-4 px-6 font-mono transition-all duration-200 cursor-pointer
                              ${active === "LRU" ? "bg-gray-800 text-white rounded-md" : "hover:bg-gray-700 hover:text-white rounded-md"}
                              `}
                              onClick={() => setActive("LRU")}
                         >
                              🕸 LRU
                         </li>
                    </Link>
                    <Link to="/optimal">
                         <li 
                              className={`py-4 px-6 font-mono transition-all duration-200 cursor-pointer
                              ${active === "Optimal" ? "bg-gray-800 text-white rounded-md" : "hover:bg-gray-700 hover:text-white rounded-md"}
                              `}
                              onClick={() => setActive("Optimal")}
                         >
                              🕸 Optimal
                         </li>
                    </Link>
                    <Link to="/secondchance">
                         <li 
                              className={`py-4 px-6 font-mono transition-all duration-200 cursor-pointer
                              ${active === "Second Chance" ? "bg-gray-800 text-white rounded-md" : "hover:bg-gray-700 hover:text-white rounded-md"}
                              `}
                              onClick={() => setActive("Second Chance")}
                         >
                              🕸 Second Chance
                         </li>
                    </Link>
               </ol>

               {/* Comparison Link */}
              
          </div>
     )
};

export default Sidebar;
