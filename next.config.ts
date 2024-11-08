import { type NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeUnwrapImages from "rehype-unwrap-images";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/a/z5ojczxc66/**",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeUnwrapImages],
  },
});

export default withMDX(nextConfig);
