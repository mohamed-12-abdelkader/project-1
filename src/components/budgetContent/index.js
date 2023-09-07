import React from "react";
import Tab from "../ui/button/tabs/Tab";
import Tabs from "../ui/button/tabs";
import TransActions from "./transactions";
import { useMyContext } from "@/context/ProjectContext";
import { useState } from "react";
import { Data } from "../ui/button";
const BudgetContent = () => {
  const { totals } = useMyContext();

  return (
    <div>
      <Tabs>
        <Tab title="Data">
          <TransActions />
        </Tab>
        <Tab title="Income">
          <Data>
            <h1 className="text-black text-4xl mb-5">Income Total</h1>
            <h1 className="text-black text-2xl text-center">
              {totals.incomeTotal}{" "}
            </h1>
          </Data>
        </Tab>
        <Tab title=" expanses">
          <Data>
            <h1 className="text-black text-4xl mb-5">Expense Total </h1>
            <h1 className="text-black text-2xl text-center">
              {" "}
              {totals.expenseTotal}
            </h1>
          </Data>
        </Tab>
      </Tabs>
    </div>
  );
};
export default BudgetContent;
