import { Prisma } from '@/generated/prisma'
import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const project = await prisma.project.findUnique({
    where: {
      id: parseInt(params.id),
    },
  })

  if (!project) {
    return NextResponse.json({
      Message: 'Project not found',
      status: 404,
    })
  }

  return NextResponse.json(project)
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const deletedProject = await prisma.project.delete({
      where: {
        id: parseInt(params.id),
      },
    })
    return NextResponse.json(deletedProject)
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return NextResponse.json(
          { message: 'Project not found' },
          { status: 404 }
        )
      }
    }

    return NextResponse.json(
      { error: 'internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await req.json()
  const updated = await prisma.project.update({
    where: {
      id: parseInt(params.id),
    },
    data,
  })

  return NextResponse.json(updated, { status: 200 })
}
