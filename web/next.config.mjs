import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeUnwrapImages from "rehype-unwrap-images";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeUnwrapImages],
  },
});

export default withMDX(nextConfig);
