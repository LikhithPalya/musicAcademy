import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";  
import { flattenColorPalette } from "tailwindcss/defaultTheme";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: '1', 
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      moveHorizontal: {
        "0%": {
          transform: "translateX(-50%) translateY(-10%)",
        },
        "50%": {
          transform: "translateX(50%) translateY(10%)",
        },
        "100%": {
          transform: "translateX(-50%) translateY(-10%)",
        },
      },
      moveInCircle: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "50%": {
          transform: "rotate(180deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      moveVertical: {
        "0%": {
          transform: "translateY(-50%)",
        },
        "50%": {
          transform: "translateY(50%)",
        },
        "100%": {
          transform: "translateY(-50%)",
        },
      },
    },
  },
  scroll: {
    to: {
      transform: "translate(calc(-50% - 0.5rem))",
    },
  },
  plugins: [addVariablesForColors,],
} satisfies Config;


function addVariablesForColors({ addBase, theme }: any) {
  const allColors = theme("colors");
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  const flattenedColors = Object.fromEntries(
    Object.entries(allColors).flatMap(([color, value]) =>
      typeof value === "object"
        ? Object.entries(value).map(([shade, shadeValue]) => [`${color}-${shade}`, shadeValue])
        : [[color, value]]
    )
  );

  addBase({
    ":root": Object.fromEntries(
      Object.entries(flattenedColors).map(([key, val]) => [`--${key}`, val])
    ),

  });
  // addBase({
  //   ":root": newVars,
  // });
}
