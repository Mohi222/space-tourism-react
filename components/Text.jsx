const Text = ({
  children,
  size = '400',
  family = 'serif',
  color = 'black',
  uppercase = false,
  spacing = '0',
  className = '',
}) => {
  const classes = [`fs-${size}`, family, `text-${color}`];
  if (uppercase) classes.push('uppercase');
  if (spacing !== '0') classes.push(`ls-${spacing}`);
  classes.push(className);
  return <p className={classes.join(' ')}>{children}</p>;
};

export default Text;
