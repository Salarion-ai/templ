"use client"; // چون از انیمیشن و useEffect استفاده می‌کنه، باید در مرورگر کاربر اجرا بشه

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

type TextGenerateEffectProps = {
  words: string; // متنی که می‌خوایم نمایش بدیم
  className?: string;
};

/**
 * این کامپوننت یک جمله رو می‌گیره و کلمه به کلمه، با تأخیر کوتاه بین هر کلمه،
 * با انیمیشن محو شدن (fade in) و کمی حرکت از پایین به بالا نمایش می‌ده.
 * مناسب برای جمله‌های تیتر یا معرفی (Hero) که می‌خوایم توجه کاربر رو جلب کنه.
 */
export const TextGenerateEffect = ({
  words,
  className,
}: TextGenerateEffectProps) => {
  // useAnimate یک ابزار از framer-motion هست که بهمون اجازه میده
  // مستقیماً به یک تکه از صفحه (scope) دسترسی داشته باشیم و روش انیمیشن اجرا کنیم
  const [scope, animate] = useAnimate();

  // متن رو بر اساس فاصله (space) به آرایه‌ای از کلمات تبدیل می‌کنیم
  const wordsArray = words.split(" ");

  useEffect(() => {
    // به تمام تگ‌های span داخل scope (که هر کدوم یک کلمه هستن) انیمیشن میدیم
    animate(
      "span",
      {
        opacity: 1, // از نامرئی به کامل دیده شدن
      },
      {
        duration: 2,
        delay: stagger(0.2), // stagger یعنی هر کلمه با 0.2 ثانیه فاصله از کلمه قبلی شروع به انیمیشن بشه
      }
    );
  }, [animate]); // وقتی کامپوننت برای اولین بار لود بشه، این انیمیشن اجرا میشه

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="text-white opacity-0" // در ابتدا نامرئیه، انیمیشن بالا اون رو نمایان می‌کنه
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
