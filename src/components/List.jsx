import { Trash } from "lucide-react";
import React from "react";

const List = ({key,data,onhandleDelete}) => {
  return (
    <div className="flex items-center justify-center gap-4" key={key}>
      <h1 className="bg-white px-30 py-3 text-black text-lg rounded-full">
        {data}
      </h1>
      <button onClick={() => onhandleDelete(data)}>
        <Trash size={40} className="bg-red-600 px-2 py-2 rounded-full" />
      </button>
    </div>
  );
};

export default List;
