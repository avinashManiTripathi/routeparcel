import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8",
      },
    },
  },
  plugins: [],
};

export default config;
