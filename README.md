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

## Features

- **IPO List Page (`/ipo-list`)**
  - Grid of IPO cards (6 mock IPOs: OYO, Go Air, Bajaj Energy, Zomato, Paytm, LIC)
  - Search by company name or symbol
  - Filters:
    - Date: All / Upcoming / Ongoing / Closed
    - Lots: All / `< 5` / `5–10` / `> 10`
  - Card details:
    - Issue period, issue size, price range
    - Number of lots, min investment, shares per lot
  - Clickable cards navigate to IPO details
  - Hover animations and equal-height cards with aligned “Min invest / Shares / lots” section

- **IPO Details Page (`/ipo-details/:id`)**
  - Dynamic routing by IPO id (e.g. `/ipo-details/oyo`)
  - Header:
    - Back button, breadcrumb (“Home / Market watch”)
    - Company logo chip with symbol color
    - Title like “OYO IPO details”
    - Company name and primary CTA: **Apply now**
    - Download PDF button (mocked via `console.log`)
  - **IPO details card**:
    - Issue size, price range, minimum amount, lot size
    - Issue dates, listed on, listed price
    - Listing gains, with only the percentage part styled in red
  - **IPO timeline** card:
    - Horizontal desktop layout with a single green connector line
    - Filled green circles with white check icon for each step
    - Vertical stacked timeline on mobile
  - **About the company**:
    - 3–4 lorem ipsum paragraphs, justified text
  - Error handling:
    - Graceful 404-style state when IPO id is invalid
    - Loading spinner while details are “fetched”

- **Responsiveness**
  - Mobile-first breakpoints using Tailwind (`sm`, `md`, `lg`, `xl`)
  - 1-col cards on mobile, 2-col on tablet, 3-col on desktop
  - IPO details page stacks correctly on small screens with no horizontal scroll

- **State Management**
  - React Context (`useIPOData`) for global IPO data, filters, and theme
  - Local state and hooks for loading, routing, and UI behavior

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

## Notes

- All styles are implemented with Tailwind utility classes; there are no custom CSS files beyond Tailwind setup.
- Data is static and lives in `src/data/ipoData.js` to keep the app self-contained and easy to run for review.
- Console logs are used to mock actions like PDF download and Apply Now, as per the assignment requirements.
