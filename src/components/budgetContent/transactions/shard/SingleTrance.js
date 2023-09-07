import React from "react";
import { useMyContext } from "@/context/ProjectContext";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@/components/ui/button";
const SingleTrance = (props) => {
  const { id, title, number, item } = props;
  const { handleDelete, selection } = useMyContext();

  const onDelete = () => {
    handleDelete(id);
  };

  return (
    <div className="flex justify-between h-20 mt-10 bg-gray-800 items-center rounded-md p-4 mb-5 h-[120px]">
      <div className="flex items-center">
        <div className="h-12 w-12 bg-white text-black rounded-full flex justify-center items-center m-2">
          <AttachMoneyIcon />
        </div>

        <div className="m-2">
          <h1 className="mb-3 text-xs sm:text-base    ">Title: {title}</h1>

          <div className="flex   sm:text-base text-xs">
            <p>
              Budget: <span className="text-black">{number}</span>
            </p>
            <p className="ml-5"> {item.selection} </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[80px]">
        <Button icone onClick={onDelete}>
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default SingleTrance;
