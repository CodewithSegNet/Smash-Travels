import backgroundImage from "../../assets/travels1.webp";
import backgroundImageMedium from "../../assets/travels2.webp";
import backgroundImageSmall from "../../assets/travels3.webp";

// import { LazyLoadImage } from "react-lazy-load-image-component";
import Hero from "../../components/workvisahero";
import Navbar from "../../components/Navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import WorkVisaCard from "../../components/workvisacard";
import Footer from "../../components/Footer";
import Testimonies from "../../components/Testimonies";
import Faq from "../../components/Faq";
import Countries from "../../components/countries"
import SuccessRate from "../../components/success";
import CountryBoard from "../../components/CountryBoard";
import WorkVisaWhyChooseUs from "../../components/WorkVisaChoose";




const HomePage = () => {
  return (
    <HelmetProvider>
     <Helmet>
    <title>Smash Travels | Work Visa Offers</title>
    <meta
        name="description"
        content="Explore top work visa offers, expert visa assistance, and professional immigration services at Smash Travels."
    />
    <meta
        name="keywords"
        content="work visa, work visa offers, immigration services, visa assistance, international job opportunities, skilled worker visa, work permit, employment visa, overseas work visa, global immigration, work visa consultancy"
    />
    <meta property="og:title" content="Smash Travels | Work Visa Offers" />
    <meta
        property="og:description"
        content="Get expert assistance for work visa applications and explore a wide range of work visa offers with Smash Travels."
    />
    <meta property="og:url" content="https://www.smashtravels.com/work-visa" />
    <meta
        name="twitter:title"
        content="Work Visa Services & Offers | Smash Travels"
    />
    <meta
        name="twitter:description"
        content="Smash Travels specializes in providing work visa services, helping you secure your international employment opportunities smoothly."
    />
    <meta
        name="twitter:image"
        content="https://www.smashtravels.com/assets/logos.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="https://www.smashtravels.com/work-visa" />
</Helmet>


      {/* Hero Section */}
      <div className="relative w-full md:max-h-[806px]">
        <img
          src={backgroundImage}
          srcSet={`${backgroundImageSmall} 720w, ${backgroundImageMedium} 1440w, ${backgroundImage} 2880w`}
          sizes="(min-width: 2880px) 2880px, 100vw"
          alt="Explore travel packages and visa services with Smash Travels"
          className="absolute object-cover w-full h-[450px] md:h-[580px] lg:h-[550px] xl:h-[640px] inset-0"
          loading="eager"
        />
        <Navbar />
        <Hero />
        </div>

        <WorkVisaCard />
        <Countries />
        <SuccessRate />
        <CountryBoard/>
        <WorkVisaWhyChooseUs/>
        <Testimonies />
        <Faq />
        <Footer />
    </HelmetProvider>
  );
};

export default HomePage;
