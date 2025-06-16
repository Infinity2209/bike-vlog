# My Web Application

A modern web application built with Next.js and React, featuring smooth animations, responsive design, and interactive form handling. This project leverages powerful libraries such as framer-motion for animations, react-hook-form with zod for form validation, and Tailwind CSS for styling.

---

## Table of Contents

- [My Web Application](#my-web-application)
  - [Table of Contents](#table-of-contents)
  - [Project Description](#project-description)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [Key Features](#key-features)
  - [License](#license)

---

## Project Description

This web application is designed to provide an engaging user experience through animated components and well-structured content sections. It includes multiple feature-rich sections such as bike showcases, environment highlights, testimonials, FAQs, and pathways for artists and investors. The app is built with scalability and maintainability in mind using Next.js's app directory structure and React components.

---

## Tech Stack

- **Framework:** Next.js 15.3.3  
- **Language:** TypeScript & React 19.0.0  
- **Styling:** Tailwind CSS 4  
- **Animations:** framer-motion 10.18.0  
- **Form Handling:** react-hook-form 7.58.0 with zod 3.25.64 for schema validation  
- **Linting:** ESLint with Next.js config  

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://your-repository-url.git
   cd web-application
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## Running the Application

To start the development server with hot reloading and Turbopack:

```bash
npm run dev
```

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

To run the linter:

```bash
npm run lint
```

---

## Project Structure

- `src/app/` - Main application directory containing pages and components  
- `src/app/page.tsx` - Entry point for the home page, assembling multiple content sections  
- `src/app/components/` - Reusable React components for different sections such as Navbar, BikeSection, FeatureSection, FAQSection, FooterSection, and more  
- `src/app/hooks/` - Custom React hooks (e.g., `useScrollAnimation`)  
- `public/` - Static assets including images, icons, and logos  
- Configuration files for Next.js, Tailwind CSS, ESLint, and TypeScript at the root  

---

## Key Features

- **Animated UI:** Smooth animations powered by framer-motion for engaging user interactions  
- **Responsive Design:** Built with Tailwind CSS to ensure the app looks great on all devices  
- **Form Validation:** Robust form handling using react-hook-form and zod for schema validation  
- **Modular Components:** Well-structured React components for easy maintenance and scalability  
- **SEO Friendly:** Metadata and structured data included for better search engine indexing  

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---