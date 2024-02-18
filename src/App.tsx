import { LeftBar } from "./components/LeftBar";
import EditTaskView from "./components/EditTaskView";
import { useState } from "react";

const dummy = [
  { id: 1, name: "Training at the Gym" },
  { id: 2, name: "Play Paddle with friends" },
  { id: 3, name: "Burger BBQ with family" },
];

function App() {
  const [todos, setTodos] = useState(dummy);
  const [selectedToDo, setSelectedTodo] = useState(todos?.[0]);

  return (
    <main className="bg-gray-50 h-screen flex overflow-hidden">
      <LeftBar
        list={todos}
        selectedTodo={selectedToDo}
        handleSelect={setSelectedTodo}
        handleClickOnToDoList={setTodos}
      />
      <EditTaskView
        selectedTodo={selectedToDo}
        handleClickOnSelectedToDo={setSelectedTodo}
        handleClickOnToDoList={setTodos}
      />
    </main>
  );
}

export default App;
