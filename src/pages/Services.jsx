import React from 'react';
import serhead from '../assests/serhead.jpg';
import legalser from '../assests/legalser.png';
import arb from '../assests/arb.png';
// import adm from '../assests/adm.png';
import bankc from '../assests/bankc.png';
import land from '../assests/land.png';
import cri from '../assests/cri.png';
import inh from '../assests/inh.png';
import fam from '../assests/fam.png';
import tax from '../assests/tax.png';
import lab from '../assests/lab.png';
import int from '../assests/int.png';

import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <>
      <>
        <Navbar />
        <div class='relative pt-20'>
          <img
            src={serhead}
            alt='heading'
            class='max-w-full h-[300px] md:h-auto'
          />

          <div class='absolute top-0 left-0 w-full h-full flex justify-start flex-col pt-[170px] md:pt-[190px] text-center'>
            <p>
              <div class=' px-5 md:ml-20 flex justify-start text-white text-2xl md:text-5xl gap-3'>
                Legal services
                <img src={legalser} alt='Icon' class='w-8 h-8 ' />
              </div>
            </p>
            <p class=' px-5 pt-2 text-sm md:ml-20  text-white flex justify-start text-left'>
              Active Lawyers provides comprehensive <br></br>
              client support in various <br></br>areas, including:
            </p>
          </div>
        </div>

        {/* flex1 */}
        <div class='flex justify-around flex-col md:flex-row items-left mt-14'>
          <a href='/' class=' flex flex-col justify-center items-left m-4'>
            <img src={arb} alt='icon' className='w-12 h-12 mb-7' />
            <h3 className=' mb-2 font-medium text-2xl hover:text-gold'>
              Alternative <br></br>Disputes Resolutions
            </h3>
            <h1>More details </h1>
          </a>

          <a href='/' class='flex flex-col justify-around items-left m-4'>
            <img src={bankc} alt='icon' className='w-12 h-12 mb-7' />
            <h3 className=' mb-2 font-medium text-2xl hover:text-gold'>
              Bankruptcy
            </h3>
            <h1>More details </h1>
          </a>

          <a href='/' class='flex flex-col justify-around mr-36 items-left m-4'>
            <img src={cri} alt='icon' className='w-12 h-12 mb-7' />
            <h3 className=' mb-2 font-medium text-2xl hover:text-gold'>
              Civil/Criminal<br></br> Litigation
            </h3>
            <h1>More details </h1>
          </a>
        </div>

        {/* flex2 */}
        <div class='flex justify-around flex-col md:flex-row  items-left mt-14'>
          <a href='/' class='flex flex-col justify-center mr-10 items-left m-4'>
            <img src={fam} alt='icon' className='w-12 h-12 mb-7' />
            <h3 className=' mb-2 font-medium text-2xl hover:text-gold'>
              Family Law
            </h3>
            <h1>More details </h1>
          </a>

          <a href='/' class='flex flex-col justify-center  items-left m-4'>
            <img src={lab} alt='icon' className='w-12 h-12 mb-7' />
            <h3 className=' mb-2 font-medium text-2xl hover:text-gold'>
              Labor law
            </h3>
            <h1>More details </h1>
          </a>

          <a href='/' class='flex flex-col justify-center items-left m-4'>
            <img src={land} alt='icon' className='w-12 h-12 mb-7' />
            <h3 className=' mb-2 font-medium text-2xl hover:text-gold'>
              Property Law
            </h3>
            <h1>More details </h1>
          </a>
        </div>

        {/* flex3 */}
        <div class='flex justify-around flex-col md:flex-row items-left mt-14'>
          <a href='/' class='flex flex-col justify-center items-left m-4'>
            <img src={tax} alt='icon' className='w-12 h-12 mb-7' />
            <h3 className=' mb-2 font-medium text-2xl hover:text-gold'>
              Tax law
            </h3>
            <h1>More details </h1>
          </a>

          <a href='/' class='flex flex-col justify-center  items-left m-4'>
            <img src={inh} alt='icon' className='w-12 h-12 mb-7' />
            <h3 className=' mb-2 font-medium text-2xl hover:text-gold'>
              Corporate law services
            </h3>
            <h1>More details </h1>
          </a>

          <a href='/' class='flex flex-col justify-center items-left m-4'>
            <img src={int} alt='icon' className='w-12 h-12 mb-7' />
            <h3 className=' mb-2 font-medium text-2xl hover:text-gold'>
              Intellectual Property law
            </h3>
            <h1>More details </h1>
          </a>
        </div>

        {/* flex4 */}
        <div class='flex justify-around flex-col md:flex-row items-left mt-14'>
          <a href='/' class='flex flex-col justify-center items-left m-4'>
            <img src={tax} alt='icon' className='w-12 h-12 mb-7' />
            <h3 className=' mb-2 font-medium text-2xl hover:text-gold'>
              Commercial and Trade<br></br> Investment Disputes
            </h3>
            <h1>More details </h1>
          </a>
        </div>

        <ContactForm />
        <Footer />
      </>
    </>
  );
};

export default Services;
