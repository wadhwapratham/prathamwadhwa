import Link from 'next/link';
export default function Header(){
    return (
        <>
            <header>
                <div className="header header-sticky">
                    <div className="container">
                        <div className="header-grid justify-content-between">
                            <div className="mobile-item"><button aria-label="Open Menu" className="hamburger-menu" onClick={(e)=>{
                                document.querySelector('body').classList.add('headeropen');
                                document.querySelector('.side-menu').classList.add('activeheader');
                            }} type="button"><i className="fal fa-bars"></i></button></div>
                            <div className="logo-wrapper">
                                <div className="logo"><Link href="/">PRATHAM WADHWA</Link></div>
                            </div>
                            <div className="side-menu">
                                <button aria-label="Close Menu" className="closemenu" onClick={(e)=>{
                                document.querySelector('body').classList.remove('headeropen');
                                document.querySelector('.side-menu').classList.remove('activeheader');
                            }} type="button"><i className="far fa-times"></i></button>
                                <ul className="menu-dropper d-flex">
                                    <li><Link className="active-win" href="/"><span><i className="fas fa-home"></i></span>Home</Link></li>
                                    <li><Link href="/about"><span><i className="fas fa-address-card"></i></span>About</Link></li>
                                    <li><Link href="/project"><span><i className="fas fa-file-chart-line"></i></span>Latest Projects</Link></li>
                                    <li><Link href="/prathamCV.pdf" target="_blank"><span><i className="fas fa-file-user"></i></span>Resume</Link></li>
                                    <li><Link href="/contact"><span><i className="fas fa-envelope"></i></span>Contact</Link></li>
                                </ul>
                            </div>
                        </div>  
                    </div>
                </div>
            </header>         
        </>
    )
}