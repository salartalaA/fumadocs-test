import { i18n } from "@/lib/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon, HomeIcon, TestTubeIcon } from "lucide-react";

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: "My App",
    },
    links: [
      {
        icon: <BookIcon />,
        text: "Blog",
        url: "/blog",
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
      {
        icon: <TestTubeIcon />,
        text: "Test",
        url: "/test",
        // secondary items will be displayed differently on navbar
        secondary: true,
      },
    ],
  };
}
