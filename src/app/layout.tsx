import type { Metadata } from "next";
import 'styles/globals.css';
import Navbar from "components/Navbar/Navbar";
import Endcard from "components/Endcard/Endcard";

export const metadata: Metadata = {
  title: "Adam Raway's Portfolio",
  description: "A website used to display all of my projects, accomplishments, and blog posts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main>
          {children}
        </main>
        <Endcard></Endcard>
      </body>
    </html>
  );
}