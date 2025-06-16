"use client";

import React from "react";

const dropdownItems = [
    "Lorem Ipsum 1",
    "Lorem Ipsum 2",
    "Lorem Ipsum 3",
];

export default function Header() {
    return (
        <header className="flex flex-wrap items-center justify-between px-4 py-4 relative z-20 bg-transparent">
            <div className="font-bold text-xl bg-gray-300 p-2 heading">LOGO</div>
            <nav className="flex space-x-6 mr-[5rem] flex-wrap">
                {dropdownItems.map((item, idx) => (
                    <div key={idx} className="relative group cursor-pointer">
                        <button
                            className="flex items-center space-x-1 font-medium focus:outline-none transform transition-transform duration-300 hover:scale-105 active:scale-95"
                        >
                            <span>{item}</span>
                            <svg
                                className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div
                            className="absolute left-0 top-full mt-2 w-40 bg-white rounded-md shadow-lg z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300"
                        >
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Submenu 1</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Submenu 2</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Submenu 3</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </nav>
            <div
                className="bg-white text-black shadow-md px-4 py-2 mr-5 rounded-xl text-sm font-semibold hover:bg-gray-100 z-30 cursor-pointer transition-colors duration-300 active:scale-95 transform hover:scale-105"
            >
                Sign In
            </div>
        </header>
    );
}
