import Layout from './layout';
import Link from 'next/link';
import Image from 'next/image'
export default function Project(){
    return (
        <Layout>
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
                                    <a href="mailto:wadhwapratham7@gmail.com">
                                        <i className="fas fa-envelope"></i>
                                        <span>wadhwapratham7@gmail.com</span>
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <a href="https://wa.me/9720809052">
                                        <i className="fab fa-whatsapp"></i>
                                        <span>+91 9720809052</span>
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <a href="www.linkedin.com/in/pratham-wadhwa16">
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