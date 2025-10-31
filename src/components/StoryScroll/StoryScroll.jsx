import React, { useState, useEffect, useRef } from 'react';
import './StoryScroll.css';

const StorytellingScroll = () => {
  // ... (component logic)
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const storySteps = [
    {
      title: "Concept & Vision",
      text: "It all started with a simple question: How can we make everyday life easier?",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      robotText: "Every great invention starts with a dream!"
    },
    {
      title: "Research & Development",
      text: "Years of research in AI, robotics, and human-computer interaction.",
      image: "https://plus.unsplash.com/premium_photo-1663054532868-9d90d22e9195?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmVzZWFyY2glMjAlMjYlMjBEZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      robotText: "Science is my favorite subject!"
    },
    {
      title: "Prototype Testing",
      text: "Countless iterations and improvements based on real-world feedback.",
      image: "https://images.unsplash.com/photo-1732714552116-399f828fa355?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      robotText: "Practice makes perfect, right?"
    },
    {
      title: "Real-World Deployment",
      text: "Now ready to become your trusted companion in daily life.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      robotText: "Ready to help you every day!"
    }
  ];

  const currentStep = Math.min(
    Math.floor((scrollY - (sectionRef.current?.offsetTop || 0)) / 200),
    storySteps.length - 1
  );

  return (
    <section ref={sectionRef} className="storytelling-scroll" id="story">
      <div className="container">
        <h2 className="section-title">From Concept to Companion</h2>
        
        <div className="story-timeline">
          {storySteps.map((step, index) => (
            <div 
              key={index}
              className={`story-step ${index <= currentStep && isInView ? 'active' : ''}`}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <div className="step-image">
                  <img src={step.image} alt={step.title} />
                  {index <= currentStep && isInView && (
                    <div className="robot-dialogue">
                      <div className="dialogue-bubble">
                        {step.robotText}
                      </div>
                      <div className="robot-avatar">🤖</div>
                    </div>
                  )}
                </div>
                <div className="step-text">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorytellingScroll;