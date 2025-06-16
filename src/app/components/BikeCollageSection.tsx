import React from "react";

const bikeImages = [
    "/bike/bike1.png",
    "/bike/bike2.png",
    "/bike/bike3.png",
    "/bike/bike4.png",
    "/bike/bike5.png",
    "/bike/bike6.png",
    "/bike/bike7.png",
    "/bike/bike8.png",
];

export default function BikeCollageSection() {
    return (
        <section className="bg-gray-100 py-16 px-8 w-full mt-[3rem] h-[100vh]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-12 gap-6">
                    {/* Left side - Text content */}
                    <div className="col-span-4 pr-8 space-y-8">
                        <p className="text-gray-500 uppercase text-sm mb-2">NO LIMITS</p>
                        <h2 className="text-5xl font-extrabold mb-4">LOREM IPSUM DOLOR SIT AMET</h2>
                        <p className="text-gray-700 mb-6">
                            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
                        </p>
                        <button className="btn-primary px-6 py-2 rounded flex flex-row justify-between space-x-2 w-[500px]">
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

                    {/* Right side - Image grid matching the reference */}
                    <div className="col-span-8 mt-[-3rem]">
                        <div className="grid grid-cols-4 gap-1 h-106">
                            {/* Top row - 2 small images */}
                            <div className="col-span-2 h-60 w-40 relative overflow-hidden shadow-md ml-[16rem]">
                                <img src={bikeImages[0]} alt="Bike 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="col-span-2 h-60 w-120 relative overflow-hidden shadow-md">
                                <img src={bikeImages[1]} alt="Bike 2" className="w-full h-full object-cover" />
                            </div>
                            {/* Second row - 1 small + 1 large image */}
                            <div className="col-span-2 h-60 w-40 relative overflow-hidden shadow-md mt-[-3rem] ml-[3rem]">
                                <img src={bikeImages[2]} alt="Bike 3" className="w-full h-full object-cover" />
                            </div>
                            <div className="col-span-2 h-90 w-175 relative overflow-hidden shadow-md ml-[-13rem]">
                                <img src={bikeImages[3]} alt="Bike 4" className="w-full h-full object-cover" />
                            </div>
                            {/* Third row - 1 tall image + 2 small images */}
                            <div className="col-span-2 h-90 w-40 relative overflow-hidden shadow-md mt-[-16rem] ml-[-25rem]">
                                <img src={bikeImages[4]} alt="Bike 5" className="w-full h-full object-cover" />
                            </div>
                            <div className="col-span-2 h-70 w-110 relative overflow-hidden shadow-md mt-[-10rem] ml-[-41rem]">
                                <img src={bikeImages[5]} alt="Bike 6" className="w-full h-full object-cover" />
                            </div>
                            <div className="col-span-4 h-25 w-90 relative overflow-hidden shadow-md ml-[14rem] mt-[-7rem]">
                                <img src={bikeImages[6]} alt="Bike 7" className="w-full h-full object-cover" />
                            </div>
                            <div className="col-span-4 h-25 w-80 relative overflow-hidden shadow-md ml-[37rem] mt-[-7.2rem]">
                                <img src={bikeImages[7]} alt="Bike 8" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}