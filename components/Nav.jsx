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

const NavText = ({ children, number, href, className }) => (
  <li className={className}>
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

const MobileToggle = ({ onClick }) => (
  <button className="nav-toggle" type="button" onClick={onClick}>
    <Image src={HamburgerIcon} width={24} height={24} alt="" />
  </button>
);

Nav.MobileToggle = MobileToggle;
export default Nav;
