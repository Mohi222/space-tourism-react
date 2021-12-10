import Space from './Space';

const Section = ({ title, number, children }) => (
  <section>
    <h2 className="title fs-500 condensed uppercase ls-1">
      {number && <span className="number">{number}</span>} {title}
    </h2>
    <Space h="2rem" />
    <div className="flex grow">{children}</div>
  </section>
);

export default Section;
