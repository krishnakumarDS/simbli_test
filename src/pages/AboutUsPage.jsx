import React from 'react';

function AboutUsPage() {
  return (
    <div className="container">
      <section className="section">
        <h2>About Us</h2>
        <p>
          Simbli AI is a leading innovator in AI Agent Suits, dedicated to providing cutting-edge solutions for businesses and individuals. Our team is composed of experts in artificial intelligence, software development, and business strategy.
        </p>
        <p>
          We are passionate about leveraging the latest advancements in AI to create tools that enhance productivity, streamline workflows, and drive innovation.
        </p>
        <img
            src="https://images.unsplash.com/photo-1504384308090-c89ef4fa5eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
            alt="Team working together"
            style={{ width: '100%', borderRadius: '8px', marginTop: '20px', objectFit: 'cover', height: '400px' }}
        />
      </section>

      <section className="section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses with the tools they need to succeed in the age of artificial intelligence. We are committed to delivering innovative solutions and exceptional customer service.
        </p>
      </section>

      <section className="section">
        <h2>Our Values</h2>
        <ul>
          <li>Innovation</li>
          <li>Excellence</li>
          <li>Customer Focus</li>
          <li>Integrity</li>
          <li>Teamwork</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUsPage;