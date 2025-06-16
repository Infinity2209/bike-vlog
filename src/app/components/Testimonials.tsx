import React from "react";
import Image from "next/image";

const testimonials = [
    {
        icon: "/icons/icon1.png",
        text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
        name: "Jane Cooper",
        image: "/people/people1.jpg",
    },
    {
        icon: "/icons/icon2.png",
        text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
        name: "Ralph Edwards",
        image: "/people/people2.jpg",
    },
    {
        icon: "/icons/icon3.png",
        text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
        name: "Courtney Henry",
        image: "/people/people3.jpg",
    },
    {
        icon: "/icons/icon4.png",
        text: "Hendrerit augue ut mauris, quis integer netus. Sit rhoncus magnis habitant. Egestas amet habitasse tellus ornare. Hendrerit senectus. Mauris eget vitae praesent neque.",
        name: "Cameron Williamson",
        image: "/people/people4.jpg",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-blue-700 py-16 px-8 w-full text-white mt-[8rem]">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <p className="font-semibold italic mb-1">Join other Sun harvesters</p>
                        <h2 className="text-4xl font-extrabold leading-tight">
                            LOREM IPSUM DOLOR SIT AMET
                        </h2>
                        <p className="max-w-lg mt-2">
                            Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <div className="bg-white text-black px-6 py-2 rounded shadow hover:bg-gray-100 transition">
                            Lorem Ipsum
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-6 mb-8">
                    {testimonials.map(({ icon, text, name, image }, index) => (
                        <div
                            key={index}
                            className="bg-white text-black rounded-lg p-6 shadow flex flex-col justify-between transform transition-transform duration-300 hover:scale-105"
                        >
                            <div className="mb-4">
                                <Image src={icon} alt="Icon" width={32} height={32} className="mb-3" />
                                <p className="text-sm">{text}</p>
                            </div>
                            <div className="flex items-center space-x-3 mt-4">
                                <Image src={image} alt={name} width={40} height={40} className="rounded-full object-cover" />
                                <span className="font-semibold">{name}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex space-x-4">
                    <button aria-label="Previous">
                        <Image src="/icons/Button2.png" alt="Previous" width={40} height={40} />
                    </button>
                    <button aria-label="Next">
                        <Image src="/icons/Button1.png" alt="Next" width={40} height={40} />
                    </button>
                </div>
            </div>
        </section>
    );
}
