import React from 'react';
import { useState, useEffect } from 'react';
import Loader from '../Components/Loader';
import { useSelector } from "react-redux";
import Box from '../Components/Box';

const Fifo = () => {
     const [loading, setLoading] = useState(true);
     const frames = useSelector((state) => state.frames);
     const ref = useSelector((state) => state.ref);
     const col = ref.length;
     const row = frames;

     let faults = 0;
     let totalHit = 0;
     const grid = () => {
          const arr = [];
          const pages=new Array(frames).fill(-1);
          console.log(pages);
          let framePointer = 0;
          let remark="Fault";
          for(let i = 0; i < col; i++){
               let hit = false;
               const temp = [];
               temp.push(<Box  j={ref[i]}  color={"green" } />);
               for(let j = 0; j < frames; j++){
                    if(pages[j] === ref[i]){
                         hit = true;
                         remark="Hit";
                         totalHit++;
                         break;
                    }
               }
               if(!hit){
                    pages[framePointer] = ref[i];
                    framePointer = (framePointer+1)%frames;
                    faults++;
               }
              
               for(let j = 0; j < frames; j++){
                    if(remark==="Hit" && pages[j] === ref[i]){
                         temp.push(<Box i={pages[j]} remark={remark} color="#FF5733 " />);
                    }
                    else{
                         temp.push(<Box i={pages[j]}  />);
                    }
               }
               temp.push(<Box remark={remark} color="#008000"  />);
              
               arr.push(temp);
          }
         return arr;
     }

     return (
          <>
               <div className="flex flex-col justify-center items-center gap-2 m-1">
                    <div>
                    <h1 className="text-2xl font-bold">FIFO(First-In First-Out) Page Replacement Algorithm</h1>
                    </div>
                   <div className="flex ">
                   {
                        grid().map((row) => {
                             return (
                                  <div className={`flex flex-col justify-center items-center gap-2 m-1`}>
                                  {row}
                                  </div>
                              );
                         })
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

export default Fifo;