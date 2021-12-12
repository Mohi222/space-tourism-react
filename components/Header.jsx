import Logo from './Logo';
import Nav from './Nav';

const Header = ({ page }) => (
  <header className="flex apart" style={{ '--flex-gap': '0' }}>
    <Logo />
    <Nav>
      <Nav.Text number="00" href="/" className="nav-home">
        Home
      </Nav.Text>
      <Nav.Text number="01" href="/destination" className="nav-destination">
        Destinations
      </Nav.Text>
      <Nav.Text number="02" href="/crew" className="nav-crew">
        Crew
      </Nav.Text>
      <Nav.Text number="03" href="/technology" className="nav-technology">
        Technology
      </Nav.Text>
    </Nav>
  </header>
);

export default Header;
