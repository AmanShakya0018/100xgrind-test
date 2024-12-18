import { NextAuthOptions } from 'next-auth';
import GitHubProvider from "next-auth/providers/github";
import db from '@/lib/db';

export const authOptions:NextAuthOptions = {
   
    
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? ""
          }),
    ],

    secret: process.env.NEXTAUTH_SECRET ?? "secret",

    callbacks: {
  async signIn({ user, account, profile }) {
    if (!user.email) {
      return false;
    }
    try {
      const existingUser = await db.user.findUnique({
        where: {
          email: user.email,
        },
      });
      if (existingUser) {
        return true;
      }
      await db.user.create({
        data: {
          email: user.email,
          image: user.image ?? "",
          name: user.name ?? "",
          provider: "Github",
        },
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }

  
    },

    async jwt({ token, user }) {
      // Only called when user first signs in so requiring less db calls
      if (user && user.email) {
        const dbUser = await db.user.findUnique({
          where: {
            email: user.email,
          },
        });

        // This will not happen as we are storing the user in db on sign in callback
        if (!dbUser) {
          return token;
        }

        return {
          ...token,
          id: dbUser.id,
        };
      }

      return token;
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
        },
      };
    },
  },
} satisfies NextAuthOptions
  