import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface User {
    username: string;
  }
  interface Session {
    user: User & {
      usernam: string;
    };
    token: {
      username: string;
    };
  }
}
