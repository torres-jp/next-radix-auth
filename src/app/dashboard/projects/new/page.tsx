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
import { useRouter, useParams } from 'next/navigation'
import { TrashIcon } from '@radix-ui/react-icons'
import { toast } from 'sonner'
import { useEffect } from 'react'

function TaskNewPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    values: {
      title: '',
      description: '',
    },
  })

  const handleDelete = async (projectId: string) => {
    const res = await axios.delete(`/api/projects/${projectId}`)

    if (res.status === 200) {
      toast.success('Project deleted successfully')
    }
    router.push(`/dashboard`)
    router.refresh()
  }

  const router = useRouter()
  const params = useParams() as { projectId: string }

  const onSubmit = handleSubmit(async (data) => {
    if (!params.projectId) {
      const res = await axios.post(`/api/projects`, data)

      if (res.status === 201) {
        router.push(`/dashboard`)
        router.refresh()
      }
    } else {
      const res = await axios.put(`/api/projects/${params.projectId}`, data)

      if (res.status === 200) {
        router.push(`/dashboard`)
        router.refresh()
      }
    }
  })

  useEffect(() => {
    if (params.projectId) {
      axios.get(`/api/projects/${params.projectId}`).then((res) => {
        setValue('title', res.data.title)
        setValue('description', res.data.description)
      })
    }
  }, [])

  return (
    <div>
      <Container size='1' height='100%' className='p-3 md:p-0'>
        <Flex className='h-screen w-full  items-center'>
          <Card className='w-full p-7'>
            <form className='flex flex-col gap-y-2' onSubmit={onSubmit}>
              <Heading>
                {params.projectId ? 'Edit Project' : 'Create Project'}
              </Heading>
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
                {params.projectId ? 'Update Project' : 'Create Project'}
              </Button>
            </form>
            <div className='flex justify-end my-4 '>
              {params.projectId && (
                <Button
                  color='red'
                  onClick={() => handleDelete(params.projectId)}
                >
                  <TrashIcon />
                  Delete Project
                </Button>
              )}
            </div>
          </Card>
        </Flex>
      </Container>
    </div>
  )
}

export default TaskNewPage
