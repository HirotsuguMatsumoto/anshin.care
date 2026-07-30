import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-noto-sans-jp",
  display: "swap"
});

export const metadata: Metadata = {
  title: "anshin.care | Anshin service overview",
  description:
    "Anshin の小規模事業者向け業務基盤、介護ロボット・介護テクノロジー、脆弱性診断を紹介するサービス概要サイトです。",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
