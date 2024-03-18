import "./Navbar.scss";
import { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaTimes, FaBars, FaCartPlus  } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef();
  const { t, i18n } = useTranslation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <header>
      <nav ref={navRef} className="nav">
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <ul>
          <li>
            <NavLink
              to="/"
              activeClassName="active"
              className="home-page"
              onClick={showNavbar}
            >
            <h3>หน้าแรก</h3>
              {t("home-page")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              activeClassName="active"
              className="menu"
              onClick={showNavbar}
            >
            <h3>เมนู</h3>
              {t("menu")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants"
              activeClassName="active"
              className="restaurants"
              onClick={showNavbar}
            >
                <h3>ร้านอาหาร</h3>
                {t("restaurants")}
            </NavLink>
          </li>
          <li style={{ display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                  }}>
            <Link to="/" className="site-title" onClick={showNavbar}>
              <img
                src="/images/ThaiLogo.png"
                alt="Logo"
                width={120}
                height={120}
              />
            </Link>
            <Button onClick={handleClickOpen} 
                    sx={{color: 'white',
                        background: '#CF3835'}}>
                <FaCartPlus fontSize={25}/>
            </Button>
            <Cart
              open={open}
              onClose={handleClose}
            />
          </li>
          <li>
            <NavLink
              to="/today"
              activeClassName="active"
              className="offers"
              onClick={showNavbar}
            >
                <h3>ข้อเสนอวันนี้</h3>
              {t("today-offer")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              activeClassName="active"
              className="contact-us"
              onClick={showNavbar}
            >
                <h3>ติดต่อเรา</h3>
              {t("contact-us")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              activeClassName="active"
              className="about-us"
              onClick={showNavbar}
            >
                <h3>เกี่ยวกับเรา</h3>
              {t("about-us")}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="responsive-site">
        <NavLink to="/" className="site-title-responsive">
          <img src="/images/ThaiLogo.png" alt="Logo" width={120} height={120} />
        </NavLink>
        <button className="nav-btn">
          <FaBars onClick={showNavbar} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
