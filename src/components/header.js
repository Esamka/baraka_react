import React, { useState, useEffect } from 'react';
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleDropdownToggle = (menuName) => {
    if (window.innerWidth <= 992) {
      setOpenDropdown(openDropdown === menuName ? null : menuName);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsNavOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src="https://www.baraka.ps/uploads/Setting/871651693905809.webp" alt="لوجو البركة" />
      </div>
      <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li><a href="#">الرئيسية</a></li>
          <li className={`about-baraka ${openDropdown === 'about' ? 'open' : ''}`} onClick={() => handleDropdownToggle('about')}>
            <a href="#">عن البركة <FontAwesomeIcon icon={faAngleDown} /></a>
            <ul className="dropdown-menu">
              <li><a href="#">لمحة عن الشركة</a></li>
              <li><a href="#">المهمة والرؤيا</a></li>
              <li><a href="#">كلمة رئيس مجلس الإدارة</a></li>
              <li><a href="#">كلمة المدير العام</a></li>
              <li><a href="#">مجلس الإدارة</a></li>
              <li><a href="#">لجنة الرقابة الشرعية</a></li>
              <li><a href="#">الفريق الإداري</a></li>
              <li><a href="#">حوكمة الشركات</a></li>
              <li><a href="#">التقارير المالية</a></li>
              <li><a href="#">الجوائز والإنجازات</a></li>
            </ul>
          </li>
          <li><a href="#">الحملات والعروض</a></li>
          <li><a href="#">محققي الحوادث</a></li>
          <li className={`media-center ${openDropdown === 'media' ? 'open' : ''}`} onClick={() => handleDropdownToggle('media')}>
            <a href="#">المركز الإعلامي <FontAwesomeIcon icon={faAngleDown} /></a>
            <ul className="dropdown-menu">
              <li><a href="#">الأخبار</a></li>
              <li><a href="#">ألبوم الصور</a></li>
              <li><a href="#">الفيديو</a></li>
              <li><a href="#">الحقيبة الإعلامية</a></li>
              <li><a href="#">المسؤولية الاجتماعية</a></li>
            </ul>
          </li>
          <li><a href="#">الفروع</a></li>
          <li className={`join-us ${openDropdown === 'join' ? 'open' : ''}`} onClick={() => handleDropdownToggle('join')}>
            <a href="#">انضم إلينا <FontAwesomeIcon icon={faAngleDown} /></a>
            <ul className="dropdown-menu">
              <li><a href="#">الانضمام إلى فريق الشركة</a></li>
              <li><a href="#">الانضمام إلى فريق المنتجين</a></li>
            </ul>
          </li>
          <li><a href="#">تواصل معنا</a></li>
        </ul>
      </nav>
      <div className="social-icons social-icons-desktop">
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
      </div>
      <div className="hamburger-menu" onClick={handleNavToggle}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};

export default Header;