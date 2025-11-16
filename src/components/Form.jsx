import React, { useState } from "react";

const Form = ({ onAddTodo }) => {
  const [title, setTitle] = useState({})

  const handleTitle = (value) => {
    setTitle({id:value,content:value,checked:false})
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(title);
    
    setTitle({id:"",content:"",checked:false});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5 flex gap-2 items-center justify-center">
        <input
          type="text"
          placeholder="Enter Title"
          value={title.content ||""}
          onChange={(e) => handleTitle(e.target.value)}
          className="bg-white text-black py-2 px-10 rounded-full"
        />
        <button className="bg-green-400 px-4 py-2 rounded-full">submit</button>
      </div>
    </form>
  );
};

export default Form;
