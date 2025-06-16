import React from "react";
import Image from "next/image";

export default function ArtistInvestorSection() {
    return (
        <section className="py-16 px-8 w-full mt-[15rem]">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                    LOREM IPSUM DOLOR SIT AMET
                </h2>
                <p className="text-gray-600 mx-auto mt-5">
                    Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
                </p>
            </div>

            <div className=" mx-auto grid grid-cols-12 gap-8 items-center">
                <div className="col-span-7 h-[900px] w-[1100px] overflow-hidden ml-[4rem]">
                    <Image
                        src="/hand3.png"
                        alt="Group of bikers"
                        className="rounded-md shadow-md w-full object-fit-cover h-full"
                        width={1100}
                        height={900}
                    />
                </div>

                <div className="col-span-5 bg-white p-8 rounded-lg shadow-lg text-left ml-[-8rem] mr-[5rem]">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Artist & Investor</h3>
                    <p className="text-gray-700 mb-6">
                        Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...
                    </p>
                    <a href="#" className="text-blue-600 font-semibold flex items-center space-x-1 hover:underline">
                        <span>Read Full Story</span>
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
            </div>
            <div className="max-w-7xl mx-auto mt-12 flex justify-center space-x-3">
                <span className="w-3 h-3 rounded-full bg-blue-300"></span>
                <span className="w-12 h-3 rounded-full bg-blue-600"></span>
                <span className="w-3 h-3 rounded-full bg-blue-300"></span>
                <span className="w-3 h-3 rounded-full bg-blue-300"></span>
                <span className="w-3 h-3 rounded-full bg-blue-300"></span>
            </div>
        </section>
    );
}
