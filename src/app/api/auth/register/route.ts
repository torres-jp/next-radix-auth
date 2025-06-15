import { NextResponse } from "next/server"
import prisma from "@/libs/prisma"
import bcrypt from "bcrypt"


export async function POST(req: Request) {
    const data = await req.json()
    data.password = await bcrypt.hash(data.password, 10)

    const newUser = await prisma.user.create({ data })

    const { password, ...user } = newUser

    return NextResponse.json(user, {
        status: 201
    })
}