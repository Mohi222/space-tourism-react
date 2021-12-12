import { cloneElement } from 'react';

const Slider = ({
  children,
  active: { activeSlider, sliderChangeHandler },
}) => (
  <div className="flex center" style={{ '--flex-gap': '2rem' }}>
    {children.map((child, i) => (
      <>
        {cloneElement(child, {
          active: i === activeSlider,
          clickHandler: () => sliderChangeHandler(i),
        })}
      </>
    ))}
  </div>
);

const Dot = ({ active = false, clickHandler }) => (
  <button
    type="button"
    className={`dot ${active ? 'active' : ''}`}
    aria-hidden="true"
    aria-label=""
    onClick={clickHandler}
  />
);

Dot.Slider = Slider;
export default Dot;
