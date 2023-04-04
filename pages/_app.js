import "../styles/globals.css";
import Head from "next/head";
import React from "react";

function StarkApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@StarkDefi" />
        <meta name="twitter:creator" content="@idd_iraaj" />
        <meta name="twitter:title" content="Introducing StarkDefi" />
        <meta name="twitter:url" content="https://www.starkdefi.com" />
        <meta
          name="twitter:description"
          content="StarkDeFi is a hub for defi solutions on Starknet. We aim to facilitate and simplify the onboarding process for all level of DEFI users with a hub that accommodates a variety of DEFI solutions. "
        />
        <meta
          name="twitter:image"
          content="https://www.starkdefi.com/assets/og-image.jpg"
        />
        <meta
          name="description"
          content="StarkDeFi is a hub for defi solutions on Starknet, looking to bring blockchain to the masses. Learn more about our solution."
          key="desc"
        />
        <meta property="og:title" content="Introducing StarkDefi" />
        <meta
          property="og:description"
          content="StarkDeFi is a hub for defi solutions on Starknet. We aim to facilitate and simplify the onboarding process for all level of DEFI users with a hub that accommodates a variety of DEFI solutions. "
        />
        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <title>Welcome | StarkDefi</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo32.png" />
        <link rel="manifest" href="/manifest.json"></link>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default StarkApp;
