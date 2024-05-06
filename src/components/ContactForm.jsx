import React from 'react';
import mail from '../assests/mail.png';
import contact from '../assests/contact1.jpg';
import { states } from '../utils/states';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xeqynnbl');
  if (state.succeeded) {
    return <p>Thanks for Filling!</p>;
  }
  return (
    <>
      <div
        class=' bg-orange-100 flex flex-col md:flex-row justify-end items-center mt-20 gap-0 md:gap-[350px]'
        id='form'
      >
        <div class='flex flex-col justify-center items-center m-4'>
          <h2 class='text-3xl flex items-center justify-center font-bold mb-4'>
            <img src={mail} alt='Icon' class='w-8 h-8 mr-3 md:mr-5 ' />
            To get a consultation
          </h2>

          <form class='w-full max-w-sm' onSubmit={handleSubmit}>
            <div class='mb-4'>
              <label for='name' class='block text-gray-700 font-bold mb-2'>
                Name:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
              <ValidationError
                prefix='name'
                field='name'
                errors={state.errors}
              />
            </div>
            <div class='mb-4'>
              <label for='phone' class='block text-gray-700 font-bold mb-2'>
                Phone Number:
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
              <ValidationError
                prefix='phone'
                field='phone'
                errors={state.errors}
              />
            </div>
            <div class='mb-4'>
              <label for='questions' class='block text-gray-700 font-bold mb-2'>
                Questions:
              </label>
              <textarea
                id='questions'
                name='questions'
                class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              ></textarea>
              <ValidationError
                prefix='questions'
                field='questions'
                errors={state.errors}
              />
            </div>
            <div class='mb-4'>
              <label for='states' class='block text-gray-700 font-bold mb-2'>
                State:
              </label>
              <select
                id='states'
                name='states'
                class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <ValidationError
                  prefix='states'
                  field='states'
                  errors={state.errors}
                />
                {states?.map((x, i) => (
                  <option value={x?.state} key={i}>
                    {x?.state}
                  </option>
                ))}
              </select>
            </div>
            <div class='mb-4'>
              <input type='checkbox' id='policy' name='policy' class='mr-2' />
              <label for='policy' class='text-gray-700'>
                I consent to the processing of personal data and agree to the
                cookie policy
                {/* <a href='#' class='text-blue-500 hover:underline'>
                  policy
                </a> */}
              </label>
            </div>
            <button
              type='submit'
              disabled={state.submitting}
              class=' bg-gold hover:bg-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Send a request
            </button>
          </form>
        </div>

        <div class=''>
          <img
            src={contact}
            alt='Contact'
            class='max-w-xs md:max-w-md h-auto'
          />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
