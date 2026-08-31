import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Chakradhar — Data Engineer · Data Scientist · Software Developer · Forward Deployed ML
        </title>
        <meta
          name="description"
          content="Portfolio of Chakradhar: scalable data pipelines, ML systems, and agentic AI platforms on GCP and AWS across healthcare, banking, and semiconductor domains."
        />
      </Head>

      <a href="#main" className="skip-link">Skip to content</a>

      {/* Full-page photo background + scrim (cross-fading layers) */}
      <div className="bg-photo bg-a" aria-hidden="true"></div>
      <div className="bg-photo bg-b" aria-hidden="true"></div>
      <div className="bg-scrim" aria-hidden="true"></div>

      {/* Global fixed background FX */}
      <div className="scan-sweep" aria-hidden="true"></div>
      <div className="corner-marks" aria-hidden="true">
        <span className="tl"></span>
        <span className="tr"></span>
        <span className="bl"></span>
        <span className="br"></span>
      </div>

      <Component {...pageProps} />
    </>
  );
}
