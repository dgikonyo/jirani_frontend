import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // Redirect users to "/login" when signing in
  pages: {
    signIn: "/login",
  },
  // Use JSON Web Tokens (JWT) for session management
  session: {
    strategy: "jwt",
  },
  // added secret key
  secret: process.env.NEXT_PUBLIC_SECRET,
  // Configure Google authentication provider with environment variables
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
    // to add github
  ],
};
