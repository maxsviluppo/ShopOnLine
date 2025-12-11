# NexusShop

NexusShop is a responsive, Amazon-inspired e-commerce frontend skeleton built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with a layout that scales to large screens.
- **Hero Slider**: Auto-scrolling hero section with gradient overlays.
- **Product Grid**: Floating card layout with distinct information boxes and product listings.
- **Shopping Cart**: Slide-out cart sidebar with a multi-step checkout simulation.
- **Gemini AI Integration**: Service setup for generating product descriptions.

## Technologies

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React
- Google GenAI SDK

## Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production (Vercel)**:
   ```bash
   npm run build
   ```

## Environment Variables

To use the AI features, create a `.env` file in the root directory:

```
VITE_API_KEY=your_google_gemini_api_key
```

Note: In Vite, environment variables should be prefixed with `VITE_` to be exposed to the client, or accessed via process.env if using a specific plugin configuration, but usually `import.meta.env.VITE_API_KEY` is the standard.

## Project Structure

- `components/`: UI components (Navbar, Hero, ProductGrid, etc.)
- `services/`: API integrations (Gemini AI)
- `types/` & `constants/`: Type definitions and mock data.
