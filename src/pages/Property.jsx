import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import land from '../assests/land.png';
import gen from '../assests/gen.jpg';
import WhatsappChat from '../components/Whatsapp/Index';

const Property = () => {
  return (
    <>
      <Navbar />

      <div class='flex flex-wrap justify-around items-center mt-28 md:mt-40 '>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
            <span>
              <img src={land} alt='srb' className=' w-16 mb-5' />
            </span>{' '}
            Property Law
          </h1>
          <p class='text-gray-600 mb-4'>
            Property law in Nigeria governs the ownership, use, and transfer of
            <br></br>
            real estate and other forms of property. It encompasses various
            <br></br>
            legal principles, statutes, and regulations that regulate property
            <br></br>
            transactions and protect property rights.
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
            <p className=' mb-3'>- Title Verification and Due Diligence</p>
            <p className='mb-3'>- Drafting and Reviewing Legal Documents</p>
            <p className='mb-3'>- Property Dispute Resolution</p>
            <p className=' mb-3'>- Estate Planning and Administration</p>
          </div>
          <div class='text-left text-gray-800'>
            <p className=' mb-3'>- Land Registration and Documentation</p>
            <p className=' mb-3'>- Advisory Services</p>
            <p className=' mb-3'>- Tenancy and Leasing</p>
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

export default Property;
