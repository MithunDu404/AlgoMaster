// import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Visualize.</h1>
          <h1 className="hero-title">Learn.</h1>
          <h1 className="hero-title">Compete.</h1>
          <p className="hero-subtitle">
            Master algorithms through interactive visualizations, engaging lessons, and competitive challenges.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </section>

      {/* Modules Section */}
      <section className="modules-section">
        {/* <h2 className="section-title">Explore Modules</h2> */}
        
        <div className="modules-grid">
          {/* Algorithm Visualization Module */}
          <div className="module-card">
            <div className="module-content">
              <h3 className="module-title">Algorithm Visualization</h3>
              <p className="module-description">
                Explore interactive visualizations of various algorithms, from sorting to graph traversal.
              </p>
              <button className="module-btn">Explore</button>
            </div>
          </div>

          {/* Learning Center Module */}
          <div className="module-card">
            <div className="module-content">
              <h3 className="module-title">Learning Center</h3>
              <p className="module-description">
                Access comprehensive lessons, tutorials, and resources to deepen your understanding of algorithms.
              </p>
              <button className="module-btn">Learn</button>
            </div>
          </div>

          {/* Game Mode Module */}
          <div className="module-card">
            <div className="module-content">
              <h3 className="module-title">Game Mode</h3>
              <p className="module-description">
                Challenge yourself with algorithm-based games and compete with other learners.
              </p>
              <button className="module-btn">Play</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;