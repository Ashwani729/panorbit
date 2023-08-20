import React, { useContext } from "react";
import Chat from "../Components/ChatPage";
import Navbar from "../Components/Navbar";
import SideNavbar from "../Components/SideNavbar";
import { userContext } from "../Context/UserProvider";

const ToDo = () => {
 
  const { dataArr } = useContext(userContext);
  
  return (
    <div className="">
      <div className="flex ">
        <div className=" w-[24%]">
          <SideNavbar />
        </div>
        <div className="py-12 px-8 w-[76%]">
          <Navbar />
          <hr />
          
        
          {!dataArr ? (
            <div>
              <img
                className="w-[30rem]"
                style={{ margin: "auto" }}
                src="https://cdn.dribbble.com/users/97383/screenshots/2055128/media/6467998e9397187606f1f9748c416ccf.gif"
                alt="loading"
              />
            </div>
          ) : (
            <div className="p-8 mt-4">
              <div className="text-center font-bold text-gray-400 text-[5rem] opacity-25 p-40">
                Coming Soon
              </div>
            </div>
          )}
        </div>
      </div>
      <Chat className="" />
    </div>
  );
};

export default ToDo;
