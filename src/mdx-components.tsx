import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { APIPage } from "@/components/api-page";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => <ImageZoom {...(props as any)} />,
    APIPage,
    ...components,
  };
}
