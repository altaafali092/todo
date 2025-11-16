import { ChevronDown, Trash } from "lucide-react";
import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Db from "./components/Db";

const App = () => {

  const reactDb ="reacttodo"

  const [task, setTask] = useState(()=>{

    const rawTodo =localStorage.getItem(reactDb);
    if(!rawTodo) return [];
    return JSON.parse(rawTodo);
  });

 

  const handleSubmit = (title) => {
    const { id, content, checked } = title;
    if (!content) return;

    
    const ifTodoMatched = task.find(
      (curItem) => curItem.content === content);
    if(ifTodoMatched) return

    setTask((prev) => [...prev,{id,content, checked}]);
    console.log(task);
  };

  localStorage.setItem(reactDb,JSON.stringify(task))

  const handleDelte = (value) => {
    console.log(value);
    const updateTask = task.filter((curItem) => curItem.content !== value.content);
    setTask(updateTask);
  };

  const handleChecked=(check)=>{
    console.log("clcik");
    
    const update= task.map((curItem)=>
      curItem.content=== check 
    ? {...curItem,checked : !curItem.checked} :curItem
    )
    setTask(update)
  }
  

  
  const deleteAll = () => {
    setTask([]);
  };

  return (
    <>
   
      <div className="text-white h-screen text-center bg-gray-600">
        <h1 className="text-5xl pt-10  text-white">Todo</h1>

        <Form onAddTodo={handleSubmit} />

        <div className="flex flex-col items-center mt-5 mb-5 gap-2">
          {task.map((curItem) => (
            <List 
             data={curItem}
             onhandleDelete={handleDelte}
              onhandleChecked={handleChecked} />
          ))}
        </div>
        <button
          onClick={deleteAll}
          className="bg-red-400 px-5 py-2 rounded-full"
        >
          clear All
        </button>
      </div>
    </>
  );
};

export default App;
