const Slider = ({ children }) => (
  <div className="flex center" style={{ '--flex-gap': '2rem' }}>
    {children}
  </div>
);

const Dot = ({ active = false }) => (
  <button
    type="button"
    className={`dot ${active ? 'active' : ''}`}
    aria-hidden="true"
    aria-label=""
  />
);

Dot.Slider = Slider;
export default Dot;
