import backgroundImage from "../../assets/canadaHero.webp";
import backgroundImageMedium from "../../assets/canadaHero.webp";
import backgroundImageSmall from "../../assets/canadaHero.webp";

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
          <title>Canada Visa & Jobs | Smash Travels</title>
          <meta
            name="description"
            content="Affordable Canada travel packages, visa assistance, and job opportunities."
          />
          <meta
            name="keywords"
            content="Canada visa, Canada travel, work in Canada, visa assistance, immigration services, travel agency, affordable travel packages, international travel, study in Canada, Canada jobs"
          />
          <meta
            property="og:title"
            content="Smash Travels | Canada Visa & Jobs"
          />
          <meta
            property="og:description"
            content="Explore Canada visa services, job opportunities, and travel packages with Smash Travels."
          />
          <meta
            property="og:url"
            content="https://www.smashtravels.com/job-canada"
          />
          <meta
            name="twitter:title"
            content="Canada Visa & Jobs | Smash Travels"
          />
          <meta
            name="twitter:description"
            content="Get expert Canada visa assistance, job search support, and budget-friendly travel deals."
          />
          <meta
            name="twitter:image"
            content="https://www.smashtravels.com/assets/canadaHero.webp"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://www.smashtravels.com/job-canada" />
        </Helmet>

        {/* Hero Section */}
        <div className="relative w-full md:max-h-[806px]">
          <div>
            <img
              src={backgroundImage}
              srcSet={`${backgroundImageSmall} 720w, ${backgroundImageMedium} 1440w, ${backgroundImage} 2880w`}
              sizes="(min-width: 2880px) 2880px, 100vw"
              alt="Explore travel packages and visa services with Smash Travels"
              className="absolute object-cover w-full h-[450px] md:h-[580px] lg:h-[550px] xl:h-[640px] bg-opacity-80 bg-black object-fit inset-0"
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
