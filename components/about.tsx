import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export const About = () => {
  return (
    <main className=' border-b border-gray-600 mt-10 pb-6  '>
      <div className='text-justify'>
        Hey, I'm <strong>Shreyas P</strong>, a final year CS undergrad. I am a
        passionate <strong>Full Stack Developer</strong> with over{' '}
        <strong>6 months</strong> of work experience. I like in building robust
        web applications with{' '}
        <span className='font-semibold '>React and Next.js.</span>
      </div>
      <div className='flex flex-row gap-4 items-center mt-8'>
        <Button className='rounded-full'>Contact Me</Button>
        <Link href={'/'} className='ml-auto'>
          LinkedIn
        </Link>
        <Link href={'/'}>GitHub</Link>
        <Link href={'/'}>Twitter</Link>
      </div>
    </main>
  )
}
