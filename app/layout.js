import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://hopecompassioncenter.com"),
  title: {
    default: "Hope Compassion Center",
    template: "%s | Hope Compassion Center",
  },
  description: "Inspiring Hope Across Generations",
  icons: { icon: "/Logo.svg" },
  openGraph: {
    type: "website",
    siteName: "Hope Compassion Center",
    title: "Hope Compassion Center",
    description: "Inspiring Hope Across Generations",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
