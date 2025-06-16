"use client";

import React from "react";
import FormSection from "./FormSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function MainContent() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            ref={ref}
            className={`flex flex-col justify-center flex-1 px-16 w-[70%] relative transition-opacity duration-700 ease-in-out ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
        >
            <h1 className="heading mb-6 leading-tight">
                Lorem ipsum dolor <br /> sit amet
            </h1>
            <p className="mb-8 text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit
                sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi
                libero imperdiet neque. Justo suspendisse tristique posuere quis eget
                viverra. Nunc euismod ultrices etiam nulla habitasse.
            </p>
            <FormSection />            
        </section>
    );
}
