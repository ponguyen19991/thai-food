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
                    <li><NavLink to="/" activeClassName="active" className="home-page">Home Page</NavLink></li>
                    <li><NavLink to="/restaurants" activeClassName="active" className="restaurants">Restaurants</NavLink></li>
                    <li><NavLink to="/today" activeClassName="active" className="offers">Today's Offers</NavLink></li>
                    <li><Link to="/" className="site-title"><img src="/images/ThaiLogo.png" alt="Logo" width={120} height={120} /></Link></li>
                    <li><NavLink to="/contact-us" activeClassName="active" className="contact-us">Contact Us</NavLink></li>
                    <li><NavLink to="/about-us" activeClassName="active" className="about-us">About Us</NavLink></li>
                    <li><NavLink to="/how-we-work" activeClassName="active" className="how-we-work">How we Work?</NavLink></li>
                </ul>
            </nav>
            <div className='responsive-site'>
                <NavLink to="/" className="site-title-responsive">Site Name</NavLink>
                <button className='nav-btn'>
                    <FaBars onClick={showNavbar}/>
                </button>
            </div>
        </header>
    )
}

export default Navbar