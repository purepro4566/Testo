'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { TbMenuOrder } from 'react-icons/tb';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div
      className={` ${
        darkMode ? 'bg-stone-950' : 'bg-white'
      } transition ease-in-out delay-75 duration-300`}
    >
      <div className="w-full mx-auto flex content-center justify-between px-10 ">
        <div className="py-4 flex gap-4 px-10">
          <div className="text-teal-300 ">
            <span
              className="cursor-pointer "
              onClick={() => {
                if (darkMode == false) {
                  setDarkMode(true);
                } else {
                  setDarkMode(false);
                }
              }}
            >
              <h3 className="text-red-600 text-2xl font-bold">MARKFLIX</h3>
            </span>
          </div>
        </div>

        <div className="hidden  md:flex text-gray-300 py-4 px-10 space-x-6 ">
          <h3 className="py-1">UNLIMITED TV SHOWS & MOVIES</h3>
          <Link
            target="_blank"
            href="https://portfolio-seven-alpha-27.vercel.app/?fbclid=IwAR1E7pjDSvj7Ic2lWNlYiDiy2mByGZwCQrD1s796cDYqaknf01MOucRxiYY"
            className="bg-red-800 px-10 py-1 cursor-pointer rounded-sm hover:bg-red-700 hover:text-gray-100 transition ease-in-out delay-75 duration-200"
          >
            JOIN US
          </Link>
        </div>

        {showMenu ? (
          <div className="flex mobile-button md:hidden text-red-800 py-4 text-4xl cursor-pointer">
            <TbMenuOrder
              onClick={() => {
                setShowMenu(false);
              }}
            />
          </div>
        ) : (
          <div className="flex mobile-button md:hidden text-red-800 py-4 text-4xl cursor-pointer">
            <AiOutlineMenuUnfold
              onClick={() => {
                setShowMenu(true);
              }}
            />
          </div>
        )}
      </div>

      {showMenu ? (
        <div className="mobile-view md:hidden">
          <ul className="text-teal-200 px-10 flex-col gap-5 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Navbar;
