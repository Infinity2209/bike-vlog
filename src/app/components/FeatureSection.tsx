"use client";

import React from "react";
import Image from "next/image";
// import { motion } from "framer-motion";

const features = [
    {
        imgSrc: "/Feature/Feature1.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
        link: "#",
    },
    {
        imgSrc: "/Feature/Feature2.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
        link: "#",
    },
    {
        imgSrc: "/Feature/Feature3.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
        link: "#",
    },
    {
        imgSrc: "/Feature/Feature4.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
        link: "#",
    },
];

// const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
// };

// const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
// };

export default function FeatureSection() {
    return (
        <section
            className="max-w-full mx-[10rem] py-16 px-8 relative"
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true, amount: 0.3 }}
            // variants={containerVariants}
        >
            <p className="text-blue-600 font-semibold mb-2">Lorem ipsum dolor sit amet</p>
            <h2 className="text-3xl font-extrabold mb-4">LOREM IPSUM DOLOR SIT</h2>
            <p className="mb-12 max-w-3xl">
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
            </p>
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">
                {features.map(({ imgSrc, title, description, link }, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-100 rounded-lg p-4 shadow-sm bg-white"
                        // variants={itemVariants}
                    >
                        <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                            <Image src={imgSrc} alt={title} fill style={{ objectFit: "cover" }} />
                        </div>
                        <h3 className="font-semibold mb-2">{title}</h3>
                        <p className="text-sm mb-4">{description}</p>
                        <a href={link} className="text-blue-600 text-sm font-medium hover:underline">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
