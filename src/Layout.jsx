import React from 'react';
import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router-dom';


function App() {

     return (
       <div className="flex bg-slate-300">
         <div className="">
           <Sidebar />
         </div>
         <div className="w-screen flex justify-center ">
               <Outlet />
         </div>
       </div>
   
     )
   }
   
   export default App