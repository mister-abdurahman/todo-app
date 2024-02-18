import React from "react";
import { IeachTodo } from "../Interfaces/DataTypes";

interface PropsType {
  selectedTodo: IeachTodo;
}

const EditTaskView = ({ selectedTodo }: PropsType) => {
  console.log(selectedTodo);
  return (
    <div className="basis-2/3 flex flex-col">
      <header className="bg-primary">
        <p className="text-white font-semibold text-center py-9 text-xl">
          {selectedTodo ? "Edit Task" : "Create New Task"}
        </p>
      </header>

      <div className="flex flex-col gap-2 mx-4 my-3">
        <label htmlFor="task">Task Name</label>
        <input
          type="text"
          id="task"
          value={selectedTodo?.name}
          className="w-1/2 border-2 border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      <div className="flex gap-2 mt-auto text-white px-3 pb-3">
        <button className="basis-1/3 bg-tertiary rounded-md py-2">
          Delete
        </button>
        <button className="basis-2/3 bg-primary_dark rounded-md py-2">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditTaskView;
