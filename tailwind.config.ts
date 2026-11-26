import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { brand: "#2563EB", navy: "#0B1B3A" }, fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] } } },
  plugins: [],
};
export default config;
