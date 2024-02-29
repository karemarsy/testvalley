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
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <title></title>
        </Head>
      <main>
        
        
        <Component {...pageProps} />
        <Footer />
      </main>
    </div>
  );
}

export default MyApp;
