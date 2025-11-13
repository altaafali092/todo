import { Trash } from "lucide-react";
import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit by:", title);

    if (!title) return;

    if (task.includes(title)) {
      setTitle("");
      return;
    }

    setTask((prev) => [...prev, title]);
    setTitle("");
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

        <form onSubmit={handleSubmit}>
          <div className="mt-5 flex gap-2 items-center justify-center">
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-white text-black py-2 px-10 rounded-full"
            />
            <button className="bg-green-400 px-4 py-2 rounded-full">
              submit
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center mt-5 mb-5 gap-2">
          {task.map((curItem, idx) => (
            <div className="flex items-center justify-center gap-4" key={idx}>
              <h1 className="bg-white px-30 py-3 text-black text-lg rounded-full">
                {curItem}
              </h1>
              <button onClick={() => handleDelte(curItem)}>
                <Trash
                  size={40}
                  className="bg-red-600 px-2 py-2 rounded-full"
                />
              </button>
            </div>
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
