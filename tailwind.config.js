/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3586ff", // Main brand color from original site
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"], // For headings
        body: ["Raleway", "sans-serif"], // For body text
        sans: ["Inter", "system-ui", "sans-serif"], // Default
      },
      animation: {
        wave: "wave 4s linear infinite",
        "wave-reverse": "wave-reverse 4s linear infinite",
        "wave-slow": "wave-slow 3s linear infinite",
        float: "float 3s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        wave: {
          "0%": { backgroundPositionX: "1000px" },
          "100%": { backgroundPositionX: "0px" },
        },
        "wave-reverse": {
          "0%": { backgroundPositionX: "0px" },
          "100%": { backgroundPositionX: "1000px" },
        },
        "wave-slow": {
          "0%": { backgroundPositionX: "1000px" },
          "100%": { backgroundPositionX: "0px" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/frame5.png')",
        "wave-pattern": "url('/wave.png')",
      },
      backgroundSize: {
        wave: "1000px 100px",
      },
    },
  },
  plugins: [],
};
