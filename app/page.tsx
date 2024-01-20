import { About } from '@/components/about'
import Contact from '@/components/contact'
import Projects from '@/components/projects'
import Work from '@/components/work'
export default function Home() {
  return (
    <main className=''>
      <About />
      <Work />
      <Projects />
      <Contact />
    </main>
  )
}
