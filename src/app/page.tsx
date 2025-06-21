import { Container } from '@radix-ui/themes'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'This is the home page of our application.',
}

function HomePage() {
  return (
    <Container>
      <header className='my-4 p-10 rounded-md bg-slate-900'>
        <h1 className='my-10 text-7xl'>NextAuth Radix</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iste
          praesentium placeat numquam nobis alias eaque enim quisquam sint
          ipsum, eius corrupti voluptates ut eveniet tempora ratione odit
          pariatur veritatis? Aliquid illum tenetur, libero nulla, blanditiis,
          laborum quis nam velit excepturi commodi deleniti sunt totam aperiam
          omnis possimus eligendi debitis!
        </p>

        <div className='mt-5'>
          <Link
            href='/auth/login'
            className='text-white bg-blue-500 px-2 py-1 rounded-md  hover:bg-blue-400'
          >
            Ingresa
          </Link>
        </div>
      </header>
    </Container>
  )
}

export default HomePage

//02:32:00
//https://www.youtube.com/watch?v=qOAUm_rAE-E&t=5272s
