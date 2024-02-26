import Link from 'next/link';
export default function Footer(){
    return (
        <>

        <footer>
            <div className="container">
                <div className="footer-part-one row">
                    <div className="intro-extro col-lg-6 col-sm-12" >
                        <h3 className="dev-name">PRATHAM WADHWA</h3>
                        <p className="excerpt">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
                    </div>
                    <div className="social col-lg-6 col-sm-12">
                        <h4 className="social-head">SOCIAL</h4>
                        <ul className="list-social">
                            <li><Link href="www.linkedin.com/in/pratham-wadhwa16" title="linkedin"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link href="https://www.instagram.com/_the_excelsior__/" title="instagram"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link href="/" title="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="copy-block text-center">
                    © Copyright {new Date().getFullYear()}. Made by Pratham Wadhwa
                </div>
            </div>
        </footer>        
        </>
    )
}
