import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Banner from "../Banner/Banner";

const Header = () => {

    const [open, setOpen] = useState(false);

  return (
    <div className="mt-5">
      <nav className="flex flex-col md:flex-row justify-between items-center">
      <div>
        <Logo></Logo>
      </div>

      <div >

        <div className=" flex justify-center mt-3 md:hidden" onClick={()=> setOpen(!open)}>

        {
            open ==true ? <AiOutlineClose></AiOutlineClose>: <AiOutlineMenu></AiOutlineMenu>
        }

        </div>

        <ul className={`md:flex absolute duration-1000 md:static  ${
            open === true ? "top-24 bg-yellow-300 shadow-2xl p-3  rounded-lg z-20 " : "-top-60 bg-none shadow-none"
        }`}>
          <li className="mr-8">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li className="mr-8">
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Donation
            </NavLink>
            
          </li>
          <li className="mr-8">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Statistics
            </NavLink>
            
          </li>
        </ul>
      </div>
      </nav>

      
    </div>
  );
};

export default Header;
