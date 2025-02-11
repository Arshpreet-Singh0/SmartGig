import Footer from "../Footer";
import Navbar from "../navbar/Navbar";
import Categories from "./Categories";
import Community from "./Community";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import MarketPreview from "./MarketPreview";
import PlatformFeatures from "./PlatformFeatures";
import SuccessStories from "./SuccessStories";
import TrustSafety from "./Trust-Safety";

const HomePage = () => {
  return (
   <>
   <Navbar />
   <HeroSection />
   <HowItWorks />
   <MarketPreview />
   <Categories />
   <SuccessStories />
   <PlatformFeatures />
   <Community />
   <TrustSafety />
   <Footer />
   </>
  )
}

export default HomePage