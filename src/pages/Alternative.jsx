import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import arb from '../assests/arb.png';
import gen from '../assests/gen.jpg';
import WhatsappChat from '../components/Whatsapp/Index';

const Alternative = () => {
  return (
    <>
      <Navbar />

      <div class='flex flex-wrap justify-around items-center mt-28 md:mt-40   '>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
            <span>
              <img src={arb} alt='srb' className=' w-16 mb-5' />
            </span>{' '}
            Arbitration<br></br> disputes
          </h1>
          <p class='text-gray-600 mb-4'>
            Resolving disputes from economic or business activities entails
            <br></br>
            numerous complexities and specifics. The evolving judicial<br></br>
            practices, new laws, and the variety of arbitration dispute types
            <br></br>
            necessitate expert legal assistance. Active Lawyers guarantees the
            <br></br>
            effective safeguarding of its clients' rights and interests in
            <br></br>
            arbitration proceedings for all types of disputes under Nigerian
            <br></br>
            law.
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

        <div class='flex justify-around flex-col md:flex-row  p-4'>
          <div class='text-left text-gray-800'>
            <p className=' mb-3'>
              - Representation in disputes involving breaches of commercial
              <br></br>
              contracts, ensuring that clients' contractual rights are upheld.
              <br></br>
            </p>
            <p className='mb-3'>
              - Protection and enforcement of intellectual property rights,
              <br></br>
              including trademarks, patents, and copyrights.
            </p>
            <p className=' mb-3'>
              - Legal support in employment disputes, including wrongful
              <br></br>
              termination, workplace discrimination, and labor relations.
            </p>
          </div>
          <div class='text-left text-gray-800'>
            <p className=' mb-3'>
              - Advising on matters related to corporate governance, including
              <br></br>
              shareholder disputes and director responsibilities.
            </p>
            <p className=' mb-3'>
              -Handling disputes related to real estate transactions, property
              <br></br>
              ownership, and land use.
            </p>
            <p className=' mb-3'>
              - Assistance with disputes arising from commercial transactions
              and
              <br></br>
              trade agreements.
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

export default Alternative;
