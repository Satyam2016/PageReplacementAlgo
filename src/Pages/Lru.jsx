import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from '../Components/Box'; 
import Generategrid from '../Components/Generategrid';
import Loader from '../Components/Loader';


const Lru = () => {
    const frames = useSelector((state) => state.frames); 
    const ref = useSelector((state) => state.ref); 
    const col = ref.length; 
    const [loading, setLoading] = useState(true);

    let faults = 0; 
    let totalHit = 0; 

    const grid = () => {
        const arr = []; 
        const pages= [];
        for (let i = 0; i < frames; i++) {
            pages.push(-1);
        }
    
        // Initialize frames as empty (-1 represents an empty frame)
       
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
                    break;
                }
            }

            // Handle page fault if no hit
            if (!hit) {
                faults++;
                let lruIndex = -1; // To track index of the page to replace
                
                // Check if there is an empty frame available
                for (let j = 0; j < frames; j++) {
                    if (pages[j] === -1) { 
                        lruIndex = j;
                        pages[j] = currentPage; // Place page in the empty frame
                        break;
                    }
                }

                // If no empty frame, apply LRU replacement
                if (lruIndex === -1) {
                    let leastRecentTime = col;
                    let usedPages = [];
                    
                    // Backtrack to find the least recently used page
                    for (let k = i - 1; k >= 0; k--) {
                        const backPage = ref[k];
                        if (pages.includes(backPage) && !usedPages.includes(backPage)) {
                            const index = pages.indexOf(backPage);
                            leastRecentTime = Math.min(leastRecentTime, index);
                            usedPages.push(backPage);
                        }
                    }

                    // Replace the LRU page with the current page
                    pages[leastRecentTime] = currentPage;
                   
                }
            }
        
            // Render the current reference page
            temp.push(<Box key={`ref-${i}`} j={currentPage} color={"green"} />); 

            // Render each frame
            for (let j = 0; j < frames; j++) {
                if(remark==="Hit" && pages[j] === ref[i]){
                    temp.push(<Box i={pages[j]} remark={remark} color="#FF5733 " />);
               }
               else if(pages[j] !== -1){
                    temp.push(<Box i={pages[j]}  />);
               }
               else{
                    temp.push(<Box />);
               }
               
            }
            
            // Render the remark for the entire row
            temp.push(<Box  remark={remark} color={remark === "Hit" ? "#FF5733" : "#008000"} />);
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
            <div className="flex flex-col justify-center items-center gap-2 m-1">
                <div>
                    <h1 className="text-2xl font-bold">Least Recently Used (LRU) Page Replacement Algorithm</h1>
                </div>
                < Generategrid Grid={grid()} />
            </div>
        </>
    );
};

export default Lru;
