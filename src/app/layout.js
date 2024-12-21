import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "gradient generator",
  description: "A generator for css of background gradient",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 p-0">{children}</body>
    </html>
  );
}
