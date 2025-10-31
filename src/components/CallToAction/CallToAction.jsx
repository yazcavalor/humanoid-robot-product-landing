import React, { useState } from 'react';
import { Users, Award, ArrowRight } from 'lucide-react';
import './CallToAction.css';
import robo from "../../assets/images/robo.png";

const CallToAction = () => {
  const [preorderCount, setPreorderCount] = useState(1247);
  const [email, setEmail] = useState('');

  const handlePreorder = () => {
    setPreorderCount(prev => prev + 1);
    //we can add preorder logic here
  };

  return (
    <section className="cta-block" id='contact'>
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Be Among the First to Welcome Your Assistant Home</h2>
            <p>Join {preorderCount.toLocaleString()} others who have already reserved their robot companion.</p>
            
            <div className="urgency-indicators">
              <div className="preorder-counter">
                <Users size={20} />
                <span>{preorderCount.toLocaleString()} units reserved</span>
              </div>
              <div className="limited-offer">
                <Award size={20} />
                <span>Early bird pricing: Save $500</span>
              </div>
            </div>
          </div>

          <div className="cta-actions">
            <div className="email-signup">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
              />
            </div>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={handlePreorder}>
                <ArrowRight size={20} />
                Pre-order Now - $2,499
              </button>
              <button className="btn-secondary">
                Request Demo
              </button>
            </div>
          </div>
        </div>

        <div className="cta-visual">
          <div className="robot-preview">
            <div className="robot-silhouette"> <img height={120} src={robo} alt="robo"/></div>
            <div className="floating-features">
              <div className="feature-bubble">AI-Powered</div>
              <div className="feature-bubble">Voice Control</div>
              <div className="feature-bubble">Mobile App</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;