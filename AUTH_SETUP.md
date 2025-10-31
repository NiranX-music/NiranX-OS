# NIRANX OS — Authentication & Database Setup Guide

This guide will help you set up Supabase authentication and persistent storage for NIRANX OS.

## Prerequisites

- Node.js installed (see SETUP.md)
- A Supabase account (free tier works great!)

## Step 1: Create Supabase Project

### 1.1 Sign Up for Supabase
1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub, Google, or email

### 1.2 Create New Project
1. Click "New Project"
2. Choose your organization
3. Set project details:
   - **Name**: NIRANX OS
   - **Database Password**: (generate a strong password - save it!)
   - **Region**: Choose closest to you
4. Click "Create new project"
5. Wait 1-2 minutes for provisioning

## Step 2: Get API Credentials

### 2.1 Find Your Credentials
1. Go to Project Settings (⚙️ icon in sidebar)
2. Click **API** section
3. Copy these values:
   - **Project URL** (looks like: `https://abc123xyz.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

### 2.2 Configure Environment Variables
1. In your project root, create `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` with your values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

3. **Important**: Never commit `.env.local` to git (already in `.gitignore`)

## Step 3: Run Database Migrations

### 3.1 Using Supabase Dashboard (Easiest)
1. In Supabase dashboard, go to **SQL Editor**
2. Click **New query**
3. Copy the entire contents of `supabase/migrations/001_initial_schema.sql`
4. Paste into the editor
5. Click **Run** (or press Ctrl+Enter)
6. You should see "Success. No rows returned"

### 3.2 Verify Tables Created
1. Go to **Table Editor** in sidebar
2. You should see these tables:
   - `profiles`
   - `tasks`
   - `study_sessions`
   - `calendar_events`

## Step 4: Configure Authentication Providers

### 4.1 Enable Email Auth (Already Enabled)
- Email/Password auth is enabled by default
- Users can sign up directly

### 4.2 Enable Google OAuth (Optional)
1. Go to **Authentication** → **Providers**
2. Find **Google** and click **Enable**
3. Get Google OAuth credentials:
   - Go to https://console.cloud.google.com
   - Create a new project
   - Enable Google+ API
   - Create OAuth 2.0 Client ID
   - Add authorized redirect URI: `https://your-project-id.supabase.co/auth/v1/callback`
4. Copy Client ID and Secret to Supabase
5. Save

### 4.3 Enable GitHub OAuth (Optional)
1. Go to **Authentication** → **Providers**
2. Find **GitHub** and click **Enable**
3. Get GitHub OAuth credentials:
   - Go to https://github.com/settings/developers
   - Click **New OAuth App**
   - Set Authorization callback URL: `https://your-project-id.supabase.co/auth/v1/callback`
4. Copy Client ID and Secret to Supabase
5. Save

## Step 5: Configure Site URL

1. Go to **Authentication** → **URL Configuration**
2. Set **Site URL** to:
   - Development: `http://localhost:3000`
   - Production: `https://your-domain.com`
3. Add **Redirect URLs**:
   - `http://localhost:3000/auth/callback`
   - `https://your-domain.com/auth/callback` (for production)

## Step 6: Test Authentication

### 6.1 Start Development Server
```bash
npm install
npm run dev
```

### 6.2 Test Sign Up
1. Navigate to http://localhost:3000
2. You'll be redirected to `/auth`
3. Click **Sign Up** tab
4. Enter email and password
5. Check your email for confirmation link
6. Click confirmation link
7. You'll be logged in!

### 6.3 Test Sign Out
1. Click the **Sign Out** button in the top right
2. You'll be redirected back to `/auth`

## Step 7: Verify Data Persistence

### 7.1 Create a Task
1. Log in and go to **To-Doist X**
2. Add a new task
3. Refresh the page - task should persist

### 7.2 Check Database
1. Go to Supabase **Table Editor**
2. Open **tasks** table
3. You should see your task row with:
   - `user_id`: Your user UUID
   - `title`: Task title
   - Other fields

## Security Features Included

### Row Level Security (RLS)
- ✅ Users can only see/edit their own data
- ✅ Automatic user_id filtering on all tables
- ✅ No user can access another user's data

### Authentication Flow
- ✅ Middleware protects all routes except `/auth`
- ✅ Automatic redirect to login if not authenticated
- ✅ Secure cookie-based sessions
- ✅ OAuth support for Google & GitHub

### Data Validation
- ✅ TypeScript types for all database operations
- ✅ Enum constraints on priority/category fields
- ✅ Foreign key constraints
- ✅ Automatic timestamps (created_at, updated_at)

## API Usage Examples

### Fetch Tasks
```typescript
import { getTasks } from "@/lib/api/tasks";

const tasks = await getTasks();
```

### Create Task
```typescript
import { createTask } from "@/lib/api/tasks";

await createTask({
  title: "Study Math",
  completed: false,
  priority: "high",
  category: "Study",
  dueDate: "2025-11-01"
});
```

### Update Task
```typescript
import { updateTask } from "@/lib/api/tasks";

await updateTask("task-id", { completed: true });
```

### Delete Task
```typescript
import { deleteTask } from "@/lib/api/tasks";

await deleteTask("task-id");
```

## Troubleshooting

### "Invalid API key" error
- Check that `.env.local` exists and has correct values
- Restart dev server after creating `.env.local`
- Verify you copied the **anon public** key, not the service_role key

### Authentication redirect loop
- Check Site URL matches your dev URL exactly
- Clear browser cookies and try again
- Verify Redirect URLs are configured correctly

### Tables not found
- Run the SQL migration in Supabase dashboard
- Check for SQL errors in the query results
- Verify you're looking at the correct project

### RLS policy errors
- Make sure you're logged in
- Check browser console for detailed error
- Verify the migration created all RLS policies

### Email confirmation not received
- Check spam folder
- Go to **Authentication** → **Email Templates** in Supabase
- You can disable email confirmation for testing (not recommended for production)

## Production Deployment

### Environment Variables
Make sure to set these in your hosting platform (Vercel, Netlify, etc.):
```env
NEXT_PUBLIC_SUPABASE_URL=your-production-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-production-key
```

### Update Site URL
1. In Supabase, update **Site URL** to your production domain
2. Add production redirect URL to **Redirect URLs**

### Enable Email Confirmations
1. Go to **Authentication** → **Email Auth**
2. Enable **Confirm email**
3. Customize email templates if needed

## Next Steps

- [ ] Add profile editing page
- [ ] Implement calendar events API
- [ ] Add real-time sync with Supabase Realtime
- [ ] Set up automated backups
- [ ] Add two-factor authentication
- [ ] Implement social features (sharing, collaboration)

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Auth Helpers](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase CLI](https://supabase.com/docs/guides/cli)

---

**Your data is now secure, persistent, and synced across devices! 🔒✨**
