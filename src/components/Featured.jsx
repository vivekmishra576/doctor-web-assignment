import './Featured.css';
import times from '../images/times.png';
import yours from '../images/yours.png';
import travel from '../images/travel.png';
import living from '../images/living.png';
import fashio from '../images/fashio.png';
import gqq from '../images/gqq.png';
import lifesty from '../images/lifesty.png';
import vgue from '../images/vgue.png';
import forbes from '../images/forbes.png';

const Featured = () => {
  const logos = [
    { src: times, alt: 'The Times of India' },
    { src: yours, alt: 'YourStory' },
    { src: travel, alt: 'Conde Nast Traveller' },
    { src: living, alt: 'Living etc' },
    { src: fashio, alt: 'The Voice of Fashion' },
    { src: gqq, alt: 'GQ' },
    { src: lifesty, alt: 'Lifestyle Asia' },
    { src: vgue, alt: 'Vogue' },
    { src: forbes, alt: 'Forbes 30' }
  ];

  return (
    <section className="w-full bg-[#FFF8E6]">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="featured-title">
          Featured
        </h2>
        <p className="featured-subtitle mb-12">
          Recognized and celebrated by leading publications – Amrutam in the spotlight!
        </p>
        <div className="flex items-center justify-center gap-3 mx-auto">
          {logos.map((logo, index) => (
            <div key={index} className="logo-container">
              <img 
                src={logo.src} 
                alt={logo.alt}
                className="logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
