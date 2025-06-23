// import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Visualize. Learn. Compete.</h1>
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
            <div className="module-visual">
              <div className="visualization-bars">
                {Array.from({ length: 20 }, (_, i) => (
                  <div 
                    key={i} 
                    className="bar" 
                    style={{ height: `${Math.random() * 60 + 20}px` }}
                  ></div>
                ))}
              </div>
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
            <div className="module-visual learning-visual">
              <div className="brain-icon">
                <div className="brain-left"></div>
                <div className="brain-right"></div>
              </div>
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
            <div className="module-visual game-visual">
              <div className="game-controller">
                <div className="controller-body">
                  <div className="d-pad"></div>
                  <div className="buttons">
                    <div className="button"></div>
                    <div className="button"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;