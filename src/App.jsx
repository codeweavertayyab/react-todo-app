import { FaGithub } from "react-icons/fa6";
import "../src/index.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="h-full w-full lg:p-16 p-6 lg:py-20 py-4 font-poppins">
      <h1 className="lg:text-6xl text-2xl text-center font-semibold lg:mt-5 mt-2 lg:mb-20 mb-5 flex lg:flex-row flex-col justify-center">
        TodoApp By
        <a
          className="text-indigo-800 underline flex ml-3 justify-center"
          href="https://github.com/codeweavertayyab"
        >
         <FaGithub /> codeweavertayyab
        </a>
      </h1>
      <Todo />
    </div>
  );
}

export default App;
