import { Inter as MainFont } from "next/font/google";
import { mainMetadata } from "@/configs/seo";

import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

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
    <html lang="en">
      <body
        className={cn(
          mainFont.className,
          "flex min-h-screen flex-col overflow-x-hidden",
          "bg-slate-100 text-primary"
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
