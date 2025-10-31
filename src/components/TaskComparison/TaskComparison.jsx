// File: src/components/TaskComparison/TaskComparison.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, TrendingUp, Star } from 'lucide-react';
import './TaskComparison.css';

const TaskComparison = () => {
  const [currentTask, setCurrentTask] = useState(0);
  const [sliderValues, setSliderValues] = useState([50, 50, 50]); // One for each task

  const tasks = [
    {
      id: 1,
      title: "Laundry Management",
      category: "Home Care",
      beforeImage: "👔", //  replace with actual images
      afterImage: "🤖👔",
      beforeTitle: "Manual Sorting & Folding",
      afterTitle: "AI-Assisted Organization",
      beforeDescription: "Time-consuming manual work with potential for errors",
      afterDescription: "Efficient sorting, folding, and organization with precision",
      metrics: {
        timeReduction: "75%",
        accuracy: "99%",
        satisfaction: "4.9/5"
      },
      beforeSteps: [
        "Manually sort clothes by color and fabric",
        "Wash, dry, and wait for completion",
        "Fold each item individually",
        "Organize and put away in closets"
      ],
      afterSteps: [
        "Robot scans and sorts automatically",
        "Monitors wash cycles and notifies completion",
        "Precise folding with consistent technique",
        "Organized placement based on user preferences"
      ]
    },
    {
      id: 2,
      title: "Medication Delivery",
      category: "Healthcare",
      beforeImage: "💊",
      afterImage: "🤖💊",
      beforeTitle: "Manual Medication Rounds",
      afterTitle: "Automated Delivery System",
      beforeDescription: "Nurse-dependent rounds with scheduling constraints",
      afterDescription: "24/7 availability with precise timing and dosage tracking",
      metrics: {
        timeReduction: "60%",
        accuracy: "99.9%",
        satisfaction: "4.8/5"
      },
      beforeSteps: [
        "Nurses manually prepare medication trays",
        "Walk room-to-room for distribution",
        "Check patient identity and dosage",
        "Document administration manually"
      ],
      afterSteps: [
        "Robot prepares pre-verified medications",
        "Autonomous navigation to patient rooms",
        "Biometric verification and smart dispensing",
        "Automatic documentation and reporting"
      ]
    },
    {
      id: 3,
      title: "Customer Guidance",
      category: "Retail",
      beforeImage: "🛍️",
      afterImage: "🤖🛍️",
      beforeTitle: "Human Staff Assistance",
      afterTitle: "AI-Powered Customer Service",
      beforeDescription: "Limited staff availability during peak hours",
      afterDescription: "Instant multilingual support with product expertise",
      metrics: {
        timeReduction: "40%",
        accuracy: "95%",
        satisfaction: "4.7/5"
      },
      beforeSteps: [
        "Customers wait for available staff",
        "Staff provides basic product information",
        "Manual inventory checks required",
        "Limited language support"
      ],
      afterSteps: [
        "Instant greeting and assistance",
        "Comprehensive product database access",
        "Real-time inventory and alternatives",
        "Multilingual communication capabilities"
      ]
    }
  ];

  const handleSliderChange = (taskIndex, value) => {
    const newValues = [...sliderValues];
    newValues[taskIndex] = value;
    setSliderValues(newValues);
  };

  const nextTask = () => {
    setCurrentTask((prev) => (prev + 1) % tasks.length);
  };

  const prevTask = () => {
    setCurrentTask((prev) => (prev - 1 + tasks.length) % tasks.length);
  };

  const currentTaskData = tasks[currentTask];
  const sliderValue = sliderValues[currentTask];

  return (
    <section className="task-comparison" id="comparison">
      <div className="task-comparison__container">
        
        {/* Section Header */}
        <motion.div
          className="task-section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="task-section-title">See the Difference</h2>
          <p className="task-section-subtitle">
            Drag the slider to compare traditional methods with AI-assisted solutions
          </p>
        </motion.div>

        {/* Task Navigation */}
        <div className="task-navigation">
          <button className="nav-btn nav-btn--prev" onClick={prevTask}>
            <ChevronLeft size={20} />
          </button>
          
          <div className="task-indicators">
            {tasks.map((_, index) => (
              <button
                key={index}
                className={`task-indicator ${index === currentTask ? 'active' : ''}`}
                onClick={() => setCurrentTask(index)}
              >
                <span className="indicator-title">{tasks[index].title}</span>
                <span className="indicator-category">{tasks[index].category}</span>
              </button>
            ))}
          </div>
          
          <button className="nav-btn nav-btn--next" onClick={nextTask}>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Main Comparison Container */}
        <motion.div
          key={currentTask}
          className="comparison-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          {/* Before/After Slider */}
          <div className="slider-container">
            <div 
              className="before-section"
              style={{ width: `${sliderValue}%` }}
            >
              <div className="section-content">
                <div className="task-visual">
                  <div className="task-icon before-icon">
                    {currentTaskData.beforeImage}
                  </div>
                </div>
                <div className="task-info">
                  <h3 className="task-method-title">{currentTaskData.beforeTitle}</h3>
                  <p className="task-description">{currentTaskData.beforeDescription}</p>
                  <div className="task-steps">
                    <h4>Process Steps:</h4>
                    <ul>
                      {currentTaskData.beforeSteps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="after-section"
              style={{ width: `${100 - sliderValue}%` }}
            >
              <div className="section-content">
                <div className="task-visual">
                  <div className="task-icon after-icon">
                    {currentTaskData.afterImage}
                  </div>
                </div>
                <div className="task-info">
                  <h3 className="task-method-title">{currentTaskData.afterTitle}</h3>
                  <p className="task-description">{currentTaskData.afterDescription}</p>
                  <div className="task-steps">
                    <h4>Process Steps:</h4>
                    <ul>
                      {currentTaskData.afterSteps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Slider Handle */}
            <div 
              className="slider-handle"
              style={{ left: `${sliderValue}%` }}
            >
              <div className="handle-line"></div>
              <div className="handle-circle">
                <ChevronLeft className="handle-arrow left" />
                <ChevronRight className="handle-arrow right" />
              </div>
            </div>
            
            {/* Range Input */}
            <input
              type="range"
              min="10"
              max="90"
              value={sliderValue}
              onChange={(e) => handleSliderChange(currentTask, parseInt(e.target.value))}
              className="slider-input"
            />
          </div>

          {/* Metrics Section */}
          <motion.div
            className="metrics-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="metrics-title">Performance Improvements</h4>
            <div className="metrics-grid">
              <div className="metric-item">
                <div className="metric-icon">
                  <Clock size={24} />
                </div>
                <div className="metric-content">
                  <span className="metric-value">{currentTaskData.metrics.timeReduction}</span>
                  <span className="metric-label">Time Reduction</span>
                </div>
              </div>
              
              <div className="metric-item">
                <div className="metric-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="metric-content">
                  <span className="metric-value">{currentTaskData.metrics.accuracy}</span>
                  <span className="metric-label">Accuracy Rate</span>
                </div>
              </div>
              
              <div className="metric-item">
                <div className="metric-icon">
                  <Star size={24} />
                </div>
                <div className="metric-content">
                  <span className="metric-value">{currentTaskData.metrics.satisfaction}</span>
                  <span className="metric-label">User Satisfaction</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Hint */}
        <motion.div
          className="interaction-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span>👆 Drag the slider to see the transformation</span>
        </motion.div>
      </div>
    </section>
  );
};

export default TaskComparison;