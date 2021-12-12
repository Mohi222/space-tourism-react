import Image from 'next/image';
import { useEffect, useState } from 'react';

import Dot from '../components/Dot';
import ExploreBtn from '../components/ExploreBtn';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Space from '../components/Space';
import Text from '../components/Text';
import useData from '../hooks/useData';

export default function Crew() {
  const crewData = useData('crew');
  const [activeSlider, setActiveSlider] = useState(0);
  const sliderChangeHandler = (slider) => {
    setActiveSlider(slider);
  };
  useEffect(() => {
    const nextSlide = () => {
      setActiveSlider((activeSlider + 1) % 4);
    };
    const interval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [activeSlider]);
  console.log(crewData);
  return (
    <div className="crew container flex column center apart fill">
      <Header />
      <Space h="2rem" />
      <main>
        <div className="flex mobileCenter" style={{ gridArea: 'title' }}>
          <Heading size="400" family="cond" spacing="1" number="02">
            Meet your crew
          </Heading>
        </div>
        <div
          className="flex column center"
          style={{ gridArea: 'image', '--flex-gap': 0 }}
        >
          <div className="image-container">
            <Image
              src={crewData[activeSlider].images.png}
              alt={crewData[activeSlider].name}
              layout="responsive"
              width={436}
              height={645}
            />
          </div>
          <Space w="100%" h=".2rem" fill="hsl(var(--color-white) / 0.05)" />
        </div>
        <div style={{ gridArea: 'text' }}>
          <div className="flex column center desktopLeft">
            <div>
              <Heading size="400" color="role" family="serif">
                {crewData[activeSlider].role}
              </Heading>
              <Text size="600" family="serif">
                {crewData[activeSlider].name}
              </Text>
              <Text family="sans">{crewData[activeSlider].bio}</Text>
            </div>
          </div>
        </div>
        <div style={{ gridArea: 'dots' }}>
          <Dot.Slider active={{ activeSlider, sliderChangeHandler }}>
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </Dot.Slider>
        </div>
      </main>
    </div>
  );
}
