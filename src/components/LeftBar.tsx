import React from "react";
import profilePic from "../assets/profile-pic.png";
import GoPro from "./GoPro";
import ToDoCard from "./ToDoCard";

import { FaPlus } from "react-icons/fa6";
import { IeachTodo, Itodos } from "../Interfaces/DataTypes";

interface PropsType {
  list: Itodos;
  selectedTodo: IeachTodo;
  handleSelect: any;
}

export const LeftBar = ({ list, selectedTodo, handleSelect }: PropsType) => {
  return (
    <div className="basis-1/3 relative border-l-4 border-gray-300 shadow-xl">
      <header className="bg-primary pl-6 flex gap-2 py-6">
        <figure className="w-14">
          <img src={profilePic} alt="User Profile Picture" />
        </figure>
        <div>
          <h4 className="text-white font-bold">Hello, John</h4>
          <p className="text-xl drop-shadow-lg text-gray-400 italic font-extralight">
            What are your plans for today?
          </p>
        </div>
      </header>
      <GoPro />

      <div className="mt-3 flex flex-col gap-3 px-4">
        {list?.map((el: IeachTodo) => (
          <ToDoCard
            id={el.id}
            name={el.name}
            selectedTodo={selectedTodo}
            handleSelect={handleSelect}
          />
        ))}
      </div>

      <button className="absolute bottom-4 right-4 rounded-full bg-primary text-xl font-bold p-4">
        <FaPlus fill="white" />
      </button>
    </div>
  );
};
