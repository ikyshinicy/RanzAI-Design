import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ranzai: {
          dark: "#070A12",
          blue: "#08A8F5",
          lime: "#B8FF00"
        }
      }
    }
  },
  plugins: []
};

export default config;
