import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import NoiseBg from "@/components/NoiseBg/NoiseBg";
// import ScrollIndicator from "@/components/ScrollIndicator/ScrollIndicator";
import PlausibleProvider from "next-plausible";
import { Toaster } from "react-hot-toast";
import Nav from "@/components/Nav/Nav";
import Footerii from "@/components/Footerii/Footerii";
import { ViewTransitions } from "next-view-transitions";

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

const VisbyCF = localFont({
  src: "../../public/fonts/VisbyCF.ttf",
  variable: "--VisbyCF",
  display: "swap",
});

const BoogyBrutPoster = localFont({
  src: "../../public/fonts/BoogyBrutPoster.woff2",
  variable: "--BoogyBrutPoster",
  display: "swap",
});

const nbGroteskProMonoBold = localFont({
  src: "../../public/fonts/nbGroteskProMonoBold.woff2",
  variable: "--nbGroteskProMonoBold",
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
    <ViewTransitions>
      <html lang='en'>
        <head>
          <PlausibleProvider
            domain='fontsandfooters.com'
            trackLocalhost={false}
            enabled={true}
          />
        </head>
        <body
          className={`${suisse.variable} ${suissReg.variable} ${VisbyCF.variable} ${BoogyBrutPoster.variable} ${nbGroteskProMonoBold.variable}`}
        >
          {/* <NoiseBg> */}
          {/* <ScrollIndicator /> */}
          <Toaster
            position='bottom-right'
            toastOptions={{
              className: "toastFont",
            }}
          />
          <Nav />
          {children}
          <Footerii />
          {/* </NoiseBg> */}
        </body>
      </html>
    </ViewTransitions>
  );
}
