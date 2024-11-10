import React from "react";

const Box = ({ i, j, remark, color }) => {
    return (
        <div className="p-1">
            <div
                className="w-16 h-16 flex flex-col justify-center items-center rounded-lg shadow-lg transform transition-transform hover:scale-125"
                style={{ backgroundColor: color }}
            >
                <p className="text-black font-bold text-lg">{i}</p>
                <p className="text-white font-bold text-lg">{j}</p>
                {remark && <p className="text-white text-sm italic opacity-90 mt-1">{remark}</p>}
            </div>
        </div>
    );
};

export default Box;
