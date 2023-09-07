import React from "react";

const BudgetNunber = (props) => {
  return (
    <div className="budget-numbers  text-center w-[350px] h-[300px] flex items-center justify-center bg-blue-500     ">
      <div>
        <div className="budget-numbers-icon text-2xl h-[90px] w-[90px] rounded-full bg-white flex justify-center items-center">
          {props.children}
        </div>
        <div className="budget-numbers-title mt-5">
          <h1>{props.title}</h1>
        </div>
        <div className="budget-numbers -mone">
          {" "}
          <h1 className="text-black">${props.mone}</h1>
        </div>
      </div>
    </div>
  );
};

export default BudgetNunber;
