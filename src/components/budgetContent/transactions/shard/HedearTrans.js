import React from "react";
import { Button } from "@/components/ui/button";
import { useMyContext } from "@/context/ProjectContext";
import { useState } from "react";
const HedearTrans = () => {
  return (
    <div className="flex justify-between mt-10">
      <div>
        <h1>Recent Transactions</h1>
      </div>
      <div></div>
    </div>
  );
};

export default HedearTrans;
