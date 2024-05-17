import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import cri from '../assests/cri.png';
import gen from '../assests/gen.jpg';
import WhatsappChat from '../components/Whatsapp/Index';

const Civil = () => {
  return (
    <>
      <Navbar />

      <div class='flex flex-wrap justify-around items-center mt-28  '>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
            <span>
              <img src={cri} alt='srb' className=' w-16 mb-5' />
            </span>{' '}
            Civil/Criminal Litigation
          </h1>
          <p class='text-gray-600 mb-4'>
            Civil Litigation: Civil litigation involves legal disputes between
            <br></br>
            individuals or entities seeking monetary compensation or specific
            <br></br>
            performance rather than criminal sanctions. Common types of civil
            <br></br>
            litigation include contract disputes, property disputes, family law
            <br></br>
            issues, and personal injury claims.
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

        <div class='flex justify-around  p-4'>
          <div class='text-left text-gray-800'>
            <p className=' mb-3'>
              - Representing the interests of the victim<br></br>
            </p>
            <p className='mb-3'>
              - Active Lawyers conduct a thorough review of the charges and
              <br></br>
              evidence against the client, developing a strategic defense plan
              <br></br>
              to challenge the prosecution’s case.
            </p>
          </div>
          <div class='text-left text-gray-800'>
            <p className=' mb-3'>
              - Advising on matters related to corporate governance, including
              <br></br>
              shareholder disputes and director responsibilities.
            </p>
            <p className=' mb-3'>
              - Active Lawyers negotiate with prosecutors to seek favorable plea
              <br></br>
              agreements, which may result in reduced charges or lighter
              <br></br>
              sentences for the client.
            </p>
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

export default Civil;
