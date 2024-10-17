import { Prisma } from "@prisma/client";

export type Role = "USER" | "ADMIN";

export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified?: Date | null;
  image: string;
  password?: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  bio?: string;
  profession?: string;
  accounts: Account[];
  blogs: Blog[];
  comments: Comment[];
  likes: Like[];
  saves: Save[];
  followers: Following[];
  following: Following[];
};

export type Account = {
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
};

export type VerificationToken = {
  id: string;
  email: string;
  token: string;
  expires: Date;
};

export type PasswordToken = {
  id: string;
  email: string;
  token: string;
  expires: Date;
};
