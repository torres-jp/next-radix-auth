'use client'
import {
  Container,
  Flex,
  Heading,
  Link,
  DropdownMenu,
  Button,
} from '@radix-ui/themes'
import NavLink from 'next/link'
import { useSession, signOut } from 'next-auth/react'

function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className='bg-zinc-900 py-4'>
      <Container>
        <Flex justify='between' align='center'>
          <NavLink href='/'>
            <Heading>RadixNext</Heading>
          </NavLink>
          <ul className='flex gap-x-2 items-center'>
            {!session && (
              <>
                <li>
                  <Link asChild>
                    <NavLink href='/auth/login' passHref>
                      Login
                    </NavLink>
                  </Link>
                </li>

                <li>
                  <Link asChild>
                    <NavLink href='/auth/register' passHref>
                      Register
                    </NavLink>
                  </Link>
                </li>
              </>
            )}
            {session && (
              <>
                <li>
                  <Link asChild>
                    <NavLink href='/dashboard' passHref>
                      Dashboard
                    </NavLink>
                  </Link>
                </li>
                <li>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button variant='soft'>
                        {session?.user?.name}
                        <DropdownMenu.TriggerIcon />
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item>My Profile</DropdownMenu.Item>
                      <DropdownMenu.Item>Settings</DropdownMenu.Item>

                      <DropdownMenu.Separator />
                      <DropdownMenu.Item color='red' onClick={() => signOut()}>
                        Logout
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </li>
              </>
            )}
          </ul>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar
