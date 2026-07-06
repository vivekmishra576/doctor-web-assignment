import React, { useState } from 'react';
import './AyurvedDoc.css';

const AyurvedDoc = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Pooja Deshmukh",
      credentials: "BAMS",
      description: "Amrutam's formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing.",
      image: require('../images/docimage.png'),
      rating: 5,
      type: 'small'
    },
    {
      id: 2,
      name: "Dr. Rajesh Iyer",
      credentials: "Ayurvedic Practitioner",
      description: "Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle.",
      image: require('../images/docimage.png'),
      rating: 4,
      type: 'large'
    },
    {
      id: 3,
      name: "Dr. Ananya Sharma",
      credentials: "BAMS",
      description: "As an Ayurvedic doctor, I appreciate Amrutam's commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I've personally seen positive results in my patients using their products.",
      image: require('../images/docimage.png'),
      rating: 5,
      type: 'small'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is Amrutam?",
      answer: "Amrutam is a platform that connects you with experienced Ayurvedic practitioners for personalized wellness guidance."
    },
    {
      id: 2,
      question: "How does Amrutam help me grow as a practitioner?",
      answer: "Amrutam provides tools, resources, and a platform to expand your practice and reach more patients."
    },
    {
      id: 3,
      question: "How do I become a part of Amrutam Doctor?",
      answer: "You can apply through our website by filling out the registration form with your credentials."
    },
    {
      id: 4,
      question: "What is Amrutam Global as a platform?",
      answer: "Amrutam Global is a comprehensive wellness platform connecting practitioners with patients worldwide."
    },
    {
      id: 5,
      question: "What documents do I need to provide?",
      answer: "You'll need to provide your medical degree, registration certificate, and professional credentials."
    },
    {
      id: 6,
      question: "Is there a fee to join Amrutam?",
      answer: "Registration is free. We only take a small commission on consultations booked through the platform."
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star empty'}>
        ★
      </span>
    ));
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="ayurved-doc-section">
      <div className="ayurved-doc-container">
        <div className="section-header">
          <h2 className="main-title">What other Ayurvedic Doctors are Saying</h2>
          <p className="subtitle">
            Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!
          </p>
        </div>

        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-card ${testimonial.type}`}
            >
              <div className="doctor-info">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="doctor-image"
                />
                <div className="doctor-details">
                  <h3 className="doctor-name">{testimonial.name}</h3>
                  <span className="doctor-credentials">{testimonial.credentials}</span>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                "{testimonial.description}"
              </p>
            </div>
          ))}
        </div>

        <div className="faq-section">
          <div className="faq-header">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">
              Find quick answers to common questions to help you navigate the app and its features easily.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="faq-item">
                <button 
                  className="faq-question-button"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="faq-question">{faq.question}</span>
                  <span className={`faq-icon ${openFaqIndex === index ? 'open' : ''}`}>+</span>
                </button>
                {openFaqIndex === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="see-more-btn">See More</button>
        </div>
      </div>
    </div>
  );
};

export default AyurvedDoc;
