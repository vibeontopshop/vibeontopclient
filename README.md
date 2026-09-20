# VibeOnTop Ecommerce (`vibeontop Client`)

A modern, high-performance web application buit with **Next.js 15**,**React 18**, and **Tailwind css*.

---

## Tech stack & Dependencies

* **Framework:** [Next.js 15](https://next.org/) (App Router)
* **Core Library:** React 18 & React DOM 18
* **Styling:**[Tailwind CSS](https://tailwindcss.com/) with postCSS
* **3d & Canvas Graphics:**[Three.js](https://threejs.org/)& `troika-three-text`
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **carousels & sliders:** [Swiper](https://swiperjs.com/)
* **Http client:** [Axios](https://axios-http.com/)
* **Icon Sets:**`lucide-react` & `react-icons`

---

## quick start

### prerequisites
Ensure you have **Node.js** (`>=18.x`) installed on yur system.

### Installation
1. **Clone the Repo:**
```bash
git clone <repository-url>
cd vibeontopclient
```
2. **Install project dependencies:**
```bash
npm install
```
3. **Configure Environment Veriables:**
create a `.env` file in the root directory:

4. **Start the local development server:**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Script 

In the Project directory,you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with Next.js HMR. |
| `npm run build` | Builds the optimized application for production. |
| `npm run start` | Starts the production build server locally. |
| `npm run lint` | Runs ESLint to check for code standard violations. |

---
##  Project Structure

```text
vibecartclient/
├── .next/                         # Next.js build output directory
├── node_modules/                  # Installed npm dependencies
├── public/                        # Static assets (images, fonts, media)
├── src/
│   ├── app/                       # Next.js App Router root directory
│   │   ├── AboutUs/               # About Us page module
│   │   ├── AdminPanel/            # Administrative portal & controls
│   │   ├── Cart/                  # Shopping cart views & checkout flows
│   │   ├── ContactUs/             # Contact page module
│   │   ├── Dashboard/             # User management dashboard
│   │   ├── enterotp/              # Two-factor / OTP verification page
│   │   ├── Mainpage/              # Main homepage sections & hero views
│   │   ├── Privacy/               # Privacy policy page
│   │   ├── productPage/           # B2C Consumer product catalog page
│   │   ├── productPageBusiness/   # B2B Business product page
│   │   ├── Shipping/              # Order shipping details & status page
│   │   ├── signin/                # Authentication - Sign In page
│   │   ├── signup/                # Authentication - Registration page
│   │   ├── Tools/                 # Utilities & helper tooling views
│   │   ├── viewpage/              # Detailed product viewer page
│   │   ├── favicon.ico            # Main application favicon
│   │   ├── globals.css            # Global CSS styles & Tailwind directives
│   │   ├── layout.js              # Root application layout
│   │   └── page.js                # Root landing page entry point
│   └── SVGs/                      # Reusable inline SVG components & icons
|   |__assets                      # All the required Images
├── .gitignore                     # Git ignored files & patterns
├── jsconfig.json                  # JavaScript path aliases & options
├── next.config.js                 # Next.js project configuration
├── package-lock.json              # Dependency lockfile
├── package.json                   # Project dependencies and script scripts
├── postcss.config.js              # PostCSS build configuration
└── tailwind.config.js             # Tailwind CSS design system configuration
```

---
##  License

Private & Proprietary. All rights reserved by Vibe On Top.