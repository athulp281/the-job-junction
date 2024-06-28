"use client";

import React from "react";
import CategoryCard from "@/components/category-card";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
    GlobeEuropeAfricaIcon,
    MicrophoneIcon,
    PuzzlePieceIcon,
    BriefcaseIcon,
    UserGroupIcon,
    CommandLineIcon,
    LightBulbIcon,
} from "@heroicons/react/24/solid";
import marketing from "../assets/images/marketing.jpg";
import technical from "../assets/images/technical.jpg";
import hr from "../assets/images/hr.jpg";
import graphicdesigners from "../assets/images/graphic-designers.jpg";

const CATEGORIES = [
    {
        img: hr,
        icon: BriefcaseIcon,
        title: "Human Resource",
        desc: "The Job Junction",
    },
    {
        img: technical,
        icon: CommandLineIcon,
        title: "Technical",
        desc: "The Job Junction",
    },
    {
        img: marketing,
        icon: UserGroupIcon,
        title: "Marketing",
        desc: "The Job Junction",
    },
    {
        img: graphicdesigners,
        icon: LightBulbIcon,
        title: "Creative",
        desc: "The Job Junction",
    },
];

export function TopJobCategories() {
    return (
        <section className="container mx-auto px-8 pb-20 pt-20 lg:pt-0">
            <div className="mb-20 grid place-items-center text-center">
                <Typography variant="h2" color="blue-gray" className="my-3">
                    Top Job Categories
                </Typography>
                <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
                    Kick off your professional journey with our comprehensive
                    job listings and career resources. Let us help you find the
                    perfect job to jumpstart your career!
                </Typography>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <Card
                    color="gray"
                    className="relative grid h-full w-full place-items-center overflow-hidden text-center"
                >
                    <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
                    <CardBody className="relative w-full">
                        <Typography
                            color="white"
                            className="text-xs font-bold opacity-50"
                        >
                            Career Link
                        </Typography>
                        <Typography variant="h4" className="mt-9" color="white">
                            Top Recruiting Jobs
                        </Typography>
                        <Typography
                            color="white"
                            className="mt-4 mb-14 font-normal opacity-50"
                        >
                            Take the next step in your career with our
                            personalized job matches and professional
                            development resources. Your next career move starts
                            here!
                        </Typography>
                        <Button size="sm" color="white">
                            Read More
                        </Button>
                    </CardBody>
                </Card>
                <div className="col-span-1 flex flex-col gap-6">
                    {CATEGORIES.slice(0, 2).map((props, key) => (
                        <CategoryCard key={key} {...props} />
                    ))}
                </div>
                <div className="col-span-1 flex flex-col gap-6">
                    {CATEGORIES.slice(2, 4).map((props, key) => (
                        <CategoryCard key={key} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TopJobCategories;
