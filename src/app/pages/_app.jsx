import "../styles/global.css";
import Head from "next/head";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="site-wrapper">
      <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="android-chrome" sizes="192x192" href="/android-chrome-192x192.png" /> 
          <link rel="android-chrome" sizes="180x180" href="/android-chrome-512x512.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <title></title>
        </Head>
      <main>
        
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </div>
  );
}

export default MyApp;
