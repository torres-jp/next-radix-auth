'use client'
import { Button, Flex, TextField } from '@radix-ui/themes'
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from '@radix-ui/react-icons'

function SignupForm() {
  return (
    <Flex direction='column' gap='2'>
      <label htmlFor='name'>Name</label>
      <TextField.Root type='text' placeholder='Enter your username' autoFocus>
        <TextField.Slot>
          <PersonIcon height='16' width='16' />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor='email'>Email</label>
      <TextField.Root type='email' placeholder='Enter your email'>
        <TextField.Slot>
          <EnvelopeClosedIcon height='16' width='16' />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor='password'>Password</label>
      <TextField.Root type='password' placeholder='********'>
        <TextField.Slot>
          <LockClosedIcon height='16' width='16' />
        </TextField.Slot>
      </TextField.Root>

      <Button>Sign Up</Button>
    </Flex>
  )
}

export default SignupForm
