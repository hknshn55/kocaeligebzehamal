import { siteData } from "../data/siteData";

const serviceIcons = ["🏠", "🏢", "📦", "🛋️", "🏬", "🪜"];

function Services() {
  return (
    <section className="section services-section" id="hizmetler">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">Hizmetlerimiz</span>

          <h2>Taşıma işiniz ne olursa olsun yanınızdayız</h2>

          <p>
            Evden ofise, depodan parça eşyaya kadar farklı ihtiyaçlarınız için
            hızlı ve dikkatli taşıma desteği sunuyoruz.
          </p>
        </div>

        <div className="services-grid">
          {siteData.services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-top">
                <span className="service-icon" aria-hidden="true">
                  {serviceIcons[index]}
                </span>

                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#iletisim" className="service-link">
                Bize ulaşın
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;