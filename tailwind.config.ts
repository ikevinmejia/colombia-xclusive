import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/home/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#3AA3EB"
      },
      backgroundImage: {
        "colombiaExperiencieVIPWay": `url('/img/screens/home/home-experience-description.jpg')`,
        "colombiaStartYourXperience": `url('/img/screens/home/colombia-start-your-xperience.jpeg')`,
        "aboutTitle": `url('/img/screens/about/bg-about-title.jpg')`,
        "aboutText": `url('/img/screens/about/bg-about-explanation.jpg')`,
        "gradient": `url('/img/screens/home/gradient.svg')`,
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
