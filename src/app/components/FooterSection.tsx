import React from "react";

export default function FooterSection() {
    return (
        <footer className="w-full">
            {/* Top part */}
            <div className=" py-16 px-8 text-center items-center w-full">
                <div className="mx-auto space-y-10 items-center text-center flex flex-col gap-8">
                    <div className="inline-block bg-gray-300 px-4 py-1 font-bold rounded">LOGO</div>
                    <h2 className="text-2xl font-extrabold mx-auto justify-center items-center">
                        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
                    </h2>
                    <p className="max-w-md mx-auto text-gray-700">
                        Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
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
                </div>
            </div>

            {/* Bottom part */}
            <div className="bg-gray-900 text-gray-300 py-12 px-8 flex flex-row">
                <div className="bg-gray-700 px-4 py-2 font-bold rounded h-fit">LOGO</div>
                <div className="mx-auto grid grid-cols-4 gap-[8rem]">
                    <div>
                        <h3 className="font-semibold">Lorem Ipsum</h3>
                        <ul className="space-y-3 text-sm mt-[1rem]">
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold">Lorem Ipsum</h3>
                        <ul className="space-y-3 text-sm mt-[1rem]">
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold">Lorem Ipsum</h3>
                        <ul className="space-y-3 text-sm mt-[1rem]">
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold">Lorem Ipsum</h3>
                        <ul className="space-y-3 text-sm mt-[1rem]">
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
