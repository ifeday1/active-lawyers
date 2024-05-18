import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import tax from '../assests/tax.png';
import gen from '../assests/gen.jpg';
import WhatsappChat from '../components/Whatsapp/Index';

const Tax = () => {
  return (
    <>
      <Navbar />

      <div class='flex flex-wrap justify-around items-center mt-28 md:mt-40 '>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
            <span>
              <img src={tax} alt='srb' className=' w-16 mb-5' />
            </span>{' '}
            Tax Law
          </h1>
          <p class='text-gray-600 mb-4'>
            Tax law in Nigeria is governed by various legislations, including
            <br></br>
            the Companies Income Tax Act (CITA), Personal Income Tax Act (PITA),
            <br></br>
            Value Added Tax Act (VAT), and other relevant laws and regulations.
            <br></br>
            These laws dictate how taxes are levied on individuals and<br></br>
            businesses, covering aspects such as income tax, corporate tax, VAT,
            <br></br>
            and more. Compliance with these tax laws is mandatory for both
            <br></br>
            individuals and businesses, and failure to comply can result in
            <br></br>
            significant penalties and legal consequences.
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
            <p className=' mb-3'>- Tax Planning and Advisory:</p>
            <p className='mb-3'>- Tax Compliance</p>
            <p className='mb-3'>- Tax Dispute Resolution</p>
            <p className=' mb-3'>-Corporate Tax Services</p>
          </div>
          <div class='text-left text-gray-800'>
            <p className=' mb-3'>- VAT Services</p>
            <p className=' mb-3'>- Customs and Excise Duties</p>
            <p className=' mb-3'>- Training and Seminars</p>
            <p className=' mb-3'>- International Taxation</p>
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

export default Tax;
