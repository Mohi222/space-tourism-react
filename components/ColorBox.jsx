const ColorBox = ({ hex, rgb, hsl }) => (
  <div className="colorbox flex column">
    <div className="box" style={{ '--color': hex }}>
      <p className="fs-500">{hex}</p>
    </div>

    <div>
      <p className="span-accent fs-400 sans">
        <span>RGB</span> {rgb}
      </p>
      <p className="span-accent  fs-400 sans">
        <span>HSL</span> {hsl}
      </p>
    </div>
  </div>
);

export default ColorBox;
