import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay, faInstagram, faYoutube, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-logo-box">
          <img src="https://www.baraka.ps/uploads/Setting/871651693905809.webp" alt="شعار البركة" className="footer-logo" />
          <span className="footer-mobile-title">البركة موبايل</span>
        </div>

        <div className="footer-apps">
          <a href="https://apps.apple.com/app/id123456789" className="app-btn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faApple} />
            <span>App Store</span>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.fis.barakainsurancemobile&pli=1" className="app-btn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGooglePlay} />
            <span>Google Play</span>
          </a>
        </div>

        <div className="footer-newsletter">
          <h3 className="footer-title">نشرة البركة</h3>
          <p className="footer-desc">
            ابقَ على اطلاع وتواصل دائم مع البركة تأمين من خلال الاشتراك في القائمة البريدية الخاصة بنشرة البركة
          </p>
        </div>
      </div>

      <div className="footer-social">
        <a href="#" className="footer-social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#" className="footer-social-icon"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="#" className="footer-social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="#" className="footer-social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#" className="footer-social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
      </div>

      <div className="footer-bottom">
        <a href="https://www.baraka.ps/join-us/producers" className="footer-link">الشروط والأحكام والخصوصية</a>
        <span className="footer-rights">All Rights Reserved - Al Baraka Insurance Company © 2025 Developed by FIS</span>
      </div>
    </footer>
  );
};

export default Footer;