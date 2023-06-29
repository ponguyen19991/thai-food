import './Navbar.scss';
import { useRef } from 'react';
import { NavLink, Link } from "react-router-dom"
import { FaTimes, FaBars } from "react-icons/fa"

const Navbar = () => {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <nav ref={navRef} className="nav">
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
                <ul>
                    <li><NavLink to="/" activeClassName="active" className="home-page" onClick={showNavbar}>Home Page</NavLink></li>
                    <li><NavLink to="/restaurants" activeClassName="active" className="restaurants" onClick={showNavbar}>Restaurants</NavLink></li>
                    <li><NavLink to="/today" activeClassName="active" className="offers" onClick={showNavbar}>Today's Offers</NavLink></li>
                    <li><Link to="/" className="site-title" onClick={showNavbar}><img src="/images/ThaiLogo.png" alt="Logo" width={120} height={120} /></Link></li>
                    <li><NavLink to="/contact-us" activeClassName="active" className="contact-us" onClick={showNavbar}>Contact Us</NavLink></li>
                    <li><NavLink to="/about-us" activeClassName="active" className="about-us" onClick={showNavbar}>About Us</NavLink></li>
                    <li><NavLink to="/how-we-work" activeClassName="active" className="how-we-work" onClick={showNavbar}>How we Work?</NavLink></li>
                </ul>
            </nav>
            <div className='responsive-site'>
                <NavLink to="/" className="site-title-responsive"><img src="/images/ThaiLogo.png" alt="Logo" width={120} height={120} /></NavLink>
                <button className='nav-btn'>
                    <FaBars onClick={showNavbar}/>
                </button>
            </div>
        </header>
    )
}

export default Navbar