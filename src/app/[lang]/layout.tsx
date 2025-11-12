import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { i18n } from "@/lib/i18n";
import { defineI18nUI } from "fumadocs-ui/i18n";

const { provider } = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: "English",
    },
    fa: {
      displayName: "فارسی",
      search: "جستجو",
      chooseLanguage: "زبان خود را انتخاب کنید",
      chooseTheme: "انتخاب تم",
      lastUpdate: "آخرین به روز رسانی",
      previousPage: "صفحه قبلی",
      nextPage: "صفحه بعدی",
      searchNoResult: "نتیجه ای یافت نشد",
      toc: "مطالب این صفحه",
      tocNoHeadings: "مطلبی یافت نشد",
      editOnGithub: "ویرایش در گیتهاب",
    },
  },
});

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang;
  const dir = lang === "en" ? "ltr" : "rtl";

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider i18n={provider(lang)} dir={dir}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
