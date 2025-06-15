'use client'
import { Button, Flex, Text, TextField } from '@radix-ui/themes'
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons'
import { useForm, Controller } from 'react-hook-form'

function SigninForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    values: {
      email: '',
      password: '',
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <Flex direction='column' gap='2'>
        <label htmlFor='email'>Email</label>
        <Controller
          name='email'
          control={control}
          rules={{
            required: {
              message: 'Email is required',
              value: true,
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                type='email'
                placeholder='Enter your email'
                autoFocus
                {...field}
              >
                <TextField.Slot>
                  <EnvelopeClosedIcon height='16' width='16' />
                </TextField.Slot>
              </TextField.Root>
            )
          }}
        />
        {errors.email && (
          <Text color='ruby' className='text-xs'>
            {errors.email.message}
          </Text>
        )}

        <label htmlFor='password'>Password</label>
        <Controller
          name='password'
          control={control}
          rules={{
            required: {
              message: 'Password is required',
              value: true,
            },
            minLength: {
              message: 'Password must be at least 6 characters',
              value: 6,
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root type='password' placeholder='********' {...field}>
                <TextField.Slot>
                  <LockClosedIcon height='16' width='16' />
                </TextField.Slot>
              </TextField.Root>
            )
          }}
        />
        {errors.password && (
          <Text color='ruby' className='text-xs'>
            {errors.password.message}
          </Text>
        )}

        <Button type='submit' mt='4'>
          Sign In
        </Button>
      </Flex>
    </form>
  )
}

export default SigninForm
