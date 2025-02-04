import backgroundImage from "../../assets/aboutUs.png";
import backgroundImageMedium from "../../assets/aboutUs.png";
import backgroundImageSmall from "../../assets/aboutUs.png";

// import { LazyLoadImage } from "react-lazy-load-image-component";

import Navbar from "../../components/Navbar";

import { Helmet, HelmetProvider } from "react-helmet-async";
import Whatwedo from "../../components/Whatwedo";
import Footer from "../../components/Footer";
import Faq from "../../components/Faq";
import Testimonies from "../../components/Testimonies";
import AboutUsHero from "../../components/AboutUsHero";
import CoreValues from "../../components/CoreValues";
import Mission from "../../components/Mission";
import WhychooseusAbout from "../../components/WhyChooseUsAbout";

const AboutUs = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Smash Travels - About Us | Affordable Travel Packages & Visa Services
        </title>
        <meta
          name="description"
          content="Explore affordable travel packages, visa services, and hassle-free international travel experiences with Smash Travels."
        />
        <meta
          name="keywords"
          content="affordable travel packages, visa services, travel agency, international travel, tourism, visa assistance, cheap flights, family holiday packages, travel deals, group travel"
        />
        <meta
          property="og:title"
          content="Smash Travels | Affordable Travel Packages & Visa Services"
        />
        <meta
          property="og:description"
          content="Smash Travels offers affordable travel packages, visa assistance, and international travel services to make your journey seamless and exciting."
        />
        <meta property="og:url" content="https://www.smashtravels.com" />
        <meta
          property="og:image"
          content="https://www.smashtravels.com/assets/aboutUs.png"
        />
        <meta
          name="twitter:title"
          content="Affordable Travel Packages & Visa Services | Smash Travels"
        />
        <meta
          name="twitter:description"
          content="Smash Travels provides top-notch visa services and travel packages for international travel, holidays, and more."
        />
        <meta
          name="twitter:image"
          content="https://www.smashtravels.com/assets/aboutUs.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.smashtravels.com" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full  md:max-h-[806px]">
        <img
          src={backgroundImage}
          srcSet={`${backgroundImageSmall} 720w, ${backgroundImageMedium} 1440w, ${backgroundImage} 2880w`}
          sizes="(min-width: 2880px) 2880px, 100vw"
          alt="Explore travel packages and visa services with Smash Travels"
          className="absolute object-cover object-top top-[0px] w-full h-[450px] md:h-[580px] lg:h-[550px] xl:h-[630px] object-fit inset-0"
          loading="eager"
        />
        <Navbar />
        <AboutUsHero />
        <CoreValues />
        <Mission
          title={"Mission"}
          subtitle={
            "At Smash Travels, our mission is to bridge the gap between aspirations and opportunities by providing a seamless and reliable pathway to international work and travel. We aim to simplify the complexities of work visa processing, local and international flight bookings, and travel documentation through our expertise and customer-focused services. By prioritizing trust, transparency, and efficiency, we empower individuals and families to achieve their dreams of global exploration, career advancement, and personal fulfillment while ensuring their journey is stress-free and rewarding."
          }
        />
        <Mission
          title={"Vision"}
          subtitle={
            "Our vision is to be the trusted leader in the travel and relocation industry, known for transforming the lives of clients by unlocking global career opportunities and making travel accessible and enjoyable for all. We strive to set the standard for innovation, integrity, and excellence in work visa facilitation, travel management, and customer care. Through continuous growth and dedication, we aim to connect people with the world and inspire a future where boundaries are redefined, and ambitions know no limits."
          }
        />
        <Whatwedo />
        <WhychooseusAbout />
        <Testimonies />
        <Faq />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default AboutUs;
