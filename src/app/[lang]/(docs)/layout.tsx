import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/lib/layout.shared";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;

  const { nav, ...base } = baseOptions(lang);

  return (
    <DocsLayout
      {...base}
      nav={{ ...nav, mode: "top" }}
      tree={source.pageTree[lang]}
    >
      {children}
    </DocsLayout>
  );
}
