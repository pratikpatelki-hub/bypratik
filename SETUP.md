# ByPratik Website (GitHub Pages + Simple CMS)

This project keeps your original UI and adds a simple content workflow:

- Edit landing page text from `_data/home.yml`
- Edit global branding/settings from `_data/site.yml`
- Publish blogs from `_posts/*.md`
- Manage all of the above from a visual admin using [Pages CMS](https://pagescms.org/)

## 1) Push to GitHub

Run from this folder:

```powershell
cd C:\Users\prati\Downloads\bypratik-site\Bypratik.co.in
git init
git add .
git commit -m "Initial website with editable content and blog CMS"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```

## 2) Enable GitHub Pages

1. Open repository `Settings -> Pages`.
2. Under `Build and deployment`, choose `Deploy from a branch`.
3. Select `main` branch and `/ (root)`.
4. Save.

After a few minutes, your site will be live on:

`https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/`

If this is a user site repo named `<YOUR_USERNAME>.github.io`, it will be:

`https://<YOUR_USERNAME>.github.io/`

## 3) Connect your GoDaddy domain

In repository root, keep/update `CNAME` with your domain (example `bypratik.co.in`).

In GoDaddy DNS:

- `A` records for root (`@`) to GitHub Pages IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- `CNAME` for `www` to `<YOUR_USERNAME>.github.io`

Then in GitHub Pages settings, set `Custom domain` and enable HTTPS.

## 4) Non-technical editing (recommended)

Use [Pages CMS](https://app.pagescms.org/):

1. Sign in with your GitHub account.
2. Install/authorize Pages CMS for your repository.
3. Open the repo in Pages CMS.
4. Use:
   - `Landing Page Content` to edit homepage content
   - `Blog Posts` to add/edit blog posts
   - `Global Site Settings` for branding/footer/SEO basics
5. Save and publish. Pages CMS commits to GitHub automatically, and GitHub Pages redeploys.

## Content Map

- Home/Landing content: `_data/home.yml`
- Site-wide settings: `_data/site.yml`
- Blog posts: `_posts/`
- Blog listing page: `blogs.html`
- Blog article layout: `_layouts/post.html`
- CMS config: `.pages.yml`
