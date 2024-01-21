import React from 'react'
import { Button } from './ui/button'
import { Resend } from 'resend'

const Contact = async () => {
  const handleSubmit = async (formData: FormData) => {
    'use server'
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'shreyasp0924@gmail.com',
      subject: `Message from ${formData.get('email') as string}`,
      text: formData.get('message') as string,
    })

    // Optionally, you can handle success, show a message, or redirect the user
    console.log('Email sent successfully!')
  }

  return (
    <section
      className='border-2 rounded-xl mt-2 mb-10 scroll-smooth'
      id='contact'
    >
      <div className='py-8 px-4 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-3xl tracking-tight font-extrabold text-center '>
          Contact Me
        </h2>
        <form action={handleSubmit} className='mt-4 space-y-8'>
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
              name='email'
              className='p-1.5 text-sm w-2/3 text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='name@gmail.com'
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
              name='message'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='Leave a comment...'
            ></textarea>
          </div>
          <Button
            type='submit'
            className='py-3 px-5 text-sm font-medium text-center rounded-lg sm:w-fit '
          >
            Send message
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Contact
