import prisma from '@/libs/prisma'
import { Container, Grid } from '@radix-ui/themes'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/route'
import ProjectCard from '@/components/projects/ProjectCard'
import HeaderDashboard from '@/components/dashboard/HeaderDashboard'

async function loadProject(userId: number) {
  return await prisma.project.findMany({
    where: {
      userId,
    },
  })
}

async function DashboardPage() {
  const session = await getServerSession(authOptions)
  const projects = await loadProject(parseInt(session?.user.id as string))
  console.log(projects)

  return (
    <Container className='mt-10'>
      <HeaderDashboard />

      <Grid columns='3' gap='4'>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Grid>
    </Container>
  )
}

export default DashboardPage
