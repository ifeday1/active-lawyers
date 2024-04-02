import React from 'react';
import serhead from '../assests/serhead.jpg';
import legalser from '../assests/legalser.png';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <>
      <>
        <Navbar />
        <div class='relative pt-20'>
          <img
            src={serhead}
            alt='heading'
            class='max-w-full h-[300px] md:h-auto'
          />

          <div class='absolute top-0 left-0 w-full h-full flex justify-start flex-col pt-[170px] md:pt-[190px] text-center'>
            <p>
              <div class=' px-5 md:ml-20 flex justify-start text-white text-2xl md:text-5xl gap-3'>
                Legal services
                <img src={legalser} alt='Icon' class='w-8 h-8 ' />
              </div>
            </p>
            <p class=' px-5 pt-2 text-sm md:ml-20  text-white flex justify-start text-left'>
              Active Lawyers provides comprehensive <br></br>
              client support in various <br></br>areas, including:
            </p>
          </div>
        </div>

        <ContactForm />
        <Footer />
      </>
    </>
  );
};

export default Services;
