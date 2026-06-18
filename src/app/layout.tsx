import type { Metadata } from "next";
import { Golos_Text, IBM_Plex_Sans } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { FontAwesomeSetup } from "@/components/FontAwesomeSetup";
import { YandexMetrika } from "@/components/YandexMetrika";

const golosText = Golos_Text({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ГК Эталон",
  description: "ГК Эталон",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${golosText.variable} ${ibmPlexSans.variable}`}>
        <FontAwesomeSetup />
        <Header />
        {children}
        <Footer />
        <YandexMetrika />
      </body>
    </html>
  );
}
