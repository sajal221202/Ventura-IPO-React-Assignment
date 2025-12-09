# Ventura IPO – React Assignment

A responsive, production-ready IPO listing and IPO details UI built for the Ventura Securities ReactJS assignment.  
The app closely follows the provided PDF designs for both desktop and mobile, using a modern React + Vite + TailwindCSS stack.

---

## Tech Stack

- **Framework**: React 18 + Vite
- **Routing**: React Router v6
- **Styling**: TailwindCSS 3 (utility-first, no custom CSS files except `index.css`)
- **Fonts**: `@fontsource/sora` (Sora font used globally)
- **Icons**: `lucide-react`
- **Helpers**: `clsx`, `tailwind-merge`
- **Linting**: ESLint (React + hooks rules)

---

## Project Structure

src/
  App.jsx
  main.jsx
  index.css

  data/
    ipoData.js          # Mock IPO data and timeline

  hooks/
    useIPOData.js       # Context provider + custom hook

  components/
    Button.jsx
    IPOCard.jsx
    IPOStatsGrid.jsx
    Timeline.jsx
    NavBar.jsx
    LoadingSpinner.jsx

  pages/
    IPOList.jsx         # /ipo-list
    IPODetails.jsx      # /ipo-details/:id
    NotFound.jsx        # 404 fallback---

## Getting Started

### 1. Install dependencies

npm install### 2. Run the development server

npm run devThen open the printed local URL (usually `http://localhost:5173`) in your browser.

### 3. Build for production

npm run build### 4. Preview the production build

npm run preview---

## Scripts

- `npm run dev` – Start Vite dev server
- `npm run build` – Build optimized production bundle
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint checks on the `src` directory

---
