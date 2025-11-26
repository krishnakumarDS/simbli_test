import React from 'react';

function HomePage() {
  return (
    <div className="container">
      <section className="section" style={{ backgroundImage: 'linear-gradient(to right, #2980B9, #6DD5FA)' }}>
        <h2 style={{ color: '#fff' }}>Welcome to Simbli AI - AI Agent Suits</h2>
        <p style={{ color: '#fff' }}>
          Simbli AI provides cutting-edge AI Agent Suits designed to enhance productivity, streamline workflows, and drive innovation.
        </p>
        <img
            src="https://images.unsplash.com/photo-1517245444426-e211f6324b8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="AI Agent Suit"
            style={{ width: '100%', borderRadius: '8px', marginTop: '20px', objectFit: 'cover', height: '400px' }}
        />
      </section>

      <section className="section">
        <h2>About Our AI Agent Suits</h2>
        <p>
          Our AI Agent Suits are designed to integrate seamlessly with your existing systems, providing intelligent automation and decision-making capabilities.
        </p>
        <p>
          We leverage the latest advancements in artificial intelligence to deliver solutions that are both powerful and user-friendly.
        </p>
        <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Team working on AI"
            style={{ width: '100%', borderRadius: '8px', marginTop: '20px', objectFit: 'cover', height: '400px' }}
        />
      </section>

      <section className="section">
        <h2>Key Features</h2>
        <ul>
          <li>Intelligent Automation</li>
          <li>Real-time Decision Making</li>
          <li>Customizable Solutions</li>
          <li>Seamless Integration</li>
          <li>24/7 Support</li>
        </ul>
      </section>

      <section className="section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses with the tools they need to succeed in the age of artificial intelligence. We are committed to delivering innovative solutions and exceptional customer service.
        </p>
        <img
            src="https://images.unsplash.com/photo-1583508916841-f3f6c2311971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Futuristic AI environment"
            style={{ width: '100%', borderRadius: '8px', marginTop: '20px', objectFit: 'cover', height: '400px' }}
        />
      </section>
    </div>
  );
}

export default HomePage;