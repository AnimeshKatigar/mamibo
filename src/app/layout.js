import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MAMIBO",
  description: "A Jewellery Website",
  keywords: ["Fashion", "Outfits", "customized dresses", "Dress", "Gen Z"],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="no-scrollbar">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
