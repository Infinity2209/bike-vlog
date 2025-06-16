import React from "react";
import Image from "next/image";

const listItems = [
    {
        title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
        description:
            "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
];

export default function NextSection() {
    return (
        <div className="w-full flex flex-row">
            <div className="w-[10%]"></div>
            <section className="flex flex-row mt-[3rem] gap-8 items-center relative mb-[3rem] pb-[3rem] w-[90%] p-4 bg-white">
                {/* Left content */}
                <div className="flex-1 pr-12">
                    <p className="text-blue-700 mb-5 font-semibold">Lorem ipsum dolor sit amet</p>
                    <h2 className="heading mb-6">
                        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
                    </h2>
                    <p className="mb-8 text-gray-700 max-w-lg">
                        Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.
                    </p>
                    <ul className="space-y-6">
                        {listItems.map(({ title, description }, idx) => (
                            <li key={idx} className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-6 h-6 relative mt-1">
                                    <Image src="/bullet.png" alt="bullet icon" fill style={{ objectFit: "contain" }} />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">{title}</p>
                                    <p className="text-gray-700 max-w-lg">{description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Right image */}
                <div className="flex-1 relative w-[80px] h-[800px]">
                    <Image src="/man.png" alt="Man" fill style={{ objectFit: "cover" }} />
                </div>
                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-600 via-green-600 to-purple-900" />
            </section>
        </div>
    );
}