export default function Section({ children, wide = false }) {
  return (
    <div className="section">
      <div className="section__column">{children}</div>
    </div>
  );
}
