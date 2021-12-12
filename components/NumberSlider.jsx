import { cloneElement } from 'react';

import Text from './Text';

const NumberSlider = ({
  children,
  active: { activeSlider, sliderChangeHandler },
}) => (
  <div className="number-slider flex center" style={{ '--flex-gap': '2rem' }}>
    {children.map((child, i) => (
      <>
        {cloneElement(child, {
          active: i === activeSlider,
          number: i + 1,
          clickHandler: () => sliderChangeHandler(i),
        })}
      </>
    ))}
  </div>
);

const Button = ({ active = false, number, clickHandler }) => (
  <button
    type="button"
    className={` ${active ? 'active' : ''}`}
    onClick={clickHandler}
  >
    <Text size="500">{number}</Text>
  </button>
);

NumberSlider.Button = Button;
export default NumberSlider;
