import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]/route'

export async function POST(req: Request) {
  const data = await req.json()

  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json(
      { message: 'Unauthorized' },
      {
        status: 401,
      }
    )
  }

  const newProject = await prisma.project.create({
    data: {
      title: data.title,
      description: data.description,
      user: {
        connect: {
          id: parseInt(session?.user.id),
        },
      },
    },
  })

  return NextResponse.json(newProject, {
    status: 201,
  })
}
