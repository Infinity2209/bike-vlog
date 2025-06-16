"use client";

import React, { useState } from "react";

const faqs = [
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer:
            "Lorem ipsum dolor sit amet consectetur. Voluptate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eligendi quam quos unde earum ab quisquam vero, dolorum numquam Iusto, nemo! Adipisci blanditiis facilis recusandae minus maxime! Quibusdam ipsa aliquid quo provident cum?",
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eligendi quam quos unde earum ab quisquam vero, dolorum numquam Iusto, nemo! Adipisci blanditiis facilis recusandae minus maxime! Quibusdam ipsa aliquid quo provident cum?",
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eligendi quam quos unde earum ab quisquam vero, dolorum numquam Iusto, nemo! Adipisci blanditiis facilis recusandae minus maxime! Quibusdam ipsa aliquid quo provident cum?",
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eligendi quam quos unde earum ab quisquam vero, dolorum numquam Iusto, nemo! Adipisci blanditiis facilis recusandae minus maxime! Quibusdam ipsa aliquid quo provident cum?",
    },
];

export default function FAQSection() {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const toggleFAQ = (index: number) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    return (
        <section className="max-w-7xl mx-auto py-16 px-8 w-full mt-[5rem] bg-white">
            <h2 className="text-2xl font-extrabold">FREQUENTLY ASKED QUESTIONS (FAQS)</h2>
            <div className="border-b border-t border-gray-300 divide-y divide-gray-300 mt-[5rem]">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="py-4 flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="max-w-4xl">
                            <h3 className="font-semibold pb-3">{faq.question}</h3>
                            {expandedIndex === index && faq.answer && (
                                <p className="mt-2 text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                        <div className="text-2xl font-bold select-none">
                            {expandedIndex === index ? "−" : "+"}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
