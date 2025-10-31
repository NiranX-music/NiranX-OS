# 🚀 NIRANX OS — Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Method 1: Deploy from GitHub (Easiest)

#### Step 1: Push to GitHub

**If you don't have a GitHub repo yet:**

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: NIRANX OS complete build"

# Create repo on GitHub.com (don't initialize with README)
# Then connect:
git remote add origin https://github.com/YOUR_USERNAME/niranx-os.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Vercel

1. **Go to Vercel**: https://vercel.com
2. **Sign up/Login** with GitHub
3. **Click "Add New Project"**
4. **Import your GitHub repository** (niranx-os)
5. **Configure Build Settings**:
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

6. **Add Environment Variables** (CRITICAL):
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

7. **Click "Deploy"**

Wait 2-3 minutes... 🎉 **Your app is live!**

---

### Method 2: Deploy from Command Line

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login

```bash
vercel login
```

#### Step 3: Deploy

```bash
# Navigate to project
cd "g:\My Drive\Development\Nirnax\CascadeProjects\personal-website"

# Deploy
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N** (first time)
- What's your project's name? **niranx-os**
- In which directory is your code located? **.**
- Want to override settings? **N**

#### Step 4: Add Environment Variables

```bash
# Add Supabase URL
vercel env add NEXT_PUBLIC_SUPABASE_URL

# Add Supabase Key
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY

# Redeploy with env vars
vercel --prod
```

---

## 🔧 Configure Supabase for Production

### Update Site URL

1. Go to **Supabase Dashboard**
2. **Settings** → **Authentication** → **URL Configuration**
3. **Site URL**: Change to your Vercel domain
   ```
   https://niranx-os.vercel.app
   ```
4. **Redirect URLs**: Add your production callback
   ```
   https://niranx-os.vercel.app/auth/callback
   ```

### Enable Email Confirmations (Recommended)

1. **Authentication** → **Email Auth**
2. Enable **Confirm email**
3. Customize email templates if desired

---

## 🌐 Custom Domain (Optional)

### Add Your Own Domain

1. In **Vercel Dashboard** → Your Project → **Settings** → **Domains**
2. Add domain: `niranx.com` (or whatever you own)
3. Follow DNS configuration instructions
4. Update Supabase Site URL to your custom domain

### Typical DNS Settings

**For apex domain (niranx.com):**
```
Type: A
Name: @
Value: 76.76.19.19
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🔒 Production Environment Variables

### Required Variables

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
```

### Optional (for future features)

```env
# OpenAI API (for NIRANX GPT)
OPENAI_API_KEY=sk-xxx

# Analytics
NEXT_PUBLIC_ANALYTICS_ID=G-xxx

# Error tracking (Sentry)
SENTRY_DSN=https://xxx@sentry.io/xxx
```

---

## 📊 Post-Deployment Checklist

### ✅ Verify Everything Works

1. **Visit your deployed URL**
2. **Test Authentication**:
   - Sign up with email
   - Check confirmation email
   - Verify login works
3. **Test Core Features**:
   - Create a task in To-Doist X
   - Start a Pomodoro in StudyVerse
   - Check data persists after refresh
4. **Test on Mobile** (responsive design)

### ✅ Monitor Performance

**Vercel Analytics** (built-in):
- Go to your project → **Analytics**
- Monitor:
  - Page load times
  - Core Web Vitals
  - Visitor traffic

**Supabase Monitoring**:
- Go to Supabase → **Database** → **Monitoring**
- Check:
  - API requests
  - Database connections
  - Storage usage

---

## 🔄 Continuous Deployment

Once connected to GitHub, Vercel will **auto-deploy** on every push:

```bash
# Make changes locally
git add .
git commit -m "Add new feature"
git push

# Vercel automatically deploys! ✨
```

**Preview Deployments**:
- Every branch gets its own preview URL
- Perfect for testing before merging to main

---

## 🐛 Troubleshooting

### Build Fails

**Check build logs in Vercel dashboard:**

Common issues:
- Missing environment variables
- TypeScript errors
- Import path issues

**Solution:**
```bash
# Test build locally first
npm run build

# Fix any errors, then redeploy
vercel --prod
```

### Authentication Not Working

1. Verify environment variables in Vercel
2. Check Supabase Site URL matches deployment URL
3. Verify redirect URLs include `/auth/callback`
4. Clear browser cache and cookies

### Database Connection Errors

1. Check Supabase is in same region (or nearby)
2. Verify RLS policies are active
3. Check API key is correct (anon, not service_role)

---

## 💰 Pricing & Limits

### Vercel Free Tier
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ SSL certificates included
- ✅ Custom domains (1 free)

### Supabase Free Tier
- ✅ 500 MB database
- ✅ 1 GB file storage
- ✅ 50,000 monthly active users
- ✅ 2 GB bandwidth

**Both free tiers are sufficient for development and small-scale production!**

---

## 📈 Scaling Up

### When to Upgrade

**Vercel Pro ($20/mo):**
- Need more bandwidth (>100 GB)
- Team collaboration
- Password protection
- Advanced analytics

**Supabase Pro ($25/mo):**
- Need more database space (>500 MB)
- More API requests
- Daily backups
- Better support

---

## 🎯 Production Best Practices

### Security
- ✅ Never commit `.env.local` to git
- ✅ Use environment variables for secrets
- ✅ Keep dependencies updated (`npm audit`)
- ✅ Enable 2FA on Vercel and Supabase

### Performance
- ✅ Enable Vercel Edge Functions
- ✅ Use Vercel Image Optimization
- ✅ Enable Supabase connection pooling
- ✅ Monitor Core Web Vitals

### Backups
- ✅ Enable daily Supabase backups (Pro plan)
- ✅ Export database regularly
- ✅ Keep git history clean

---

## 🚀 Alternative Deployment Options

### Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Docker + AWS/Azure/GCP
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

---

## 📞 Support

**Vercel Issues:**
- https://vercel.com/support

**Supabase Issues:**
- https://supabase.com/support

**NIRANX OS Issues:**
- Check NIRANX_COMPLETE.md
- Review AUTH_SETUP.md

---

## 🎉 Deployment Complete!

Once deployed, share your NIRANX OS:
- Production URL: `https://niranx-os.vercel.app`
- Custom Domain: `https://niranx.com`

**Your Gen-Z AI productivity ecosystem is now live!** 🌌✨
