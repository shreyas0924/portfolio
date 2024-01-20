import { Button } from '@/components/ui/button'

export default function Skills() {
  return (
    <div className='flex flex-col items-center justify-center pb-10 border-b-2  '>
      <h1 className='text-xl font-semibold mb-8'>My Skills</h1>
      <div className='flex flex-wrap gap-4 justify-center'>
        <Button className='bg-[#21262d] hover:bg-[#30363d] dark:bg-gray-400 text-sm'>
          HTML
        </Button>
        <Button className='bg-[#21262d] hover:bg-[#30363d]  dark:bg-gray-400  text-sm'>
          CSS
        </Button>
        <Button className='bg-[#21262d] hover:bg-[#30363d]  dark:bg-gray-400  text-sm'>
          JavaScript
        </Button>
        <Button className='bg-[#21262d]  dark:bg-gray-400  hover:bg-[#30363d] text-sm'>
          TypeScript
        </Button>
        <Button className='bg-[#21262d]  dark:bg-gray-400  hover:bg-[#30363d] text-sm'>
          React
        </Button>
        <Button className='bg-[#21262d]  dark:bg-gray-400  hover:bg-[#30363d] text-sm'>
          Next.js
        </Button>
        <Button className='bg-[#21262d]  dark:bg-gray-400  hover:bg-[#30363d] text-sm'>
          Node.js
        </Button>
        <Button className='bg-[#21262d]  dark:bg-gray-400  hover:bg-[#30363d] text-sm'>
          Git
        </Button>
        <Button className='bg-[#21262d] hover:bg-[#30363d]  dark:bg-gray-400  text-sm'>
          Tailwind
        </Button>
        <Button className='bg-[#21262d]  dark:bg-gray-400  hover:bg-[#30363d] text-sm'>
          SQL
        </Button>
        <Button className='bg-[#21262d]  dark:bg-gray-400  hover:bg-[#30363d] text-sm'>
          Redux
        </Button>
        <Button className='bg-[#21262d]  dark:bg-gray-400  hover:bg-[#30363d] text-sm'>
          Express
        </Button>
      </div>
    </div>
  )
}
