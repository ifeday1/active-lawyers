import React from 'react';
import Navbar from '../components/Navbar';
import serhead from '../assests/serhead.jpg';
import path from '../assests/path.png';

import Footer from '../components/Footer';
import PartnerPic from '../components/PartnerPic';
import WhatsappChat from '../components/Whatsapp/Index';

const Partners = () => {
  return (
    <>
      <Navbar />
      <div class='relative pt-20'>
        <img
          src={serhead}
          alt='heading'
          class='max-w-full h-[300px] md:h-auto'
        />

        <div class='absolute top-0 left-0 w-full h-full flex justify-start flex-col pt-[100px] md:pt-[190px] text-center'>
          <p>
            <div class=' px-5 md:ml-20 flex justify-start text-white text-2xl md:text-5xl gap-3'>
              Partners
              <img src={path} alt='Icon' class='w-8 h-8 ' />
            </div>
          </p>
          <p class=' px-5 pt-2 text-sm md:ml-20  text-white flex justify-start text-left'>
            We believe that it is impossible to characterize a modern lawyer by
            <br></br>
            highlighting any one trait. A modern lawyer must have a set of human
            <br></br>
            qualities, both professional and moral. An important factor will
            <br></br>
            always be the feeling you get from a lawyer - a person protecting
            <br></br>
            your rights. Everyone wants to feel safe, to feel protected - “{' '}
            <br></br>
          </p>
          <p className=' font-semibold px-5 pt-2 text-sm md:ml-20  text-white flex justify-start text-left'>
            to be like behind a stone wall . ”
          </p>
        </div>
      </div>

      <PartnerPic />
      <hr class='border-b mx-4 my-20 md:mx-28 border-orange-800' />

      <div className='mx-4 md:mx-28'>
        <h4 className=' font-semibold text-xl md:text-4xl  mb-10'>
          To ensure reliable and high-quality protection of the rights of our
          <br></br>
          clients, our team consists of specialized specialists with extensive
          <br></br>
          experience - to protect, namely:
        </h4>
        <p className=' font-medium md:text-2xl text-md'>- Civil Law Lawyers</p>
        <p className=' font-medium md:text-2xl text-md'>
          - Arbitration managers
        </p>
        <p className=' font-medium md:text-2xl text-md'>- Lawyers</p>
        <p className=' font-medium md:text-2xl text-md'>- Corporate lawyers</p>
        <p className=' font-medium md:text-2xl text-md'>- Family lawyers</p>
        <p className=' font-medium md:text-2xl text-md'>- Experts in tax law</p>
        <p className=' font-medium md:text-2xl text-md'>
          - International Lawyers
        </p>
        <p className=' font-medium md:text-2xl text-md mb-9'>- Mediators </p>
      </div>
      <WhatsappChat/>
      <Footer />
    </>
  );
};

export default Partners;
