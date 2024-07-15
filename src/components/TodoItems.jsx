import React from "react";
import tickedicon from "../assets/ticked.svg";
import nottickedicon from "../assets/not-ticked.svg";
import deleteicon from "../assets/delete.svg";

export default function TodoItems({ text, id, status, deletelist , toogle}) {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer" onClick={()=>toogle(id)}>
        <img className="w-7" src={status ? tickedicon : nottickedicon} alt="tick" />
        <p className={`text-stone-700 ml-4 text-[17px] ${status ? 'line-through' : ""}`}>{text}</p>
      </div>
      <div className="w-6 cursor-pointer">
        <img src={deleteicon} alt="delete" onClick={() => deletelist(id)} />
      </div>
    </div>
  );
}
