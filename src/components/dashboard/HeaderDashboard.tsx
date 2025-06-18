'use client'
import { Button, Heading } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'

function HeaderDashboard() {
  const router = useRouter()

  return (
    <div className='flex justify-between'>
      <Heading>Projects</Heading>
      <Button onClick={() => router.push('/dashboard/projects/new')}>
        Add Projects
      </Button>
    </div>
  )
}

export default HeaderDashboard
