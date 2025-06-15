import { Heading, Link } from '@radix-ui/themes'
import NavLink from 'next/link'

function Navbar() {
  return (
    <div>
      <Heading>RadixNext</Heading>

      <ul>
        <li>
          <Link asChild>
            <NavLink href='/home' passHref>
              Home
            </NavLink>
          </Link>
        </li>

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

        <li>
          <Link asChild>
            <NavLink href='/dashboard' passHref>
              Dashboard
            </NavLink>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
