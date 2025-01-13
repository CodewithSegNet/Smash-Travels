import backgroundImage from '../../assets/heroimage.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';


const HomePage = () => {

const HeroImg = {
  backgroundImage: `linear-gradient(url(${backgroundImage})`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center', 
  backgroundRepeat: 'no-repeat',
  height: '100%', 
  width: '100%', 
};



  return (
    <>
      
      <div style={HeroImg} className="">
        {/* <Navbar/> */}
        {/*<AboutBackGround/>*/}
        <LazyLoadImage
        src={backgroundImage}
        alt="Lazy Loaded Background"
        style={{
          ...HeroImg, 
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: '-1',
        }}
      />
      <Navbar/>
        <Hero/> 
      </div>

        
       

      
       
    </>
  )
}

export default HomePage