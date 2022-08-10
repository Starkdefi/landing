import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"
          strategy="beforeInteractive"
        ></Script>

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
