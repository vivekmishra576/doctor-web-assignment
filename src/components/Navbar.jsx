import './Navbar.css';
import icon from '../images/doctor-01-solid-standard 1.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <p className="navbar-text">
          Register Yourself As An Amrutam Doctor
        </p>
        <button className="navbar-btn">
          <img src={icon} alt="doctor-icon" className="btn-icon" />
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
