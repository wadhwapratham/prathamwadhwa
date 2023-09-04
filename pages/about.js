import Layout from './layout';
import Link from 'next/link';
import Image from 'next/image'
export default function About(){
    return (
        <Layout>

        <main>
            <section className="about-banner">
                <div className="container about-wrapper">
                    <div className="about-block" data-aos="fade-up">
                        <h1 className="about-head">About Me</h1>
                        <p>Creative, enthusiastic, and task-driven professional with 3+
                            years of experience in the field of web design and development
                            across various projects. Experienced in developing custom
                            themes and managing ecommerce stores. I am looking forward
                            to a company that supports learning and growth of its
                            employees.
                            </p>
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
                                </ul>
                            </div>
                    </div>
                    <div className="/image-banner-about">
                        <Image src="/images/about.png" alt="about pratham wadhwa" className="about" width={300} height={300}/>
                    </div>
                </div>
            </section>

            <section className="timeline-era">
                <div className="container timeline-wrapper">
                    <div className="about-header-row" data-aos="fade-up">
                        <h1 className="about-pratham">Professional Timeline</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="timeline-box">
                        <div className="timeline-left-block timeline-grid" data-aos="fade-up">
                            <div className="company-details">
                                <h3>Mobikasa</h3>
                                <p className="company-des">Ecommerce Agency</p>
                                <span className="duration">Apr-2023 - present</span>
                                <p className="role">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus molestias fugiat vel aspernatur, dolorum incidunt mollitia</p>
                            </div>
                            <div className="company-image">
                                <Image src="/images/mobikasa.jpg" alt="mobikasa" className="company-image" width={200} height={200}/>
                            </div>
                        </div>
                        <div className="timeline-right-block"></div>

                        <div className="timeline-left-block"></div>
                        <div className="timeline-right-block timeline-grid" data-aos="fade-up">
                            <div className="company-image">
                                <Image src="/images/l&f.png" alt="mobikasa" className="company-image" width={200} height={200}/>
                            </div>
                            <div className="company-details">
                                <h3>Lyxel And Flamingo</h3>
                                <p className="company-des">Digital Marketing Agency</p>
                                <span className="duration">Apr-2022 - Apr-2023</span>
                                <p className="role">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus molestias fugiat vel aspernatur, dolorum incidunt mollitia</p>
                            </div>
                        </div>

                        <div className="timeline-left-block timeline-grid" data-aos="fade-up">
                            <div className="company-details">
                                <h3>Creative Orion</h3>
                                <p className="company-des">Digital Marketing</p>
                                <span className="duration">Nov-2021 - Mar 2022</span>
                                <p className="role">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus molestias fugiat vel aspernatur, dolorum incidunt mollitia</p>
                            </div>
                            <div className="company-image">
                                <Image src="/images/creative.svg" alt="mobikasa" className="company-image" width={200} height={200}/>
                            </div>
                        </div>
                        <div className="timeline-right-block"></div>

                        <div className="timeline-left-block"></div>
                        <div className="timeline-right-block timeline-grid" data-aos="fade-up">
                            <div className="company-image">
                                <Image src="/images/adaan.svg" alt="mobikasa" className="company-image" width={200} height={200}/>
                            </div>
                            <div className="company-details">
                                <h3>Adaan Digital Solutions</h3>
                                <p className="company-des">Web Solutions</p>
                                <span className="duration">July-2021 - Oct 2021</span>
                                <p className="role">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus molestias fugiat vel aspernatur, dolorum incidunt mollitia</p>
                            </div>
                        </div>

                        <div className="timeline-left-block timeline-grid" data-aos="fade-up">
                            <div className="company-details">
                                <h3>Code Crew</h3>
                                <p className="company-des">Web Solutions</p>
                                <span className="duration">June-2020 - may 2021</span>
                                <p className="role">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus molestias fugiat vel aspernatur, dolorum incidunt mollitia</p>
                            </div>
                            <div className="company-image">
                                <Image src="/images/cc.jpg" alt="mobikasa" className="company-image" width={200} height={200}/>
                            </div>
                        </div>
                        <div className="timeline-right-block"></div>
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
                                    <Link href="mailto:wadhwapratham7@gmail.com">wadhwapratham7@gmail.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-box">
                                <div className="c-icon"><i className="fab fa-linkedin"></i></div>
                                <div className="c-details">
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