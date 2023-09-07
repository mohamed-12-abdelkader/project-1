import React from "react";
import SingleTrance from "./SingleTrance";
import { useMyContext } from "@/context/ProjectContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TransContent = () => {
  const { items, filterItemsBySelection } = useMyContext();
  const [filterType, setFilterType] = useState("All"); // ابدأ بالعرض الكلي

  const handleFilter = (type) => {
    setFilterType(type);
  };

  const filteredItems = filterItemsBySelection(filterType);

  return (
    <div>
      <div className=" text-center mb-8">
        <Button onClick={() => handleFilter("All")}>All</Button>
        <Button onClick={() => handleFilter("Income")}>Income</Button>
        <Button onClick={() => handleFilter("Expense")}>Expense</Button>
      </div>

      {filteredItems.map((item) => (
        <SingleTrance
          key={item.id}
          id={item.id}
          title={item.title}
          number={item.number}
          item={item}
        />
      ))}
    </div>
  );
};

export default TransContent;
