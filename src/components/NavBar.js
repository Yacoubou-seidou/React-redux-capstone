import { Link } from 'react-router-dom';
import { Gear, Mic, ChevronLeft } from 'react-bootstrap-icons';

const NavBar = () => (
  <nav className="navbar">
    <Link to="/"><ChevronLeft className="icons" /></Link>
    <h1 className="brand">Countries</h1>
    <div className="right-icon">
      <Mic className="icons" />
      <Gear className="icons" />
    </div>
  </nav>
);

export default NavBar;
