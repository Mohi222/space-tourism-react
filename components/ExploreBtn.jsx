import Text from './Text';

const ExploreBtn = ({ href = '#' }) => (
  <a href={href} className="explore-btn bg-white">
    <Text size="600" color="dark" uppercase>
      Explore
    </Text>
  </a>
);

export default ExploreBtn;
