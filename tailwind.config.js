/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          midnight: "#081426",
          ocean: "#102B50",
          electric: "#3478F6",
          cyan: "#45E6F5",
          white: "#F4F8FF",
          steel: "#9CB1CD",
          violet: "#9275FF",
          darkNavy: "#040B15",
          cardBg: "rgba(16, 43, 80, 0.65)",
          cardBorder: "rgba(69, 230, 245, 0.15)",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px rgba(69, 230, 245, 0.35)',
        'glow-blue': '0 0 25px rgba(52, 120, 246, 0.4)',
        'glow-violet': '0 0 25px rgba(146, 117, 255, 0.35)',
        'curtain-edge': 'inset 0 0 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(69, 230, 245, 0.2)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'curtain-left': 'curtainLeft 2.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'curtain-right': 'curtainRight 2.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'shield-glow': 'shieldGlow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shieldGlow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(69,230,245,0.4))' },
          '100%': { filter: 'drop-shadow(0 0 30px rgba(52,120,246,0.8))' },
        }
      }
    },
  },
  plugins: [],
}
