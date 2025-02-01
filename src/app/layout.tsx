import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bebas_Neue, Inter_Tight } from "next/font/google";
import "./globals.css";
import NoiseBg from "@/components/NoiseBg/NoiseBg";
// import ScrollIndicator from "@/components/ScrollIndicator/ScrollIndicator";
import PlausibleProvider from "next-plausible";
import { Toaster } from "react-hot-toast";

const BebasNeue = Bebas_Neue({
  variable: "--BebasNeue",
  weight: ["400"],
  subsets: ["latin"],
});

const InterTight = Inter_Tight({
  variable: "--InterTight",
  weight: ["400"],
  subsets: ["latin"],
});

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

const chromaticCondensedBold = localFont({
  src: "../../public/fonts/chromaticCondensedBold.woff2",
  variable: "--chromaticCondensedBold",
  display: "swap",
});

const MatterMonoMedium = localFont({
  src: "../../public/fonts/MatterMonoMedium.woff2",
  variable: "--MatterMonoMedium",
  display: "swap",
});

const tuskerGrotesk = localFont({
  src: "../../public/fonts/tuskerGrotesk.ttf",
  variable: "--tuskerGrotesk",
  display: "swap",
});

const StratosSemibold = localFont({
  src: "../../public/fonts/StratosSemibold.otf",
  variable: "--StratosSemibold",
  display: "swap",
});

const HelveticaNowDisplay = localFont({
  src: "../../public/fonts/HelveticaNowDisplay.woff2",
  variable: "--HelveticaNowDisplay",
  display: "swap",
});

const PPPangaia = localFont({
  src: "../../public/fonts/PPPangaia.woff2",
  variable: "--PPPangaia",
  display: "swap",
});

const GrotzecCondBold = localFont({
  src: "../../public/fonts/GrotzecCondBold.woff2",
  variable: "--GrotzecCondBold",
  display: "swap",
});

const InterDisplayMedium = localFont({
  src: "../../public/fonts/InterDisplayMedium.ttf",
  variable: "--InterDisplayMedium",
  display: "swap",
});

const GilroySemiBold = localFont({
  src: "../../public/fonts/GilroySemiBold.woff2",
  variable: "--GilroySemiBold",
  display: "swap",
});

const FTCalhernCondensedSemibold = localFont({
  src: "../../public/fonts/FTCalhernCondensedSemibold.woff2",
  variable: "--FTCalhernCondensedSemibold",
  display: "swap",
});

const VisbyCF = localFont({
  src: "../../public/fonts/VisbyCF.ttf",
  variable: "--VisbyCF",
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
      <head>
        <PlausibleProvider
          domain='fontsandfooters.com'
          trackLocalhost={false}
          enabled={true}
        />
      </head>
      <body
        className={`${suisse.variable} ${suissReg.variable} ${chromaticCondensedBold.variable} ${MatterMonoMedium.variable} ${BebasNeue.variable} ${tuskerGrotesk.variable} ${StratosSemibold.variable} ${HelveticaNowDisplay.variable} ${PPPangaia.variable}  ${GrotzecCondBold.variable} ${InterTight.variable} ${InterDisplayMedium.variable} ${GilroySemiBold.variable} ${FTCalhernCondensedSemibold.variable} ${VisbyCF.variable}`}
      >
        <NoiseBg>
          {/* <ScrollIndicator /> */}
          <Toaster
            position='bottom-right'
            toastOptions={{
              className: "toastFont",
            }}
          />
          {children}
        </NoiseBg>
      </body>
    </html>
  );
}
