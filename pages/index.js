import Layout from './layout';
import Link from 'next/link';
import Image from 'next/image'
export default function Home(){
    return (
        <Layout>

        <main>
            <section className="hero-banner">
                <div className="container">
                    <div className="row hero-wrapper">
                        <div className="col-lg-8 col-md-12 hero-content-box">
                            <h2 data-aos="fade-up" data-aos-duration="3000" className="main-head">Looking for a shopify developer?</h2>
                            <p data-aos="fade-up" data-aos-duration="3000" className="sub-head">You have come to the right place.</p>
                            <Link href="#" data-aos="fade-up" data-aos-duration="3000" className="btn btn-abt">Know More</Link>
                        </div>
                        <div className="col-lg-8 col-md-12 hero-image">
                            <Image src="/images/pratham.png" alt="Pratham Wadhwa" width="300" height="300"/>
                        </div>
                    </div>
                </div>  
            </section>
            <section className="counter-block">
                <div className="container">
                    <div className="counter-wrappper">
                        <div className="counter-box" data-aos="fade-up">
                            <i className="fa fa-thumbs-o-up"></i>
                            <span className="counter">3</span>
                            <p>Total Work Experience</p>
                        </div>
                        <div className="counter-box" data-aos="fade-up">
                            <i className="fa fa-thumbs-o-up"></i>
                            <span className="counter">22</span>
                            <p>Projects Worked On</p>
                        </div>
                        <div className="counter-box" data-aos="fade-up">
                            <i className="fa fa-thumbs-o-up"></i>
                            <span className="counter">12</span>
                            <p>Reviews Gathered</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-us-pr">
                <div className="container">
                    <div className="about-header-row" data-aos="fade-up">
                        <h1 className="about-pratham">About Pratham Wadhwa</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="about-context row">
                        <div className="content-box col-lg-6 col-md-12" data-aos="fade-up">
                            <h2 className="second-head">Lorem Ipsum Content</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p><br/>
                            <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                            <Link href="/about" className="btn">Know More</Link>
                        </div>
                        <div className="skill-box col-lg-6 col-md-12" data-aos="fade-up">
                            <h2 className="second-head">Skills</h2>
                            <ul className="skill-wrapper">
                               <li>HTML</li>
                               <li>CSS</li>
                               <li>jquery</li>
                               <li>Javascript</li>
                               <li>Shopify</li>
                               <li>Liquid</li>
                               <li>Photoshop</li>
                               <li>UI/UX</li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-summary">
                <div className="container">
                    <div className="about-header-row" data-aos="fade-up">
                        <h1 className="about-pratham">Expertise Delivered</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="poject-container row">
                        <div className="col-lg-6 col-md-12 data-box" data-aos="fade-up">
                            <h3 className="webname">Biotique</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Link href="#" className="btn">Visit Website</Link>
                        </div>
                        <div className="col-lg-6 col-md-12" data-aos="fade-up">
                            <Image src="/images/biotique.png" alt="" width="300" height="300"/>
                        </div>
                    </div>
                    <div className="poject-container row haldirams-box">
                        <div className="col-lg-6 col-md-12" data-aos="fade-up">
                            <Image src="/images/haldiram-mac.png" alt="" width="300" height="300"/>
                        </div>
                        <div className="col-lg-6 col-md-12 data-box" data-aos="fade-up">
                            <h3 className="webname">Haldirams Uk</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Link href="#" className="btn">Visit Website</Link>
                        </div>
                    </div>
                    <div className="poject-container row">
                        <div className="col-lg-6 col-md-12 data-box" data-aos="fade-up">
                            <h3 className="webname">Instax Fujifilms</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Link href="#" className="btn">Visit Website</Link>
                        </div>
                        <div className="col-lg-6 col-md-12" data-aos="fade-up">
                            <Image src="/images/instax.png" alt="" width="300" height="300"/>
                        </div>
                    </div>
                    <div className="btn-wrapper" data-aos="fade-up">
                        <Link href="/projects" className="btn">See More</Link>
                    </div>
                </div>
            </section>
            <section className="testimonial">
                <div className="testimonial-wrapper container">
                    <div className="about-header-row" data-aos="fade-up">
                        <h1 className="about-pratham">Expertise Delivered</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="reviews">
                        <div className="review-item">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <span className="author">Lorem Ipsum</span>
                        </div>
                        <div className="review-item">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <span className="author">Lorem sdcsdcIpsum</span>
                        </div>
                        <div className="review-item">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tdcscext ever since the 1500s</p>
                            <span className="author">Lorem Isdcpsum</span>
                        </div>
                        <div className="nvigat">
                            <button className="prev" ><i className="fas fa-chevron-left"></i></button>
                            <button className="next" ><i className="fas fa-chevron-right"></i></button>
                        </div>        
                    </div>
                    <div className="reviewimg">
                        <Image src="/images/pratham2.png" alt="pratham wadhwa" width="300" height="200"/>
                    </div>
                </div>
            </section>

        </main>
        </Layout>
    )
}