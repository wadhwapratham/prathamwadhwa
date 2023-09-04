import Layout from './layout';
import Link from 'next/link';
import Image from 'next/image'
export default function Project(){
    return (
        <Layout>
                <main>
                    <section class="contact-banner">
                        <div class="container">
                            <div class="head-contact">Contact For Queries.</div>
                        </div>
                    </section>
                    <section class="contact-wrapper-page">
                        <div class="container section-boxed-contact">
                            <div class="contact-droppers">
                                <div class="contact-item">
                                    <a href="mailto:wadhwapratham7@gmail.com">
                                        <i class="fas fa-envelope"></i>
                                        <span>wadhwapratham7@gmail.com</span>
                                    </a>
                                </div>
                                <div class="contact-item">
                                    <a href="https://wa.me/9720809052">
                                        <i class="fab fa-whatsapp"></i>
                                        <span>+91 9720809052</span>
                                    </a>
                                </div>
                                <div class="contact-item">
                                    <a href="www.linkedin.com/in/pratham-wadhwa16">
                                        <i class="fab fa-linkedin-in"></i>
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