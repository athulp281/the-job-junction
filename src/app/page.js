import Navbar from "@/components/navbar";
import Image from "next/image";
import Hero from "./hero";
import TopJobCategories from "./top-job-categories";
import AvailableJobOffers from "./available-job-offers";
import OtherJobOffers from "./other-job-offers";
import CarouselFeatures from "./carousel-features";
import GetYourJobFromUs from "./get-your-job-from-us";
import Faq from "./faq";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <TopJobCategories />
            <AvailableJobOffers />
            {/* <OtherJobOffers /> */}
            <CarouselFeatures />
            <GetYourJobFromUs />
            <Faq />
            <Footer />
        </>
    );
}
