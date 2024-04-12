import Providers from "@/components/Providers/Providers";
import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";


const poppins = Poppins({weight: ['200', '500', "800"], style: 'normal', subsets: ['latin']});

export const metadata: Metadata = {
  title: "Colombia XClusive",
  description: "Texto para mejor pocisionamiento CEO",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
