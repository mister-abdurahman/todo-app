import React, { useEffect, useState } from "react";
import { IeachTodo, Itodos } from "../Interfaces/DataTypes";

interface PropsType {
  selectedTodo: IeachTodo;
  handleClickOnSelectedToDo: (x: object) => void;
  handleClickOnToDoList: (x: any) => void;
}

const EditTaskView = ({
  selectedTodo,
  handleClickOnSelectedToDo,
  handleClickOnToDoList,
}: PropsType) => {
  const [todoTitle, setTodoTitle] = useState(selectedTodo?.name || "");

  const handleSave = () => {
    handleClickOnSelectedToDo({});
    handleClickOnToDoList((prev: Itodos) => {
      return prev.map((el: IeachTodo) => {
        if (el.id === selectedTodo.id) el.name = todoTitle;
        return el;
      });
    });
    setTodoTitle("");
  };

  const handleDelete = () => {
    handleClickOnSelectedToDo({});
    handleClickOnToDoList((prev: Itodos) => {
      return prev.filter((el: IeachTodo) => el.id !== selectedTodo.id);
    });
    setTodoTitle("");
  };

  useEffect(
    function () {
      setTodoTitle(selectedTodo?.name);
    },
    [selectedTodo]
  );

  return (
    <div className="basis-2/3 flex flex-col">
      <header className="bg-primary">
        <p className="text-white font-semibold text-center py-9 text-xl">
          {selectedTodo.id ? "Edit Task" : "Create New Task"}
        </p>
      </header>

      {selectedTodo?.id && (
        <div className="flex flex-col gap-2 mx-4 my-3">
          <label htmlFor="task">Task Name</label>
          <input
            type="text"
            id="task"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            className="w-1/2 border-2 border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      )}

      {!selectedTodo?.id && (
        <p className="text-center text-primary_dark font-semibold mt-12">
          Click on the "➕" icon on the sidebar to create a task
        </p>
      )}

      {selectedTodo.id && (
        <div className="flex gap-2 mt-auto text-white px-3 pb-3">
          <button
            onClick={handleDelete}
            className="basis-1/3 bg-tertiary rounded-md py-2"
          >
            Delete
          </button>
          <button
            onClick={handleSave}
            className="basis-2/3 bg-primary_dark rounded-md py-2"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EditTaskView;
