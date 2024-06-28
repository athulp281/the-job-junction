// pages/Hero.js
"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import marketing from "../assets/images/marketing.jpg";
import technical from "../assets/images/technical.jpg";
import hr from "../assets/images/hr.jpg";
import calling from "../assets/images/calling.jpeg";
import Accountant from "../assets/images/Accountant.jpg";
import graphicdesigners from "../assets/images/graphic-designers.jpg";
import teacher from "../assets/images/teacher.jpg";

function Hero() {
    return (
        <header className="mt-12 bg-white px-8">
            <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
                <div className="row-start-2 lg:row-auto lg:-mt-40">
                    <Typography
                        variant="h1"
                        color="red"
                        className="text-3xl !leading-snug"
                    >
                        Career Link
                    </Typography>
                    <Typography
                        variant="h1"
                        color="blue-gray"
                        className="mb-2 max-w-sm text-3xl !leading-snug lg:mb-3 lg:text-5xl"
                    >
                        Your Dream Job Awaits
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28"
                    >
                        Explore a world of opportunities and discover your
                        future with our curated job listings and expert career
                        advice. Your dream job is just a click away!
                    </Typography>
                    <Button size="lg" color="gray">
                        see job offers
                    </Button>
                </div>
                <div className="mt-40 grid gap-6 lg:mt-0">
                    <div className="grid grid-cols-4 gap-6">
                        <Image
                            width={768}
                            height={768}
                            src={marketing}
                            className="rounded-lg shadow-md"
                            alt="flowers"
                        />
                        <Image
                            width={768}
                            height={768}
                            src={technical}
                            className="-mt-28 rounded-lg shadow-md"
                            alt="flowers"
                        />
                        <Image
                            width={768}
                            height={768}
                            src={hr}
                            className="-mt-14 rounded-lg shadow-md"
                            alt="flowers"
                        />
                        <Image
                            width={768}
                            height={768}
                            src={calling}
                            className="-mt-20 rounded-lg shadow-md"
                            alt="flowers"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                        <div></div>
                        <Image
                            width={768}
                            height={768}
                            src={Accountant}
                            className="-mt-28 rounded-lg shadow-md"
                            alt="flowers"
                        />
                        <Image
                            width={768}
                            height={768}
                            src={graphicdesigners}
                            className="-mt-14 rounded-lg shadow-md"
                            alt="flowers"
                        />
                        <Image
                            width={768}
                            height={768}
                            src={teacher}
                            className="-mt-20 rounded-lg shadow-md"
                            alt="flowers"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;
