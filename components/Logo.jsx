import Image from 'next/image';

import LogoImage from '../public/assets/shared/logo.svg';

const Logo = () => (
  <div className="logo">
    <Image src={LogoImage} alt="site logo" />
  </div>
);

export default Logo;
