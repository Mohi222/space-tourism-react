const Text = ({
  children,
  size = '400',
  family = 'serif',
  color = 'white',
  uppercase = false,
  spacing = '0',
  number = '',
  className = '',
}) => {
  const classes = [`fs-${size}`, family, `text-${color}`];
  if (uppercase) classes.push('uppercase');
  if (spacing !== '0') classes.push(`ls-${spacing}`);
  classes.push(className);
  return (
    <p className={classes.join(' ')}>
      {number && <span className="number">{number}</span>} {children}
    </p>
  );
};

export default Text;
