import Layout from './layout';
import Link from 'next/link';
import Image from 'next/image'
export default function About(){
    return (
        <Layout>

        <main>
            <section class="about-banner">
                <div class="container about-wrapper">
                    <div class="about-block" data-aos="fade-up">
                        <h1 class="about-head">About Me</h1>
                        <p>Creative, enthusiastic, and task-driven professional with 3+
                            years of experience in the field of web design and development
                            across various projects. Experienced in developing custom
                            themes and managing ecommerce stores. I am looking forward
                            to a company that supports learning and growth of its
                            employees.
                            </p>
                            <div class="skill-box" data-aos="fade-up">
                                <h2 class="second-head">Educational insights.</h2>
                                <div class="degree">
                                    <span>BCA - Bachelors in Computer Applications</span>
                                    <p>Echelon Institute of Technology affilated from YMCA Haryana.</p><br/>
                                    <span>10 + 2</span>
                                    <p>Rishabh Academy, Meerut</p>
                                </div>
                            </div>
                            <div class="skill-box" data-aos="fade-up">
                                <h2 class="second-head">Companies Served</h2>
                                <ul class="skill-wrapper">
                                   <li>Code Crew</li>
                                   <li>Adaan Digital Solutions</li>
                                   <li>Creative Orion</li>
                                   <li>Lyxel and Flamingo</li>
                                   <li>Mobikasa</li>
                                </ul>
                            </div>
                    </div>
                    <div class="/image-banner-about">
                        <Image src="/images/about.png" alt="about pratham wadhwa" class="about" width={300} height={300}/>
                    </div>
                </div>
            </section>

            <section class="timeline-era">
                <div class="container timeline-wrapper">
                    <div class="about-header-row" data-aos="fade-up">
                        <h1 class="about-pratham">Professional Timeline</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div class="timeline-box">
                        <div class="timeline-left-block timeline-grid" data-aos="fade-up">
                            <div class="company-details">
                                <h3>Mobikasa</h3>
                                <p class="company-des">Ecommerce Agency</p>
                                <span class="duration">Apr-2023 - present</span>
                                <p class="role">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus molestias fugiat vel aspernatur, dolorum incidunt mollitia</p>
                            </div>
                            <div class="company-image">
                                <Image src="/images/mobikasa.jpg" alt="mobikasa" class="company-image" width={200} height={200}/>
                            </div>
                        </div>
                        <div class="timeline-right-block"></div>

                        <div class="timeline-left-block"></div>
                        <div class="timeline-right-block timeline-grid" data-aos="fade-up">
                            <div class="company-image">
                                <Image src="/images/l&f.png" alt="mobikasa" class="company-image" width={200} height={200}/>
                            </div>
                            <div class="company-details">
                                <h3>Lyxel And Flamingo</h3>
                                <p class="company-des">Digital Marketing Agency</p>
                                <span class="duration">Apr-2022 - Apr-2023</span>
                                <p class="role">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus molestias fugiat vel aspernatur, dolorum incidunt mollitia</p>
                            </div>
                        </div>

                        <div class="timeline-left-block timeline-grid" data-aos="fade-up">
                            <div class="company-details">
                                <h3>Creative Orion</h3>
                                <p class="company-des">Digital Marketing</p>
                                <span class="duration">Nov-2021 - Mar 2022</span>
                                <p class="role">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus molestias fugiat vel aspernatur, dolorum incidunt mollitia</p>
                            </div>
                            <div class="company-image">
                                <Image src="/images/creative.svg" alt="mobikasa" class="company-image" width={200} height={200}/>
                            </div>
                        </div>
                        <div class="timeline-right-block"></div>

                        <div class="timeline-left-block"></div>
                        <div class="timeline-right-block timeline-grid" data-aos="fade-up">
                            <div class="company-image">
                                <Image src="/images/adaan.svg" alt="mobikasa" class="company-image" width={200} height={200}/>
                            </div>
                            <div class="company-details">
                                <h3>Adaan Digital Solutions</h3>
                                <p class="company-des">Web Solutions</p>
                                <span class="duration">July-2021 - Oct 2021</span>
                                <p class="role">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus molestias fugiat vel aspernatur, dolorum incidunt mollitia</p>
                            </div>
                        </div>

                        <div class="timeline-left-block timeline-grid" data-aos="fade-up">
                            <div class="company-details">
                                <h3>Code Crew</h3>
                                <p class="company-des">Web Solutions</p>
                                <span class="duration">June-2020 - may 2021</span>
                                <p class="role">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus molestias fugiat vel aspernatur, dolorum incidunt mollitia</p>
                            </div>
                            <div class="company-image">
                                <Image src="/images/cc.jpg" alt="mobikasa" class="company-image" width={200} height={200}/>
                            </div>
                        </div>
                        <div class="timeline-right-block"></div>
                    </div>
                </div>
            </section>

            <section class="contact-details">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="contact-box">
                                <div class="c-icon"><i class="fas fa-envelope"></i></div>
                                <div class="c-details">
                                    <h4>Email</h4>
                                    <Link href="mailto:wadhwapratham7@gmail.com">wadhwapratham7@gmail.com</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="contact-box">
                                <div class="c-icon"><i class="fab fa-linkedin"></i></div>
                                <div class="c-details">
                                    <h4>Linkedin</h4>
                                    <Link href="www.linkedin.com/in/pratham-wadhwa16">pratham-wadhwa16</Link>
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