import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import './globals.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub Users",
  description: "Github users, search and display github users",
  keywords: [
    "github users",
    "NextJs example app",
    "functional components, nextJs",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
