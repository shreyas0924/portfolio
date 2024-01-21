'use client'
import React from 'react'
import { Badge } from './ui/badge'
import Link from 'next/link'
import { Github, GithubIcon, Link as LinkToProject } from 'lucide-react'
import { useTheme } from 'next-themes'
type ProjectProps = {
  name: string
  url?: string
  github: string
  tech: string[]
  description: string
}
export default function ProjectCard({
  name,
  url,
  github,
  tech,
  description,
}: ProjectProps) {
  const { theme } = useTheme()
  return (
    <div className='border-2 p-3 rounded-2xl h-full'>
      <header className=''>
        <div className='mx-auto flex items-center'>
          <h1 className='text-xl font-bold'>{name}</h1>
          <div className='flex ml-auto mr-3 gap-3'>
            {url && (
              <Link target='_blank' href={url}>
                <LinkToProject />
              </Link>
            )}
            <Link target='_blank' href={github}>
              <Github className='border-2 border-black dark:border-white p-0.5 rounded-md' />
            </Link>
          </div>
        </div>
      </header>
      <div className='grid grid-cols-1'>
        <div className='py-2'>
          <p className=' mb-4 text-justify pr-4 py-2'>{description}</p>
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
