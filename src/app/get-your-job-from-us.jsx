"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "@/components/feature-card";
import {
    BanknotesIcon,
    LifebuoyIcon,
    BriefcaseIcon,
} from "@heroicons/react/24/solid";

const FEATURES = [
    {
        icon: BanknotesIcon,
        title: "We Support Job Seekers",
        description:
            "Explore our job search resources, resume-building tools, and exclusive career advice.",
    },
    {
        icon: LifebuoyIcon,
        title: "Support 24/7",
        description:
            "Our dedicated customer support team is available to assist you 24 hours a day, 7 days a week.",
    },
    {
        icon: BriefcaseIcon,
        title: "Easy Job Search, Quick Applications",
        description:
            "We offer a fast and user-friendly platform, so you can focus on what matters most - landing your dream job.",
    },
];

export function GetYourJobFromUs() {
    return (
        <section className="px-8">
            <div className="container mx-auto mb-16 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-4">
                    Get your job from us!
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto w-full px-4 !text-gray-500 lg:w-5/12"
                >
                    Achieve your career ambitions with our targeted job searches
                    and development resources. Your goals are just a step away!
                </Typography>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                {FEATURES.map(({ icon, title, description }) => (
                    <FeatureCard key={title} Icon={icon} title={title}>
                        {description}
                    </FeatureCard>
                ))}
            </div>
        </section>
    );
}

export default GetYourJobFromUs;
