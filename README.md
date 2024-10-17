# NextAuth.js Starter with Firebase Integration

A comprehensive template for initializing NextAuth.js in your Next.js project with optional Firebase integration for user profile picture storage. This template provides a quick setup for user authentication using Google and GitHub OAuth, making it easy for developers to integrate secure login functionality into their applications.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Prisma Setup](#prisma-setup)
- [Firebase Setup](#firebase-setup)
- [Running the Project](#running-the-project)
- [Styling](#styling)
  - [Setting up Tailwind CSS](#setting-up-tailwind-css)
  - [Using Shadcn](#using-shadcn)
- [Deploying](#deploying)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a starter template for developers looking to quickly integrate **NextAuth.js** into their Next.js applications for user authentication. It includes optional Firebase integration for storing pictures.

## Features

- User authentication with Google and GitHub
- Secure JWT-based sessions
- Profile management with Firebase for image storage (optional)
- OAuth provider setup with NextAuth.js
- Responsive design

## Tech Stack

- **Frontend**: Next.js, React, Shadcn, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Storage**: Firebase (optional for profile pictures)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nextauth-starter.git
   cd nextauth-starter
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root directory and add the following environment variables:

```env
DATABASE_URL="your-postgresql-connection-string"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_JWT_SECRET="your-nextauth-jwt-secret"
AUTH_SECRET="your-auth-secret"

GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"

NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id

RESEND_API_KEY="your-resend-api-key"

MAIL_USER="your-email@example.com"
MAIL_PASS="your-email-password"
```

## Database Setup

1. Make sure PostgreSQL is installed and running.
2. Create a new PostgreSQL database.

## Prisma Setup

1. Generate the Prisma client:

   ```bash
   npx prisma generate
   ```

2. Migrate the database:
   ```bash
   npx prisma migrate dev --name init
   ```

## Firebase Setup

To store profile images in Firebase, follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. In the Firebase project, enable **Firebase Storage** and set up the rules to allow public or authenticated access based on your security needs.
3. Get your Firebase configuration details (API Key, Auth Domain, Project ID, etc.) and add them to your `.env` file (as shown in the Configuration section).
4. Install the Firebase SDK in your project:
   ```bash
   npm install firebase
   ```
5. Initialize Firebase in your project by creating a `firebase.js` file:

   ```javascript
   // firebase.js
   import { initializeApp } from "firebase/app";
   import { getStorage } from "firebase/storage";

   const firebaseConfig = {
     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   };

   const app = initializeApp(firebaseConfig);
   const storage = getStorage(app);

   export { storage };
   ```

6. Use the Firebase storage instance to upload and manage profile images in your application.

## Running the Project

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Styling

### Setting up Tailwind CSS

1. Install Tailwind CSS:

   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

2. Configure `tailwind.config.js`:

   ```javascript
   module.exports = {
     content: [
       "./pages/**/*.{js,ts,jsx,tsx}",
       "./components/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. Include Tailwind in your CSS:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Using Shadcn

Shadcn is a design system and component library that integrates seamlessly with Tailwind CSS. It provides a set of customizable and accessible UI components.

Refer to the [Shadcn documentation](https://shadcn.dev/docs) for detailed usage and additional components.

## Deploying

### Vercel

1. Push your code to a GitHub repository.
2. Import the repository to Vercel.
3. Set up the environment variables in the Vercel dashboard.

### Other Platforms

Follow the platform-specific instructions for deploying a Next.js application.

## Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes.
4. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
5. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
6. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
