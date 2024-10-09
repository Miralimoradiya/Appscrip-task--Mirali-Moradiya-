import React from 'react'
import {
    RiInstagramLine,
    RiLinkedinFill,
    RiGoogleFill,
    RiVisaFill,
    RiMastercardFill,
    RiAppleFill,
    RiPaypalFill
  } from 'react-icons/ri';
  import { FaCcAmex } from 'react-icons/fa';
  import unitedstatessymbol from "../assets/footeramerica.webp"

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className='footer-sectiontop'>
        {/* Newsletter Section */}
      <div className="footer-newsletter">
        <h3>BE THE FIRST TO KNOW</h3>
        <p>Sign-up for updates from mettà muse.</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your e-mail..."
            className="email-input"
            required
          />
          <button type="submit" className="subscribe-button">
            SUBSCRIBE
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="footer-contact">
        <h3>CONTACT US</h3>
        <p>+44 221 133 5360</p>
        <a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a>
        <h4>CURRENCY</h4>
        <div className='language'>
            <img src={unitedstatessymbol} alt="unitedstatessymbol" />
        <p>USD</p>
        </div>
        <small>
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </small>
      </div>
      </div>
<hr />
     <div className='footer-sectionbottom'>
         {/* "mettà muse" Section */}
      <div className="footer-metta-muse">
        <h3>mettà muse</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Stories</a></li>
          <li><a href="#">Artisans</a></li>
          <li><a href="#">Boutiques</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">EU Compliances Docs</a></li>
        </ul>
      </div>

      {/* Quick Links Section */}
      <div className="footer-links">
        <h3>QUICK LINKS</h3>
        <ul>
          <li><a href="#">Orders & Shipping</a></li>
          <li><a href="#">Join/Login as a Seller</a></li>
          <li><a href="#">Payment & Pricing</a></li>
          <li><a href="#">Return & Refunds</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>

      {/* Social Media and Payment Icons */}
      <div className="footer-follow">
        <h3>FOLLOW US</h3>
        <div className="social-icons">
          <a href="#"><RiInstagramLine /></a>
          <a href="#"><RiLinkedinFill /></a>
        </div>
        <h4>mettà muse ACCEPTS</h4>
        <div className="payment-icons">
          <RiGoogleFill />
          <RiVisaFill />
          <RiMastercardFill />
          <FaCcAmex />
          <RiAppleFill />
          <RiPaypalFill />
        </div>
      </div>
     </div>
    </div>

    {/* Footer Bottom */}
    <div className="footer-bottom">
      <small>Copyright © 2023 mettà muse. All rights reserved.</small>
    </div>
  </footer>
  )
}

export default Footer
