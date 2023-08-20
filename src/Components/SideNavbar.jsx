
import { Link, useLocation } from "react-router-dom";
import React from "react";

import { RiArrowDropRightLine } from "react-icons/ri";


const SideNavbar = () => {
  
  const activeLink = useLocation();
 
  const dataArr = JSON.parse(localStorage.getItem("userData"));

  // Define a helper function to generate the indicator element for the active link
  const getIndicator = (path, color, marginTop) => {
    // If the current path matches the given path, render the indicator
    return activeLink.pathname === path && (
      <div style={{ marginTop }} className=" indicator">
       
        <style>
          {`
            .indicator::before {
              background-color: ${color};
            }
            .indicator::after {
              background-color: ${color};
            }
          `}
        </style>
        
        <RiArrowDropRightLine className="text-[2.1rem] text-gray-400" />
      </div>
    );
  };

 
  return (
    <nav className="p-8">
      <div className="bg-gradient-to-b from-indigo-500 to-purple-800 p-8 h-[45rem] rounded-3xl">
        <div className="text-left py-44 leading-[4rem] font-semibold">
          <ul>
           
            <li>
              <Link
                to={`/profile/${dataArr.id}`}
                className={`${activeLink.pathname === `/profile/${dataArr.id}`
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                Profile
              </Link>
            </li>
            <hr />
          
            <li>
              <Link
                to="/profile/posts"
                className={`${activeLink.pathname === "/profile/posts"
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                Posts
              </Link>
            </li>
            <hr />
           
            <li>
              <Link
                to="/profile/gallery"
                className={`${activeLink.pathname === "/profile/gallery"
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                Gallery
              </Link>
            </li>
            <hr />
            
            <li>
              <Link
                to="/profile/todo"
                className={`${activeLink.pathname === "/profile/todo"
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                ToDo
              </Link>
              <hr />
            </li>
          
            {getIndicator("/profile/posts", "#664bd5", "-11rem")}
            {getIndicator("/profile/todo", "#6740c9", "-3rem")}
            {getIndicator(`/profile/${dataArr.id}`, "#6652db", "-15rem")}
            {getIndicator("/profile/gallery", "#6646cf", "-7rem")}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
