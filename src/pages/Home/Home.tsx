import React from 'react';
import images from '../../utils/images';
import AnimatedText from '../../components/AnimatedText/AnimatedText';
import BlurSection from '../../components/BlurSection/BlurSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';
import GifWithText from '../../components/GiftWithText/GiftWithText';
import PartnersCarousel from '../../components/PartnersCarousel/PartnersCarousel';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import StudentsSection from '../../components/StudentsSection/StudentsSection';
import BlurSecond from '../../components/BlurSecond/BlurSecond';


const Home: React.FC = () => {
  return (
    <>
      <GifWithText
        gifUrl={images.home}
        mainText="Empowering your digital future"
        secondaryText="We believe in transforming the digital landscape of your business"
      />
      <BlurSecond/>
      <ServicesSection />
      <StudentsSection />
      <BlurSection />
      <PartnersCarousel />
      <AnimatedText boldText="EmTech Institute, " regularText="where technology meets talent." />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
