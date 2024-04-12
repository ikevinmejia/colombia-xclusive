import Navbar from "@/components/Core/NavBar/Navbar";
import Providers from "@/components/Providers/Providers";
import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";


const poppins = Poppins({weight: ['200', '500', "800"], style: 'normal', subsets: ['latin']});

export const metadata: Metadata = {
  title: "ColombiaXclusive | #1 VIP Concierge | Luxury Travel",
  description: "ColombiaXclusive is Colombia's #1 VIP travel & concierge company! Book luxury mansions, yachts, & experiences! Instagram @thecolombiaxclusive",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
        <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
