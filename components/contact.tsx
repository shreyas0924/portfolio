import React from 'react'
import { Button } from './ui/button'

const Contact = () => {
  return (
    <section className='border-2 rounded-xl my-6 mb-10'>
      <div className='py-8 px-4 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-3xl tracking-tight font-extrabold text-center '>
          Contact Me
        </h2>
        <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-lg'>
          You can contact me directly at{' '}
          <a className='underline'>shreyasp0924@gmail.com</a> or through this
          form.
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='p-1.5 text-sm w-2/3 text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='name@flowbite.com'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Your message
            </label>
            <textarea
              id='message'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='Leave a comment...'
            ></textarea>
          </div>
          <Button
            type='submit'
            className='py-3 px-5 text-sm font-medium text-center  rounded-lg  sm:w-fit '
          >
            Send message
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Contact
