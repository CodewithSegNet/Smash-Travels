import backgroundImage from "../../assets/norway.png";
import backgroundImageMedium from "../../assets/norway.png";
import backgroundImageSmall from "../../assets/norway.png";

// import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../../components/Footer";
import JobNorway from "../../components/JobNorway";
import NorwayHero from "../../components/NorwayHero";
import CountryNavbar from "../../components/countryNav";
import PackagePricing from "../../components/PackagePricing";
import Cardd from "../../components/Cardd";

const Norway = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Norway Visa & Jobs | Smash Travels</title>
          <meta
            name="description"
            content="Affordable Norway travel packages, visa assistance, and job opportunities."
          />
          <meta
            name="keywords"
            content="Norway visa, Norway travel, work in Norway, visa assistance, immigration services, travel agency, affordable travel packages, international travel, study in Norway, Norway jobs"
          />
          <meta
            property="og:title"
            content="Smash Travels | Norway Visa & Jobs"
          />
          <meta
            property="og:description"
            content="Explore Norway visa services, job opportunities, and travel packages with Smash Travels."
          />
          <meta
            property="og:url"
            content="https://www.smashtravels.com/job-norway"
          />
          <meta
            name="twitter:title"
            content="Norway Visa & Jobs | Smash Travels"
          />
          <meta
            name="twitter:description"
            content="Get expert Norway visa assistance, job search support, and budget-friendly travel deals."
          />
          <meta
            name="twitter:image"
            content="https://www.smashtravels.com/assets/norway.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link
            rel="canonical"
            href="https://www.smashtravels.com/job-norway"
          />
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
          <NorwayHero />
        </div>
        <PackagePricing country={"Norway"} />

        <div>
          <JobNorway />
        </div>

        <Footer />
      </HelmetProvider>
    </>
  );
};

export default Norway;
