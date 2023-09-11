
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

export default function Document() {
    return (
      <Html lang='en'>
        <Head >
            <link rel="icon" type="image/x-icon" href="/images/fav.webp"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
            <link rel="stylesheet" media="all" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
            <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet"/>
            <title>Pratham Wadhwa | Shopify Developer</title>
            <meta name="description" content="As a passionate and experienced Shopify developer, I specialize in crafting seamless e-commerce solutions that elevate online businesses. Explore my portfolio to discover a collection of innovative and visually stunning Shopify stores that I've had the privilege to create and work on." />
            <meta name = "keywords" content = "shopify developer,shopify website designer,shopify experts,shopify dev,shopify theme developer,creating a shopify store,shopify freelancer,freelance shopify developer,shopify experts near me." />  
        </Head>
        <body>
            <Main />
            <NextScript />
            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"/>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin=''/>
            <Script src="/scripts/script.js" />
        </body>
      </Html>
    );
  }