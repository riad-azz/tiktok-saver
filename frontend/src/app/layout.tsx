import { Inter as MainFont } from "next/font/google";
import { mainMetadata } from "@/configs/seo";

import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const mainFont = MainFont({
  subsets: ["latin"],
});

export const metadata = mainMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mainFont.className}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-slate-100 text-primary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
