import ExploreBtn from '../components/ExploreBtn';
import Heading from '../components/Heading';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Space from '../components/Space';
import Text from '../components/Text';

export default function Home() {
  return (
    <div className="home container flex column center apart fill">
      <header className="flex apart" style={{ '--flex-gap': '0' }}>
        <Logo />
        <Nav>
          <Nav.Text number="00" active>
            Home
          </Nav.Text>
          <Nav.Text number="01">Destinations</Nav.Text>
          <Nav.Text number="02">Crew</Nav.Text>
          <Nav.Text number="03">Technology</Nav.Text>
        </Nav>
      </header>
      <Space h="2rem" />
      <main className="flex center" style={{ '--flex-gap': '2rem' }}>
        {/* I donno why but when using Text component, the font-size is not working */}
        <div className="flex column center" style={{ '--flex-gap': '0rem' }}>
          <Heading size="500">So, you want to travel to</Heading>
          <Heading size="900">Space</Heading>
          <Text family="sans">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Text>
        </div>
        <ExploreBtn />
      </main>
    </div>
  );
}
