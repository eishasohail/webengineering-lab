// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
// //   ],
// //   theme: {
// //     extend: {
// //       colors: {
// //         primary: "#0f172a",
// //         secondary: "#002366",
// //         accent: "#14b8a6",
// //         light: "#f1f5f9",
// //       },
// //     },
// //   },
// //   plugins: [],
// // };
// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//   "./src/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           dark: '#0f172a',
//           navy: '#002366',
//           teal: '#14B8A6',
//           light: '#f1f5f9',
//           white: '#ffffff',
//         },
//       },
//       fontFamily: {
//         sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
//         mono: ['var(--font-geist-mono)', 'monospace'],
//       },
//       animation: {
//         'fade-in': 'fadeIn 0.6s ease-out',
//         'fade-in-up': 'fadeInUp 0.6s ease-out',
//         'slide-in': 'slideIn 0.3s ease-out',
//         'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         fadeInUp: {
//           '0%': {
//             opacity: '0',
//             transform: 'translateY(20px)',
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'translateY(0)',
//           },
//         },
//         slideIn: {
//           '0%': {
//             transform: 'translateX(-100%)',
//           },
//           '100%': {
//             transform: 'translateX(0)',
//           },
//         },
//       },
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media' if you prefer system preference
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2563eb",       // blue-600 – main action color
          foreground: "#ffffff",
          dark: "#1e40af",          // darker blue for hover
          navy: "#0f172a",          // slate-900 – deep headers/sidebar
        },
        secondary: {
          DEFAULT: "#64748b",       // slate-500
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#14b8a6",       // teal-500 – success/compliance green-teal
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out",
        fadeInUp: "fadeInUp 0.6s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // ← add this if not already (npm i tailwindcss-animate)
};