import React from "react";
import Image from "next/image";

const logos = [
    { src: "/logo/hero.png", alt: "Hero" },
    { src: "/logo/honda.png", alt: "Honda" },
    { src: "/logo/bajaj.png", alt: "Bajaj" },
    { src: "/logo/tvs.png", alt: "TVS" },
    { src: "/logo/royal.png", alt: "Royal Enfield" },
    { src: "/logo/yamaha.png", alt: "Yamaha" },
    { src: "/logo/ktm.png", alt: "KTM" },
    { src: "/logo/ather.jpg", alt: "Ather" },
    { src: "/logo/ola.png", alt: "Ola Electric" },
    { src: "/logo/revoult.png", alt: "Revolt" },
    { src: "/logo/ultr.jpg", alt: "Ultraviolette" },
    { src: "/logo/tork.jpg", alt: "Tork Motors" },
];

export default function LogoSection() {
    return (
        <section className="py-16 px-8 max-w-full mx-[10rem] text-center relative">
            <h2 className="mb-16 ml-50">
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR. COMMODO LEO AMET.
            </h2>
            <div className="grid grid-cols-4 gap-x-32 gap-y-12 justify-center items-center mt-[5rem]">
                {logos.map(({ src, alt }, idx) => (
                    <div key={idx} className="w-full h-24 relative flex items-center justify-center">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            style={{ objectFit: "contain" }}
                            className="filter transition-all duration-300"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}