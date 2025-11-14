import { Trash } from "lucide-react";
import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
 
  const [task, setTask] = useState([]);

  const handleSubmit = (title) => {
 
 
    if (!title) return;
    if (task.includes(title)) {

      setTitle("");
      return;
    }

    setTask((prev) => [...prev, title]);
 
  };

  const handleDelte = (value) => {
    console.log(value);
    const updateTask = task.filter((curItem) => curItem !== value);
    setTask(updateTask);
  };


  const deleteAll = () => {
    setTask([]);
  };

  return (
    <>
      <div className="text-white h-screen text-center bg-gray-600">
        <h1 className="text-5xl pt-10  text-white">Todo</h1>

      <Form  onAddTodo={handleSubmit} />

        <div className="flex flex-col items-center mt-5 mb-5 gap-2">
          {task.map((curItem, idx) => (
           <List key={idx} data={curItem} onhandleDelete={handleDelte}/>
          ))}
        </div>
        <button onClick={deleteAll} className="bg-red-400 px-5 py-2 rounded-full">
          clear All
        </button>
      </div>
    </>
  );
};

export default App;
