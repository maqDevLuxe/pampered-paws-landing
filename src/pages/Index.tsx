import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VeterinaryPartners from "@/components/VeterinaryPartners";
import SpaTreatments from "@/components/SpaTreatments";
import LuxurySuites from "@/components/LuxurySuites";
import HygieneMetrics from "@/components/HygieneMetrics";
import GroomingTimeline from "@/components/GroomingTimeline";
import CareTeam from "@/components/CareTeam";
import PlayResort from "@/components/PlayResort";
import HappyPetsCounters from "@/components/HappyPetsCounters";
import WellnessBlog from "@/components/WellnessBlog";
import WebcamAccess from "@/components/WebcamAccess";
import Reviews from "@/components/Reviews";
import BookingSuite from "@/components/BookingSuite";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <VeterinaryPartners />
      <SpaTreatments />
      <LuxurySuites />
      <HygieneMetrics />
      <GroomingTimeline />
      <CareTeam />
      <PlayResort />
      <HappyPetsCounters />
      <WellnessBlog />
      <WebcamAccess />
      <Reviews />
      <BookingSuite />
    </div>
  );
};

export default Index;
