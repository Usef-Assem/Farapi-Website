import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Farapi",
  description: "We are a team of young Egyptian entrepreneurs aiming to become the next tech giant in the MENA region and globally. Established in 2023, our goal is to be a hub for Egypt's top tech talents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
