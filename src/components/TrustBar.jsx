import { siteData } from "../data/siteData";

function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Hizmet avantajları">
      <div className="container trust-bar-grid">
        {siteData.trustItems.map((item, index) => (
          <div className="trust-item" key={item}>
            <span className="trust-icon" aria-hidden="true">
              {index === 0 && "●"}
              {index === 1 && "✓"}
              {index === 2 && "⚡"}
              {index === 3 && "₺"}
            </span>

            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBar;