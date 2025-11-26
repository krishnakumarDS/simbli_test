import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#007bff', padding: '20px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
        Simbli AI
      </Link>
      <div>
        <Link to="/about-us" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>About Us</Link>
        <Link to="/contact-us" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Contact Us</Link>
        <Link to="/faq" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>FAQ</Link>
      </div>
    </nav>
  );
}

export default Navbar;