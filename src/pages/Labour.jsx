import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import lab from '../assests/lab.png';
import gen from '../assests/gen.jpg';
import WhatsappChat from '../components/Whatsapp/Index';

const Labour = () => {
  return (
    <>
      <Navbar />

      <div class='flex flex-wrap justify-around items-center mt-28 md:mt-40 '>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
            <span>
              <img src={lab} alt='srb' className=' w-16 mb-5' />
            </span>{' '}
            Labour Law
          </h1>
          <p class='text-gray-600 mb-4'>
            Labour law in Nigeria encompasses the regulations and legal<br></br>
            frameworks that govern the relationship between employers and
            <br></br>
            employees. The primary legislation guiding labour relations includes
            <br></br>
            the Labour Act, the Trade Unions Act, and the Industrial Training
            <br></br>
            Fund (ITF) Act, among others. These laws address various aspects
            <br></br>
            such as employment contracts, wages, working conditions, dispute
            <br></br>
            resolution, and workers' rights.
          </p>
        </div>

        <div class='flex justify-center items-center m-4'>
          <img
            src={gen}
            alt='choose'
            class='w-full max-w-sm h-auto rounded-lg'
          />
        </div>
      </div>

      <div class=' items-left m-4 md:ml-[120px]'>
        <h1 class='text-2xl font-bold my-8 gap-5'>
          Active Lawyers provides the following legal assistance:
        </h1>

        <div iv class='flex justify-around flex-col md:flex-row  p-4'>
          <div class='text-left text-gray-800'>
            <p className=' mb-3'>- Employment Contracts and Documentation</p>
            <p className='mb-3'>- Advisory Services</p>
          </div>
          <div class='text-left text-gray-800'>
            <p className=' mb-3'>- Representation in Collective Bargaining</p>
            <p className=' mb-3'>- Dispute Resolution</p>
          </div>
        </div>
      </div>

      <div class='ml-0 md:ml-[100px] '>
        <a href='/legal-services'>
          <div class=' px-5 text-gold text-xl md:text-2xl hover:text-yellow-600 font-bold transition duration-300 ease-in-out'>
            View other services
          </div>
        </a>
      </div>

      <ContactForm />
      <WhatsappChat />
      <Footer />
    </>
  );
};

export default Labour;
