
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";


const MyApp = ({ Component, pageProps }) => {

    useEffect(() => {
        require("@/styles/styles.css");
        //require("@/scripts/script.js");
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
      }, []);
    return (
      <>
        <Head>
          <title>Pratham Wadhwa | Shopify Developer</title>
        </Head>
        <Component {...pageProps} />
      </>
      
    )
  } 
  export default MyApp
   