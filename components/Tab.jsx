import Heading from './Heading.jsx';

const Tab = ({ children }) => (
  <ul className="flex center" style={{ '--flex-gap': '4rem' }}>
    {children}
  </ul>
);

const Button = ({ children, number, active = false }) => (
  <li className={`${active ? 'active' : ''}`}>
    <button type="button">
      <Heading size="400" family="cond">
        {number && <span className="number text-white">{number}</span>}{' '}
        {children}
      </Heading>
    </button>
  </li>
);

Tab.Button = Button;
export default Tab;
