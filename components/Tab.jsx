import { cloneElement } from 'react';

import Heading from './Heading.jsx';

const Tab = ({
  children,
  active: { activeTab = 0, tabChangeHandler = () => {} },
}) => (
  <ul className="tab flex center">
    {children.map((child, i) => (
      <>
        {cloneElement(child, {
          active: i === activeTab,
          clickHandler: () => tabChangeHandler(i),
        })}
      </>
    ))}
  </ul>
);

const Button = ({ children, number, active = false, clickHandler }) => (
  <li className={`${active ? 'active' : ''}`}>
    <button type="button" onClick={clickHandler}>
      <Heading size="400" family="cond">
        {number && <span className="number text-white">{number}</span>}{' '}
        {children}
      </Heading>
    </button>
  </li>
);

Tab.Button = Button;
export default Tab;
