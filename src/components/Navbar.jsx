import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useStateContext } from "../context/StateContext";


const Navbar = () => {
    const { role } = useStateContext();

  return (
    <div className="bg-white w-full px-3 flex justify-between items-center py-2">
      <ul className="flex gap-4 font-semibold text-gray-700">
        <Link to="/">
          <li>Home</li>
        </Link>
        {/* <Link to='/dashboard'> */}
          <li>Dashboard</li>
        {/* </Link> */}
      </ul>
      <Button title={"Connect wallet"} style={"bg-black text-white max-w-[160px]"}/>
    </div>
  );
};

export default Navbar;
