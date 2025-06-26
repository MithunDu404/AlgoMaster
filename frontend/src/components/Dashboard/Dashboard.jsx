import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./Dashboard.css";

const Dashboard = () => {
  const [sortingDemo, setSortingDemo] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Generate random array for sorting demo
  const generateArray = () => {
    const arr = Array.from({length: 8}, () => Math.floor(Math.random() * 100) + 10);
    setSortingDemo(arr);
  };

  useEffect(() => {
    generateArray();
  }, []);

  // Simple bubble sort animation for demo
  const animateBubbleSort = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    let arr = [...sortingDemo];
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setSortingDemo([...arr]);
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }
    }
    setIsAnimating(false);
  };

  return (
    <div className="dashboard">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="brand-title">🔥 ALGOMASTER</div>
          <h1 className="hero-title">Visualize. Learn. Compete.</h1>
          <p className="hero-subtitle">
            Master sorting & pathfinding algorithms through interactive 
            visualizations and challenge yourself by racing against the algorithms!
          </p>
          <div className="hero-buttons">
            <Link className="primary-btn" to="/visualize">Watch Algorithms in Action</Link>
            <Link className="secondary-btn" to="/learning">Start Learning Now</Link>
          </div>
        </div>
      </section>

      {/* Three-Panel Value Proposition */}
      <section className="value-props-section">
        <div className="value-props-grid">
          <div className="value-card visualize-card">
            <div className="card-icon">📊</div>
            <h3>VISUALIZE</h3>
            <div className="mini-demo">
              {sortingDemo.map((value, index) => (
                <div 
                  key={index} 
                  className="demo-bar" 
                  style={{height: `${value}%`}}
                ></div>
              ))}
            </div>
            <p>Watch algorithms step-by-step</p>
            <small>See how Bubble Sort, Quick Sort, Merge Sort work</small>
            <button className="card-btn">Try Visualizer</button>
          </div>

          <div className="value-card learn-card">
            <div className="card-icon">🧠</div>
            <h3>LEARN</h3>
            <div className="complexity-demo">
              <div className="complexity-chart">
                <div className="bar" data-complexity="O(n)">O(n)</div>
                <div className="bar" data-complexity="O(n log n)">O(n log n)</div>
                <div className="bar" data-complexity="O(n²)">O(n²)</div>
              </div>
            </div>
            <p>Understand the logic behind each algorithm</p>
            <small>Learn time complexity, space complexity, and when to use each</small>
            <Link to="/learning" className="card-btn">Start Learning</Link>
          </div>

          <div className="value-card compete-card">
            <div className="card-icon">🎮</div>
            <h3>COMPETE</h3>
            <div className="race-preview">
              <div className="race-track">
                <div className="racer user-racer">You</div>
                <div className="racer algo-racer">Algorithm</div>
              </div>
            </div>
            <p>Race against algorithms and test your skills</p>
            <small>Can you sort faster than Quick Sort? Find paths better than A*?</small>
            <button className="card-btn">Play Game</button>
          </div>
        </div>
      </section>

      {/* See It In Action Section */}
      <section className="demo-section">
        <h2 className="section-title">See It In Action</h2>
        <div className="demo-container">
          <div className="demo-tabs">
            <button className="demo-tab active">Sorting Demo</button>
            <button className="demo-tab">Pathfinding Demo</button>
          </div>
          
          <div className="demo-area">
            <div className="sorting-demo">
              <div className="demo-controls">
                <select className="algorithm-select">
                  <option>Bubble Sort</option>
                  <option>Quick Sort</option>
                  <option>Merge Sort</option>
                </select>
                <button 
                  className="demo-btn" 
                  onClick={animateBubbleSort}
                  disabled={isAnimating}
                >
                  {isAnimating ? 'Sorting...' : 'Sort Array'}
                </button>
                <button className="demo-btn" onClick={generateArray}>New Array</button>
              </div>
              
              <div className="visualization-area">
                {sortingDemo.map((value, index) => (
                  <div 
                    key={index} 
                    className="sort-bar" 
                    style={{height: `${value * 3}px`}}
                  >
                    <span className="bar-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AlgoMaster */}
      <section className="features-section">
        <h2 className="section-title">Why Choose AlgoMaster?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h4>Interactive Learning</h4>
            <p>Don't just read about algorithms - see them work in real-time</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h4>Hands-on Practice</h4>
            <p>Test your understanding with our algorithm racing games</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h4>Track Progress</h4>
            <p>Monitor your learning journey and compete with others</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔬</div>
            <h4>Deep Understanding</h4>
            <p>Learn not just how, but when and why to use each algorithm</p>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="quick-start-section">
        <h2 className="section-title">Quick Start Guide</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-icon">👁️</div>
            <h4>WATCH</h4>
            <p>Pick an algorithm and watch it solve problems step-by-step</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-icon">🧠</div>
            <h4>LEARN</h4>
            <p>Understand the logic with our interactive explanations</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-icon">🏆</div>
            <h4>COMPETE</h4>
            <p>Race against the algorithm and see how you measure up!</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof-section">
        <div className="stats-container">
          <div className="stat">
            <h3>10,000+</h3>
            <p>Students Learning</p>
          </div>
          <div className="activity-feed">
            <div className="activity-item">🎉 Sarah just beat Bubble Sort by 3 seconds!</div>
            <div className="activity-item">🎯 Alex completed the Pathfinding learning path!</div>
            <div className="activity-item">⚡ Mike mastered Quick Sort visualization!</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <h2>Ready to Master Algorithms?</h2>
        <div className="cta-buttons">
          <Link to="/learning" className="cta-btn primary">Start with Sorting Algorithms</Link>
          <Link to="/learning" className="cta-btn secondary">Try Pathfinding First</Link>
          <Link to="/learning" className="cta-btn tertiary">Jump into Game Mode</Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;