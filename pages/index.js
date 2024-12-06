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
                            <Link href="/about" data-aos="fade-up" data-aos-duration="3000" className="btn btn-abt">Know More</Link>
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
                            <span className="counter">4</span>
                            <p>Total Work Experience</p>
                        </div>
                        <div className="counter-box" data-aos="fade-up">
                            <i className="fa fa-thumbs-o-up"></i>
                            <span className="counter">40</span>
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

            {/* <section className="project-summary">
                <div className="container">
                    <div className="about-header-row" data-aos="fade-up">
                        <h1 className="about-pratham">Expertise Delivered</h1>
                        <p>See some great expertise delivered till now.</p>
                    </div>
                    <div className="poject-container row">
                        <div className="col-lg-6 col-md-12 data-box" data-aos="fade-up">
                            <h3 className="webname">Biotique</h3>
                            <p>A combination of the 5,000-year-old science of Ayurveda and 21st-century biotechnology. A dream that has today become a global reality. We are synonymous with serious skin and hair care developed from Ayurveda, the principal medical tradition in India for over 5000 years.</p>
                            <Link rel="nofollow" href="https://www.biotique.com/" className="btn">Visit Website</Link>
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
                            <p>Haldiram is a name associated with the finest and authentic Indian taste in Sweets and Namkeens. We started our journey in 1937 at Bikaner, Rajasthan and today have an outstanding presence in India and across the globe.</p>
                            <Link rel="nofollow" href="https://www.haldiramuk.com/" className="btn">Visit Website</Link>
                        </div>
                    </div>
                    <div className="poject-container row">
                        <div className="col-lg-6 col-md-12 data-box" data-aos="fade-up">
                            <h3 className="webname">Instax Fujifilms</h3>
                            <p>Fujifilm Instax is a brand of instant still cameras and instant films, manufactured and marketed by Fujifilm. Instax was first introduced to the world in 1998, and was brought to India in 2010. Fujifilm Instax instant cameras are based on the instant film system,and are defined by three formats of films: Mini, Square, and Wide.</p>
                            <Link rel="nofollow" href="https://www.instax.in/" className="btn">Visit Website</Link>
                        </div>
                        <div className="col-lg-6 col-md-12" data-aos="fade-up">
                            <Image src="/images/instax.png" alt="" width="300" height="300"/>
                        </div>
                    </div>
                    <div className="btn-wrapper">
                        <Link href="/project" className="btn">Checkout More</Link>
                    </div>
                </div>
            </section> */}
            {/* <section className="ads">
                <div className="adwrap container">
                    <img src="/images/ad1.jpg" width="300" height="300" alt="shop bestsellers from amazon" />
                    <a className="btn" target="_blank" href="https://www.amazon.in/b?_encoding=UTF8&tag=prathamwadhwa-21&linkCode=ur2&linkId=a0aaeda9bc6b997aff27899147a12f62&camp=3638&creative=24630&node=976419031">Shop Bestsellers</a>
                </div>
            </section> */}
            {/*
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
            */}

        </main>
        </Layout>
    )
}