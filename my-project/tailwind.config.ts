import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './node_modules/preline/preline.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('preline/plugin'),],
};
export default config;
