import ExploreBtn from '../components/ExploreBtn';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Space from '../components/Space';
import Text from '../components/Text';

export default function Home() {
  return (
    <div className="home container flex column center apart fill">
      <Header />
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
