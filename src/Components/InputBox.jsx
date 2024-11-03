import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Frame, Reference } from '../feature/algo/algoSlice';

const InputBox = () => {

    const [frames, setFrame] = useState();
    const [ref, setRef] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Frame(frames));
        dispatch(Reference(ref.split(",").map(Number)));
    }, [frames, ref]);

     const handleClick = (e) =>
{
    e.preventDefault();
}

    return (
        <div className="text-white flex items-center justify-center flex-col gap-3">
            <form
                className="flex items-center justify-center flex-col gap-3"
                onSubmit={(e) => handleClick(e)}

            >
                <input
                    type="text"
                    className="text-black w-60 h-10 rounded-lg p-3"
                    placeholder="Enter the number of frames"
                    value={frames}
                    onChange={(e) => setFrame(e.target.value)}
                   
                />

                <input
                    type="text"
                    className="text-black w-60 h-10 rounded-lg p-3"
                    placeholder="Enter the Reference Numbers "
                    value={ref}
                    onChange={(e) => setRef(e.target.value)}
                />
                <p className="mt-0 p-0 flex text-red-700 justify-start">Note* : Enter Comma separated values</p>

                <Link to="/fifo">
                    <button
                        className="w-60 h-10 bg-blue-500 rounded-lg hover:bg-blue-700"
                        type="submit"
                    >
                        Visualize
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default InputBox;
