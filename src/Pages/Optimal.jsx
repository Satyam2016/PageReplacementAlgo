import React from 'react';
import { useSelector } from 'react-redux';
import Box from '../Components/Box'; // Assuming Box component is used for rendering frames

const Optimal = () => {
    const frames = useSelector((state) => state.frames);
    const ref = useSelector((state) => state.ref);
    const col = ref.length;
    
    let faults = 0;
    let totalHit = 0;

    const grid = () => {
        const arr = [];
        const pages = new Array(frames).fill(-1);

        for (let i = 0; i < col; i++) {
            const temp = [];
            const currentPage = ref[i];
            let hit = false;
            let remark = "Fault";

            // Check for hit in current frames
            for (let j = 0; j < frames; j++) {
                if (pages[j] === currentPage) {
                    hit = true;
                    remark = "Hit";
                    totalHit++;
                    break;
                }
            }

            if (!hit) {
                // Increment faults for a page fault
                faults++;

                // If there's an empty frame, use it
                const emptyFrameIndex = pages.indexOf(-1);
                if (emptyFrameIndex !== -1) {
                    pages[emptyFrameIndex] = currentPage;
                } else {
                    // Find the optimal page to replace
                    const futureReferences = ref.slice(i + 1);
                    let optimalIndex = -1;
                    let farthestUsage = -1;

                    for (let j = 0; j < frames; j++) {
                        const nextUsage = futureReferences.indexOf(pages[j]);
                        // If the page is not used in the future, replace it
                        if (nextUsage === -1) {
                            optimalIndex = j;
                            break;
                        }
                        // Find the page that is used farthest in the future
                        if (nextUsage > farthestUsage) {
                            farthestUsage = nextUsage;
                            optimalIndex = j;
                        }
                    }

                    // Replace the optimal page
                    pages[optimalIndex] = currentPage;
                }
            }

            // Prepare the grid for rendering
            temp.push(<Box  j={currentPage} color={"green"} />);
            for (let j = 0; j < frames; j++) {
                const color = hit && pages[j] === currentPage ? "#FF5733" : undefined;
                if(remark==="Hit" && pages[j] === currentPage){
                    temp.push(<Box  i={pages[j]} remark={remark} color="#FF5733" />);
                }else{
                    temp.push(<Box  i={pages[j]} />);
                }
                
            }
            temp.push(<Box remark={remark} color="#008000" />);
            arr.push(temp);
        }
        return arr;
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-2 m-1">
                <div>
                    <h1 className="text-2xl font-bold">Optimal Page Replacement Algorithm</h1>
                </div>
                <div className="flex">
                    {
                        grid().map((row, index) => (
                            <div key={index} className="flex flex-col justify-center items-center gap-2 m-1">
                                {row}
                            </div>
                        ))
                    }
                </div>
                <div>
                    <h2 className="text-lg font-bold">Total Page Faults: {faults}</h2>
                    <h2 className="text-lg font-bold">Total Page Hits: {totalHit}</h2>
                </div>
            </div>
        </>
    );
};

export default Optimal;
