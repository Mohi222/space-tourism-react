import { cloneElement } from 'react';

import Text from './Text';

const NumberSlider = ({ children }) => (
  <div
    className="number-slider flex column center"
    style={{ '--flex-gap': '2rem' }}
  >
    {children.map((child, i) => (
      <>{cloneElement(child, { number: i + 1 })}</>
    ))}
  </div>
);

const Button = ({ active = false, number }) => (
  <button type="button" className={` ${active ? 'active' : ''}`}>
    <Text size="500">{number}</Text>
  </button>
);

NumberSlider.Button = Button;
export default NumberSlider;
