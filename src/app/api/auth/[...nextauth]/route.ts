import prisma from '@/libs/prisma'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'email',
          placeholder: 'Username@mail.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '******',
        },
      },
      async authorize(credentials: any, req) {
        const { email, password } = credentials
        const userFound = await prisma.user.findUnique({
          where: {
            email,
          },
        })

        if (!userFound) throw new Error('Invalid credentials')

        const validatePass = await bcrypt.compare(password, userFound.password)
        if (!validatePass) throw new Error('Invalid password')

        return {
          id: userFound.id + '',
          name: userFound.name,
          email: userFound.email,
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
})

export { handler as GET, handler as POST }
