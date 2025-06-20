'use client'
import { Project } from '@/generated/prisma'
import { Card, Heading, Text } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'

interface Props {
  project: Project
}

function ProjectCard({ project }: Props) {
  const router = useRouter()

  return (
    <Card
      className='hover:cursor-pointer hover:opacity-75'
      onClick={() => router.push(`/dashboard/projects/${project.id}`)}
    >
      <Heading>{project.title}</Heading>
      <Text className='text-slate-500'>{project.description}</Text>
    </Card>
  )
}

export default ProjectCard
