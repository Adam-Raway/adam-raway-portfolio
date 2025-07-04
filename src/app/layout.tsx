import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adam Raway's Portfolio",
  description: "A website used to display all of my projects, accomplishments, and blog posts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}