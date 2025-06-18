import HeaderDashboard from '@/components/dashboard/HeaderDashboard'
import prisma from '@/libs/prisma'
import { Card, Container, Grid, Heading, Text } from '@radix-ui/themes'

async function loadProject() {
  return await prisma.project.findMany()
}

async function DashboardPage() {
  const projects = await loadProject()
  console.log(projects)

  return (
    <Container className='mt-10'>
      <HeaderDashboard />

      <Grid columns='3' gap='4'>
        {projects.map((project) => (
          <Card
            key={project.id}
            className='hover:cursor-pointer hover:opacity-75'
          >
            <Heading>{project.title}</Heading>
            <Text className='text-slate-500'>{project.description}</Text>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}

export default DashboardPage
