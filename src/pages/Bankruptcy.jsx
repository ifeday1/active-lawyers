import React from 'react';
import serhead from '../assests/serhead.jpg';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import gen from '../assests/gen.jpg';
import WhatsappChat from '../components/Whatsapp/Index';

const Bankruptcy = () => {
  return (
    <>
      <Navbar />
      <div class='relative pt-20'>
        <img
          src={serhead}
          alt='heading'
          class='max-w-full w-[100%] h-[100px] md:h-auto'
        />

        <div class='absolute top-0 left-0 w-full h-full flex justify-start flex-col pt-[100px] md:pt-[190px] text-center'>
          <p>
            <div class=' px-5 md:ml-20 flex justify-center text-white text-2xl md:text-5xl gap-3'>
              Bankruptcy
            </div>
          </p>
        </div>
      </div>
      <div class='flex flex-wrap justify-around items-center mt-10  '>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
            Institute of Insolvency (Bankruptcy)
          </h1>
          <p class='text-gray-600 mb-4'>
            The institution of bankruptcy (insolvency) serves as a mechanism for
            <br></br>
            all involved parties to reach a resolution during challenging debt
            <br></br>
            situations. Bankruptcy can provide a constructive solution for both
            <br></br>
            debtors and creditors. For the debtor, the bankruptcy process offers
            <br></br>
            an opportunity to discharge debts, halt the accumulation of fines
            <br></br>
            and penalties, or, through legally specified methods, restore
            <br></br>
            solvency and alleviate financial burdens. For the creditor,<br></br>
            bankruptcy facilitates the recovery of debt, potentially through the
            <br></br>
            debtor's assets identified during the bankruptcy proceedings, and
            <br></br>
            enables holding accountable those responsible for the insolvency.
            <br></br>
            Declaring a legal entity bankrupt is a multifaceted process that
            <br></br>
            involves numerous legal actions requiring high legal expertise,
            <br></br>
            specialized skills, and extensive experience. One of the key areas
            <br></br>
            of specialization for Active Lawyers is handling bankruptcy cases
            <br></br>
            for both legal entities and individuals.
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
          Conditions for declaring a debtor insolvent (bankrupt)
        </h1>
        <p class='text-gray-600 mb-4'>
          <span class='text-xl font-bold'>Individuals: </span> An individual is
          deemed bankrupt if they are unable to pay their debts as
          <br></br>
          they fall due, and this inability persists over a period.
          <br></br>- inability to pay debts for 3 months or more. <br></br>
          <br></br>
          <span class='text-xl font-bold'>Corporate Entities: </span>A company
          is considered insolvent if it cannot pay its debts. <br></br>This can
          be determined by the company's inability to meet its financial
          <br></br>
          obligations or if its liabilities exceed its assets.
        </p>
      </div>

      <div class='flex flex-col justify-center items-left m-4 md:ml-[120px]'>
        <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
          Creditor Petition:
        </h1>
        <p class='text-gray-600 mb-4'>
          A creditor owed more than a specified minimum amount (as stipulated by
          <br></br>
          the law) can file a petition to declare the debtor bankrupt if the
          <br></br>
          debtor has failed to satisfy the debt after due demand.
        </p>
      </div>

      <div class='flex flex-col justify-center items-left m-4 md:ml-[120px]'>
        <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
          Acts of Bankruptcy:
        </h1>
        <p class='text-gray-600 mb-4'>
          Specific acts defined by law, such as the disposal of assets below
          <br></br>
          market value, evasion of creditors, or fraudulent transfers, can also
          <br></br>
          be grounds for declaring bankruptcy.
        </p>
      </div>

      <div class='flex flex-col justify-center items-left m-4 md:ml-[120px]'>
        <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
          Legal and Practical Support:
        </h1>
        <p class='text-gray-600 mb-4'>
          Given the complexities involved in bankruptcy proceedings, legal
          <br></br>
          expertise is crucial. Active Lawyers specialize in handling bankruptcy
          <br></br>
          cases, offering services that include:<br></br> <br></br>- Advising on
          the legal implications of bankruptcy and insolvency.
          <br></br>- Assisting with the filing of petitions and navigating court
          procedures. <br></br>- Managing creditor negotiations and
          restructuring agreements.
          <br></br> - Representing clients in court and during creditors'
          meetings.
          <br></br>- Ensuring compliance with all legal requirements and
          protecting clients' rights throughout the process.
        </p>
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

export default Bankruptcy;
