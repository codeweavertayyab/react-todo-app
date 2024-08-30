import React, { useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const Todo = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  let [getTodo, setGetTodo] = useState([]);
  const handleTodoSubmit = async () => {
    const newTodo = {
      id: crypto.randomUUID(),
      ...todo,
    };

    try {
      let response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      if (response.ok) {
        setTodo({
          title: "",
          description: "",
        });
        console.info("Success");
        console.log(todo);
      } else {
        console.error("Error todo", response.statusText, response.status);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchTodos = async () => {
    let getTodoResponse = await fetch("http://localhost:3000/todos");
    getTodo = await getTodoResponse.json();
    setGetTodo(getTodo);
  };
  useEffect(() => {
    fetchTodos();
  }, [todo]);
  return (
    <>
       
      <div className="flex justify-between flex-col lg:flex-row">
        <section>
         
          <div className="h-[500px] lg:w-[40vw] w-full rounded-lg  border shadow-2xl lg:p-20 p-5 flex flex-col justify-center">
            <div className="flex flex-col my-2">
              <label htmlFor="title" className="text-3xl font-semibold">
                Title:
              </label>
              <input
                type="text"
                placeholder="Enter todo title"
                className="py-4 px-4 rounded-lg mt-2 border border-black/30"
                value={todo.title}
                onChange={(e) => {
                  setTodo({
                    ...todo,
                    title: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="desc" className="text-3xl font-semibold">
                Description:
              </label>
              <textarea
                type="text"
                placeholder="Enter todo title"
                className="py-5 px-4 rounded-lg mt-2 border border-black/30"
                rows={5}
                value={todo.description}
                onChange={(e) => {
                  setTodo({
                    ...todo,
                    description: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <button
                className="py-4 px-16 rounded-xl my-3 bg-indigo-600 text-white font-semibold hover:bg-indigo-950 transition-all"
                onClick={handleTodoSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </section>

        <section>
         
          <div className="h-max lg:w-[50vw] w-full rounded-lg border  shadow-2xl lg:p-20 p-5 flex flex-col ">
            <div className="flex flex-col gap-3">
              {getTodo.map((tod) => (
                <div
                  key={tod.id}
                  className="h-28 rounded-lg bg-indigo-900 p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="text-white lg:text-2xl text-xl font-semibold">
                      {tod.title}
                    </p>
                    <p className="text-white lg:text-lg text-sm font-light">
                      {tod.description}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="py-3 px-3 rounded-full my-3 bg-yellow-600 text-white font-semibold hover:bg-yellow-800 transition-all">
                      <FaPen />
                    </button>
                    <button className="py-3 px-3 rounded-full my-3 bg-red-600 text-white font-semibold hover:bg-red-900 transition-all">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Todo;
