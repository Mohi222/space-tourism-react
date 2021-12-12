import Image from 'next/image';
import { useEffect, useState } from 'react';

import Dot from '../components/Dot';
import ExploreBtn from '../components/ExploreBtn';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import NumberSlider from '../components/NumberSlider';
import Space from '../components/Space';
import Text from '../components/Text';
import useData from '../hooks/useData';

export default function Technology() {
  const technologyData = useData('technology');
  const [activeSlider, setActiveSlider] = useState(0);
  const sliderChangeHandler = (slider) => {
    setActiveSlider(slider);
  };
  useEffect(() => {
    const nextSlide = () => {
      setActiveSlider((activeSlider + 1) % 3);
    };
    const interval = setInterval(nextSlide, 15000);
    return () => {
      clearInterval(interval);
    };
  }, [activeSlider]);
  console.log(technologyData);
  return (
    <div className="technology container flex column center apart fill">
      <Header />
      <Space h="2rem" />
      <main>
        <div
          className="flex mobileCenter"
          style={{ gridArea: 'title', alignSelf: 'start' }}
        >
          <Heading size="400" family="cond" spacing="1" number="03">
            Space Launch 101{' '}
          </Heading>
        </div>
        <div
          className="flex column center"
          style={{ gridArea: 'image', '--flex-gap': 0 }}
        >
          <div className="image-container notDesktop">
            <Image
              src={technologyData[activeSlider].images.landscape}
              alt={technologyData[activeSlider].name}
              layout="responsive"
              width={768}
              height={310}
            />
          </div>
          <div className="image-container onlyDesktop">
            <Image
              src={technologyData[activeSlider].images.portrait}
              alt={technologyData[activeSlider].name}
              layout="responsive"
              width={515}
              height={527}
            />
          </div>
        </div>
        <div style={{ gridArea: 'text' }}>
          <div className="flex column center desktopLeft">
            <div>
              <Heading size="400" color="role" family="serif">
                The Terminology...
              </Heading>
              <Text size="600" family="serif">
                {technologyData[activeSlider].name}
              </Text>
            </div>
            <Text family="sans">
              {technologyData[activeSlider].description}
            </Text>
          </div>
        </div>
        <div style={{ gridArea: 'slider' }}>
          <NumberSlider active={{ activeSlider, sliderChangeHandler }}>
            <NumberSlider.Button active />
            <NumberSlider.Button />
            <NumberSlider.Button />
          </NumberSlider>
        </div>
      </main>
    </div>
  );
}
