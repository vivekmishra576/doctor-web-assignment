import './WhyDoctors.css';
import callicons from '../images/callicons.png';
import fivemincallimage from '../images/5mincallimage.png';
import forummeicon from '../images/forummeicon.png';
import meaningfulconnection from '../images/meaningfulconnection.png';
import sessionicon from '../images/sessionicon.png';
import sessionmodegrup from '../images/sessionmodegrup.png';
import workiconnn from '../images/workiconnn.png';
import worktimiggruphalf from '../images/worktimiggruphalf.png';
import worktimimghalf2 from '../images/worktimimghalf2.png';
import walletgrup from '../images/walletgrup.png';
import iconcontaines from '../images/iconcontaines.png';

const FeatureCard = ({ icon, title, description, mockupImage, mockupImage2, layout, highlightText, showIcon = true, useIconContainer = false, iconContainer, cardId }) => {
  const isLeft = layout === 'left';

  const renderTitle = () => {
    if (!highlightText) return title;
    
    const parts = title.split(highlightText);
    return (
      <>
        {parts[0]}
        <span className="feature-highlight">{highlightText}</span>
        {parts[1]}
      </>
    );
  };

  const renderIcon = () => {
    if (!showIcon) return null;
    
    if (useIconContainer && iconContainer) {
      return (
        <div className={`icon-with-container icon-${cardId}`}>
          <img src={iconContainer} alt="icon container" className="icon-container-bg" />
          <img src={icon} alt="icon" className="icon-in-container" />
        </div>
      );
    }
    
    return <img src={icon} alt="icon" className={`feature-icon-absolute icon-${cardId}`} />;
  };

  return (
    <div className={`feature-card feature-card-${cardId} ${isLeft ? 'feature-card-left' : 'feature-card-right'}`}>
      {isLeft ? (
        // LEFT: Text left, Image right
        <>
          <div className="feature-content">
            <h3 className="feature-title">{renderTitle()}</h3>
            <p className="feature-description">{description}</p>
          </div>
          <div className="feature-mockup">
            <div className="mockup-image-wrapper">
              {renderIcon()}
              <img src={mockupImage} alt={title} className="mockup-image" />
              {mockupImage2 && <img src={mockupImage2} alt={`${title} 2`} className={`mockup-image-secondary secondary-${cardId}`} />}
            </div>
          </div>
        </>
      ) : (
        // RIGHT: Image left, Text right
        <>
          <div className="feature-mockup">
            <div className="mockup-image-wrapper">
              {renderIcon()}
              <img src={mockupImage} alt={title} className="mockup-image" />
              {mockupImage2 && <img src={mockupImage2} alt={`${title} 2`} className={`mockup-image-secondary secondary-${cardId}`} />}
            </div>
          </div>
          <div className="feature-content">
            <h3 className="feature-title">{renderTitle()}</h3>
            <p className="feature-description">{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

const WhyDoctors = () => {
  const features = [
    {
      cardId: 'call',
      icon: callicons,
      title: "Instant FREE 5-Mins Call",
      highlightText: "FREE",
      description: "We understand the importance of building trust with your patients. That's why Amrutam offers a free 5-minute call helping you connect instantly and foster lasting patient relationships with ease.",
      mockupImage: fivemincallimage,
      layout: 'right'
    },
    {
      cardId: 'forum',
      icon: forummeicon,
      title: "Forum for Meaningful Connections",
      highlightText: "",
      description: "We value your journey in Ayurveda. The Amrutam Forum helps you engage with patients, answer questions, while the 'Thoughts' section allows you to share deeper Ayurvedic wisdom.",
      mockupImage: meaningfulconnection,
      layout: 'left',
      showIcon: false 
    },
    {
      cardId: 'session',
      icon: sessionicon,
      title: "Choose Your Session Mode",
      highlightText: "",
      description: "Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs.",
      mockupImage: sessionmodegrup,
      layout: 'right',
      useIconContainer: true,
      iconContainer: iconcontaines
    },
    {
      cardId: 'wallet',
      icon: workiconnn,
      title: "Smart Wallet",
      highlightText: "",
      description: "We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.",
      mockupImage: walletgrup,
      layout: 'left',
      showIcon: false  // Icon already in image
    },
    {
      cardId: 'timing',
      icon: workiconnn,
      title: "Flexible Work Timing",
      highlightText: "",
      description: "We recognize the importance of managing your time. With the availability toggle in the doctor's app, you control when patients can book consultations, ensuring a balanced and stress-free practice.",
      mockupImage: worktimiggruphalf,
      mockupImage2: worktimimghalf2,
      layout: 'right',
      useIconContainer: true,
      iconContainer: iconcontaines
    }
  ];

  return (
    <section className="whydoctors-section">
      <div className="whydoctors-container">
        <h2 className="whydoctors-title">
          Why Doctors Choose Us?
        </h2>
        <p className="whydoctors-subtitle">
          Unlock the Benefits of Smarter Healthcare Management and Patient Care
        </p>
        
        <div className="features-wrapper">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              cardId={feature.cardId}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              mockupImage={feature.mockupImage}
              mockupImage2={feature.mockupImage2}
              layout={feature.layout}
              highlightText={feature.highlightText}
              showIcon={feature.showIcon}
              useIconContainer={feature.useIconContainer}
              iconContainer={feature.iconContainer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDoctors;
