import type { Config } from "tailwindcss";

const config: Config = {
  // این خط به Tailwind می‌گه کدوم فایل‌ها رو برای پیدا کردن کلاس‌های CSS بررسی کنه
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // انیمیشن‌های سفارشی که برای جلوه‌های متحرک (مثل تولید تدریجی متن) لازمه
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
