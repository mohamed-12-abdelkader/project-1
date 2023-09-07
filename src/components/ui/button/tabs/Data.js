import React from "react";

const Data = ({ children, props }) => {
  return (
    <div className="h-[300px] w-[100%] bg-white mt-8 mb-8 flex justify-center items-center">
      <h1 className="text-black">{children}</h1>
    </div>
  );
};

export default Data;
