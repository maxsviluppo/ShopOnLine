# NexusShop

NexusShop is a responsive, Amazon-inspired e-commerce frontend skeleton built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with a layout that scales to large screens.
- **Hero Slider**: Auto-scrolling hero section with gradient overlays.
- **Product Grid**: Floating card layout with distinct information boxes and product listings.
- **Shopping Cart**: Slide-out cart sidebar with a multi-step checkout simulation.
- **Mock Data**: Pre-configured mock products and constants for easy testing.
- **Gemini AI Integration**: Service setup for generating product descriptions (configured in `services/geminiService.ts`).

## Technologies

- React 19
- TypeScript
- Tailwind CSS (via CDN for portability)
- Lucide React (Icons)
- Google GenAI SDK

## Setup

1. Ensure you have a valid API Key for Gemini in your environment variables if you plan to use the AI features.
2. The project uses ES Modules via `esm.sh` and does not require a local build step for the basic preview, but is structured for standard Vite/Webpack pipelines.

## Project Structure

- `components/`: UI components (Navbar, Hero, ProductGrid, etc.)
- `services/`: API integrations (Gemini AI)
- `types/` & `constants/`: Type definitions and mock data.
