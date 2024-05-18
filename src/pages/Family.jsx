import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import cri from '../assests/cri.png';
import gen from '../assests/gen.jpg';
import WhatsappChat from '../components/Whatsapp/Index';

const Family = () => {
  return (
    <>
      <Navbar />

      <div class='flex flex-wrap justify-around items-center mt-28 md:mt-40  '>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
            <span>
              <img src={cri} alt='srb' className=' w-16 mb-5' />
            </span>{' '}
            Family Law
          </h1>
          <p class='text-gray-600 mb-4'>
            Family law governs one of the most crucial aspects of a person's
            <br></br>
            life, impacting relationships, children, property, and financial
            <br></br>
            support. Proper legal management of marital relationships can
            <br></br>
            prevent future disputes over issues such as child custody, property
            <br></br>
            division, and alimony. When disputes arise, family law matters
            <br></br>
            become complex, intertwining legal intricacies with emotional
            <br></br>
            challenges. <br></br>
            <br></br>Active Lawyers specialize in family law, offering support
            <br></br>
            and expertise to navigate these sensitive situations. Our attorneys
            <br></br>
            help maintain composure and effectively protect clients' interests.
            <br></br>
            We prioritize resolving conflicts through mediation, aiming to
            <br></br>
            settle matters amicably and avoid court proceedings. However, if
            <br></br>
            court intervention is necessary, our experienced lawyers will
            <br></br>
            vigorously defend and restore our clients' rights.
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
            <p className=' mb-3'> - Marriage and Divorce:</p>
            <p className='mb-3'>- Child Custody and Support:</p>
            <p className='mb-3'>- Mediation and Negotiation:</p>
          </div>
          <div class='text-left text-gray-800'>
            <p className=' mb-3'>- Adoption and Guardianship:</p>
            <p className=' mb-3'>- Domestic Violence and Protection Orders:</p>
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

export default Family;
