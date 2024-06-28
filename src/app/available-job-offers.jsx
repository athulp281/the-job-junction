"use client";

import React, { useEffect, useState } from "react";
import {
    Button,
    Typography,
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";
import BookCard from "@/components/book-card";
import hr from "../assets/images/hr.jpg";
import { JOBS } from "@/assets/data";

const BOOKS_TABS = [
    "All",
    "Human Resource",
    "Technical",
    "Marketing",
    "Creative",
    "Other",
];

export function AvailableJobOffers() {
    const [activeTab, setActiveTab] = useState("All");

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (activeTab === "All") {
            setFilteredData(JOBS);
        } else {
            const jobs = JOBS.filter((item) => item.category === activeTab);
            setFilteredData(jobs);
        }
    }, [activeTab]);

    return (
        <section className="px-8 pt-20 pb-10">
            <div className="container mx-auto mb-20 text-center">
                <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="mb-3 font-bold "
                >
                    Career Link
                </Typography>
                <Typography variant="h1" color="blue-gray" className="mb-2">
                    Available Job Offers
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12"
                >
                    Pursue your passion with our tailored job listings and
                    career support services. Find the job you love today!
                </Typography>
                <div className="mt-20 flex items-center justify-center">
                    <Tabs value={activeTab} className="w-full lg:w-8/12">
                        <TabsHeader
                            className="h-12 bg-transparent"
                            indicatorProps={{
                                className: "!bg-gray-900 rounded-lg",
                            }}
                        >
                            {BOOKS_TABS.map((book) => (
                                <Tab
                                    key={book}
                                    value={book}
                                    className={`!font-medium capitalize transition-all duration-300
                    ${activeTab === book ? "text-white" : "capitalize"}
                  `}
                                    onClick={() => setActiveTab(book)}
                                >
                                    {book}
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
                {filteredData.map((props, key) => (
                    <BookCard key={key} {...props} />
                ))}
            </div>
            <div className="grid place-items-center">
                <Button className="mt-32" variant="outlined">
                    Show more
                </Button>
            </div>
        </section>
    );
}

export default AvailableJobOffers;
