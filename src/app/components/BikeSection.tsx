import React from "react";
import Image from "next/image";

const items = [
    {
        img: "/bike2.png",
        text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
    },
    {
        img: "/bike3.png",
        text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
    },
    {
        img: "/bike4.png",
        text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
    },
];

export default function BikeSection() {
    return (
        <div className="w-full flex flex-row">
            <div className="w-[10%]"></div>
            <section className="flex flex-row mt-[3rem] gap-8 items-center relative mb-[3rem] pb-[3rem] w-[90%] p-4 bg-white"
                style={{ boxShadow: "0  0 8px 8px rgba(0, 0, 0, 0.3)" }}>
                {/* Left side */}
                <div className="flex-1 flex flex-col space-y-3 pl-5 w-full">
                    <p className="text-blue-700 font-semibold">Lorem ipsum dolor sit</p>
                    <h2 className="heading uppercase leading-tight">
                        LOREM IPSUM <br /> DOLOR SIT AMET
                    </h2>
                    <p className="text-gray-700 max-w-md">
                        Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
                        donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam.
                        Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
                    </p>

                    <div className="flex flex-col space-y-3">
                        {items.map(({ img, text }, idx) => (
                            <div key={idx} className="flex items-center space-x-4">
                                <div className="w-20 h-20 relative flex-shrink-0 rounded-md overflow-hidden">
                                    <Image src={img} alt={`Bike ${idx + 2}`} fill style={{ objectFit: "cover" }} />
                                </div>
                                <p className="text-gray-700 max-w-xs">{text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center space-x-6 mt-6 mb-10">
                        <button className="btn-primary px-6 py-2 rounded flex items-center space-x-2">
                            <span>Loerum Ipsum</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        <div className="flex items-center space-x-2 text-blue-700 font-semibold">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>123456789</span>
                        </div>
                    </div>

                </div>

                {/* Right side */}
                <div className="flex-1 relative h-[900px] overflow-hidden shadow-lg">
                    <Image src="/bike1.png" alt="Bike 1" fill style={{ objectFit: "cover" }} />
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-600 via-green-600 to-purple-900" />
            </section>
        </div>
    );
}
