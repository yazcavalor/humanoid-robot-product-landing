// File: src/components/MeetAssistant/MeetAssistant.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Heart, ShoppingBag, Zap, Shield, Brain } from 'lucide-react';
import './MeetAssistant.css';

const MeetAssistant = () => {
  const [isEyeBlinking, setIsEyeBlinking] = useState(false);
  const [currentPersonality, setCurrentPersonality] = useState(0);

  const personalityTraits = [
    {
      icon: <Heart className="trait-icon" />,
      title: "Empathetic",
      description: "Understands emotions and responds with care and consideration for your well-being."
    },
    {
      icon: <Zap className="trait-icon" />,
      title: "Efficient",
      description: "Optimizes tasks and routines to save you time while maintaining quality."
    },
    {
      icon: <Brain className="trait-icon" />,
      title: "Adaptable",
      description: "Learns from your preferences and adapts to your unique lifestyle and needs."
    }
  ];

  const useCases = [
    {
      icon: <Home className="use-case-icon" />,
      title: "Home",
      subtitle: "Daily Life Assistant",
      description: "Helps with household chores, scheduling, reminders, and creating a comfortable living environment.",
      features: ["Cleaning assistance", "Meal planning", "Smart home control", "Security monitoring"]
    },
    {
      icon: <Heart className="use-case-icon" />,
      title: "Healthcare",
      subtitle: "Patient Care Support",
      description: "Assists medical staff and patients with medication, mobility, and emotional support.",
      features: ["Medication reminders", "Mobility assistance", "Health monitoring", "Emergency response"]
    },
    {
      icon: <ShoppingBag className="use-case-icon" />,
      title: "Retail",
      subtitle: "Customer Experience",
      description: "Enhances shopping experiences through guidance, information, and personalized assistance.",
      features: ["Product information", "Store navigation", "Inventory management", "Customer service"]
    }
  ];

  // Auto-cycle personality traits
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPersonality((prev) => (prev + 1) % personalityTraits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [personalityTraits.length]);

  // Random eye blink
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsEyeBlinking(true);
        setTimeout(() => setIsEyeBlinking(false), 200);
      }
    }, 2000);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section className="meet-assistant" id="features">
      <div className="meet-assistant__container">
        
        {/* Section Header */}
        <motion.div
          className="meet-section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="meet-section-title">Meet Your AI Assistant</h2>
          <p className="meet-section-subtitle">
            More than just technology — a thoughtful companion designed to understand and assist
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="meet-assistant__content">
          
          {/* Left Side - Robot Portrait */}
          <motion.div
            className="robot-portrait"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="robot-portrait__container">
              {/* Robot Face */}
              <div className="robot-face">
                <div className="robot-head">
                  <div className={`robot-eye left-eye ${isEyeBlinking ? 'blink' : ''}`}>
                    <div className="eye-pupil"></div>
                  </div>
                  <div className={`robot-eye right-eye ${isEyeBlinking ? 'blink' : ''}`}>
                    <div className="eye-pupil"></div>
                  </div>
                  <div className="robot-mouth">
                    <div className="mouth-line"></div>
                  </div>
                </div>
              </div>
              
              {/* Personality Indicator */}
              <motion.div
                className="personality-indicator"
                key={currentPersonality}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {personalityTraits[currentPersonality].icon}
                <span>{personalityTraits[currentPersonality].title}</span>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="floating-elements">
              <motion.div
                className="float-element element-1"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Shield size={20} />
              </motion.div>
              <motion.div
                className="float-element element-2"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Brain size={18} />
              </motion.div>
              <motion.div
                className="float-element element-3"
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <Zap size={16} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Personality & Story */}
          <motion.div
            className="robot-story"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="story-content">
              <h3 className="story-title">Designed with Heart, Powered by Intelligence</h3>
              <p className="story-description">
                Our AI assistant isn't just another robot — it's a thoughtful companion that brings 
                together advanced technology with genuine care. Every interaction is designed to feel 
                natural, helpful, and uniquely tailored to you.
              </p>

              {/* Personality Traits */}
              <div className="personality-traits">
                {personalityTraits.map((trait, index) => (
                  <motion.div
                    key={index}
                    className={`trait ${index === currentPersonality ? 'trait--active' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setCurrentPersonality(index)}
                  >
                    <div className="trait-header">
                      {trait.icon}
                      <h4>{trait.title}</h4>
                    </div>
                    <p>{trait.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Use Cases Section */}
        <motion.div
          className="use-cases"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="use-cases-title">Versatile Applications</h3>
          <div className="use-cases-grid">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="use-case-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                viewport={{ once: true }}
              >
                <div className="use-case-header">
                  <div className="icon-wrapper">
                    {useCase.icon}
                  </div>
                  <div className="use-case-info">
                    <h4 className="use-case-title">{useCase.title}</h4>
                    <span className="use-case-subtitle">{useCase.subtitle}</span>
                  </div>
                </div>
                
                <p className="use-case-description">{useCase.description}</p>
                
                <ul className="use-case-features">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="feature-bullet">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetAssistant;