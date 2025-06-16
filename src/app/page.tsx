import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import ImageSection from "./components/ImageSection";
import BikeSection from "./components/BikeSection";
import Environment from "./components/Environment";
import Description from "./components/Description";
import LogoSection from "./components/LogoSection";
import FeatureSection from "./components/FeatureSection";
import QuoteSection from "./components/QuoteSection";
import PhoneSection from "./components/PhoneSection";
import BikeCollageSection from "./components/BikeCollageSection";
import Provided from "./components/Provided";
import Pathway from "./components/Pathway";
import ArtistInvestorSection from "./components/ArtistInvestorSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <Navbar />
      <main className="flex flex-1 px-8 min-h-[70vh] mb-[3rem] relative bg-white">
        <MainContent />
        <ImageSection />
      </main>
      <BikeSection />
      <Environment />
      <Description />
      <LogoSection />
      <FeatureSection />
      <QuoteSection />
      <PhoneSection />
      <BikeCollageSection />
      <Provided />
      <Testimonials />
      <Pathway />
      <ArtistInvestorSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
