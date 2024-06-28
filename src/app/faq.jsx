"use client";
import React, { useState } from "react";
import {
    Typography,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const FAQS = [
    {
        title: " What is this website about?",
        desc: "Our website provides visually appealing posters that highlight the latest job vacancies across various industries. These posters will make job searching more engaging and accessible.",
    },
    {
        title: "How can I find job vacancies on this website?",
        desc: "Simply browse through our categorized sections or use the search bar to find job vacancies that match your interests and qualifications.",
    },
    {
        title: "How can I apply for a job listed on a poster?",
        desc: "Each poster includes application instructions, including links to the job application page and contact information for the employer",
    },
    {
        title: "How do I contact customer support if I have an issue?",
        desc: "You can reach our customer support team through the 'Contact Us' page on the website. We are available via email and direct chat on Instagram to assist you with any questions or concerns",
    },
    {
        title: "How do I stay updated with the latest job vacancies?",
        desc: "You can follow us on social media to receive regular updates on the latest job vacancies and posters.",
    },
];

export function Faq() {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <section className="px-8 py-40">
            <div className="container mx-auto">
                <div className="text-center">
                    <Typography variant="h1" color="blue-gray" className="mb-4">
                        Frequently Asked Questions
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto mb-24 w-full max-w-2xl !text-gray-500"
                    >
                        The Career Launch Campaign is a special promotion
                        designed to make your job search as smooth as possible.
                    </Typography>
                </div>
                <div className="mx-auto lg:max-w-screen-lg lg:px-20">
                    {FAQS.map(({ title, desc }, key) => (
                        <Accordion
                            key={key}
                            open={open === key + 1}
                            onClick={() => handleOpen(key + 1)}
                        >
                            <AccordionHeader className="text-left text-gray-900">
                                {title}
                            </AccordionHeader>
                            <AccordionBody>
                                <Typography
                                    color="blue-gray"
                                    className="font-normal text-gray-500"
                                >
                                    {desc}
                                </Typography>
                            </AccordionBody>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;
