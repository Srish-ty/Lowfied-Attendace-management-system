import React from "react";
import Link from "next/link";
import { navData } from "@/app/config/content/navData";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-end bg-slate-700 px-8">
      {navData.map((datum) => {
        return (
          <Link
            href={datum.url}
            key={datum.url}
            className="mx-6 my-4 px-8 py-3 rounded-lg hover:bg-slate-300 hover:text-slate-700 "
          >
            {datum.text}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
