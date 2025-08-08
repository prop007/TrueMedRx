import AntiAgeSection from "../pages/AntiAgeSection";
import PromoBanner from "../pages/PromoBanner";
import WegovyNotice from "../pages/WegovyNotice";
import PromoCarousel from "./PromoCarousel";
import WegovySection from "../PageP/wevygoSection";

    
const EventLandingPage= () => {
  return (
    <div>

     <PromoCarousel/>

     <br />
     <br />
    <WegovyNotice/>
    <br />
    <br />
    <PromoBanner/>
    <br />
    <br />
    <AntiAgeSection/>
        <br />
    <br />
    <WegovySection/>
    </div>
  );
};

export default EventLandingPage;