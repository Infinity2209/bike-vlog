"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
            <Link href="/">
                <a className="text-blue-600 hover:underline">Go back home</a>
            </Link>
        </div>
    );
}
