import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './theme/mode-toggle'

const Navbar = () => {
  return (
    <main className='flex flex-row gap-3 dark:text-gray-100/50 font-light text-xl text-black mt-12'>
      <Link href={`/`} className='italic'>
        shreyas
      </Link>
      <Link
        href={`https://drive.google.com/file/d/11WBKQsa_M0z4IKyRsXaLHp2pqWHnmHte/view`}
        target='_blank'
        className='ml-auto hover:underline '
      >
        resume
      </Link>
    </main>
  )
}

export default Navbar
