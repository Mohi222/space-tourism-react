import Text from './Text';

const Heading = ({
  children,
  size = '900',
  uppercase = true,
  family = 'serif',
  color = 'black',
  spacing = '0',
  number = '',
  className = '',
}) => {
  if (size === '500')
    return (
      <Text
        size="500"
        uppercase={uppercase}
        family="cond"
        color="accent"
        spacing="1"
        className={className}
        number={number}
      >
        {children}
      </Text>
    );
  return (
    <Text
      size={size}
      uppercase={uppercase}
      family={family}
      color={color}
      spacing={spacing}
      className={className}
      number={number}
    >
      {children}
    </Text>
  );
};

export default Heading;
