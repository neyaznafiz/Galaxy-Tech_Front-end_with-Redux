import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="h-14 bg-[#ccac00] rounded-full m-2 max-w-7xl mx-auto px-5 uppercase">
      <ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-zinc-800">
        <h1 className="flex-1">Galaxy Tech</h1>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/top-rated">Top Rated</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li title="Wishlist" className="bg-white p-2 rounded-full">
          <Link to="/">
            <IoIosListBox className="text-zinc-800" />
          </Link>
        </li>
        <li title="cart" className="bg-white p-2 rounded-full">
          <Link to="/cart">
            <BsFillCartFill className="text-zinc-800 " />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
