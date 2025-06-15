import { NextResponse } from "next/server"
import prisma from "@/libs/prisma"

export async function POST(req: Request) {
    const data = await req.json()
    const newUser = await prisma.user.create({ data })

    return NextResponse.json(newUser, {
        status: 201
    })
}