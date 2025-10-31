# NIRANX OS — Where Productivity Feels Alive

A Gen-Z AI universe blending productivity, creativity, and automation. Built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Quick Start

### 1. Install Node.js
- Download from https://nodejs.org (LTS version)

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Authentication (Required)
See **AUTH_SETUP.md** for complete Supabase setup instructions.

Quick version:
1. Create Supabase account at https://supabase.com
2. Create new project
3. Copy `.env.local.example` to `.env.local`
4. Add your Supabase URL and anon key
5. Run the SQL migration from `supabase/migrations/001_initial_schema.sql`

### 4. Run Development Server
```bash
npm run dev
```

Open http://localhost:3000

## 📚 Documentation

- **SETUP.md** — Full installation and customization guide
- **AUTH_SETUP.md** — Complete authentication and database setup
- **package.json** — All dependencies and scripts

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **State**: Zustand
- **Auth & Database**: Supabase
- **Dates**: date-fns

## 📁 Project Structure

```
personal-website/
├── app/                    # Next.js pages
│   ├── auth/              # Authentication page
│   ├── studyverse/        # Focus & study tracking
│   ├── planner/           # Calendar & scheduling
│   ├── tasks/             # Task management
│   ├── music/             # Music player
│   ├── studio/            # Content creation
│   └── gpt/               # AI chat interface
├── components/            # Reusable components
├── lib/                   # Utilities & API
│   ├── api/              # Database operations
│   └── supabase/         # Supabase clients
├── supabase/             # Database migrations
└── public/               # Static assets
```

## ✨ Features

### ✅ Implemented
- **Authentication** — Email/password + OAuth (Google/GitHub)
- **Persistent Storage** — All data saved to Supabase
- **Row Level Security** — Users can only see their own data
- **StudyVerse** — Pomodoro timer, analytics, session tracking
- **PiRemainder++ Planner** — Calendar, events, timetable
- **To-Doist X** — Full task management with filters
- **Music Hub** — Playlists and track management
- **Creator Studio** — Content creation tools
- **NIRANX GPT** — AI chat interface (mock)

### 🔜 Coming Soon
- OpenAI integration for real GPT chat
- Real-time collaboration
- Mobile app (React Native)
- Offline mode with sync
- Advanced analytics dashboard

## 🔒 Security

- Row Level Security (RLS) enabled on all tables
- Middleware protects all routes
- Secure session management
- OAuth provider support
- Environment variables for secrets

## 🎨 Customization

Edit colors in `tailwind.config.ts`:
```ts
colors: {
  neon: {
    violet: "#7c3aed",
    cyan: "#22d3ee",
    pink: "#ec4899",
  },
}
```

## 📖 API Examples

```typescript
// Fetch user's tasks
import { getTasks } from "@/lib/api/tasks";
const tasks = await getTasks();

// Create a new task
import { createTask } from "@/lib/api/tasks";
await createTask({
  title: "Complete project",
  priority: "high",
  category: "Work"
});
```

## 🐛 Troubleshooting

See **AUTH_SETUP.md** for authentication issues.

Common issues:
- **Module errors**: Run `npm install`
- **Auth errors**: Check `.env.local` exists with correct values
- **Build errors**: Clear `.next` folder and rebuild

## 📝 License

MIT License - Feel free to customize and use!

---

**Built by Niranjan Barhate**  
**NIRANX OS — Your AI-Powered Productivity Universe**
