import backgroundImage from "../../assets/passportHero.webp";
import backgroundImageMedium from "../../assets/passportHero.webp";
import backgroundImageSmall from "../../assets/passportHero.webp";

// import { LazyLoadImage } from "react-lazy-load-image-component";
import Hero from "../../components/PassportHero";
import Navbar from "../../components/Navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Cards from "../../components/PassportCardDisplay";
import Footer from "../../components/Footer";
import Faq from "../../components/Faq";

const PassportPage = () => {
  return (
    <>
     <HelmetProvider>
      <Helmet>
        <title>
          Passport Services in Nigeria | Apply or Renew with Smash Travels
        </title>
        <meta
          name="description"
          content="Simplify your Nigerian passport application or renewal process with Smash Travels. Enjoy fast-tracked passport services tailored for Nigerians at affordable rates."
        />
        <meta
          name="keywords"
          content="passport services Nigeria, Nigerian passport application, renew Nigerian passport, fast passport service Nigeria, travel agency Nigeria, visa and passport assistance"
        />
        <meta
          property="og:title"
          content="Passport Services in Nigeria | Fast Application & Renewal with Smash Travels"
        />
        <meta
          property="og:description"
          content="Need help with your Nigerian passport? Smash Travels provides professional passport application and renewal services. Quick, reliable, and affordable."
        />
        <meta
          property="og:url"
          content="https://www.smashtravels.com/passport-services-nigeria"
        />
        <meta
          name="twitter:title"
          content="Nigerian Passport Services | Application & Renewal Made Easy"
        />
        <meta
          name="twitter:description"
          content="Smash Travels simplifies Nigerian passport services. Apply or renew your passport easily with our expert assistance."
        />
        <meta
          name="twitter:image"
          content="https://www.smashtravels.com/assets/passport-services-nigeria.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://www.smashtravels.com/passport-services-nigeria"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full md:max-h-[806px]">
        <img
          src={backgroundImage}
          srcSet={`${backgroundImageSmall} 720w, ${backgroundImageMedium} 1440w, ${backgroundImage} 2880w`}
          sizes="(min-width: 2880px) 2880px, 100vw"
          alt="Explore travel packages and visa services with Smash Travels"
          className="absolute object-cover object-top top-[0px] w-full h-[450px] md:h-[580px] lg:h-[550px] xl:h-[630px] object-fit inset-0"
          loading="eager"
        />
          <div className="absolute inset-0 bg-black bg-opacity-30 h-[450px] md:h-[580px] lg:h-[550px] xl:h-[630px]"></div>

        <Navbar />
        <Hero />
        </div>

        <Cards />

        <Faq />
        <Footer />
    </HelmetProvider>
    </>
   
  );
};

export default PassportPage;
