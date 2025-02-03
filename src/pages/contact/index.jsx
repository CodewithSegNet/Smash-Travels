import backgroundImage from "../../assets/contact.png";
import backgroundImageMedium from "../../assets/contact.png";
import backgroundImageSmall from "../../assets/contact.png";

// import { LazyLoadImage } from "react-lazy-load-image-component";

import Navbar from "../../components/Navbar";

import { Helmet, HelmetProvider } from "react-helmet-async";
import Whatwedo from "../../components/Whatwedo";
import Footer from "../../components/Footer";

import ContactHero from "../../components/ContactHero";
import Office from "../../components/Office";

const Contact = () => {
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
          content="https://www.smashtravels.com/assets/contact.png"
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
          className="absolute object-cover w-full h-[450px] md:h-[580px] lg:h-[550px] xl:h-[640px] object-fit inset-0"
          loading="eager"
        />
        <Navbar />
        <ContactHero />
        <Office />

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Contact;
