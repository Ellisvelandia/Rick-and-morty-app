import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../../../redux/useSlice";
import { toast } from "react-hot-toast";
import { FaUserAstronaut } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
  };

  return (
    <header className="shadow-md w-full h-20 px-2 md:px-4 text-white">
      <div className="flex items-center h-full justify-between">
        <div className="h-16 hidden md:inline">
          <img
            src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678743001/rickandmorty/193-1938932_rick-and-morty-wallpaper-pc-removebg-preview_pjtqi2.webp"
            alt="logo"
            className="h-full w-28"
          />
        </div>

        <div className="text-2xl text-slate-600 z-50" onClick={handleShowMenu}>
          <div className="cursor-pointer w-16 h-16 overflow-hidden rounded-full drop-shadow-md">
            {userData ? (
              <img
                src={userData.image}
                alt="photo image user"
                className="h-full w-full"
              />
            ) : (
              <FaUserAstronaut size={25} className="text-3xl" />
            )}
          </div>
          {showMenu && (
            <div className="absolute right-2 bg-red-500 py-2 px-4 shadow drop-shadow-md mt-3 text-lg flex flex-col">
              <Link
                to="/login"
                className="whitespace-nowrap cursor-pointer text-white"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
