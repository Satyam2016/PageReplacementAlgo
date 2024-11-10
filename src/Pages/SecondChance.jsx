import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from '../Components/Box';
import Generategrid from '../Components/Generategrid';
import Loader from '../Components/Loader';

const SecondChance = () => {
    const frames = useSelector((state) => state.frames);
    const ref = useSelector((state) => state.ref);
    const col = ref.length;
    const [loading, setLoading] = useState(true);


    let faults = 0;
    let totalHit = 0;

    const generateGridData = () => {
        const arr = [];
        const pages = new Array(frames).fill(-1);
        const referenceBits = new Array(frames).fill(0);
        let framePointer = 0;

        for (let i = 0; i < col; i++) {
            const temp = [];
            const currentPage = ref[i];
            let hit = false;
            let remark = "Fault";

            for (let j = 0; j < frames; j++) {
                if (pages[j] === currentPage) {
                    hit = true;
                    remark = "Hit";
                    totalHit++;
                    referenceBits[j] = 1;
                    break;
                }
            }

            if (!hit) {
                while (true) {
                    if (referenceBits[framePointer] === 1) {
                        referenceBits[framePointer] = 0;
                        framePointer = (framePointer + 1) % frames;
                    } else {
                        pages[framePointer] = currentPage;
                        faults++;
                        framePointer = (framePointer + 1) % frames;
                        break;
                    }
                }
            }

            temp.push(<Box key={`page-${i}`} j={currentPage} color={"green"} />);
            for (let j = 0; j < frames; j++) {
                const color = hit && pages[j] === currentPage ? "#FF5733" : undefined;
                if (remark === "Hit" && pages[j] === currentPage) {
                    temp.push(<Box i={pages[j]} remark={remark} color="#008000" />);
                } else {
                    temp.push(<Box i={pages[j]} />);
                }

            }
            temp.push(<Box key={`remark-${i}`} remark={remark} color={hit ? "#4CAF50" : "#FF0000"} />);
            arr.push(temp);
        }
        return arr;
    };

    useEffect(() => {
        setTimeout(() => {
             setLoading(false);
        }, 1000);
   }, []);


    return (
        <>
        {loading && <Loader />}
        <div className="flex flex-col items-center gap-2 m-1 p-6  rounded-lg max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold  mb-4">Second Chance Page Replacement Algorithm</h1>
            <Generategrid Grid={generateGridData()} />
        </div>
        </>
    );
};

export default SecondChance;
