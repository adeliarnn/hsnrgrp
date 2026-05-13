import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/admin/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Hardcoded credentials untuk demo
        const adminUsername = process.env.ADMIN_USERNAME || 'admin';
        const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123456';

        if (!credentials) {
          return null;
        }

        if (
          credentials.username === adminUsername &&
          credentials.password === adminPassword
        ) {
          return {
            id: '1',
            name: 'Admin',
            email: 'admin@hasnurgroup.com',
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'admin';
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).role = token.userRole;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
