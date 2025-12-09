Project: Ridelytics
1. The Stack (The "Golden Kit")
This stack is industry standard, free to start, and scales infinitely.
Framework: Next.js 15 (App Router)
Why: Handles both your static investor pages (marketing) and dynamic dashboard pages (app) in one codebase.
Language: TypeScript
Why: Catches errors before you ship. Essential for "Business Intelligence" reliability.
Styling: Tailwind CSS
Why: Rapid UI development.
UI Library: shadcn/ui
Why: Copy-paste accessible components. You own the code. Professional look out-of-the-box.
Icons: Lucide React
Why: Clean, consistent icons standard in the shadcn ecosystem.
Charts: Recharts (or Tremor)
Why: For your BI and Customer Dashboards.
PWA Plugin: @ducanh2912/next-pwa
Why: Converts your website into an installable tablet app.
2. Architecture Diagrams
Phase 1: Temporary Static Hosting (Current Goal)
Zero cost. Hosting marketing material for investors. Deploys only when you create a Release Tag.

Code snippet


+------------------+       +--------------------+       +-------------------------+
|   Developer      |       |   GitHub Repo      |       |      GitHub Actions     |
| (You Local Machine)|---> | (Source Code)      |       | (CI/CD Pipeline)        |
+------------------+       +--------------------+       +------------+------------+
          |                          |                               |
          | push                     | Detects "Release"             | 1. Install dependencies
          v                          | Tag (e.g., v1.0.0)            | 2. Build Static Export
+------------------+                 |                               | 3. Deploy to gh-pages
|  Release Tag     | <---------------+                               |
|  (v1.0, v1.1)    |                                                 v
+------------------+                                     +-------------------------+
                                                         |  GitHub Pages Hosting   |
                                                         |  (Static HTML/CSS/JS)   |
                                                         +-------------------------+
                                                                     |
                                                                     v
                                                            +------------------+
                                                            |  Investor/Public |
                                                            |  (Browser View)  |
                                                            +------------------+


Phase 2: Long-Term "App" Architecture
Low cost. Handles Auth, Database, and API functions.

Code snippet


                                +-----------------------+
                                |   Cloudflare / Vercel |
                                |   (Edge Network)      |
                                +-----------+-----------+
                                            |
                      +---------------------+---------------------+
                      |                                           |
           +----------v----------+                     +----------v----------+
           |   Frontend (Edge)   |                     |   Backend API       |
           |   (Next.js App)     |                     | (Serverless/Workers)|
           +----------+----------+                     +----------+----------+
                      |                                           |
      +---------------+---------------+                 +---------v----------+
      |               |               |                 |      Database      |
+-----v-----+   +-----v-----+   +-----v-----+           | (Supabase/Postgres)|
| Investor  |   | Tablet PWA|   | Admin DB  |           +--------------------+
| Website   |   | (Ad View) |   | Dashboard |
+-----------+   +-----------+   +-----------+


3. How to Execute Phase 1 (GitHub Pages)
Since Next.js is a server-side framework by default, and GitHub Pages is a static host, you need to configure Next.js to output raw HTML.
Step A: Configure next.config.mjs
Update your config to enable static exports and handle image optimization (which doesn't work standard on GitHub Pages).

JavaScript


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- Crucial: Tells Next.js to generate static HTML
  images: {
    unoptimized: true, // <--- Crucial: GitHub Pages cannot optimize images on the fly
  },
  // If your repo is NOT at the root domain (e.g. username.github.io/repo-name),
  // you often need basePath. If it IS the root user site, skip this.
  // basePath: '/your-repo-name', 
};

export default nextConfig;


Step B: The GitHub Action Workflow
Create a file in your repo: .github/workflows/deploy.yml.
This tells GitHub: "When I publish a Release, build my site and put it on the internet."

YAML


name: Deploy to GitHub Pages

on:
  release:
    types: [published]  # Only runs when you publish a release

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out  # Next.js 'export' outputs to the 'out' folder

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4


4. Route Plan (Page Structure)
When you build the app, structure your folders like this inside /app so you are ready for Phase 2 without rewriting code.
app/(marketing)/page.tsx -> Home Page (The Investor Pitch)
app/(marketing)/about/page.tsx -> Team/Story
app/(portal)/dashboard/page.tsx -> Admin BI Dashboard (Protected later)
app/(portal)/client/page.tsx -> Customer Portal (Protected later)
app/(pwa)/display/page.tsx -> Tablet Ad Runner (Optimized for full screen)

