import prisma from '@/libs/prisma'
import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions: AuthOptions = {
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
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id
      }

      return token
    },

    async session({ session, user, token }) {
      if (token) {
        session.user.id = token.sub as string
      }

      return session
    },
  },

  pages: {
    signIn: '/auth/login',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
