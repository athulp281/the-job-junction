"use client";

import React from "react";
import { Typography, Button, Input } from "@material-tailwind/react";

const Footer = () => {
    const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
    const SUB_LINKS = ["Claim", "Privacy", "Terms"];
    const CURRENT_YEAR = new Date().getFullYear();

    return (
        <footer className="mt-10 px-8 pt-20">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-end justify-center gap-8 md:justify-between">
                    <div className="text-center md:text-left">
                        <Typography
                            as="a"
                            href="https://www.material-tailwind.com"
                            target="_blank"
                            variant="h4"
                            className="mb-6"
                        >
                            The Job Junction
                        </Typography>
                        <ul className="flex flex-wrap items-center justify-center md:justify-start">
                            {LINKS.map((link, idx) => (
                                <li key={link}>
                                    <Typography
                                        as="a"
                                        href="#"
                                        className={`py-1 font-medium !text-gray-700 transition-colors hover:!text-gray-900 ${
                                            idx === 0 ? "pr-3" : "px-3"
                                        }`}
                                    >
                                        {link}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full sm:w-[24rem] sm:min-w-[24rem]">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-3"
                        >
                            Our Newsletter
                        </Typography>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Input color="gray" label="Enter your email" />
                            <Button color="gray" className="flex-shrink-0">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-3"
                        >
                            Disclaimer
                        </Typography>
                    </div>
                    <div>
                        <Typography
                            color="blue-gray"
                            className="font-normal text-gray-500"
                        >
                            The Job Junction does not guarantee, approve, or
                            endorse any information or jobs posted here. Links
                            do not indicate association or endorsement. The Job
                            Junction team is not responsible for any direct or
                            indirect damage or loss resulting from actions based
                            on the information provided.
                        </Typography>
                    </div>
                </div>
                <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
                    <Typography className="text-center font-normal !text-gray-700">
                        &copy; {CURRENT_YEAR} Made with{" "}
                        <a
                            href="https://www.material-tailwind.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Material Tailwind
                        </a>{" "}
                        by{" "}
                        <a
                            href="https://www.creative-tim.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            The Job Junction
                        </a>
                        .
                    </Typography>

                    <ul className="flex items-center">
                        {SUB_LINKS.map((link, idx) => (
                            <li key={link}>
                                <Typography
                                    as="a"
                                    href="#"
                                    className={`py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900 ${
                                        idx === SUB_LINKS.length - 1
                                            ? "pl-2"
                                            : "px-2"
                                    }`}
                                >
                                    {link}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
