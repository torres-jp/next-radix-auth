'use client'
import {
  Button,
  Card,
  Container,
  Flex,
  Heading,
  TextArea,
  TextField,
  Text,
} from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function TaskNewPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    values: {
      title: '',
      description: '',
    },
  })

  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post(`/api/projects`, data)

    if (res.status === 201) {
      router.push(`/dashboard`)
    }
  })

  return (
    <div>
      <Container size='1' height='100%' className='p-3 md:p-0'>
        <Flex className='h-screen w-full  items-center'>
          <Card className='w-full p-7'>
            <form className='flex flex-col gap-y-2' onSubmit={onSubmit}>
              <Heading>Create Project</Heading>
              <label htmlFor='title'>Project Title</label>
              <Controller
                name='title'
                control={control}
                rules={{
                  required: {
                    message: 'Title is required',
                    value: true,
                  },
                }}
                render={({ field }) => {
                  return (
                    <TextField.Root
                      size='3'
                      placeholder='Write title'
                      autoFocus
                      {...field}
                    />
                  )
                }}
              />

              {errors.title && (
                <Text color='ruby' className='text-xs'>
                  {errors.title.message}
                </Text>
              )}

              <label htmlFor='description'>Project Description </label>
              <Controller
                name='description'
                control={control}
                rules={{
                  required: {
                    message: 'Description is required',
                    value: true,
                  },
                }}
                render={({ field }) => {
                  return (
                    <TextArea
                      size='3'
                      placeholder='Write your description'
                      {...field}
                    />
                  )
                }}
              />
              {errors.description && (
                <Text color='ruby' className='text-xs'>
                  {errors.description.message}
                </Text>
              )}

              <Button type='submit' mt='3'>
                Create
              </Button>
            </form>
          </Card>
        </Flex>
      </Container>
    </div>
  )
}

export default TaskNewPage
