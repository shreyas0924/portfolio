'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'

export const About = () => {
  const { theme } = useTheme()
  return (
    <main className=' border-b-2 mt-10 pb-6  '>
      <div>
        Hey, I'm <strong>Shreyas P</strong>, a final year CS undergrad. I am a
        passionate <strong>Full Stack Developer</strong> with over{' '}
        <strong>6 months</strong> of work experience. I like in building robust
        web applications with{' '}
        <span className='font-semibold '>React and Next.js.</span>
      </div>
      <div className='flex flex-row gap-2 items-center mt-8'>
        <Button className='rounded-full'>Contact Me</Button>
        <Link
          target='_blank'
          href={'https://linkedin.com/in/shreyas0924'}
          className='ml-auto'
        >
          {theme === 'light' ? (
            <img src='./linkedin1.svg' />
          ) : (
            <img src='./linkedin2.svg' />
          )}
        </Link>
        <Link target='_blank' href={'https://github.com/shreyas0924'}>
          {theme === 'light' ? (
            <img src='./github1.svg' />
          ) : (
            <img src='./github2.svg' />
          )}
        </Link>
        <Link target='_blank' href={'https://twitter.com/shreyas0924'}>
          {theme === 'light' ? (
            <img src='./twitter1.svg' width={28} />
          ) : (
            <img src='./twitter2.svg' width={28} />
          )}
        </Link>
      </div>
    </main>
  )
}
