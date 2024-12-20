import React from 'react';
import Navbar from '../components/Navbar';
import landing from '../assests/landing3.jpg';
import landing1 from '../assests/landing2.jpg';
import protect from '../assests/protect.png';
import bank from '../assests/bank.png';
import choose from '../assests/choose.jpg';
import protect1 from '../assests/protect1.png';
import challenge from '../assests/challenge.png';
import write from '../assests/write.png';
import accompany from '../assests/accompany.png';
import pri from '../assests/pri.jpg';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp/Index';

const Home = () => {
  return (
    <>
      <Navbar />
      <div class='relative pt-20'>
        <img src={landing} alt='landing' class='max-w-full h-auto' />

        <div class='absolute top-0 left-0 w-full h-full flex items-center flex-col pt-[100px] md:pt-[400px] text-center'>
          <a href='/legal'>
            <div class=' px-5 flex items-center justify-center text-white text-2xl md:text-5xl hover:text-yellow-600 transition duration-300 ease-in-out'>
              <img src={protect} alt='Icon' class='w-8 h-8 mr-3 md:mr-5 ' />
              Legal protection of businesses and citizens
            </div>
          </a>

          <a href='/bankruptcy'>
            <div class=' px-5 pt-6 flex  text-white text-2xl md:text-5xl hover:text-yellow-600 transition duration-300 ease-in-out'>
              <img src={bank} alt='Icon' class='w-8 h-8 mr-3 md:mr-5 ' />
              Bankruptcy
            </div>
          </a>
        </div>
      </div>

      <div class='flex flex-wrap justify-center items-center mt-5'>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-2xl font-bold mb-9'>
            Why do clients <br></br>choose Active Lawyers?
          </h1>
          <p class='text-gray-600 mb-4'>
            Active Lawyers boast a team of highly skilled professionals with
            <br></br>
            specialized expertise in various areas of law. Clients appreciate
            <br></br>
            the in-depth knowledge and experience that the firm brings to their
            <br></br>
            specific legal needs, ensuring high-quality service and effective
            <br></br>
            representation. Protection is a complex process consisting of many
            <br></br>
            different aspects. For businesses, it means optimizing costs,
            <br></br>
            eliminating risks, and protecting assets. For citizens, it involves
            <br></br>
            preserving freedom, property, honor, and dignity. For Active
            <br></br>
            Lawyers, it is a responsibility—both legal and moral.
          </p>
          <button class=' bg-gold hover:bg-dark text-white font-bold py-2 px-4 rounded'>
            More about us
          </button>
        </div>

        <div class='flex justify-center items-center m-4'>
          <img
            src={choose}
            alt='choose'
            class='w-full max-w-sm h-auto rounded-lg'
          />
        </div>
      </div>

      <div class='relative pt-20'>
        <img src={landing1} alt='landing' class='w-full h-[400px] md:h-auto' />

        <div class='absolute top-0 left-0 w-full h-[auto] flex items-center flex-col pt-[100px] md:pt-[340px] text-center'>
          <a href='/legal-services'>
            <div class=' px-5 pt-20 md:pt-0 flex items-center justify-center text-white text-2xl md:text-5xl hover:text-yellow-600 transition duration-300 ease-in-out'>
              <img src={protect1} alt='Icon' class='w-8 h-8 mr-3 md:mr-5 ' />
              Let's protect
            </div>
          </a>

          <a href='/legal-services'>
            <div class=' px-5 pt-6 flex items-center justify-center  text-white text-2xl md:text-5xl hover:text-yellow-600 transition duration-300 ease-in-out'>
              <img src={challenge} alt='Icon' class='w-8 h-8 mr-3 md:mr-5 ' />
              Let's challenge
            </div>
            <a href='/legal-services'>
              <div class=' px-5 pt-6 flex items-center justify-center text-white text-2xl md:text-5xl hover:text-yellow-600 transition duration-300 ease-in-out'>
                <img src={write} alt='Icon' class='w-8 h-8 mr-3 md:mr-5 ' />
                We'll write it off
              </div>
            </a>

            <a href='/legal-services'>
              <div class=' px-5 pt-6 flex items-center justify-center  text-white text-2xl md:text-5xl hover:text-yellow-600 transition duration-300 ease-in-out'>
                <img src={accompany} alt='Icon' class='w-8 h-8 mr-3 md:mr-5 ' />
                We will accompany you
              </div>
            </a>
          </a>
        </div>
      </div>

      <div class='flex flex-wrap justify-evenly pt-16' id='privilege'>
        <div class='flex flex-col justify-center  m-4'>
          <h2 class='text-4xl font-bold mb-2'>Active Lawyers</h2>
          <p class='text-gray-600 mb-4'>
            Get your Active Lawyers Lawyers loyalty card
          </p>

          <div class='flex justify-center flex-col md:flex-row items-center mb-4 gap-10'>
            <div>
              <p class='text-gray-700 font-bold'>
                Cashback with bonus<br></br> points up to 3% of the<br></br>{' '}
                cost of services
              </p>

              <p class='text-gray-700'>
                Accumulative electronic<br></br> Cashback card
              </p>
            </div>
            <div>
              <p class='text-gray-700 font-bold'>
                Pay for services with points
              </p>

              <p class='text-gray-700'>
                1 point = 1000 Naira. Pay up to 20% of <br></br>the cost of
                services
              </p>
            </div>
          </div>
          {/* second  */}
          <div class='flex justify-center flex-col md:flex-row items-center mb-4 gap-10'>
            <div>
              <p class='text-gray-700 font-bold'>10,000 points as a gift</p>

              <p class='text-gray-700'>
                To your bonus account for<br></br> registration
              </p>
            </div>
            <div>
              <p class='text-gray-700 font-bold'>
                10,000 Naira in cash for a<br></br> recommendation
              </p>

              <p class='text-gray-700'>
                We will pay you for each<br></br> recommendation of bankruptcy
                <br></br>
                services for individuals. persons
              </p>
            </div>
          </div>

          {/* Third  */}
          <div class='flex justify-center flex-col md:flex-row items-center mb-4 gap-10'>
            <div>
              <p class='text-gray-700 font-bold'>
                10,000 points <br></br>per recommendation
              </p>

              <p class='text-gray-700'>
                For a service provided to your <br></br> friend using a referral
                link
              </p>
            </div>
            <div>
              <p class='text-gray-700 font-bold'>1,000 points per review</p>

              <p class='text-gray-700'>
                We will pay you for each<br></br> recommendation of bankruptcy
                <br></br>
                Leave feedback after each<br></br> service provided
              </p>
            </div>
          </div>

          <button class=' bg-gold hover:bg-dark text-white font-bold py-2 px-4 rounded'>
            Join the privilege club
          </button>
        </div>

        <div class='flex justify-center items-center m-4'>
          <img
            src={pri}
            alt='pri'
            class='max-w-xs md:max-w-lg h-auto rounded-lg'
          />
        </div>
      </div>

      <ContactForm />
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Home
