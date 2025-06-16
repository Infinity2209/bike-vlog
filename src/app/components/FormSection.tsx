"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    agree: z.boolean().refine((val) => val === true, {
        message: "You must agree to the terms",
    }),
});

type FormData = z.infer<typeof formSchema>;

export default function FormSection() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            agree: true,
        },
    });

    const [checked, setChecked] = useState(true);

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
            setChecked(true);
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit = (data: FormData) => {
        alert(`Submitted email: ${data.email}`);
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-4 mb-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className={`flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.email ? "border-red-500" : ""
                        }`}
                />
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
            </form>
            {errors.email && (
                <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
            )}
            {isSubmitSuccessful && (
                <p className="text-green-600 font-semibold">Thank you for submitting your email!</p>
            )}
            <label className="flex items-center space-x-2 text-gray-600 cursor-pointer select-none">
                <div
                    onClick={() => setChecked(!checked)}
                    className={`w-5 h-5 flex items-center justify-center rounded-full cursor-pointer border-2 border-blue-600 ${checked ? "bg-blue-600" : "bg-transparent"
                        }`}
                >
                    {checked && (
                        <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </div>
                <span onClick={() => setChecked(!checked)}>No credit card required!</span>
            </label>
        </React.Fragment>
    );
}
