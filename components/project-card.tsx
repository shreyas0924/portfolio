import React from 'react'
import { Badge } from './ui/badge'
type ProjectProps = {
  name: string
  url: string
  github: string
  tech: string[]
}
export default function ProjectCard({ name, url, github, tech }: ProjectProps) {
  return (
    <div className='border-2 p-3 rounded-2xl h-full'>
      <header className=''>
        <div className='mx-auto flex items-center'>
          <h1 className='text-xl font-bold'>{name}</h1>
          <div className='flex ml-auto mr-3 gap-5'>
            <div className=''>{url}</div>
            <div>{github}</div>
          </div>
        </div>
      </header>
      <div className='grid grid-cols-1'>
        <div className='py-2'>
          <p className=' mb-4'>
            An e-commerce platform for books with category-based shopping,
            wishlist, kart, address checkout, and coupon functionality.
            Integrated Razorpay for payments.
          </p>
          <div className='flex flex-wrap gap-2'>
            {tech.map((t) => (
              <Badge>{t}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
