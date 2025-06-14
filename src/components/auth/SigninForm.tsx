'use client'
import { Button, Flex, TextField } from '@radix-ui/themes'
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons'

function SigninForm() {
  return (
    <Flex direction='column' gap='2'>
      <label htmlFor='email'>Email</label>
      <TextField.Root type='email' placeholder='Enter your email' autoFocus>
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

      <Button>Sign In</Button>
    </Flex>
  )
}

export default SigninForm
