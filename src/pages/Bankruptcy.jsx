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
            The institution of bankruptcy (insolvency) is a tool that allows all
            <br></br>
            interested parties to reach a compromise in the event of a difficult
            <br></br>
            situation with debt obligations or claims. Bankruptcy can be a
            <br></br>
            constructive solution for both the debtor and the creditor. The
            <br></br>
            debtor, thanks to the bankruptcy procedure, has the opportunity to
            <br></br>
            get rid of debts, stop the accrual of fines and penalties, or, using
            <br></br>
            methods specified by law, restore solvency and reduce the financial
            <br></br>
            burden. The creditor, with the help of bankruptcy, can achieve
            <br></br>
            actual collection of debt, including, at the expense of the debtor’s
            <br></br>
            property discovered in the bankruptcy procedure, and bring to
            <br></br>
            subsidiary liability the persons who made the decisions that led to
            <br></br>
            insolvency. Declaring a legal entity bankrupt is a complex, complex
            <br></br>
            procedure consisting of many separate legal actions that require
            <br></br>
            high legal qualifications, specialized skills, and extensive
            <br></br>
            experience. One of the areas of activity in which the Wallman Law
            <br></br>
            Firm specializes is bankruptcy of legal entities and individuals.
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
          Conditions for declaring a debtor insolvent (bankrupt)
        </h1>
        <p class='text-gray-600 mb-4'>
          <span class='text-xl font-bold'>Criteria for individuals: </span>{' '}
          <br></br>— the amount of debt must be at least 500,000 rubles (the
          amount of debt may be less if there is information clearly indicating
          insolvency);
          <br></br>- inability to pay debts for 3 months or more. <br></br>
          <br></br>
          <span class='text-xl font-bold'>Criteria for legal entities: </span>
          <br></br> — the amount of debt must be at least 300,000 rubles;
          <br></br>- inability to pay debts for 3 months or more.
        </p>
      </div>

      <div class='flex flex-col justify-center items-left m-4 md:ml-[120px]'>
        <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
          Protection of creditors' rights in bankruptcy proceedings
        </h1>
        <p class='text-gray-600 mb-4'>
          In the last few years, the practice of declaring debtors bankrupt has
          become more frequent, which of course does not entail the most
          favorable consequences for creditors. Our company offers you its
          services to protect the rights of creditors from unlawful actions of
          debtors and arbitration managers in bankruptcy proceedings for
          individuals and legal entities:
          <br></br> — inclusion in the register of claims of the debtor’s
          creditors;
          <br></br>— representing the interests of creditors at creditors’
          meetings;
          <br></br>— representing the interests of creditors at court hearings;
          <br></br>— control over the activities of the arbitration manager
          (monitoring and suppression of dishonest behavior, filing complaints
          against the actions (inaction) of the arbitration manager in
          bankruptcy proceedings);
          <br></br>— challenging the debtor’s transactions in accordance with
          the Civil Code of the Russian Federation and the Federal Law “On
          Insolvency (Bankruptcy)”
        </p>
      </div>

      <div class='flex flex-col justify-center items-left m-4 md:ml-[120px]'>
        <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
          What to do if your debtor has filed for bankruptcy?
        </h1>
        <p class='text-gray-600 mb-4'>
          You can find out that your debtor, an individual/legal entity, has
          been declared bankrupt from official sources, namely: the Kommersant
          newspaper, the EFRSB website
          https://old.bankrot.fedresurs.ru/?attempt=1
          <br></br>We also recommend checking the electronic file cabinet
          website https://kad.arbitr.ru/
          <br></br> Please note that the period within which it is necessary to
          file an application to declare a debtor bankrupt may differ depending
          on the bankruptcy procedure introduced.
          <br></br>If your debtor is declared bankrupt, you must first submit an
          application for inclusion in the register of creditors. An application
          for inclusion in the register of creditors' claims is sent to the
          debtor, the arbitration manager and the court considering the debtor's
          bankruptcy case.
        </p>
      </div>

      <div class='flex flex-col justify-center items-left m-4 md:ml-[120px]'>
        <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
          What to do if a bankruptcy petition has been filed against you as an
          individual?
        </h1>
        <p class='text-gray-600 mb-4'>
          — Provide a written, motivated response to the creditor’s application
          with references to the legislation in accordance with Article 47 of
          the Federal Law of October 26, 2002 No. 127-FZ “On Insolvency
          (Bankruptcy);
          <br></br>— Participate in a court hearing to verify the validity of an
          application to declare the debtor bankrupt;
          <br></br>— Receive from the financial manager a notification that you
          have been declared bankrupt, as well as a request for information;
          <br></br>— The contractor is responsible for providing information to
          the appointed financial manager. It is important to provide the
          arbitration manager with reliable information;
          <br></br>— Open a special bank account / send an application to the
          arbitration manager for the issuance of a living wage (depending on
          the bankruptcy procedure);
          <br></br>— Track information on the case on the electronic filing
          website https://kad.arbitr.ru/
        </p>
      </div>

      <div class='flex flex-col justify-center items-left m-4 md:ml-[120px]'>
        <h1 class='text-2xl font-bold mb-2 flex flex-row gap-4'>
          Advantages of bankruptcy proceedings for individuals
        </h1>
        <p class='text-gray-600 mb-4'>
          — By contacting us, you receive a turnkey service, without hidden or
          additional payments;
          <br></br>— The price includes: collection of documents, preparation of
          an application and inventory of property, filing applications to
          maintain the subsistence level, court deposit, publications,
          cancellation of court orders and court decisions, postage;
          <br></br>— Legal support and advice for the entire period of the
          bankruptcy procedure are included in the cost of services;
          <br></br> — Bankruptcy without your presence in court;
          <br></br>— We will protect you from collectors;
          <br></br>— Debts are written off: for loans, microloans, receipts,
          surety obligations, debts for housing and communal services, fines,
          fees, taxes, penalties;
          <br></br>— We will stop the accrual of interest, fines and penalties;
          <br></br>— We will preserve the property;
          <br></br>— We will maintain and pay the living wage without delays;
          <br></br>— We will save money for rent;
          <br></br> — We will save money to pay utility bills;
          <br></br>— We will save money to pay for medicines and medical
          services;
          <br></br>— Unblock accounts and bank cards; — We will stop the
          collection of bailiffs;
          <br></br>— We will stop enforcement proceedings of the FSSP;
          <br></br> — We will remove seizures from property;
          <br></br>— We will lift the ban on traveling abroad;
          <br></br>— We will cancel court orders and court decisions on the
          collection of funds;
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
