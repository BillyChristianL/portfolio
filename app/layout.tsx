import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Ovo } from "next/font/google";

const outfit = Outfit({
  weight:["400","600","500","700"],
  subsets: ["latin"],
});

const ovo = Ovo({
  weight:["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Billy Christian Lugito | Automation Engineering Portfolio",
  description:
    "Portfolio of Billy Christian Lugito, an Automation Engineering master's student at RWTH Aachen focused on robotics, industrial software, machine learning, and manufacturing automation.",
  keywords: [
    "Billy Christian Lugito",
    "Automation Engineering",
    "RWTH Aachen",
    "Robotics",
    "Machine Learning",
    "Industrial Software",
    "Manufacturing Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
