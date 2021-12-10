import Head from 'next/head';

import ColorBox from '../components/ColorBox';
import Dot from '../components/Dot';
import ExploreBtn from '../components/ExploreBtn';
import Heading from '../components/Heading';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import NumberSlider from '../components/NumberSlider';
import Section from '../components/Section';
import Space from '../components/Space';
import Tab from '../components/Tab';
import Text from '../components/Text';

const design = () => (
  <div>
    <Head>
      <title>Design system</title>
    </Head>
    <header>
      <Space h="2rem" />
      <div className="flex apart">
        <Logo />
        <Heading size="500">Design System</Heading>
      </div>
      <Space h="4rem" />
    </header>
    <Section title="colors" number="01">
      <ColorBox hex="#0B0D17" rgb="11, 13, 23" hsl="230°, 35%, 7%" />
      <ColorBox hex="#D0D6F9" rgb="208, 214, 249" hsl="231°, 77%, 90%" />
      <ColorBox hex="#FFFFFF" rgb="255, 255, 255" hsl="0°, 0%, 100%" />
    </Section>
    <Space h="4rem" />
    <Section title="typography" number="02">
      <div className="flow">
        <div>
          <Text color="accent">Heading 1 - Bellefair Regular - 150px</Text>
          <Heading size="900">Earth</Heading>
        </div>
        <div>
          <Text color="accent">Heading 2 - Bellefair Regular - 100px</Text>
          <Heading size="800">Venus</Heading>
        </div>
        <div>
          <Text color="accent">Heading 3 - Bellefair Regular - 56px</Text>
          <Heading size="700">Jupiter & Saturn</Heading>
        </div>
        <div>
          <Text color="accent">Heading 4 - Bellefair Regular - 32px</Text>
          <Heading size="600">Uranus, Neptune, & Pluto</Heading>
        </div>
        <div>
          <Text color="accent">
            Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space
          </Text>
          <Heading size="500">So, you want to travel to space</Heading>
        </div>
      </div>

      <div className="flow">
        <div>
          <Text color="accent">Subheading 1 - Bellefair Regular - 28px</Text>
          <Heading size="600">384,400 km</Heading>
        </div>
        <div>
          <Text color="accent">
            Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
            Space
          </Text>
          <Text family="cond" spacing="3" className="small">
            Avg. Distance
          </Text>
        </div>
        <div>
          <Text color="accent">
            Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
          </Text>
          <Text family="cond" spacing="2">
            Europa
          </Text>
        </div>
        <div>
          <Text color="accent">Body Text</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi.
          </Text>
        </div>
      </div>
    </Section>
    <Space h="4rem" />
    <Section title="interactive elements" number="03">
      <div>
        <div className="flex column center">
          <Nav>
            <Nav.Text number="00" active>
              Active
            </Nav.Text>
            <Nav.Text number="01">Hover</Nav.Text>
            <Nav.Text number="02">Idle</Nav.Text>
          </Nav>
          <Text>Different States of Navigation Bar</Text>
        </div>
        <Space h="4rem" />

        <div className="flex center apart">
          <ExploreBtn />
          <div className="flex center column">
            <Tab>
              <Tab.Button active>Moon</Tab.Button>
              <Tab.Button>Mars</Tab.Button>
              <Tab.Button>Europa</Tab.Button>
            </Tab>
            <Space h="2rem" />

            <Dot.Slider>
              <Dot active />
              <Dot />
              <Dot />
            </Dot.Slider>
            <Space h="2rem" />

            <NumberSlider>
              <NumberSlider.Button active />
              <NumberSlider.Button />
              <NumberSlider.Button />
            </NumberSlider>
          </div>
        </div>
      </div>
    </Section>
    <Space h="20vh" />
  </div>
);

export default design;
