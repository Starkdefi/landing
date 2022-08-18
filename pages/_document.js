import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
// import SplashScreen from "../components/splashscreen";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        {/* <SplashScreen /> */}
        <Main />
        <NextScript />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LNH0V18K4F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LNH0V18K4F');
        `}
        </Script>
      </body>
    </Html>
  );
}
