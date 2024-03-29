import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer";
import WelcomeModal from "@/components/Layovers/WelcomeModal";
import { CartProvider } from "@/components/Contexts/CartContext";

export const metadata = {
  title: "MAMIBO",
  description: "A Jewellery Website",
  keywords: ["Fashion", "Outfits", "customized dresses", "Dress", "Gen Z"],
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

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
      <CartProvider>
        <body className={`${montserrat.className} no-scrollbar`}>
          <WelcomeModal />
          <Navbar />
          {children}
          <Footer />
        </body>
      </CartProvider>
    </html>
  );
}
