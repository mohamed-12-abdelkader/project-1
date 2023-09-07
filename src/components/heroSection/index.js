import React from "react";
import BudgetNunber from "./budgetNumber";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaidIcon from "@mui/icons-material/Paid";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import { useMyContext } from "@/context/ProjectContext";
const HeroSection = () => {
  const { totals } = useMyContext();

  return (
    <>
      <div>
        <div className="img h-[400px] w-[100%]">
          <img src="قصر-وستمنستر.webp" className=" h-[100%] w-[100%]" />
        </div>
        <div className="container flex justify-center ">
          <div
            className="hero-number  flex flex-wrap justify-center  mt-[-100px]  "
            style={{ display: "flex" }}
          >
            <BudgetNunber mone={totals.expenseTotal} title="المصاريف">
              <CreditCardIcon style={{ fontSize: "40px" }} />
            </BudgetNunber>
            <BudgetNunber mone={totals.incomeTotal} title="الدخل">
              <PaidIcon style={{ fontSize: "40px" }} />
            </BudgetNunber>
            <BudgetNunber mone={totals.total} title="الكل">
              <FolderCopyIcon style={{ fontSize: "40px" }} />
            </BudgetNunber>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
