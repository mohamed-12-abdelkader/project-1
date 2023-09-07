import React, { createContext, useContext, useState, useEffect } from "react";

const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
};

const STORAGE_KEY = "items";

export const MyContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [selection, setSelection] = useState("Income");
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    const newItem = {
      id: Math.random(),
      title,
      number: parseFloat(number),
      selection, // افحص القيمة المختارة وقم بتعيينها بناءً على النوع المختار
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
    setTitle("");
    setNumber("");
    setOpen(false);
    console.log(items);
  };

  const calculateTotal = () => {
    const expenseItems = items.filter((item) => item.selection === "Expense");
    const incomeItems = items.filter((item) => item.selection === "Income");

    const expenseTotal = expenseItems.reduce(
      (total, item) => total + item.number,
      0
    );
    const incomeTotal = incomeItems.reduce(
      (total, item) => total + item.number,
      0
    );

    const total = incomeTotal - expenseTotal;

    return { expenseTotal, incomeTotal, total };
  };

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setItems(storedItems);
  }, []);

  const handleDelete = (idToDelete) => {
    const updatedItems = items.filter((item) => item.id !== idToDelete);
    setItems(updatedItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
  };

  const totals = calculateTotal();

  const filterItemsBySelection = (filterType) => {
    if (filterType === "All") {
      return items;
    } else {
      return items.filter((item) => item.selection === filterType);
    }
  };

  return (
    <MyContext.Provider
      value={{
        title,
        setTitle,
        number,
        setNumber,
        selection,
        setSelection,
        items,
        handleAdd,
        handleDelete,
        calculateTotal,
        open,
        setOpen,
        totals,
        filterItemsBySelection,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
