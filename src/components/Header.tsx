import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1 className="logo-custom">Viajar&Pintar</h1>
    <nav className="text-center nav-custom">
      <Link to="/">ROUTES</Link>
      <Link to="/events">EVENTS</Link>
      <Link to="/journal">JOURNAL</Link>
      <Link to="/about">ABOUT</Link>
    </nav>
  </header>
);

export default Header;