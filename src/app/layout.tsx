import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import "keen-slider/keen-slider.min.css";

const geistSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "EntreLinhasJS",
  description:
    "EntreLinhas - Serviços de costura personalizada, ajustes e reformas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={geistSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
