import React from "react";

const Box = ({i,j, remark, color }) => {
     return (
          <div>
          <div className={`bg-green-500 w-10 h-10 flex justify-center items-center`}
            style={{backgroundColor: `${color}`}}
          >
         {i} {j} {remark}
     </div>
          </div>
     );
};

export default Box;