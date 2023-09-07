import React from "react";
import { useMyContext } from "@/context/ProjectContext";
import { Button } from "../ui/button";

const Form = () => {
  const {
    title,
    setTitle,
    number,
    setNumber,
    selection,
    setSelection,
    handleAdd,
  } = useMyContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // شرط لتحقق من ملء الحقول وأن القيم صحيحة
  const isFormValid = title !== "" && !isNaN(number) && selection !== "";

  return (
    <div className="w-[600px] bg-[#000000eb] text-center">
      <h1 className="m-5"> Add New Budget</h1>
      <form onSubmit={handleSubmit}>
        <div className="m-5">
          <label>
            <h1>Title</h1>
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title..."
            className="w-[90%] m-2 h-[40px]"
            required // يجعل الحقل مطلوبًا
          />
          <label>
            <h1>Amount</h1>
          </label>
          <input
            type="number" // يفترض أن يكون الإدخال قيمة رقمية
            value={number}
            onChange={(e) => setNumber(parseFloat(e.target.value))}
            placeholder="Amount..."
            className="w-[90%] m-2 h-[40px]"
            required // يجعل الحقل مطلوبًا
            min="0" // قيمة دنيا يمكن أن تكون 0
            step="0.01" // الخطوة للأرقام العشرية
          />
          <label>
            <h1>Type</h1>
          </label>
          <select
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
            className="bg-white w-[90%] m-2 mb-5 h-[40px]"
            required // يجعل الحقل مطلوبًا
          >
            <option value="">Select Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <Button block onClick={handleAdd} disabled={!isFormValid}>
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
