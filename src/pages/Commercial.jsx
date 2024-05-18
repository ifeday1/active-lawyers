import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import tax from '../assests/tax.png';
import gen from '../assests/gen.jpg';
import WhatsappChat from '../components/Whatsapp/Index';

const Commercial = () => {
  return (
    <>
      <Navbar />

      <div class='flex flex-wrap justify-around items-center mt-28 md:mt-40 '>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
            <span>
              <img src={tax} alt='srb' className=' w-16 mb-5' />
            </span>{' '}
            Commercial and Trade Investment Disputes
          </h1>
          <p class='text-gray-600 mb-4'>
            Commercial and trade investment disputes are conflicts that arise in
            <br></br>
            the context of business transactions, trade agreements, and<br></br>
            investment activities. These disputes can involve various issues
            <br></br>
            such as breach of contract, disagreements over terms and conditions,
            <br></br>
            misrepresentation, non-performance, and investment treaty<br></br>
            violations. Given the complexity and high stakes involved in these
            <br></br>
            disputes, specialized legal expertise is essential for effective
            <br></br>
            resolution.
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
            <p className=' mb-3'>- Legal Advisory and Consultation</p>
            <p className='mb-3'>- Contract Review and Drafting</p>
            <p className='mb-3'>- Dispute Resolution Strategies:</p>
            <p className=' mb-3'>- Litigation Services</p>
            <p className=' mb-3'>- Settlement Negotiations</p>
          </div>
          <div class='text-left text-gray-800'>
            <p className=' mb-3'>- International Arbitration</p>
            <p className=' mb-3'>- Investment Treaty Claims</p>
            <p className=' mb-3'>- Regulatory Compliance</p>
            <p className=' mb-3'>- Crisis Management</p>
            <p className=' mb-3'>- Post-Resolution Support:</p>
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

export default Commercial;
