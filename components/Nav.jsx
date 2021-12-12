import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import HamburgerIcon from '../public/assets/shared/icon-hamburger.svg';
import Text from './Text';

const Nav = ({ children }) => {
  const [shown, setShown] = useState(false);
  const toggleHandler = () => setShown(!shown);
  return (
    <div>
      <ul className={`main-nav flex ${shown ? 'shown' : ''}`}>{children}</ul>
      <MobileToggle onClick={toggleHandler} />
    </div>
  );
};

const NavText = ({ children, number, active = false, href }) => (
  <li className={`${active ? 'active' : ''}`}>
    <Link href={href || '#'}>
      <a>
        <Text
          size="400"
          uppercase="true"
          family="cond"
          color="accent"
          spacing="1"
        >
          {number && <span className="number text-white">{number}</span>}{' '}
          {children}
        </Text>
      </a>
    </Link>
  </li>
);

Nav.Text = NavText;

const MobileToggle = ({ onClick }) => {
  return (
    <button className="nav-toggle" type="button" onClick={onClick}>
      <Image src={HamburgerIcon} width={24} height={24} />
    </button>
  );
};

Nav.MobileToggle = MobileToggle;
export default Nav;
