import React from "react";
import Image from "next/image";

export default function ImageSection() {
    return (
        <section className="relative flex-1 right-0" style={{ zIndex: 0 }}>
            <div
                className="absolute bg-cover bg-center pointer-events-none"
                style={{
                    clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
                    zIndex: 0,
                    top: "-110px", // Extends up into header area
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            >
                <Image
                    src="/hero.png"
                    alt="Hero"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className="pointer-events-none"
                />
                {/* Bottom gradient overlay */}
                <div 
                    className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"
                    style={{ zIndex: 1 }}
                />
            </div>
        </section>
    );
}