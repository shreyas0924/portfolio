import Link from 'next/link'
import React from 'react'
import { MoveUpRight } from 'lucide-react'

const Navbar = () => {
  return (
    <main className='flex flex-row gap-3 dark:text-gray-100/50 font-light text-xl text-black mt-12'>
      <Link href={`/`} className='italic'>
        shreyas
      </Link>
      <Link
        href={`https://drive.google.com/file/d/1-eWQ7USNNHBAhooSWphuuaBQxtvh2mtn/view?usp=sharing`}
        target='_blank'
        className='ml-auto flex flex-row items-center hover:underline '
      >
        <span>resume</span>
        <MoveUpRight className='h-[40%] py-auto' />
      </Link>
    </main>
  )
}

export default Navbar
