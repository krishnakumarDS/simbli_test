import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '40px 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {/* Company Info */}
        <div style={{ flex: '1', minWidth: '200px', margin: '20px' }}>
          <h3 style={{ marginBottom: '15px', color: '#fff' }}>Simbli AI</h3>
          <p style={{ fontSize: '14px' }}>
            Simbli AI is a leading innovator in AI Agent Suits, providing cutting-edge solutions for businesses and individuals.
          </p>
          <div style={{ marginTop: '20px' }}>
            <a href="#" style={{ color: '#fff', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" style={{ color: '#fff', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" style={{ color: '#fff', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Services */}
        <div style={{ flex: '1', minWidth: '150px', margin: '20px' }}>
          <h3 style={{ marginBottom: '15px', color: '#fff' }}>Services</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>AI Agent Development</a></li>
            <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>Custom AI Solutions</a></li>
            <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>Consulting Services</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div style={{ flex: '1', minWidth: '150px', margin: '20px' }}>
          <h3 style={{ marginBottom: '15px', color: '#fff' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ marginBottom: '8px' }}><Link to="/about-us" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>About Us</Link></li>
            <li style={{ marginBottom: '8px' }}><Link to="/contact-us" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>Contact Us</Link></li>
            <li style={{ marginBottom: '8px' }}><Link to="/faq" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>FAQ</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div style={{ flex: '1', minWidth: '150px', margin: '20px' }}>
          <h3 style={{ marginBottom: '15px', color: '#fff' }}>Legal</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ marginBottom: '8px' }}><Link to="/privacy-policy" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</Link></li>
            <li style={{ marginBottom: '8px' }}><Link to="/terms-of-service" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>Terms of Service</Link></li>
            <li style={{ marginBottom: '8px' }}><Link to="/disclaimer" style={{ color: '#ddd', textDecoration: 'none', fontSize: '14px' }}>Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', padding: '0 20px' }}>
        &copy; {new Date().getFullYear()} Simbli AI. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;