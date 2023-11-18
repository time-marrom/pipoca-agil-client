import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        title: ["var(--font-title)"]
      },
      colors: {
        primary: {
          light: "#FFBA4C",
          base: "#FF9C00",
          dark: "#CA7B00"
        },
        secondary: {
          light: "#9243C0",
          base: "#7401B7",
          dark: "#4C0178"
        },
        grayscale: {
          black: "#252525",
          darker: "#3A3A3A",
          darkest: "#727272"
        },
        white: {
          base: "#F6F6F6",
          light: "#DEDEDE",
          lighter: "#C3C3C3"
        },
        status: {
          warning: "#FFF500",
          success: "#04C500",
          error: "#E70000"
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}
export default config
