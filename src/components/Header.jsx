import { BoltIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-between">
      {/* Logo section */}
      <Link to="/" className="inline-flex items-center ml-4">
        <div>
          <BoltIcon className="h-6 w-6 text-blue-700" />
        </div>
        <span className="ml-2 text-lx font-bold tracking-wide text-gray-800">Funny Company</span>
      </Link>
      {/* Nav item */}
      <div className="flex items-center justify-between space-x-5 text-gray-900 font-semibold text-lg mr-4 p-5">
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/about"> About</NavLink>
      </div>
    </div>
  );
};

export default Header;
