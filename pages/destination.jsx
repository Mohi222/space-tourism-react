import Image from 'next/image';
import { useEffect, useState } from 'react';

import ExploreBtn from '../components/ExploreBtn';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Space from '../components/Space';
import Tab from '../components/Tab';
import Text from '../components/Text';
import useData from '../hooks/useData';

export default function Destination() {
  const plantsData = useData('destinations');
  const [activeTab, setActiveTab] = useState(0);
  const tabChangeHandler = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="destination container flex column apart fill">
      <Header />
      <Space h="2rem" />
      <div className="pageTitle flex mobileCenter">
        <Heading size="400" family="cond" spacing="1" number="01">
          Pick your destination
        </Heading>
      </div>
      <Space h="1rem" />

      <main className="flex center apart" style={{ '--flex-gap': '2rem' }}>
        <div className="image-container">
          <Image
            src={plantsData[activeTab].images.png}
            alt={plantsData[activeTab].name}
            layout="responsive"
            width={445}
            height={445}
          />
        </div>
        <div className="flex column center">
          <Tab active={{ activeTab, tabChangeHandler }}>
            <Tab.Button>Moon</Tab.Button>
            <Tab.Button>Mars</Tab.Button>
            <Tab.Button>Europa</Tab.Button>
            <Tab.Button>Titan</Tab.Button>
          </Tab>
          <div className="flex column center">
            <Heading size="900">{plantsData[activeTab].name}</Heading>
            <Text family="sans">{plantsData[activeTab].description}</Text>
          </div>
          <Space w="100%" fill="hsl(var(--color-white) / .25)" />
          <div className="flex mobileColumn center desktopLeft">
            <div>
              <Heading size="500">AVG. Distance</Heading>
              <Heading size="600">{plantsData[activeTab].distance}</Heading>
            </div>
            <div>
              <Heading size="500">EST. Travel Time</Heading>
              <Heading size="600">{plantsData[activeTab].travel}</Heading>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
