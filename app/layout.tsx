import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact Organizer",
  description: "Created by an accomplished developer || Rofi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smoth">
      <body className={`${inter.className} ${inter.className} antialiased bg-slate-100`}>
        {children}
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
      </body>
    </html>
  );
}
