import Layout from './layout';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'
export default function About(){
    return (
        <Layout>
        <Head>
            <title>About Pratham Wadhwa | Shopify Developer</title>
        </Head>
        <main>
            <section className="about-banner">
                <div className="container about-wrapper">
                    <div className="about-block" data-aos="fade-up">
                        <h1 className="about-head">Pratham Wadhwa</h1>
                        {/* <p>Creative, enthusiastic, and task-driven professional with 3+
                            years of experience in the field of web design and development
                            across various projects. Experienced in developing custom
                            themes and managing ecommerce stores. I am looking forward
                            to a company that supports learning and growth of its
                            employees.
                            </p> */}
                            <div className="skill-box" data-aos="fade-up">
                                <h2 className="second-head">Educational insights.</h2>
                                <div className="degree">
                                    <span>BCA - Bachelors in Computer Applications</span>
                                    <p>Echelon Institute of Technology affilated from YMCA Haryana.</p><br/>
                                    <span>10 + 2</span>
                                    <p>Rishabh Academy, Meerut</p>
                                </div>
                            </div>
                            <div className="skill-box" data-aos="fade-up">
                                <h2 className="second-head">Companies Served</h2>
                                <ul className="skill-wrapper">
                                   <li>Code Crew</li>
                                   <li>Adaan Digital Solutions</li>
                                   <li>Creative Orion</li>
                                   <li>Lyxel and Flamingo</li>
                                   <li>Mobikasa</li>
                                   <li>Studio Almond</li>
                                </ul>
                            </div>
                    </div>
                    <div className="image-banner-about">
                        <Image src="/images/about.png" alt="about pratham wadhwa" className="about" width={300} height={300}/>
                    </div>
                </div>
            </section>

            <section className="about-us-pr">
                <div className="container">
                    <div className="about-header-rows" data-aos="fade-up">
                        <h1 className="about-pratham">About Me</h1>
                        <p>A Frontend focused Web Developer building the Frontend of Websites that leads to the success of the overall product.</p>
                    </div>
                    <div className="about-context row">
                        <div className="content-box col-lg-6 col-md-12" data-aos="fade-up">
                            <h2 className="second-head">Get to know more</h2>
                            <p>Creative, enthusiastic, and task-driven professional with 4+ years of experience in the field of web design and development across various projects. Experienced in developing custom themes and managing ecommerce stores.</p><br/>
                            <p> I am looking forward to a company that supports learning and growth of its employees as well as provides work life balance...</p>
                            <Link href="/about" className="btn">Know More</Link>
                        </div>
                        <div className="skill-box col-lg-6 col-md-12" data-aos="fade-up">
                            <h2 className="second-head">Skills</h2>
                            <ul className="skill-wrapper">
                            <li>HTML</li>
                               <li>CSS</li> 
                               <li>jquery</li>
                               <li>Javascript</li>
                               <li>AJAX</li>
                               <li>Shopify</li>
                               <li>Shopify 2.0</li>
                               <li>Shopify Plus</li>
                               <li>Metafields / Metaobjects</li>
                               <li>Liquid</li>
                               <li>Photoshop</li>
                               <li>UI/UX</li>
                               <li>ADA</li>
                               <li>SEO</li>
                               <li>CRO</li>
                               <li>Wix</li>
                               <li>Wordpress</li>
                               <li>Web Design</li>
                               <li>Documentation</li>
                               <li>GIT Version Control</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="timeline-era">
                <div className="container timeline-wrapper">
                    <div className="about-header-row" data-aos="fade-up">
                        <h1 className="about-pratham">Professional Timeline</h1>
                        <p>Have a look to my professional timeline and to the awesome companies i have served.</p>
                    </div>
                    <div className="timeline-box">
                        <div className="timeline-left-block timeline-grid" data-aos="fade-up">
                            <div className="company-details">
                                <h3>Studio Almond</h3>
                                <p className="company-des">Ecommerce Agency</p>
                                <span className="duration">Feb-2025 - present</span>
                                <p className="role">Mobikasa is a top rated ecommerce, web and apps development agency. Hire best Shopify, Shopify Plus, Magento / Adobe, WooCommerce, BigCommerce Developers.</p>
                            </div>
                            <div className="company-image almond-studio">
                            <svg xmlns="http://www.w3.org/2000/svg" width="135" height="16" viewBox="0 0 135 16" fill="none">
<path d="M2.39441 10.1546V10.6557C2.39441 11.69 2.5951 12.4488 2.99647 12.9391C3.39785 13.4259 3.97915 13.6693 4.73692 13.6693C5.34244 13.6693 5.81994 13.5011 6.17288 13.1682C6.52581 12.8318 6.70228 12.388 6.70228 11.8368C6.70228 11.2856 6.56041 10.8382 6.28014 10.4946C5.99987 10.151 5.53275 9.80742 4.88571 9.45666L3.57778 8.78021C2.63662 8.27197 1.85117 7.67426 1.22489 6.99065C0.598603 6.30704 0.287191 5.38363 0.287191 4.21683C0.287191 2.87824 0.692026 1.86177 1.5017 1.171C2.30791 0.480231 3.33903 0.133057 4.5916 0.133057C6.05523 0.133057 7.14863 0.52676 7.87526 1.31059C8.59843 2.09799 8.96174 3.16099 8.96174 4.49958V4.91476L6.66076 5.28699V4.71791C6.66076 3.9305 6.48083 3.31489 6.12443 2.86392C5.76804 2.41296 5.24902 2.18747 4.5743 2.18747C4.01029 2.18747 3.55702 2.33422 3.21446 2.62412C2.86845 2.91403 2.6989 3.35784 2.6989 3.95556C2.6989 4.32063 2.77849 4.64275 2.94111 4.9255C3.10374 5.20825 3.31135 5.44805 3.56394 5.63416C3.81653 5.82028 4.1141 6.00639 4.44973 6.17819L5.84416 6.87612C6.87182 7.38435 7.69879 7.99638 8.32508 8.70863C8.95136 9.42087 9.26277 10.3765 9.26277 11.5683C9.26277 12.413 9.07593 13.1575 8.70223 13.8053C8.32854 14.4531 7.8026 14.9578 7.12095 15.3228C6.43931 15.6879 5.62618 15.8669 4.68156 15.8669C3.61238 15.8669 2.73004 15.6521 2.03456 15.2226C1.33907 14.7931 0.823512 14.1883 0.494799 13.4116C0.162626 12.6349 0 11.7115 0 10.6485V10.5411L2.40479 10.1474L2.39441 10.1546Z" fill="#B9D5E6"/>
<path d="M13.8742 2.81225H9.95312V0.439575H20.2998V2.81583H16.3995V15.4582H13.8707V2.81225H13.8742Z" fill="#B9D5E6"/>
<path d="M24.035 15.2749C23.3123 14.8802 22.7582 14.2811 22.3658 13.481C21.9735 12.681 21.7773 11.6728 21.7773 10.4601V0.439575H24.2965V10.5929C24.2965 11.2781 24.3963 11.8307 24.5994 12.2468C24.8024 12.663 25.0743 12.9644 25.4185 13.1545C25.7626 13.3447 26.155 13.438 26.6058 13.438C27.3182 13.438 27.8861 13.2084 28.3059 12.7491C28.7258 12.2899 28.9357 11.5723 28.9357 10.5929V0.439575H31.4343V10.4637C31.4343 12.2576 31.0075 13.6066 30.154 14.5107C29.3005 15.4148 28.1098 15.8669 26.5852 15.8669C25.6043 15.8669 24.7543 15.6695 24.035 15.2749Z" fill="#B9D5E6"/>
<path d="M33.3066 0.439575H37.7117C38.8823 0.439575 39.8714 0.754101 40.686 1.37601C41.5006 2.00148 42.1167 2.87715 42.5343 4.00302C42.9519 5.12888 43.1607 6.44774 43.1607 7.95961C43.1607 9.33924 42.9587 10.5973 42.5548 11.7304C42.151 12.8634 41.528 13.7676 40.686 14.4431C39.844 15.1187 38.7898 15.4582 37.5234 15.4582H33.3066V0.439575ZM39.091 12.5631C39.5771 12.1986 39.9433 11.6303 40.1863 10.8511C40.4293 10.0719 40.5525 9.06761 40.5525 7.83094C40.5525 6.59428 40.4225 5.64713 40.1658 4.90013C39.9091 4.15313 39.536 3.61343 39.05 3.28818C38.5639 2.95936 37.965 2.79852 37.253 2.79852H35.7915V13.11H37.2736C37.9992 13.11 38.6016 12.9277 39.091 12.5631Z" fill="#B9D5E6"/>
<path d="M44.8359 0.439575H47.2994V15.4582H44.8359V0.439575Z" fill="#B9D5E6"/>
<path d="M51.5595 14.9725C50.7498 14.3751 50.1165 13.4878 49.6598 12.3108C49.203 11.1338 48.9746 9.69927 48.9746 8.01069C48.9746 6.32212 49.2064 4.86966 49.6701 3.68908C50.1338 2.50851 50.7705 1.62487 51.5802 1.02743C52.39 0.429988 53.3069 0.133057 54.3347 0.133057C55.3624 0.133057 56.3001 0.429988 57.1099 1.02743C57.9196 1.62487 58.5563 2.51209 59.02 3.68908C59.4836 4.86608 59.7155 6.30781 59.7155 8.01069C59.7155 9.71358 59.4802 11.1303 59.0096 12.3108C58.539 13.4878 57.8988 14.3751 57.0891 14.9725C56.2794 15.5699 55.3555 15.8669 54.3139 15.8669C53.2723 15.8669 52.3692 15.5699 51.5595 14.9725ZM55.7499 12.8761C56.1721 12.4826 56.5008 11.8744 56.7327 11.0551C56.9645 10.2323 57.0822 9.21989 57.0822 8.01069C57.0822 6.8015 56.9645 5.74972 56.7327 4.93405C56.5008 4.11838 56.179 3.51736 55.7707 3.12384C55.3624 2.73032 54.8849 2.53355 54.3347 2.53355C53.7845 2.53355 53.3277 2.73032 52.9194 3.12384C52.5111 3.51736 52.1893 4.12196 51.9574 4.93405C51.7256 5.74972 51.6079 6.77288 51.6079 8.01069C51.6079 9.24851 51.7187 10.2502 51.9436 11.0659C52.1685 11.8815 52.4868 12.4826 52.8952 12.8761C53.3035 13.2696 53.7741 13.4664 54.3104 13.4664C54.8468 13.4664 55.3243 13.2696 55.7465 12.8761H55.7499Z" fill="#B9D5E6"/>
<path d="M68.1498 0.439575H71.2471L75.2844 15.4582H72.5849L71.7273 12.035H67.4809L66.6234 15.4582H64.0508L68.1498 0.439575ZM71.2883 9.81237L69.5938 3.18745L67.9199 9.81237H71.2883Z" fill="#B9D5E6"/>
<path d="M76.6641 0.439575H79.1589V12.9962H84.2517V15.4582H76.6641V0.439575Z" fill="#B9D5E6"/>
<path d="M85.7339 0.439575H90.0133L93.0783 13.0605L92.4075 13.0176L95.4898 0.439575H99.6246V15.4582H97.1685V1.74741L97.4196 1.96538L93.8523 15.4582H91.4168L87.8495 1.72597L88.1006 1.46512V15.4582H85.7305V0.439575H85.7339Z" fill="#B9D5E6"/>
<path d="M103.86 14.9725C103.058 14.3751 102.43 13.4878 101.978 12.3108C101.525 11.1338 101.299 9.69927 101.299 8.01069C101.299 6.32212 101.529 4.86966 101.988 3.68908C102.447 2.50851 103.078 1.62487 103.881 1.02743C104.683 0.429988 105.591 0.133057 106.61 0.133057C107.628 0.133057 108.557 0.429988 109.359 1.02743C110.162 1.62487 110.793 2.51209 111.252 3.68908C111.711 4.86608 111.941 6.30781 111.941 8.01069C111.941 9.71358 111.708 11.1303 111.242 12.3108C110.775 13.4878 110.141 14.3751 109.339 14.9725C108.537 15.5699 107.621 15.8669 106.589 15.8669C105.557 15.8669 104.662 15.5699 103.86 14.9725ZM108.012 12.8761C108.43 12.4826 108.753 11.8744 108.986 11.0551C109.215 10.2323 109.332 9.21989 109.332 8.01069C109.332 6.8015 109.215 5.74972 108.986 4.93405C108.756 4.11838 108.437 3.51736 108.033 3.12384C107.628 2.73032 107.155 2.53355 106.61 2.53355C106.065 2.53355 105.612 2.73032 105.207 3.12384C104.803 3.51736 104.487 4.12196 104.254 4.93405C104.025 5.74972 103.908 6.77288 103.908 8.01069C103.908 9.24851 104.018 10.2502 104.244 11.0659C104.467 11.8815 104.779 12.4826 105.183 12.8761C105.588 13.2696 106.054 13.4664 106.586 13.4664C107.117 13.4664 107.59 13.2696 108.009 12.8761H108.012Z" fill="#B9D5E6"/>
<path d="M113.617 0.439575H117.152L120.939 12.0993V0.439575H123.274V15.4582H119.887L115.952 3.51262V15.4582H113.617V0.439575Z" fill="#B9D5E6"/>
<path d="M125.047 0.526489H129.496C130.678 0.526489 131.677 0.841016 132.5 1.46292C133.323 2.0884 133.945 2.96407 134.367 4.08993C134.789 5.21579 134.999 6.53466 134.999 8.04653C134.999 9.42616 134.795 10.6843 134.388 11.8173C133.98 12.9503 133.35 13.8545 132.5 14.5301C131.65 15.2056 130.585 15.5451 129.306 15.5451H125.047V0.526489ZM130.889 12.6501C131.38 12.2855 131.75 11.7172 131.995 10.938C132.241 10.1589 132.365 9.15452 132.365 7.91786C132.365 6.6812 132.234 5.73404 131.975 4.98704C131.715 4.24004 131.339 3.70035 130.848 3.3751C130.357 3.04627 129.752 2.88544 129.033 2.88544H127.557V13.1969H129.053C129.786 13.1969 130.395 13.0146 130.889 12.6501Z" fill="#B9D5E6"/>
</svg>
                            </div>
                        </div>
                        <div className="timeline-right-block"></div>
                        
                        <div className="timeline-left-block"></div>
                            
                        <div className="timeline-right-block timeline-grid" data-aos="fade-up">
                            <div className="company-details">
                                <h3>Mobikasa</h3>
                                <p className="company-des">Ecommerce Agency</p>
                                <span className="duration">Apr-2023 - present</span>
                                <p className="role">Mobikasa is a top rated ecommerce, web and apps development agency. Hire best Shopify, Shopify Plus, Magento / Adobe, WooCommerce, BigCommerce Developers.</p>
                            </div>
                            <div className="company-image">
                                <Image src="/images/mobikasa.jpg" alt="mobikasa" className="company-image" width={200} height={200}/>
                            </div>
                        </div>

                        <div className="timeline-left-block timeline-grid" data-aos="fade-up">
                            <div className="company-image">
                                <Image src="/images/l&f.png" alt="mobikasa" className="company-image" width={200} height={200}/>
                            </div>
                            <div className="company-details">
                                <h3>Lyxel And Flamingo</h3>
                                <p className="company-des">Digital Marketing Agency</p>
                                <span className="duration">Apr-2022 - Apr-2023</span>
                                <p className="role">A collective of super niche, super specialized agencies that help brands imagine the future of their business and marketing in a digital world. The multi-competence, left brain-right brain approach create powerful solutions for brands in an increasingly disruptive world.</p>
                            </div>
                        </div>
                        <div className="timeline-right-block"></div>

                        <div className="timeline-left-block"></div>
                        <div className="timeline-right-block timeline-grid" data-aos="fade-up">
                            <div className="company-details">
                                <h3>Creative Orion</h3>
                                <p className="company-des">Digital Marketing</p>
                                <span className="duration">Nov-2021 - Mar 2022</span>
                                <p className="role">Creative Orion is the leading graphic design, Website Design & Branding Company in Faridabad, New Delhi and Gurgaon.</p>
                            </div>
                            <div className="company-image">
                                <Image src="/images/creative.svg" alt="mobikasa" className="company-image" width={200} height={200}/>
                            </div>
                        </div>

                        <div className="timeline-left-block timeline-grid" data-aos="fade-up">
                            <div className="company-image">
                                <Image src="/images/adaan.svg" alt="mobikasa" className="company-image" width={200} height={200}/>
                            </div>
                            <div className="company-details">
                                <h3>Adaan Digital Solutions</h3>
                                <p className="company-des">Web Solutions</p>
                                <span className="duration">July-2021 - Oct 2021</span>
                                <p className="role">Cost effective & highly competent website designs, content, development, fulfillment, SMM, & digital marketing services targeted for SMB business.</p>
                            </div>
                        </div>
                        <div className="timeline-right-block"></div>

                        <div className="timeline-left-block"></div>
                        <div className="timeline-right-block timeline-grid" data-aos="fade-up">
                            <div className="company-details">
                                <h3>Code Crew</h3>
                                <p className="company-des">Web Solutions</p>
                                <span className="duration">June-2020 - may 2021</span>
                                <p className="role">Digital Creations & Innovative Solutions. Code Crew is an IT company specializing in professional web design, digital marketing, and custom mobile apps.</p>
                            </div>
                            <div className="company-image">
                                <Image src="/images/cc.jpg" alt="mobikasa" className="company-image" width={200} height={200}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-box">
                                <div className="c-icon"><i className="fas fa-envelope"></i></div>
                                <div className="c-details">
                                    <h4>Email</h4>
                                    <Link href="mailto:prathamwadhwa.business@gmail.com">prathamwadhwa.business@gmail.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-box">
                                <div className="c-icon"><i className="fab fa-linkedin"></i></div>
                                <div className="c-details">
                                    <h4>Linkedin</h4>
                                    <Link href="https://www.linkedin.com/in/pratham-wadhwa16/">pratham-wadhwa16</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </Layout>
    )
}