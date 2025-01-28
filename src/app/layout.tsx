import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import NoiseBg from "@/components/NoiseBg/NoiseBg";
import ScrollIndicator from "@/components/ScrollIndicator/ScrollIndicator";
import PlausibleProvider from "next-plausible";
import { Toaster } from "react-hot-toast";

const BebasNeue = Bebas_Neue({
  variable: "--BebasNeue",
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
        className={`${suisse.variable} ${suissReg.variable} ${chromaticCondensedBold.variable} ${MatterMonoMedium.variable} ${BebasNeue.variable} $`}
      >
        <NoiseBg>
          <ScrollIndicator />
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
