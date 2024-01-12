import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <main className='flex flex-row gap-3 text-gray-100/50 mt-12'>
      <Link href={`/`}>shreyas</Link>
      <Link href={`https://drive.google.com/file/d/11WBKQsa_M0z4IKyRsXaLHp2pqWHnmHte/view`} target='_blank' className='ml-auto hover:underline '>resume</Link>
    </main>
  )
}

export default Navbar
