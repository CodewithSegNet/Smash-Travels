import backgroundImage from "../../assets/canada.png";
import backgroundImageMedium from "../../assets/travels2.webp";
import backgroundImageSmall from "../../assets/travels3.webp";

// import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../../components/Footer";
import CanadaHero from "../../components/CanadaHero";
import CountryNavbar from "../../components/countryNav";
import PackagePricing from "../../components/PackagePricing";
import JobCanada from "../../components/JobCanada";

const Canada = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Netherlands Jobs | Smash Travels</title>
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
        <div className="relative w-full md:max-h-[806px]">
          <div>
            <img
              src={backgroundImage}
              srcSet={`${backgroundImageSmall} 720w, ${backgroundImageMedium} 1440w, ${backgroundImage} 2880w`}
              sizes="(min-width: 2880px) 2880px, 100vw"
              alt="Explore travel packages and visa services with Smash Travels"
              className="absolute object-cover w-full h-[450px] md:h-[580px] lg:h-[550px] xl:h-[640px] bg-opacity-50 bg-black object-fit inset-0"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 h-[450px] md:h-[580px] lg:h-[550px] xl:h-[640px] "></div>
          </div>

          <CountryNavbar />
          <CanadaHero />
        </div>
        <PackagePricing country={"Canada"} />

        <div>
          <JobCanada />
        </div>

        <Footer />
      </HelmetProvider>
    </>
  );
};

export default Canada;
