import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  weight: '400',
  subsets: ["latin"],
});

export const metadata = {
  title: "Journo - Your Digital Journal",
  description: "Journal Platform to reflect on yourself",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased`}
      >
        <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-10 inset-0"/>
        {/* Header */}
        
        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}
