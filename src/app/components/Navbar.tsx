"use client";

import React from "react";
import { motion } from "framer-motion";

const dropdownItems = [
    "Lorem Ipsum 1",
    "Lorem Ipsum 2",
    "Lorem Ipsum 3",
];

const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
};

const dropdownVariants = {
    hidden: { opacity: 0, y: -10, pointerEvents: "none" },
    visible: { opacity: 1, y: 0, pointerEvents: "auto", transition: { duration: 0.3 } },
};

export default function Header() {
    return (
        <header className="flex flex-wrap items-center justify-between px-4 py-4 relative z-20 bg-transparent">
            <div className="font-bold text-xl bg-gray-300 p-2 heading">LOGO</div>
            <nav className="flex space-x-6 mr-[5rem] flex-wrap">
                {dropdownItems.map((item, idx) => (
                    <div key={idx} className="relative group cursor-pointer">
                        <motion.button
                            className="flex items-center space-x-1 font-medium focus:outline-none"
                            whileHover="hover"
                            whileTap="tap"
                            variants={buttonVariants}
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
                        </motion.button>
                        <motion.div
                            className="absolute left-0 top-full mt-2 w-40 bg-white rounded-md shadow-lg z-50"
                            initial="hidden"
                            animate="hidden"
                            whileHover="visible"
                            variants={dropdownVariants}
                        >
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Submenu 1</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Submenu 2</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Submenu 3</li>
                            </ul>
                        </motion.div>
                    </div>
                ))}
            </nav>
            <motion.div
                className="bg-white text-black shadow-md px-4 py-2 mr-5 rounded-xl text-sm font-semibold hover:bg-gray-100 z-30 cursor-pointer transition-colors duration-300 active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Sign In
            </motion.div>
        </header>
    );
}
