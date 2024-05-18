import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "e-Bazary",

  description: "an web site of e-commerces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
