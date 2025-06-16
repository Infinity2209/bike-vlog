import React from "react";
import Image from "next/image";

export default function AfterNextSection() {
    return (
        <section className="relative w-full h-[900px] flex items-center justify-center text-center text-white">
            <div className="absolute inset-0 filter brightness-50">
                <Image
                    src="/backgroundBike.png"
                    alt="Background Bike"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>
            <div className="absolute top-4 left-4 bg-white text-black font-bold px-4 py-2 rounded shadow-lg z-10">
                LOGO
            </div>
            <div className="relative z-10 max-w-4xl px-6">
                <h2 className="heading text-white mb-6">
                    LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
                </h2>
                <p className="mb-4 text-white max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
                </p>
                <p className="text-white max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
                </p>
            </div>
        </section>
    );
}
