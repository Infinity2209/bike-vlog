import React from "react";
import Image from "next/image";

export default function AfterNextSection() {
    return (
        <section className="relative w-full h-[900px] flex items-center justify-center text-center text-white">
            <div className="absolute inset-0 filter brightness-50">
                <Image
                    src="/background2.png"
                    alt="Background Bike"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>
            <div className="absolute top-4 left-4 bg-white text-black font-bold px-4 py-2 rounded shadow-lg z-10 text-3xl ml-[5rem]">
                LOGO
            </div>
            <div className="relative z-10 max-w-4xl px-6">
                <p className="mb-4 text-white max-w-6xl mx-auto text-4xl uppercase font-bold">
                    dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing
                </p>
            </div>
        </section>
    );
}
