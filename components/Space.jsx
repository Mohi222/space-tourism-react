const Space = ({ w = 0, h = 0, fill = 'transparent' }) => (
  <div
    style={{
      width: w || '1px',
      height: h || '1px',
      backgroundColor: fill || 'transparent',
    }}
  />
);

export default Space;
