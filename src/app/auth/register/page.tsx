import SignupForm from '@/components/auth/SignupForm'
import { Card, Container, Flex, Heading, Text, Link } from '@radix-ui/themes'
import NavLink from 'next/link'

function RegisterPage() {
  return (
    <>
      <Container size='1' height='100%' className='p-3 md:p-0'>
        <Flex className='h-screen items-center justify-center w-full'>
          <Card className='w-full p-7'>
            <Heading>Sign Up</Heading>
            <SignupForm />
            <Flex justify='between' my='4'>
              <Text>Don&apos;t Already have an account?</Text>
              <Link asChild>
                <NavLink href='/auth/login' passHref>
                  Sign In
                </NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  )
}

export default RegisterPage
