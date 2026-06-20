import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// متنی که قراره با انیمیشن نمایش داده بشه - این رو می‌تونید به دلخواه عوض کنید
const heroText = "خوش آمدید به پروژه‌ای که با Aceternity UI ساخته شده است";

export default function Home() {
  return (
    // h-screen یعنی این بخش دقیقاً به اندازه ارتفاع صفحه نمایش باشه
    // relative چون Spotlight به صورت absolute داخلش قرار می‌گیره
    // overflow-hidden یعنی اگه Spotlight از مرز این بخش بیرون زد، بریده بشه
    // flex + items-center + justify-center یعنی محتوا رو دقیقاً وسط صفحه قرار بده
    <main className="relative flex h-screen w-full overflow-hidden bg-black items-center justify-center">
      {/* کامپوننت نور پس‌زمینه - رنگش رو می‌تونید با fill عوض کنید */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* محتوای اصلی وسط صفحه */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          پروژه من
        </h1>

        {/* همون متنی که کلمه به کلمه با انیمیشن ظاهر میشه */}
        <TextGenerateEffect
          words={heroText}
          className="text-lg md:text-2xl text-neutral-300"
        />
      </div>
    </main>
  );
}
