import React from 'react';
import './TrustValidation.css';

const TrustValidation = () => {
  // Copy the TrustValidation component code
  const partners = [
    { name: "larsen & toubro", logo: "https://asimovrobotics.com/img/client-3.png" },
    { name: "cognizent", logo: "https://asimovrobotics.com/img/client-1.png" },
    { name: "acenture", logo: "https://asimovrobotics.com/img/client-2.png" },
    { name: " tcs", logo: "https://asimovrobotics.com/img/client-4.png" },
    { name: "hdfc", logo: "https://asimovrobotics.com/img/client-5.png"},
  ];

  const testimonials = [
    {
      quote: "This robot has transformed our daily operations. The efficiency gains are remarkable.",
      author: "Dr. Sarah Chen",
      title: "Chief Medical Officer, Metro Hospital",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Our customers love interacting with the robot. It's like having a friendly, knowledgeable team member.",
      author: "Mike Rodriguez",
      title: "Store Manager, TechMart",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The level of assistance and companionship this robot provides is beyond our expectations.",
      author: "Emma Thompson",
      title: "Beta Tester",
      avatar: "https://images.unsplash.com/photo-1560087637-bf797bc7796a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW58ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <section className="trust-validation">
      <div className="container">
        <div className="trust-content">
          <div className="partners-section">
            <h3>Trusted by Industry Leaders</h3>
            <div className="partners-grid">
              {partners.map((partner, index) => (
                <div key={index} className="partner-logo">
                  <img src={partner.logo} alt={partner.name} />
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-section">
            <h3>What Our Early Adopters Say</h3>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="quote-text">"{testimonial.quote}"</div>
                  <div className="author-info">
                    <img src={testimonial.avatar} alt={testimonial.author} />
                    <div>
                      <div className="author-name">{testimonial.author}</div>
                      <div className="author-title">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustValidation;