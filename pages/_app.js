import "../styles/globals.css";
import Head from "next/head";
import React from "react";

function StarkApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome | StarkDefi</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="StarkDeFi is a hub for defi solutions on StarkNet, looking to bring blockchain to the masses. Learn more about our solution."
          key="desc"
        />
        <meta property="og:title" content="Introducing StarkDefi" />
        <meta
          property="og:description"
          content="StarkDeFi is a hub for defi solutions on StarkNet. We aim to facilitate and simplify the onboarding process for all level of DEFI users with a hub that accommodates a variety of DEFI solutions. "
        />
        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="/assets/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@StarkDefi" />
        <meta name="twitter:creator" content="@idd_iraaj" />
        <meta name="twitter:title" content="Introducing StarkDefi" />
        <meta
          name="twitter:description"
          content="StarkDeFi is a hub for defi solutions on StarkNet. We aim to facilitate and simplify the onboarding process for all level of DEFI users with a hub that accommodates a variety of DEFI solutions. "
        />
        <meta name="twitter:image" content="https://drive.google.com/file/d/1fZbl0_YajqlzLRfozZ6BaQzUs2KZkDb7/view?usp=sharing" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default StarkApp;
