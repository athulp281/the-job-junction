"use client";

import Image from "next/image";
import { Typography, Carousel } from "@material-tailwind/react";
import slider from "../assets/images/slider.jpg";
const data = [
    {
        title: "Find Jobs Fast, Get Hired Quickly",
        description:
            "No need to stress about your job search.Browse job listings online and get hiredquickly. Your dream job is just a clickaway!",
    },
    {
        title: "Search Easily, Apply Quickly",
        description:
            "Forget the hassle of job hunting. Search for jobs easily and apply quickly with our user-friendly platform. Start your career journey today!",
    },
    {
        title: "Effortless Job Search, Immediate Opportunities",
        description:
            "No more stressful job searches. Find jobs effortlessly and seize immediate opportunities with our streamlined process. Your new career awaits!",
    },
];

export function CarouselFeatures() {
    return (
        <div className="px-8 py-56">
            <section className="container mx-auto !rounded-lg bg-[url('/image/Background.png')] bg-center py-10 lg:px-16">
                <Carousel
                    transition={{ duration: 1 }}
                    nextArrow={() => <></>}
                    prevArrow={() => <></>}
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute left-16 bottom-0 z-50 flex h-5 w-20 -translate-x-2/4 gap-2 md:left-2/4">
                            {data.map((item, index) => (
                                <span
                                    key={index}
                                    className={`block h-1 w-10 cursor-pointer transition-all content-[''] ${
                                        activeIndex === index
                                            ? "bg-white"
                                            : "bg-white/50"
                                    }`}
                                    onClick={() => setActiveIndex(index)}
                                />
                            ))}
                        </div>
                    )}
                >
                    {data.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="!relative flex grid-cols-1 flex-col-reverse gap-6 px-10 py-14 md:grid md:grid-cols-5  md:gap-14 md:py-20"
                            >
                                <div className="col-span-3 flex flex-col items-start justify-center">
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-5 text-xl font-normal "
                                    >
                                        {item.description}
                                    </Typography>
                                    <div className="flex items-center gap-2">
                                        <Typography
                                            variant="small"
                                            color="white"
                                            className="font-medium uppercase"
                                        >
                                            {item.title}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="col-span-2 flex w-full shrink-0 md:!justify-end">
                                    <Image
                                        width={768}
                                        height={768}
                                        src={slider}
                                        style={{ borderRadius: 7 }}
                                        alt="testimonial image"
                                        className="h-full w-2/4 object-contain md:!w-2/3"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </section>
        </div>
    );
}

export default CarouselFeatures;
