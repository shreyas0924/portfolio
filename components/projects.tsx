import React from 'react'
import ProjectCard from './project-card'

const Projects = () => {
  return (
    <main>
      <h3 className='text-xl font-bold mb-4'>Projects</h3>
      <div className='my-5 flex flex-col gap-4'>
        <ProjectCard
          name='Shopwise'
          github='#'
          image='#'
          tech={['TypeScript', 'Next.js', 'TailwindCSS', 'Supabase', 'Prisma']}
          url='#'
        />
        <ProjectCard
          name='Shopwise'
          github='#'
          image='#'
          tech={['TypeScript', 'Next.js', 'TailwindCSS', 'Supabase', 'Prisma']}
          url='#'
        />
      </div>
    </main>
  )
}

export default Projects
