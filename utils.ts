import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * تابع cn (مخفف className) یک تابع کمکیه که دو کار می‌کنه:
 * 1. چند رشته کلاس CSS رو با هم ترکیب می‌کنه (مثلاً وقتی یک شرط داریم: "اگه فلان بود، این کلاس رو هم اضافه کن")
 * 2. اگه کلاس‌های Tailwind با هم تداخل داشته باشن (مثلاً دو بار padding تعریف بشه)، فقط آخری رو نگه می‌داره
 *
 * این تابع توی تقریباً همه کامپوننت‌های Aceternity UI استفاده میشه، پس همینجا یکبار تعریفش می‌کنیم
 * و در فایل‌های دیگه import می‌کنیم.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
