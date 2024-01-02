import { Inter } from "next/font/google";
import { Delius } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });
const delius = Delius({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Hope Compassion Center",
  description: "Inspiring Hope Across Generations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/Logo.svg" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
