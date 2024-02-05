import React from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 container mx-auto w-full shadow-md rounded-t-lg">
      <div className="flex justify-between items-center">
        <a href="/" className="font-vt323 text-4xl text-slate-600">
          EonTrove
        </a>

        <div className="max-sm:flex flex items-center gap-4">
          <ul className="max-sm:hidden flex justify-end items-end gap-4 font-leto text-lg text-gray-600">
            <li className="hover:underline">
              <Link to="/">Listopia</Link>
            </li>
            <li className="hover:underline">
              <Link to="/completed">Completed</Link>
            </li>
          </ul>
          <div className="hidden max-sm:block">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
