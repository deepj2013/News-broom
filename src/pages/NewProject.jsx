import { FaMicrophone, FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      {/* Title */}
      <h1 className="text-2xl mt-20 font-semibold text-black mb-10">
        What do you want to build scenarios about?
      </h1>

     {/* Bottom Input Bar */}
     <div className="flex-1 m-20 flex items-end justify-center w-full">
        <div className="w-full max-w-3xl flex items-center border border-gray-300 rounded-lg p-3 shadow-sm">
          <FaMicrophone className="text-gray-500 text-xl mr-3 cursor-pointer" />
          <input 
            type="text" 
            placeholder="Type message" 
            className="flex-1 outline-none bg-transparent text-gray-700 text-sm"
          />
          <FaPaperPlane className="text-gray-500 text-xl ml-3 cursor-pointer" 
          onClick={() => navigate("/generating-scenarios")}/>
        </div>
      </div>
    </div>
  );
};

export default NewProject;