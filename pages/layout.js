import Script from 'next/script'
import Link from 'next/link'
import Head from 'next/head';
import Header from '@/components/header'
import Footer from '@/components/footer'
export default function Layout({ children }) {
    
    return <>
        <Header/>
        {children}
        <Footer/>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Y1LG7ZKLF7"></Script>
        <Script id="ga4">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Y1LG7ZKLF7');
        `}
        </Script>
    </>
}