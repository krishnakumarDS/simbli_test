import React from 'react';

function ContactUsPage() {
  return (
    <div className="container">
      <section className="section">
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you! Please fill out the form below to get in touch with us.
        </p>
        <form>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
            <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
            <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
          </div>
          <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
      </section>

      <section className="section">
        <h2>Our Location</h2>
        <p>
          123 Main Street<br />
          Anytown, USA 12345
        </p>
      </section>
    </div>
  );
}

export default ContactUsPage;