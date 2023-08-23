# Trello clone built with Next.js 13.4:

- Next.js Framework
- Tailwind CSS
- HeadlessUI
- Drag and Drop Library
- Zustand store
- AppWrite database
- GPT integration
- Vercel deployment

# Installation Steps

Run commands

1. `npm install`

2. `npm run dev`

# Needed environment variables to run this project

## Create a .env.local file in the root directory with the following

### AppWrite

- NEXT_PUBLIC_APPWRITE_PROJECT_ID=
- NEXT_PUBLIC_DATABASE_ID=
- NEXT_PUBLIC_TODOS_COLLECTION_ID=
- NEXT_PUBLIC_TODOS_BUCKET_ID=

### GPT. Uncomment lines 24 & 25 from components/Header.tsx.

- OPENAI_API_KEY=
