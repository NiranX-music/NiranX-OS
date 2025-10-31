# NIRANX OS — Setup Guide

## Prerequisites

1. **Install Node.js (LTS)**
   - Download from: https://nodejs.org/
   - Recommended version: 18.x or 20.x LTS
   - This includes npm (Node Package Manager)

2. **Verify Installation**
   Open a new terminal and run:
   ```bash
   node --version
   npm --version
   ```

## Installation & Setup

### 1. Install Dependencies
Navigate to the project folder and install all packages:
```bash
cd "g:\My Drive\Development\Nirnax\CascadeProjects\personal-website"
npm install
```

This installs:
- Next.js 14 (React framework)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- Zustand (state management)
- date-fns (date utilities)

### 2. Run Development Server
```bash
npm run dev
```

Open your browser to **http://localhost:3000**

### 3. Build for Production (optional)
```bash
npm run build
npm start
```

## Project Structure

```
personal-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts & metadata
│   ├── page.tsx           # Home dashboard
│   ├── globals.css        # Global styles & Tailwind
│   ├── studyverse/        # StudyVerse module
│   ├── planner/           # PiRemainder++ module
│   ├── tasks/             # To-Doist X module
│   ├── music/             # Music Hub module
│   ├── studio/            # Creator Studio module
│   └── gpt/               # NIRANX GPT chat
├── components/            # Reusable React components
│   ├── ClockGreeting.tsx
│   ├── WidgetGrid.tsx
│   ├── MusicBar.tsx
│   ├── Dock.tsx
│   └── PomodoroTimer.tsx
├── lib/                   # Utilities & data
│   ├── types.ts          # TypeScript interfaces
│   ├── mockData.ts       # Mock data for demo
│   └── store.ts          # Zustand global state
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.mjs       # Next.js configuration
```

## Features Implemented

### ✅ Home Dashboard
- Live clock with adaptive greeting
- Quick access widget grid
- Bottom music bar
- Center navigation dock
- Galaxy glassmorphism background

### ✅ StudyVerse
- Pomodoro timer (25-min focus sessions)
- Study statistics dashboard
- Weekly analytics chart
- AI Notes Assistant (mock)
- Recent study sessions log
- Ambient mode button

### ✅ PiRemainder++ Planner
- Today's schedule view
- Upcoming events calendar
- School/Allen/Vedantu timetable summary
- Havoc Mode activation
- Event categorization (class/study/test)

### ✅ To-Doist X
- Add/edit/delete tasks
- Filter by status (all/active/completed)
- Priority & category badges
- Natural language input
- Task completion tracking

### ✅ Music Hub
- Curated playlists (Focus/Energy/Ambient)
- Track list with play controls
- Playlist selection
- MoodSync AI placeholder

### ✅ Creator Studio
- Mini Camera tool
- Audio Recorder
- Quick Editor
- Recent projects dashboard
- Live Class Manager
- AI Script Writer

### ✅ NIRANX GPT
- Mock chat interface
- Message history
- Emotion-aware responses (placeholder)

## Next Steps (Roadmap)

### Phase 2: Backend & AI Integration
- [ ] Set up Supabase or Firebase for data persistence
- [ ] Integrate OpenAI API for NIRANX GPT
- [ ] Real-time task sync across devices
- [ ] User authentication (email/OAuth)

### Phase 3: Advanced Features
- [ ] Actual audio recording & transcription
- [ ] Video editing tools (FFmpeg integration)
- [ ] Real Pomodoro timer with notifications
- [ ] Calendar sync (Google Calendar API)
- [ ] Spotify/YouTube music integration

### Phase 4: Gamification & Social
- [ ] XP system & achievements
- [ ] Leaderboards
- [ ] Friend system
- [ ] Study groups & collaboration

### Phase 5: Mobile & PWA
- [ ] Responsive mobile improvements
- [ ] Progressive Web App (PWA) support
- [ ] Offline mode with service workers
- [ ] Mobile push notifications

## Customization

### Change Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  neon: {
    violet: "#7c3aed",  // Change these!
    cyan: "#22d3ee",
    pink: "#ec4899",
  },
}
```

### Change Fonts
Edit `app/layout.tsx`:
```ts
import { Outfit } from "next/font/google";
// Or use: Orbitron, Satoshi, etc.
```

### Add Your Branding
- Replace logo/icon in `public/`
- Update metadata in `app/layout.tsx`
- Change tagline on home page

## Troubleshooting

### Port already in use
```bash
npm run dev -- -p 3001
```

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build
# Check the error output for specifics
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **State**: Zustand
- **Dates**: date-fns

## License

MIT License - Feel free to customize and use!

---

**Built by Niranjan Barhate**  
**NIRANX OS — Where Productivity Feels Alive**
