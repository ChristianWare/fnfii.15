import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NoiseBg from "@/components/NoiseBg/NoiseBg";
import Nav from "@/components/Nav/Nav";
import ScrollIndicator from "@/components/ScrollIndicator/ScrollIndicator";
// import Footerii from "@/components/Footerii/Footerii";
// import CallToAction from "@/components/CallToAction/CallToAction";

const suisse = localFont({
  src: "../../public/fonts/SuisseIntl-Medium.ttf",
  variable: "--suisse",
  display: "swap",
});

const suissReg = localFont({
  src: "../../public/fonts/SuisseRegular.ttf",
  variable: "--suisseReg",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fonts & Footers",
  description: "E-commerce Web Design and Developement Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${suisse.variable} ${suissReg.variable}`}>
        <NoiseBg>
          <ScrollIndicator />
          <Nav />
          {children}
          {/* <CallToAction /> */}
          {/* <Footerii /> */}
        </NoiseBg>
      </body>
    </html>
  );
}
