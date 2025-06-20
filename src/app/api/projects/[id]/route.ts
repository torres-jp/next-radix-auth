import { Prisma } from '@/generated/prisma'
import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'

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
