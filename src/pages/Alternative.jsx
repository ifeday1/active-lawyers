import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import arb from '../assests/arb.png';

const Alternative = () => {
  return (
    <>
      <Navbar />

      <div class='flex flex-wrap justify-around items-center mt-28  '>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
            <span>
              <img src={arb} alt='srb' className=' w-16' />
            </span>{' '}
            Arbitration<br></br> disputes
          </h1>
          <p class='text-gray-600 mb-4'>
            Protection is a complex process consisting of many different
            <br></br>
            aspects. If for a business it is optimizing costs, eliminating risks
            <br></br>
            and protecting assets, then for a citizen it is preserving freedom,
            <br></br>
            property, honor and dignity. For Wallman, this is a responsibility,
            <br></br>
            legal and moral. Wallman always stands for sincerity and transparent
            <br></br>
            relationships without false guarantees. Wallman for quality,
            <br></br>
            fulfillment of its obligations, efficiency and modern experience.
            <br></br>
            The ability to protect means protecting a business or person from
            <br></br>
            problems. Working with Wallman means being behind a stone wall.
            <br></br>
          </p>
        </div>

        <div class='flex justify-center items-center m-4'>
          <img src='' alt='choose' class='w-full max-w-sm h-auto rounded-lg' />
        </div>
      </div>

      <ContactForm />
      <Footer />
    </>
  );
};

export default Alternative;
