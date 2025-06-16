"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const quoteSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    timeFrame: z.string().min(1, "Time Frame is required"),
    size: z.string().min(1, "Size is required"),
    quantity: z.string().min(1, "Quantity is required"),
    projectDescription: z.string().min(1, "Project description is required"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteSection() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<QuoteFormData>({
        resolver: zodResolver(quoteSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            timeFrame: "",
            size: "",
            quantity: "",
            projectDescription: "",
        },
    });

    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        if (isSubmitSuccessful) {
            setShowConfirmation(true);
            const timer = setTimeout(() => {
                setShowConfirmation(false);
                reset();
            }, 3000); // Show confirmation for 3 seconds before reset
            return () => clearTimeout(timer);
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit = (data: QuoteFormData) => {
        alert("Form submitted!");
        reset(); // Reset the form after submission
        setShowConfirmation(true); // Show confirmation message
    };

    return (
        <section className="w-full mx-auto py-16 px-8 min-h-screen">
            <h2 className="text-center text-2xl font-bold mb-16 text-black tracking-wide">
                REQUEST A QUOTE
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-[5rem] mx-[8rem]">
                    <div>
                        <label className="block text-sm font-medium mb-3 text-gray-800">
                            Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            {...register("name")}
                            className={`w-full px-4 py-3 bg-[#F4F4F4] border-0 rounded-sm focus:outline-none focus:ring-0 text-gray-800 shadow-sm ${errors.name ? "border border-red-500" : ""
                                }`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-3 text-gray-800">
                            E-mail<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            className={`w-full px-4 py-3 bg-[#F4F4F4] border-0 rounded-sm focus:outline-none focus:ring-0 text-gray-800 shadow-sm ${errors.email ? "border border-red-500" : ""
                                }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-3 text-gray-800">
                            Phone Number<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            {...register("phone")}
                            className={`w-full px-4 py-3 bg-[#F4F4F4] border-0 rounded-sm focus:outline-none focus:ring-0 text-gray-800 shadow-sm ${errors.phone ? "border border-red-500" : ""
                                }`}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-3 text-gray-800">
                            Time Frame<span className="text-red-500">*</span>
                        </label>
                        <select
                            {...register("timeFrame")}
                            className={`w-full px-4 py-3 bg-[#F4F4F4] border-0 rounded-sm focus:outline-none focus:ring-0 text-gray-800 shadow-sm appearance-none cursor-pointer ${errors.timeFrame ? "border border-red-500" : ""
                                }`}
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                backgroundPosition: "right 12px center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "16px 16px",
                            }}
                        >
                            <option value="">Choose Time Frame</option>
                            <option value="1 week">1 week</option>
                            <option value="2 weeks">2 weeks</option>
                            <option value="1 month">1 month</option>
                            <option value="3 months">3 months</option>
                        </select>
                        {errors.timeFrame && (
                            <p className="text-red-500 text-sm mt-1">{errors.timeFrame.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-3 text-gray-800">
                            Size<span className="text-red-500">*</span>
                        </label>
                        <select
                            {...register("size")}
                            className={`w-full px-4 py-3 bg-[#F4F4F4] border-0 rounded-sm focus:outline-none focus:ring-0 text-gray-800 shadow-sm appearance-none cursor-pointer ${errors.size ? "border border-red-500" : ""
                                }`}
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                backgroundPosition: "right 12px center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "16px 16px",
                            }}
                        >
                            <option value="">Choose Size</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                        {errors.size && (
                            <p className="text-red-500 text-sm mt-1">{errors.size.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-3 text-gray-800">
                            Quantity<span className="text-red-500">*</span>
                        </label>
                        <select
                            {...register("quantity")}
                            className={`w-full px-4 py-3 bg-[#F4F4F4] border-0 rounded-sm focus:outline-none focus:ring-0 text-gray-800 shadow-sm appearance-none cursor-pointer ${errors.quantity ? "border border-red-500" : ""
                                }`}
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                backgroundPosition: "right 12px center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "16px 16px",
                            }}
                        >
                            <option value="">Choose Quantity</option>
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20+">20+</option>
                        </select>
                        {errors.quantity && (
                            <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
                        )}
                    </div>
                    <div className="md:col-span-2 mt-6">
                        <label className="block text-sm font-medium mb-3 text-gray-800">
                            Please Describe Your Project<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            {...register("projectDescription")}
                            placeholder="Choose a project type"
                            rows={6}
                            className={`w-full px-4 py-3 bg-[#F4F4F4] border-0 rounded-sm focus:outline-none focus:ring-0 resize-none text-gray-800 placeholder-gray-500 shadow-sm ${errors.projectDescription ? "border border-red-500" : ""
                                }`}
                        />
                        {errors.projectDescription && (
                            <p className="text-red-500 text-sm mt-1">{errors.projectDescription.message}</p>
                        )}
                    </div>
                    <div className="md:col-span-2 text-center mt-8">
                        <p className="text-sm text-gray-600 mb-8">
                            By submitting this form you agree to our{" "}
                            <a href="#" className="underline text-blue-600 hover:text-blue-800">
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="underline text-blue-600 hover:text-blue-800">
                                Privacy Policy
                            </a>
                            .
                        </p>
                        <button
                            type="submit"
                            className="btn-primary px-5 py-2 rounded flex items-center space-x-2"
                        >
                            <span>Submit</span>
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
            </form>
            {showConfirmation && (
                <p className="text-green-600 font-semibold text-center mt-4">
                    Thank you for submitting your quote request!
                </p>
            )}
        </section>
    );
}
