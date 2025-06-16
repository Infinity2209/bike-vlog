import React from "react";

export default function AfterBikeCollageSection() {
    return (
        <div className="flex flex-row w-full mt-[15rem]">
            <section className="bg-gray-100 py-16 px-8 w-[95%] shadow-lg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-6 items-center">
                        {/* Left side - Image */}
                        <div className="col-span-6 mt-[-10rem]">
                            <img
                                src="/lorem.png"
                                alt="Lorem"
                                className="w-[96%] h-[1000px] object-cover rounded-md shadow-md"
                            />
                        </div>

                        {/* Right side - Text content */}
                        <div className="col-span-6 space-y-8">
                            <p className="text-blue-600 font-semibold uppercase text-sm">Lorem ipsum</p>
                            <h2 className="text-6xl font-extrabold leading-tight w-[500px]">
                                <span className="text-blue-600">LOREM</span> IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
                            </h2>
                            <p className="text-gray-700 max-w-md">
                                Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
                            </p>

                            {/* Two columns of list items */}
                            <div className="grid grid-cols-2 gap-x-22 gap-y-6 max-w-md text-gray-900 font-semibold">
                                <p>Lorem Ipsum</p>
                                <p>Lorem Ipsum</p>
                                <p>Lorem Ipsum</p>
                                <p>Lorem Ipsum</p>
                                <p>Lorem Ipsum</p>
                                <p>Lorem Ipsum</p>
                            </div>

                            {/* Button */}
                            <button className="btn-primary px-6 py-2 rounded flex space-x-2">
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
                        </div>
                    </div>
                </div>
                {/* Bottom gradient line */}
                <div className="absolute left-0 right-[100px] h-3 bg-gradient-to-r from-blue-600 via-green-600 to-purple-900 mt-[3.5rem]" />
            </section>
        </div>
    );
}
