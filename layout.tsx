import type { Metadata } from "next";
import "./globals.css";

// این اطلاعات توی تب مرورگر و نتایج گوگل نمایش داده میشه
export const metadata: Metadata = {
  title: "پروژه Aceternity UI",
  description: "ساخته شده با Next.js و Tailwind CSS",
};

// این کامپوننت، چارچوب اصلی همه صفحات سایته.
// هر چیزی که اینجا بنویسیم (مثلاً یک هدر یا فوتر ثابت) توی همه صفحات نمایش داده میشه.
export default function RootLayout({
  children, // children یعنی محتوای هر صفحه‌ای که داخل این چارچوب قرار می‌گیره
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
