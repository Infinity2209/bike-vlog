import React from "react";
import Image from "next/image";

export default function PhoneSection() {
    return (
        <section className="bg-gray-100 py-16 px-8 w-full flex items-center justify-between mb-[3rem]">
            <div className="max-w-lg">
                <p className="text-blue-600 font-semibold mb-5 text-2xl">Lorem Ipsum</p>
                <h2 className="text-5xl font-extrabold mb-8">Lorem Ipsum Dolor Sit Amet</h2>
                <p className="mb-8 text-gray-700 mt-8 space-y-8">
                    Lorem ipsum dolor sit amet consectetur. Volutpate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
                </p>
                <div className="flex space-x-4">
                    <a href="#" aria-label="Google Play Store">
                        <Image src="/google.png" alt="Google Play" width={140} height={40} />
                    </a>
                    <a href="#" aria-label="Apple App Store">
                        <Image src="/apple.png" alt="Apple Store" width={140} height={40} />
                    </a>
                </div>
            </div>
            <div className="relative">
                <Image src="/photo.png" alt="Phone" width={1000} height={412} />
            </div>
        </section>
    );
}
