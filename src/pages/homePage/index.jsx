import backgroundImage from "../../assets/travels1.webp";
import backgroundImageMedium from "../../assets/travels2.webp";
import backgroundImageSmall from "../../assets/travels3.webp";

// import { LazyLoadImage } from "react-lazy-load-image-component";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Card from "../../components/BoardCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Ads from "../../components/Ads";
import Bookings from "../../components/BookingsPartner"
import Cards from "../../components/Card";
import Whychooseus from "../../components/Whychooseus";
import Footer from "../../components/Footer";
import Testimonies from "../../components/Testimonies"
import Faq from "../../components/Faq"


const HomePage = () => {
  const HeroImg = {
    backgroundImage: `linear-gradient(url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "1000px",
    width: "100%",
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Smash Travels | Home</title>
        <meta
          name="description"
          content="Affordable travel packages and visa services."
        />
        <meta
          name="keywords"
          content="visa services, travel agency, affordable travel packages, international travel, tourism, visa assistance, travel deals, cheap flights, holiday packages"
        />
        <meta property="og:title" content="Smash Travels | Home" />
        <meta
          property="og:description"
          content="Explore travel packages with Smash Travels."
        />
        <meta property="og:url" content="https://www.smashtravels.com" />
        <meta
          name="twitter:title"
          content="Visa Services & Travel Agency | Smash Travels"
        />
        <meta
          name="twitter:description"
          content="Smash Travels offers affordable visa services, top-notch travel packages, and hassle-free international travel experiences."
        />
        <meta
          name="twitter:image"
          content="https://www.smashtravels.com/assets/logos.png"
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
          className="absolute object-cover w-full h-[450px] md:h-[620px] lg:h-[620px] object-fit inset-0"
          loading="eager"
        />
        <Navbar />
        <Hero />
        <Card />
        <Ads />
        <Bookings />
        <Cards />
        <Whychooseus />
        <Testimonies />
        <Faq />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default HomePage;