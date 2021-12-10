import Heading from './Heading.jsx';

const Nav = ({ children }) => (
  <ul className="main-nav flex center" style={{ '--flex-gap': '8rem' }}>
    {children}
  </ul>
);

const Text = ({ children, number, active = false }) => (
  <li className={`${active ? 'active' : ''}`}>
    <Heading size="500">
      {number && <span className="number text-white">{number}</span>} {children}
    </Heading>
  </li>
);

Nav.Text = Text;
export default Nav;
