import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

export const { GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  localeMap: {
    // [locale]: Orama options
    fa: { language: "arabic" },
    en: { language: "english" },
  },
});
