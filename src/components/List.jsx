import { Check, CheckCircle, Trash } from "lucide-react";
import React from "react";

const List = ({data,onhandleDelete,onhandleChecked}) => {
  return (
    <div className="flex items-center justify-center gap-4" key={data.id}>
      <h1 className={`${data.checked ? "line-through opacity-50":""} bg-white px-30 py-3 text-black text-lg rounded-full`}>
      
        {data.content}
      </h1>
      <button onClick={() => onhandleChecked(data.content)}>
        <Check size={40} className="bg-blue-500 px-2 py-2 rounded-full" />
      </button>

      <button onClick={() => onhandleDelete(data)}>
        <Trash size={40} className="bg-red-600 px-2 py-2 rounded-full" />
      </button>
    </div>
  );
};

export default List;
