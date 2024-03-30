import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer";
import WelcomeModal from "@/components/Layovers/WelcomeModal";
import { CartProvider } from "@/components/Contexts/CartContext";
import { Toaster } from "@/components/ui/sonner";
import HolyLoader from "holy-loader";

export const metadata = {
  title: "MAMIBO",
  description: "A Fashion Website",
  keywords: ["Fashion", "Outfits", "Customized Dresses", "Dress", "Gen Z"],
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
        <HolyLoader color="#fb5987" />
        <body className={`${montserrat.className} no-scrollbar`}>
          <WelcomeModal />
          <Navbar />
          {children}
          <Footer />
          <Toaster richColors />
        </body>
      </CartProvider>
    </html>
  );
}
