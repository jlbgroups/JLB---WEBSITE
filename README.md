# SHNOOR International LLC — Corporate Website

> A modern, redesigned corporate website for SHNOOR International LLC — a company bridging IT services and global trade across India, UAE, Bahrain, Qatar, Oman & Malaysia.

---

## 1. Project Overview

### What It Does
This is the official corporate website for **SHNOOR International LLC**, built as a complete redesign of [shnoor.com](https://www.shnoor.com). It presents the company's services, industries, career opportunities, and contact information in a modern, premium web experience.

### Problem It Solves
The original shnoor.com was built on a basic website builder (Zyrosite) with limited design flexibility, no animations, and poor UX. This project replaces it with a custom-built React application that:
- Delivers a premium first impression with smooth animations
- Makes all 9 service offerings easy to discover and navigate
- Reflects the company's dual identity — IT company + global trade firm
- Is fully maintainable by developers (not a drag-and-drop builder)

### Key Features
- **9 Service Pages** — Cloud, Enterprise/SAP, Data & AI, Consulting & Staffing, Background Verification, Network Management, Healthcare IT, Logistics, Export Management
- **Hash-based tab navigation** — clicking a service from the navbar opens its tab directly on the Services page
- **Interactive Global Reach map** — animated pulse pins showing all 6 markets
- **Scroll animations** — Framer Motion on all sections (fade, slide, stagger)
- **Fully responsive** — mobile menu, responsive grids, touch-friendly
- **Contact form with EmailJS** — sends real emails directly to `info@shnoor.com` without a backend
- **Recruitment scam warning** — real content from shnoor.com to protect job seekers

---

## 2. Architecture

### System Design
This is a **frontend-only, single-page application (SPA)**. There is no custom backend or database. Emails from the contact form are sent using **EmailJS** — a third-party service that sends emails directly from the browser.

```
Browser
  └── React SPA (Vite)
        ├── React Router DOM  →  Client-side routing between pages
        ├── Framer Motion     →  Scroll & mount animations
        ├── TailwindCSS v4    →  All styling via utility classes
        ├── Lucide React      →  Icons throughout the UI
        └── EmailJS           →  Contact form → sends email to info@shnoor.com
```

### How Components Interact

```
App.tsx
  ├── BrowserRouter
  │     ├── ScrollToTop (resets scroll on route change)
  │     ├── Navbar (fixed, always visible)
  │     ├── <Routes> (page components swap here)
  │     │     ├── HomePage
  │     │     ├── ServicesPage  ← reads URL hash to set active tab
  │     │     ├── AboutPage
  │     │     ├── IndustriesPage
  │     │     ├── CareersPage
  │     │     ├── ContactPage   ← sends email via EmailJS
  │     │     └── NotFoundPage
  │     └── Footer (always visible)
```

- **Navbar → ServicesPage:** Clicking a service link (e.g. `/services#cloud`) causes ServicesPage to read the hash via `useLocation` and activate the correct tab
- **Button component:** Renders as a `<Link>` (React Router) when given an `href`, otherwise renders as a `<button>` — no duplication needed
- **All pages share** the same `Navbar` and `Footer` — they never re-mount

---

## 3. Tech Stack

| Category | Technology | Version |
|---|---|---|
| UI Framework | React | 19 |
| Language | TypeScript | ~6.0 |
| Build Tool | Vite | 8 |
| Styling | TailwindCSS | v4 |
| Animations | Framer Motion | 12 |
| Routing | React Router DOM | v7 |
| Icons | Lucide React | 1.8 |
| Email Service | EmailJS | 4.x |
| Fonts | Google Fonts (Inter + Poppins) | — |
| Package Manager | npm | — |

---

## 4. Folder Structure

```
Shnoor-Clone/
├── README.md                        ← You are here
└── shnoor-app/                      ← Vite project root
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── .env                         ← EmailJS keys (not committed to git)
    ├── public/
    │   ├── shnoor-logo.jfif         ← Company logo (used in Navbar & Footer)
    │   ├── favicon.svg
    │   ├── about_team.png           ← Available for About page
    │   └── hero_logistics.png       ← Available for hero sections
    └── src/
        ├── main.tsx                 ← React entry point
        ├── App.tsx                  ← Router setup + ScrollToTop utility
        ├── index.css                ← ⭐ Design system (colors, fonts, utilities)
        ├── utils/
        │   └── animations.ts        ← ⭐ All Framer Motion animation variants
        ├── components/
        │   ├── Navbar.tsx           ← Fixed header with services dropdown
        │   ├── Footer.tsx           ← 4-column footer
        │   ├── Button.tsx           ← Reusable button/link component
        │   ├── SectionHeader.tsx    ← Reusable section title block
        │   └── ServiceCard.tsx      ← Card used in homepage services grid
        └── pages/
            ├── HomePage.tsx         ← Hero, stats, services grid, map, testimonial
            ├── ServicesPage.tsx     ← Tabbed interface with hash navigation
            ├── AboutPage.tsx        ← Mission, vision, why choose us
            ├── IndustriesPage.tsx   ← 6 industry verticals
            ├── CareersPage.tsx      ← Open roles + scam warning
            ├── ContactPage.tsx      ← Contact form powered by EmailJS
            └── NotFoundPage.tsx     ← 404
```

**Key files to know:**
- `src/index.css` — All design tokens (colors, fonts) live here. This is the TailwindCSS v4 config (not `tailwind.config.js`)
- `src/utils/animations.ts` — Import animation variants from here, never define them inline in pages
- `src/App.tsx` — Add new routes here
- `.env` — EmailJS credentials, must be created locally (see section 6)

---

## 5. Setup & Installation

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher
- An EmailJS account at [emailjs.com](https://www.emailjs.com)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/RuneRogue/Shnoor-Clone.git

# 2. Navigate to the app folder
cd Shnoor-Clone/shnoor-app

# 3. Install all dependencies
npm install

# 4. Create the .env file and add your EmailJS credentials (see section 6)
cp .env.example .env   # or create .env manually

# 5. Start the development server
npm run dev
# → Opens at http://localhost:5173
```

### Other Commands

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Build for production
npm run build
# → Output goes to shnoor-app/dist/

# Preview the production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## 6. Environment Variables

Create a `.env` file in `shnoor-app/` with the following variables. These are required for the contact form to actually send emails.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### How to get these values

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Go to **Email Services** → Add a new service (Gmail, Outlook, etc.) → copy the **Service ID**
3. Go to **Email Templates** → Create a template → copy the **Template ID**
   - Template variables used: `{{from_name}}`, `{{from_email}}`, `{{company}}`, `{{phone}}`, `{{inquiry_type}}`, `{{message}}`
4. Go to **Account** → **Public Key** → copy it

| Variable | Purpose |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | Identifies which email service (Gmail, Outlook etc.) to send from |
| `VITE_EMAILJS_TEMPLATE_ID` | Identifies the email template to use when formatting the message |
| `VITE_EMAILJS_PUBLIC_KEY` | Authenticates your EmailJS account from the browser |

> ⚠️ Never commit `.env` to git. It is already listed in `.gitignore`.

---

## 7. Application Flow

### Page Load Flow
1. User visits any URL (e.g. `/services#cloud`)
2. Vite serves `index.html` → React mounts → `BrowserRouter` reads the URL
3. `ScrollToTop` resets scroll position to top
4. `Navbar` renders (fixed, always on top)
5. The matching `<Route>` renders its page component
6. `Footer` renders at the bottom
7. Framer Motion animates sections as they enter the viewport

### Services Hash Navigation Flow
1. User hovers over **Services** in the Navbar → dropdown appears (120ms delay prevents accidental close)
2. User clicks e.g. **"Data & Artificial Intelligence"**
3. React Router navigates to `/services#ai`
4. `ServicesPage` reads `location.hash` via `useEffect`
5. Maps `"ai"` → tab index `2` using `HASH_TO_INDEX`
6. `setActiveTab(2)` activates the AI tab
7. Page smoothly scrolls to the `#service-tabs` section

### Contact Form Flow (with EmailJS)
1. User fills in the form — First Name, Email, and Message are required
2. On submit, client-side validation runs first
3. If validation fails → red error messages appear under the relevant fields
4. If validation passes → `emailjs.send()` is called with the form data
5. EmailJS sends the email to `info@shnoor.com` using the configured template
6. On success → success screen is shown with a confirmation message
7. On failure → an error message is displayed and the user can try again

### Mobile Navigation Flow
1. On screens `< lg` (1024px), the desktop nav hides
2. Hamburger icon appears → click toggles the full-screen slide-down mobile menu
3. `document.body.overflow = 'hidden'` prevents background scroll while menu is open
4. Clicking any link closes the menu and navigates

---

## 8. EmailJS Integration

### Install EmailJS

```bash
npm install @emailjs/browser
```

### Usage in ContactPage.tsx

```tsx
import emailjs from '@emailjs/browser'

// Inside the handleSubmit function, replace the setTimeout simulation with:
try {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name:    `${form.firstName} ${form.lastName}`,
      from_email:   form.email,
      company:      form.company,
      phone:        form.phone,
      inquiry_type: form.inquiryType,
      message:      form.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  setSubmitted(true)
} catch (error) {
  console.error('EmailJS error:', error)
  // Show error message to user
}
```

### EmailJS Template Setup

In your EmailJS dashboard, create a template with this structure:

```
Subject: New Enquiry from {{from_name}} — {{inquiry_type}}

Name:         {{from_name}}
Email:        {{from_email}}
Company:      {{company}}
Phone:        {{phone}}
Enquiry Type: {{inquiry_type}}

Message:
{{message}}
```

Set the **To Email** to `info@shnoor.com` in the template settings.

---

## 9. Testing

### Manual Testing Checklist
- [ ] All 7 routes load without errors (`/`, `/services`, `/about`, `/industries`, `/careers`, `/contact`, any unknown route)
- [ ] Services dropdown opens on hover and all items are clickable
- [ ] Each Navbar service link activates the correct tab on `/services`
- [ ] Contact form shows validation errors on empty submit
- [ ] Contact form successfully sends email via EmailJS and shows success screen
- [ ] Mobile menu opens/closes correctly on screens below 1024px
- [ ] All pages are responsive at 375px, 768px, and 1280px widths
- [ ] No TypeScript errors: `npx tsc --noEmit`

---

## 10. Contribution Guide

### Getting Started
1. Fork the repository on GitHub
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/Shnoor-Clone.git`
3. Follow the [Setup & Installation](#5-setup--installation) steps
4. Create a feature branch (see below)

### Branching Strategy

```
main              ← production-ready code only
├── feature/xxx   ← new features
├── fix/xxx       ← bug fixes
└── content/xxx   ← text/image content updates
```

**Examples:**
```bash
git checkout -b feature/blog-page
git checkout -b fix/mobile-menu-overlap
git checkout -b content/update-careers-listings
```

### Commit Message Format

```
type: short description

# Examples:
feat: add blog page with card grid
fix: prevent navbar dropdown from closing on hover gap
content: update careers page job listings
style: improve mobile contact form spacing
docs: add EmailJS integration guide to README
```

### Pull Request Guidelines
1. Keep PRs **small and focused** — one feature or fix per PR
2. Test on mobile (375px) and desktop (1280px) before submitting
3. Run `npx tsc --noEmit` — zero errors required
4. Write a clear PR description explaining **what** changed and **why**
5. Reference any related issue in the description (e.g. `Closes #12`)

### Code Style Rules
- Use **functional components only** — no class components
- Import animation variants from `utils/animations.ts` — don't define inline
- Use **design tokens** for colors — never hardcode hex values in TSX
- All page `<main>` elements must have `pt-[68px]` for the fixed navbar offset
- All scroll-anchor targets need `scroll-mt-[68px]`

---

## 11. Quick Start Guide

For a new developer who just wants to get running in 5 minutes:

```bash
# Clone & install
git clone https://github.com/RuneRogue/Shnoor-Clone.git
cd Shnoor-Clone/shnoor-app
npm install

# Add your EmailJS credentials
echo "VITE_EMAILJS_SERVICE_ID=your_id" >> .env
echo "VITE_EMAILJS_TEMPLATE_ID=your_template" >> .env
echo "VITE_EMAILJS_PUBLIC_KEY=your_key" >> .env

npm run dev
# → http://localhost:5173
```

**3 things to know immediately:**

1. **Design tokens are in `src/index.css`** — Use `text-forest`, `bg-accent`, `bg-cream` etc. Never hardcode `#2C3E2D`.

2. **Animations are in `src/utils/animations.ts`** — Import `fadeUp`, `slideInLeft` etc. Always add `viewport={{ once: true }}` on scroll-triggered elements.

3. **Services tab navigation uses URL hashes** — The link `/services#cloud` automatically activates the Cloud tab. To add a new service, update `ServicesPage.tsx`, `Navbar.tsx`, and `Footer.tsx`.

**Contact info to keep accurate:**
- General: `info@shnoor.com`
- Sales: `proc@shnoor.com`
- Partnerships: `partners@shnoor.com`
- Address: 10009 Mount Tabor Road, Odessa Missouri, United States
- Hours: Monday–Friday 10:00–19:00

---

*Documentation written for SHNOOR International LLC corporate website — April 2026*
