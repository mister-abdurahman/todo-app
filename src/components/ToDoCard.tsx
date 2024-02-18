import React from "react";
import { IeachTodo } from "../Interfaces/DataTypes";
import { IoMdCheckmark } from "react-icons/io";

const ToDoCard = ({
  id,
  name,
  handleSelect,
  selectedTodo,
}: {
  id: number;
  name: string;
  //   handleSelect: () => void;
  handleSelect: any;
  selectedTodo: IeachTodo;
}) => {
  return (
    <div
      className={`bg-white shadow-md rounded-md flex gap-3 items-center px-6 py-5`}
    >
      <div
        className={`w-6 h-6 rounded-full border-2 border-primary_dark ${
          selectedTodo?.id === id
            ? "bg-green-500 border-none flex items-center justify-center"
            : ""
        }`}
      >
        {selectedTodo?.id === id && <IoMdCheckmark fill="white" />}
      </div>
      <p
        className={`text-primary_dark font-semibold ${
          selectedTodo?.id === id ? "opacity-40" : ""
        }`}
      >
        {name}
      </p>
      <button
        onClick={() =>
          handleSelect({
            id,
            name,
          })
        }
        className="border-2 border-primary_dark text-primary_dark px-2 py-1 text ml-auto"
      >
        Edit
      </button>
    </div>
  );
};

export default ToDoCard;
