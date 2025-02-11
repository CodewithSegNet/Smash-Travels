
import { useState, useEffect, useRef } from "react";
import logo from '../assets/logos.png';
import { BiChevronDown } from "react-icons/bi";
import {FaXmark, FaBars} from 'react-icons/fa6'
import { NavLink, Link } from 'react-router-dom';
import airplane from '../assets/Vector2.svg'
import visa from '../assets/carbon_stamp.svg'
import passport from '../assets/la_passport.svg'
import car from '../assets/iconoir_car.svg'
import airport from '../assets/airport-rounded.svg'






const Navbar = () => {

  const navItems = [
    {
      link: "Home",
      path: "/",
      ariaLabel: "View our awesome travel and visa service",
    },
    {
      link: "Services",
      path: "",
      icon: <BiChevronDown aria-hidden="true" />,
      ariaLabel: "Explore top-rated visa services and affordable travel packages with Smash Travels",
      submenu: [
        { link: "Flight", path: "/", ariaLabel: "Book affordable flights for your next adventure" },
        { link: "Work Visa", path: "/work-visa", ariaLabel: "Hassle-free work visa application services" },
        { link: "Passport", path: "/passport-services", ariaLabel: "Quick and easy passport processing" },
        { link: "Airport Pickup", path: "/Airport-pickup", ariaLabel: "Quick and easy passport processing" },
        { link: "Car Rental", path: "/Car-rental", ariaLabel: "Quick and easy passport processing" },

      ],
    },
    {
      link: "About Us",
      path: "/about-us",
      ariaLabel: "Explore opportunities travels and visa processes with smash travels",
    },
    {
        link: "Contact Us",
        path: "/contact-us",
        ariaLabel: "Experience seamless customer service with smash travels"
      },
  ];
  
 
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  
  const toggle = () => {
    setIsMenuOpened((prev) => !prev);
  };
 
  useEffect(() => {
    const handleScroll = () => {
      setOpenSubmenuIndex(null); // Close submenu on scroll
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  


 
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if at the top of the page
      setIsAtTop(currentScrollY === 0); 
      
      // Check if the user is scrolling up or down
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY === 0); 
      
      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };
  
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  

  
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 1020px)").matches;

    if (isMobile && isMenuOpened) {
      document.body.classList.add("body-fixed");
    } else {
      document.body.classList.remove("body-fixed");
    }

    return () => {
      document.body.classList.remove("body-fixed");
    };
  }, [isMenuOpened]);

  
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const dropdownRef = useRef(null);

  const handleDropdownToggle = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenSubmenuIndex(null);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  


  const handleMouseEnter = (index) => {
    if (window.innerWidth >= 1024) {
      setOpenSubmenuIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setOpenSubmenuIndex(null);
    }
  };



  
  return (
    
    <>

<nav
  role="navigation"
  aria-label="Main Navigation"
  className={`md:px-14 pb-5 pt-5 fixed top-0 left-0 w-full z-50 text-white px-4 transition-all duration-500
    ${isScrollingUp ? "translate-y-0" : "-translate-y-full"}
    ${isAtTop ? "bg-gradient-active" : "bg-black/70 backdrop-blur-md"}`}
  style={
    isMenuOpened
      ? { background: "linear-gradient(to top, rgba(122, 94, 16, 0.3), rgba(186, 174, 0, 0.7))" }
      : {}
  }
>


      <div
          className="flex justify-between z-20" 
>
          <div className="flex items-center justify-between w-[100%] md:pb-3">
            <NavLink
              to="/"
              className="h-[43px] items-center justify-center flex rounded-md"
              aria-label="Smash Travels home page"
            >
              <img src={logo} alt="Smash Travels - Affordable travel packages and visa services" className=" w-[50px] md:w-[64px] mb-3" />
              <span className='w-full font-meutas text-[16px] md:text-[24px] font-black flex'>Smash Travels</span>
            </NavLink>
            <div className=' flex lg:w-[40%] md:text-[16px] xl:text-[18px] font-medium'>
                <ul className='hidden md:hidden lg:flex w-full items-center justify-between'> 
                <div className='flex items-center gap-1 text-white hover:text-secondary  transition-all duration-300'>
                <NavLink to='/' aria-label="Book your next affordable travel package with Smash Travels" className='text-md' >Home</NavLink>
              </div>
             <div className="relative" ref={dropdownRef}>
                  <div
                    className="flex items-center gap-1  justify-center text-white hover:text-secondary transition-all duration-300 cursor-pointer"
                    onClick={() => handleDropdownToggle(1)}
                  >
                    <NavLink to="" className="text-md">
                      Services
                    </ NavLink>
                    <BiChevronDown
                      aria-hidden="true"
                      className={`text-[25px] mt-[1px] transition-transform duration-300 ${
                        openSubmenuIndex === 1 ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {openSubmenuIndex === 1 && (
                    <div className="absolute top-[100%] left-0 bg-white shadow-lg rounded-lg mt-2 z-10 w-[350px]">
                      <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <NavLink to="/" className="text-black">
                          <div className='flex items-center'>
                            <div className='w-10 h-6 pr-3'>
                              <img className='text-primary' src={airplane} alt="" />
                            </div>
                            <div>
                            <p>Flight</p>
                            <span className='m-0 p-0 text-gray-500 text-[10px]'>Effortless bookings, unbeatable prices, anytime, anywhere.</span>
                            </div>
                            
                          </div>
                          </NavLink>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                        <NavLink to="/work-visa" className="text-black">
                          <div className='flex items-center'>
                            <div className='w-10 h-6 pr-3'>
                              <img className='text-primary' src={visa} alt="" />
                            </div>
                            <div>
                            <p>Work Visas</p>
                            <span className='m-0 p-0 text-gray-500 text-[10px]'>Fast, secure, and hassle-free visa processing.</span>
                            </div>
                            
                          </div>
                          </NavLink>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                        <NavLink to="/passport-services" className="text-black">
                          <div className='flex items-center'>
                            <div className='w-10 h-6 pr-3'>
                              <img className='text-primary' src={passport} alt="" />
                            </div>
                            <div>
                            <p>Passport</p>
                            <span className='m-0 p-0 text-gray-500 text-[10px]'>Hassle-free passport services, guaranteed.</span>
                            </div>
                            
                          </div>
                          </NavLink>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                        <NavLink to="" className="text-black">
                          <div className='flex items-center'>
                            <div className='w-10 h-6 pr-3'>
                              <img className='text-primary' src={airport} alt="" />
                            </div>
                            <div>
                            <p>Airport Pickup</p>
                            <span className='m-0 p-0 text-gray-500 text-[10px]'>Hassle-free passport services, guaranteed.</span>
                            </div>
                            
                          </div>
                          </NavLink>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                        <NavLink to="" className="text-black">
                          <div className='flex items-center'>
                            <div className='w-10 h-6 pr-3'>
                              <img className='text-primary' src={car} alt="" />
                            </div>
                            <div>
                            <p>Car Rental</p>
                            <span className='m-0 p-0 text-gray-500 text-[10px]'>Hassle-free passport services, guaranteed.</span>
                            </div>
                            
                          </div>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

              <div className='flex items-center gap-1 hover:text-secondary text-white transition-all duration-300'>
                 <NavLink to='/about-us' aria-label="" className='text-md'>About Us</NavLink>
              </div>
              <div className='flex items-center gap-1 hover:text-secondary text-white transition-all duration-300'>
                 <NavLink to='/contact-us' aria-label="" className='text-md'>Contact Us</NavLink>
              </div>
                </ul>
           

              <div className='md:flex align-center lg:hidden hidden'>
              <button 
                  onClick={toggle} 
                  className="relative transition-all duration-700 flex items-center"
                  aria-label="Services menu"
                  aria-controls="services-submenu"
                >
                  <div className="relative w-6 h-6">
                    <span
                      className={`absolute inset-0 flex items-center justify-center text-2xl transition-opacity duration-300 ${
                        isMenuOpened ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <FaXmark />
                    </span>
                    <span
                      className={`absolute inset-0 flex items-center justify-center text-2xl transition-opacity duration-300 ${
                        !isMenuOpened ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <FaBars />
                    </span>
                  </div>
                </button>

             </div>
            </div>
            <NavLink to='/' className='bg-secondary hidden lg:block py-3 px-6 xl:px-8 rounded-full text-white bg-opacity-100 hover:bg-opacity-50 hover:text-white hover:opacity-1 transition-all duration-300 border-[3px] border-primary hover:border-white text-lg font-bold'>Get Started</NavLink>

            </div>
             {/* small screen */}

             <div className='md:hidden transition-all duration-300 flex'>
                <button onClick={toggle} aria-label="Toggle menu" className='transition-all duration-300'>
                    {
                      isMenuOpened ? (<FaXmark className='text-2xl transition-all duration-300'/>) : (<FaBars className='text-2xl transition-all duration-300'/>)
                    }
                </button>
             </div>

          </div>
          


          <div style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(253, 150, 2, 1))",
          margin: "0 auto"
  }}  className={`space-y-4 pt-0 absolute left-0 rounded-bl-3xl rounded-br-3xl z-40 md:pb-5 w-[100%] lg:w-[100%] flex flex-col text-center md:flex-col lg:flex-col h-[100vh] lg:h-[400px] overflow-hidden
    ${isMenuOpened ? "opacity-100 translate-y-0 visible pointer-events-auto z-40" : "opacity-0 -translate-y-5 invisible pointer-events-none z-40"} 
    transition-all duration-500 ease-in-out`}
>
         {navItems.map(({ link, path, icon, submenu, ariaLabel }, index) => (
     <ul
     key={link}
     className={`lg:px-14 space-y-2 mx-auto text-center md:text-center w-[100%] px-4 z-40 ${
       index === 0 ? "justify-center mt-[1rem]" : ""
     }`}
   >
      <div 
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleDropdownToggle(index)}
      className="flex text-white items-center w-[100%] mt-5 hover:text-secondary transition-all duration-300 justify-center md:justify-center">
        <NavLink to={path} className="block py-1 text-md font-bold" aria-label={ariaLabel}> 

          {link}
        </NavLink>
        {icon && (
          
          <span
            className={`cursor-pointer text-xl focus:outline-none transition-transform duration-300 ease-in-out ${
              openSubmenuIndex === index ? "rotate-180" : "rotate-0"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleDropdownToggle(index)}
          >
            {icon}
          </span>
        )}
      </div>
      {/* Render Submenu */}
      <div
  className={`overflow-hidden transition-[max-height, opacity] duration-500 ease-in-out ${
    openSubmenuIndex === index
      ? "opacity-100 visible max-h-96"
      : "opacity-0 invisible max-h-0"
  } lg:visible lg:opacity-100 lg:max-h-96`}

  style={{
    transition: `max-height 0.5s ease-in-out, opacity 0.3s ease-in-out`,
  }}
>      
        {submenu && (
          <ul className="space-y-2 transition-all duration-500 ease-in">
            {submenu.map(({ link, path }) => (
              <NavLink
                key={link}
                to={path}
                aria-label={ariaLabel}
                className="block text-center text-sm py-2 hover:rounded-md transition-all duration-500 text-white hover:text-secondary"
              >
                {link}
              </NavLink>
            ))}
          </ul>
        )}
      </div>

    </ul>
  ))}
  <NavLink to='/' style={{marginTop: "3rem"}} className='bg-secondary py-3 mx-[5rem] rounded-full text-white hover:text-white hover:bg-primary text-sm font-semibold md:hidden'>Get Started</NavLink>
</div>

        </nav> 
    </>
  )
}

export default Navbar;



