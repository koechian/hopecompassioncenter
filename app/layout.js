import { Inter } from "next/font/google";
import { Delius } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/header";

const inter = Inter({ subsets: ["latin"] });
const delius = Delius({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Hope Compassion Center",
  description: "Inspiring Hope Across Generations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
