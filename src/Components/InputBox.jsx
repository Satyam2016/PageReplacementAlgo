import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Frame, Reference } from '../feature/algo/algoSlice';

const InputBox = () => {
    const [frames, setFrame] = useState("");
    const [ref, setRef] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (frames) dispatch(Frame(Number(frames)));
        if (ref) dispatch(Reference(ref.split(",").map(Number)));
    }, [frames, ref]);

    const handleClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className="text-white flex items-center justify-center flex-col gap-5">
            <form
                className="flex items-center justify-center flex-col gap-4 bg-gray-900 p-6 rounded-lg shadow-lg"
                onSubmit={(e) => handleClick(e)}
            >
                <h2 className="text-2xl font-semibold text-center text-blue-300 mb-2">
                    Configure Algorithm
                </h2>

                <input
                    type="number"
                    min="1"
                    className="text-black w-60 h-12 rounded-lg p-4 placeholder-gray-600 outline-none border-2 border-blue-500 focus:border-blue-700"
                    placeholder="Enter the number of frames"
                    value={frames}
                    onChange={(e) => setFrame(e.target.value)}
                />

                <input
                    type="text"
                    className="text-black w-60 h-12 rounded-lg p-4 placeholder-gray-600 outline-none border-2 border-blue-500 focus:border-blue-700"
                    placeholder="Enter reference numbers, e.g., 1,2,3"
                    value={ref}
                    onChange={(e) => setRef(e.target.value)}
                />

                <p className="text-sm text-red-500">
                    * Please enter comma-separated values.
                </p>

                <Link to="/fifo">
                    <button
                        className="w-60 h-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105 focus:scale-95 active:scale-95 shadow-lg"
                        type="submit"
                    >
                        🔍 Visualize
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default InputBox;
