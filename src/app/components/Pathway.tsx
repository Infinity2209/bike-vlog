"use client";

import React, { useState } from "react";

const tabs = [
    { id: "research", label: "Research" },
    { id: "plan", label: "Plan" },
    { id: "design", label: "Design" },
];

const tabContent: Record<string, string> = {
    research: "Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.",
    plan: "Plan content placeholder. Replace with actual content if needed.",
    design: "Design content placeholder. Replace with actual content if needed.",
};

export default function AfterTestimonialsSection() {
    const [activeTab, setActiveTab] = useState("research");

    return (
        <section className="mt-[5rem]">
            <div className="mx-auto space-y-16">
                {/* Top part */}
                <div className="grid grid-cols-12 gap-6 items-center w-[95%] p-6 mb-[15rem]">
                    <div className="col-span-6 space-y-6 ml-[3rem]">
                        <h2 className="text-2xl font-bold">LOREM IPSUM DOLOR SIT AMET</h2>
                        <div className="flex divide-x divide-gray-300 space-x-4 rounded-md overflow-hidden w-max my-[2rem] border border-gray-300">
                            {tabs.map((tab) => (
                                <div
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-2 text-sm font-semibold ${activeTab === tab.id ? "bg-gray-300 " : "text-gray-700"
                                        }`}
                                >
                                    {tab.label}
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-700 max-w-md">{tabContent[activeTab]}</p>
                        <a href="#" className="text-blue-600 font-semibold flex items-center space-x-1">
                            <span>Check tools</span>
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
                        </a>
                    </div>
                    <div className="col-span-6 h-[700px] w-[700px] ml-[8rem] mt-[3rem]">
                        <img src="/hand1.png" alt="Handshake" className="rounded-md shadow-md" />
                    </div>
                </div>

                {/* Bottom part */}
                <div className="grid grid-cols-12 gap-6 items-center bg-gray-200 ">
                    <div className="col-span-6 space-y-8 ml-[5rem] mt-[3rem] mb-[5rem]">
                        <h2 className="text-8xl font-extrabold text-blue-700 leading-12 w-[500px]">
                            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
                        </h2>
                        <p className="text-gray-700 max-w-md space-y-8">
                            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
                        </p>
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
                        <div className="bg-white p-6 border border-gray-200 shadow-gray-200 max-w-md text-gray-900 mb-[-15rem] mt-[10rem] z-10 overflow-visible w-[500px]">
                            <h3 className="font-semibold pb-[2rem]">Lorem ipsum dolor sit</h3>
                            <p className="text-sm leading-relaxed pb-[1rem]">
                                Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.
                            </p>
                            <p className="text-sm leading-relaxed pb-[1rem]">
                                Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.
                            </p>
                            <p className="text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-6 w-[800px] p-6 ml-[5rem] mt-[-25rem]">
                        <img src="/hand2.png" alt="Handshake 2" className="rounded-md shadow-md" />
                    </div>
                </div>
            </div>
            {/* Bottom gradient line */}
            <div className="absolute left-0 right-[100px] h-3 bg-gradient-to-r from-blue-600 via-green-600 to-purple-900 z-[-5]" />
        </section>
    );
}
