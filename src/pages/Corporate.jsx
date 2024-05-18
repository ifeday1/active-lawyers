import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import inh from '../assests/inh.png';
import gen from '../assests/gen.jpg';
import WhatsappChat from '../components/Whatsapp/Index';

const Corporate = () => {
  return (
    <>
      <Navbar />

      <div class='flex flex-wrap justify-around items-center mt-28 md:mt-40 '>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
            <span>
              <img src={inh} alt='srb' className=' w-16 mb-5' />
            </span>{' '}
            Corporate Law Services
          </h1>
          <p class='text-gray-600 mb-4'>
            Corporate law encompasses a wide range of legal services designed to
            <br></br>
            support businesses throughout their lifecycle—from formation and
            <br></br>
            governance to compliance and dispute resolution. It addresses the
            <br></br>
            legal framework within which companies operate, ensuring they adhere
            <br></br>
            to statutory regulations and best practices.
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
            <p className=' mb-3'>- Company Formation and Structuring</p>
            <p className='mb-3'>- Corporate Governance</p>
            <p className='mb-3'>- Mergers and Acquisitions (M&A)</p>
            <p className=' mb-3'>- Regulatory Compliance</p>
            <p className=' mb-3'>- Corporate Restructuring:</p>
          </div>
          <div class='text-left text-gray-800'>
            <p className=' mb-3'>- Contract Drafting and Review</p>
            <p className=' mb-3'>- Intellectual Property (IP) Protection</p>
            <p className=' mb-3'>- Dispute Resolution</p>
            <p className=' mb-3'>- Employment and Labor Law</p>
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

export default Corporate;
