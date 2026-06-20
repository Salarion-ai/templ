"use client"; // این خط یعنی این کامپوننت توی مرورگر کاربر اجرا میشه (نه فقط روی سرور) چون انیمیشن داره

import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string; // اجازه میده از بیرون، کلاس CSS اضافه بهش بدیم (مثلاً برای جابجا کردن موقعیتش)
  fill?: string; // رنگ نور Spotlight رو میشه از بیرون عوض کرد
};

/**
 * این کامپوننت یک نور گرادیانت (هاله نورانی) می‌سازه که:
 * - با یک انیمیشن نرم (تعریف شده توی tailwind.config.ts با اسم "spotlight") ظاهر میشه
 * - معمولاً پشت یک هدر یا بخش معرفی سایت (Hero Section) قرار می‌گیره
 * - چون مطلق (absolute) موقعیت‌دهی شده، باید داخل یک والد با position: relative قرار بگیره
 */
export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        // pointer-events-none یعنی این عنصر جلوی کلیک کردن روی چیزهای زیرش رو نمی‌گیره
        // animate-spotlight همون انیمیشنیه که در tailwind.config.ts تعریف کردیم
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
