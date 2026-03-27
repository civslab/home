# Deployment Guide

## Recommended Structure

For this site, the cleanest setup is:

- `GitHub` for source control
- `Vercel` for hosting and preview deployments

This is a static Vite site, so you do **not** need Supabase unless you later want:

- a contact form with database storage
- authentication
- a CMS-style admin panel
- dynamic researcher profiles or publications stored in a database

For the current site, Vercel is the simplest and most professional option.

## Recommended Repo Options

### Option A: Recommended Clean Public Repo

Create a dedicated public repository for the website and include:

- the full contents of `Website/`
- `generate_publications.py`
- `Exported Items.bib`
- `PUBLICATIONS_AUTOMATION.md`

The publication script now supports both layouts:

- current project layout where the app is inside `Website/`
- clean repo layout where the app itself is the repo root

### Option B: Keep the Current Project Layout

If you keep the current full project as the repo root, deploy with Vercel and set:

- **Root Directory**: `Website`

This works fine, but the repository will also include old export folders and design references.

## Best Recommendation

If this will be the professor's public site, I recommend:

1. Create a dedicated GitHub repo for the site
2. Make the Vite app the main codebase
3. Deploy to Vercel
4. Add the final custom domain later

That gives you:

- a cleaner public repo
- easier maintenance
- automatic preview links for every update
- simple rollback if something breaks

## Step-by-Step: GitHub + Vercel

### 1. Prepare the Website Folder

Make sure these commands work locally:

```powershell
npm install
python generate_publications.py
npm run build
```

If your repo root is the current project root, run them from the correct places:

```powershell
cd Website
npm install
cd ..
python generate_publications.py
cd Website
npm run build
```

### 2. Create the GitHub Repository

Create a new GitHub repository, for example:

- `civs-lab-site`

### 3. Push the Code

If you are using the current project root:

```powershell
git init
git add .
git commit -m "Initial CIVS Lab website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/civs-lab-site.git
git push -u origin main
```

### 4. Import the Repo into Vercel

1. Log in to Vercel
2. Click `Add New...` -> `Project`
3. Import your GitHub repository

### 5. Set the Vercel Project Settings

If your repo root is the current project root:

- **Framework Preset**: `Vite`
- **Root Directory**: `Website`

If your repo is already website-only:

- **Framework Preset**: `Vite`
- **Root Directory**: leave default

### 6. Build Settings

Vercel usually detects these automatically for Vite:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### 7. Deploy

Click `Deploy`.

Vercel will give you a live URL such as:

- `https://civs-lab-site.vercel.app`

### 8. Add a Custom Domain

After the first successful deploy:

1. Open the Vercel project
2. Go to `Settings` -> `Domains`
3. Add your real domain
4. Update DNS records where your domain is registered

### 9. Future Updates

For normal content or design updates:

```powershell
python generate_publications.py
cd Website
npm run build
git add .
git commit -m "Update site"
git push
```

Vercel will automatically redeploy after each push.

## Publishing Checklist

Before launch, I recommend verifying:

- all final portraits are in place
- `alishan.png` is added
- contact email and phone are correct
- publications data regenerates correctly
- mobile navigation works on phone
- the live Vercel URL looks correct
- the custom domain is connected

## Why Not Supabase Right Now?

Supabase is excellent, but for this site it would add complexity without giving you a clear benefit yet.

Use Supabase later if you want:

- an editable publications dashboard
- a member management admin panel
- database-backed news and announcements
- form submissions stored online

For the current version, static hosting is the right choice.
