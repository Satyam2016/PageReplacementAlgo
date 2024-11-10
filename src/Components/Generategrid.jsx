import React, { useState, useEffect } from 'react';
import Box from '../Components/Box'; // Assuming Box component is used for rendering frames

const Optimal = ({ Grid }) => {
    const [faults, setFaults] = useState(0);
    const [totalHit, setTotalHit] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const gridData = Grid; // Array of arrays for the grid

    useEffect(() => {
        if (currentIndex < gridData.length) {
            const timer = setTimeout(() => {
                const row = gridData[currentIndex];
               const lastBox = row[row.length - 1];
               // Check if the last box is a hit or fault
               const isHit = lastBox.props.remark === "Hit";

               if(isHit) {
                   setTotalHit(prevHits => prevHits + 1);
               }
               else {
                   setFaults(prevFaults => prevFaults + 1);
               }

                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [currentIndex, gridData]);

    return (
        <>
            <div className="flex flex-wrap gap-2 justify-center">
                {gridData.slice(0, currentIndex).map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-col justify-center items-center gap-1 m-1 animate-fadeIn">
                        {row}
                    </div>
                ))}
            </div>
            <div>
                <h2 className="text-lg font-bold">Total Page Faults: {faults}</h2>
                <h2 className="text-lg font-bold">Total Page Hits: {totalHit}</h2>
            </div>
        </>
    );
};

export default Optimal;
