import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "br-primary": "var(--color-primary)",
        "br-primary-dark": "var(--color-primary-dark)",
        "br-primary-soft": "var(--color-primary-soft)",
        "br-secondary": "var(--color-secondary)",
        "br-bg": "var(--color-bg)",
        "br-surface": "var(--color-surface)",
        "br-surface-strong": "var(--color-surface-strong)",
        "br-card": "var(--color-card)",
        "br-text": "var(--color-text)",
        "br-muted": "var(--color-muted)",
        "br-border": "var(--color-border)",
        
        // Retaining absolute values in case components hardcoded them
        "br-blue": "#3B86FE",
        "br-navy": "#001F51",
        "br-orange": "#FB5707",
        "br-green": "#1BC67F",
        "br-soft-blue": "#F0F5FF",
        "br-soft-green": "#E8F9F2",
        "br-soft-orange": "#FFF0E8",
        "br-soft-gold": "#FFF8D8",
      },
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
        serif: ["var(--font-libre)", "Georgia", "serif"],
      },
      fontSize: {
        "display": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "h1": ["3.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h2": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "h3": ["1.75rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      boxShadow: {
        "soft": "0 20px 40px -10px rgba(0, 31, 81, 0.05)",
        "card": "0 10px 30px -5px rgba(0, 31, 81, 0.08)",
      },
      borderRadius: {
        "pill": "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
