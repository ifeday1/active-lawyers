import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import int from '../assests/int.png';
import gen from '../assests/gen.jpg';
import WhatsappChat from '../components/Whatsapp/Index';

const Intellectual = () => {
  return (
    <>
      <Navbar />

      <div class='flex flex-wrap justify-around items-center mt-28 md:mt-40 '>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
            <span>
              <img src={int} alt='srb' className=' w-16 mb-5' />
            </span>{' '}
            Intellectual Property Law
          </h1>
          <p class='text-gray-600 mb-4'>
            Intellectual Property (IP) law encompasses the legal rights that
            <br></br>
            result from intellectual activity in the industrial, scientific,
            <br></br>
            literary, and artistic fields. These laws are designed to protect
            <br></br>
            the creations of the mind, which can include inventions, literary
            <br></br>
            and artistic works, symbols, names, images, and designs used in
            <br></br>
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
          commerce. The main types of intellectual property rights (IPR)
          <br></br>
          include:
        </h1>
        <p class='text-gray-600 mb-4'>
          1. Patents: These grant exclusive rights to inventors for their ]
          inventions, allowing them to exclude others from making, using, or
          <br></br>
          selling the invention without permission for a certain period,
          typically 20 years.
          <br></br>2. Trademarks: These protect symbols, names, and slogans used
          to identify goods or services, ensuring that consumers can distinguish
          <br></br>
          between different products in the market.
          <br></br>3. Copyrights: These protect original works of authorship
          such as books, music, films, and software, giving the creator<br></br>
          exclusive rights to use and distribute their work for a specific
          period,<br></br>
          generally the life of the author plus 70 years.
          <br></br>4. Design Rights: These protect the visual design of objects
          that are not purely utilitarian, covering the shape, configuration,
          <br></br>
          pattern, or ornamentation of a product.
          <br></br>5. Trade Secrets: These include formulas, practices,
          processes, designs, instruments, or patterns of information that
          <br></br>
          provide a business advantage over competitors who do not know or use
          it.<br></br>
        </p>
      </div>

      <div class=' items-left m-4 md:ml-[120px]'>
        <h1 class='text-2xl font-bold my-8 gap-5'>
          Active Lawyers provides the following legal assistance:
        </h1>

        <div iv class='flex justify-around flex-col md:flex-row  p-4'>
          <div class='text-left text-gray-800'>
            <p className=' mb-3'>- IP Registration and Protection</p>
            <p className='mb-3'>- IP Strategy and Management</p>
            <p className='mb-3'>- IP Enforcement and Litigation</p>
            <p className=' mb-3'>- IP Transactions and Commercialization</p>
          </div>
          <div class='text-left text-gray-800'>
            <p className=' mb-3'>- Education and Training</p>
            <p className=' mb-3'>- Management:</p>
            <p className=' mb-3'>- A dvisory Services</p>

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

export default Intellectual;
