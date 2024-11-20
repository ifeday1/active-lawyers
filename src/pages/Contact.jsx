import React from 'react';
import Navbar from '../components/Navbar';
import serhead from '../assests/serhead.jpg';
import mail from '../assests/mail.png';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WhatsappChat from '../components/Whatsapp/Index';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div class='relative pt-20'>
        <img
          src={serhead}
          alt='heading'
          class='max-w-full h-[300px] md:h-auto'
        />

        <div class='absolute top-0 left-0 w-full h-full flex justify-start flex-col md:flex-col pt-[170px] md:pt-[190px] text-center'>
          <p>
            <div class=' px-5 md:ml-20 flex justify-start text-white text-2xl md:text-5xl gap-3'>
              Contact
              <img src={mail} alt='Icon' class='w-8 h-8 ' />
            </div>
          </p>
        </div>
      </div>

      <div class='flex justify-around flex-col md:flex-row items-center mt-20 '>
        <div class='flex flex-col justify-center items-left m-4'>
          <p>
            Active Lawyers is a firm providing professional legal services,
            <br></br>
            specializing in civil and criminal law, bankruptcy, and business
            <br></br>
            support. Our established judicial practice sets trends in the legal
            <br></br>
            field. Leveraging modern legal expertise, Active Lawyers'<br></br>
            specialists can address any legal issue throughout Nigeria.<br></br>
          </p>
          <be></be>
          <br></br>
          <p>
            Currently, Active Lawyers employs around 20 professionals and
            <br></br>
            partners, including lawyers, attorneys, accountants, and experts in
            <br></br>
            various legal disciplines. A key advantage of Active Lawyers is our
            <br></br>
            ability to provide comprehensive and efficient support for our
            <br></br>
            clients' matters across all legal issues.
          </p>
          <h4 class='flex items-left gap-2 pt-9 font-semibold text-2xl'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='icon icon-tabler icon-tabler-phone'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#000000'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2' />
            </svg>
            +234 813 350 9462
          </h4>
          <h4 class='flex items-left  gap-2 font-semibold text-2xl'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='icon icon-tabler icon-tabler-mail'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#000000'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
              <path d='M3 7l9 6l9 -6' />
            </svg>
            activelawywers@gmail.com
          </h4>
        </div>

        <div class='flex flex-col justify-center items-left m-4'>
          <h2 class='text-2xl font-bold mb-2'>Office address:</h2>
          <p>2A ,ogbuefit street , Arab road Abuja</p>
        </div>
      </div>

      <ContactForm />
      <WhatsappChat />
      <Footer />
    </>
  );
};

export default Contact;
