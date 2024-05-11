import React from 'react';
import serhead from '../assests/serhead.jpg';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import gen from '../assests/gen.jpg';
import WhatsappChat from '../components/Whatsapp/Index';

const Legal = () => {
  return (
    <>
      <Navbar />
      <div class='relative pt-20'>
        <img
          src={serhead}
          alt='heading'
          class='max-w-full w-[100%] h-[100px] md:h-auto'
        />

        <div class='absolute top-0 left-0 w-full h-full flex justify-start flex-col pt-[100px] md:pt-[190px] text-center'>
          <p>
            <div class=' px-5 md:ml-20 flex justify-center text-white text-2xl md:text-5xl gap-3'>
              Legal protection of businesses and citizens
            </div>
          </p>
        </div>
      </div>
      <div class='flex flex-wrap justify-around items-center mt-10  '>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
            Active Lawyer Defense
          </h1>
          <p class='text-gray-600 mb-4'>
            Active Lawyer Defense Protection is a complex process consisting of
            many, <br></br>
            different aspects. If for a business this is optimizing costs,
            <br></br>
            eliminating risks and protecting assets, then for a citizen it is
            <br></br>
            preserving freedom, property, honor and dignity. For Active Lawyer,
            this
            <br></br>
            is a responsibility, legal and moral. Active Lawyer always stands
            for
            <br></br>
            sincerity and transparent relationships without false guarantees.
            <br></br>
            Active Lawyer for quality, fulfillment of its obligations,
            efficiency and
            <br></br>
            modern experience. The ability to protect means protecting a
            <br></br>
            business or person from problems. Working with Active Lawyer means
            being
            <br></br>
            behind a stone wall.
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

      <div class='flex flex-col justify-center items-left m-4 md:ml-[120px]'>
        <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
          Business protection
        </h1>
        <p class='text-gray-600 mb-4'>
          Business is always a risk that can entail a lot of negative<br></br>
          consequences. Qualified legal support for business allows you to
          <br></br>
          achieve one of the main goals - optimizing costs, eliminating risks,
          <br></br>
          protecting assets, protecting business reputation. The Active Lawyer
          team is
          <br></br>
          able to represent the interests and protect the rights of its clients
          <br></br>
          in disputes with other business entities at any stage, participate in
          <br></br>
          negotiations, and represent clients during government audits. organs.
          <br></br>
          The Active Lawyer company offers its clients a range of legal
          services,
          <br></br>
          allowing them to provide legal support for their business by a team of
          <br></br>
          qualified lawyers with modern experience in various areas of law.
          <br></br>
        </p>
      </div>

      <div class='ml-0 md:ml-[100px] '>
        <a href='/legal-services'>
          <div class=' px-5 text-gold text-xl md:text-2xl hover:text-yellow-600 font-bold transition duration-300 ease-in-out'>
            View other services
          </div>
        </a>
      </div>

      <ContactForm />
      <WhatsappChat/>
      <Footer />
    </>
  );
};

export default Legal;
