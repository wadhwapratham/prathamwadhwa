import Layout from './layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
export default function Project(){
    return (
        <Layout>
            <Head>
                <title>Contact Pratham Wadhwa | Shopify Developer</title>
            </Head> 
                <main>
                    <section className="contact-banner">
                        <div className="container">
                            <div className="head-contact">Contact For Queries.</div>
                        </div>
                    </section>
                    <section className="contact-wrapper-page">
                        <div className="container section-boxed-contact">
                            <div className="contact-droppers">
                                <div className="contact-item">
                                    <a href="mailto:prathamwadhwa.business@gmail.com">
                                        <i className="fas fa-envelope"></i>
                                        <span>prathamwadhwa.business@gmail.com</span>
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <a href="https://calendly.com/prathamwadhwa-business/30min">
                                        <i className="far fa-calendar-alt"></i>
                                        <span>Schedule Meeting (Consultation Starts From 500Rs)</span>
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <a href="https://www.linkedin.com/in/pratham-wadhwa16/">
                                        <i className="fab fa-linkedin-in"></i>
                                        <span>pratham-wadhwa16</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>            
        </Layout>
    )
}