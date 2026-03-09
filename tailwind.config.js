/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./index.js"],
    theme: {
      extend: {
        colors: {
          renegade: {
            black: "#050505",
            soft: "#0d0d0d",
            card: "#111111",
            line: "rgba(255,255,255,0.10)",
            text: "rgba(255,255,255,0.72)",
            muted: "rgba(255,255,255,0.45)",
            accent: "#d6c3a1",
            accentSoft: "#b89b6b",
          },
        },
        fontFamily: {
          sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        },
        boxShadow: {
          soft: "0 10px 30px rgba(0,0,0,0.25)",
          card: "0 20px 60px rgba(0,0,0,0.35)",
        },
        borderRadius: {
          xl2: "1.5rem",
          xl3: "2rem",
        },
        backgroundImage: {
          "hero-law":
            "linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,.78))",
          "panel-dark":
            "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.00) 100%)",
        },
        letterSpacing: {
          widerx: "0.35em",
          widery: "0.45em",
        },
        maxWidth: {
          "8xl": "90rem",
        },
      },
    },
    plugins: [],
  };