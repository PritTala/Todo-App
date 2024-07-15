import React, { useEffect, useRef, useState } from "react";
import todoicon from "../assets/todo-icon.svg";
import TodoItems from "./TodoItems";

export default function Todo() {
  const [list, setList] = useState(localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')): []);

  const field = useRef();

  // add function for add data
  const add = () => {
    const inputtext = field.current.value.trim();
    if (inputtext !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputtext,
        status: false,
      };
      setList((prev) => [...prev, newTodo]);
      field.current.value = "";
    }
  };
  const deletelist = (id) => {
    setList((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const toogle = (id) => {
    setList((prev) => {
      return prev.map((todo) => {
        if (todo.id == id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      });
    });
  };

  useEffect(()=>{console.log(list)
    localStorage.setItem("data",JSON.stringify(list))
  },[list])
  
  return (
    <>
      <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        {/* title */}
        <div className="flex item-center mt-7 gap-2">
          <img className="w-6" src={todoicon} alt="todo icon" />
          <h1 className="text-3xl font-bold">Todo List</h1>
        </div>
        {/* input box */}
        <div className="flex item-center my-7 bg-gray-200 rounded-full">
          <input
            className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
            type="text"
            placeholder="Add your task"
            ref={field}
          />
          <button
            className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg cursor-pointer"
            onClick={add}
          >
            Add+
          </button>
        </div>
        {/* Todo list */}
        <div>
          {
          // localStorage.getItem(data)
          list.map((list, index) => {
            return (
              <TodoItems
                key={index}
                text={list.text}
                id={list.id}
                status={list.status}
                deletelist={deletelist}
                toogle={toogle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
