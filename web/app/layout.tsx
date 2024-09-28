import { type Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./styles.css";

const fontFlex = Roboto_Flex({
  axes: ["opsz"],
  subsets: ["latin"],
  variable: "--font-flex",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Kampung Bahasa",
    default: "Kampung Bahasa",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  return (
    <html lang="en-ID" className={fontFlex.variable}>
      <body>{props.children}</body>
    </html>
  );
}
