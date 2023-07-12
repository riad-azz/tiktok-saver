import { Inter as MainFont } from "next/font/google";
import { mainMetadata } from "@/configs/seo";

import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const mainFont = MainFont({
  weight: ["400", "500", "600", "700", "800"],
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
      <body className="min-h-screen text-white flex flex-col overflow-x-hidden pt-12">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
