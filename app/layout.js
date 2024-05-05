import { Kodchasan } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Quickbooks",
  description: "Transform your finances with quickbooks cloud hosting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kodchasan.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
