import { siteData } from "../data/siteData";

function ServiceAreas() {
  return (
    <section className="section service-areas-section" id="bolgeler">
      <div className="container service-areas-layout">
        <div className="service-areas-content">
          <span className="section-eyebrow">Hizmet bölgelerimiz</span>

          <h2>İstanbul’un birçok noktasında yanınızdayız</h2>

          <p>
            Anadolu Yakası başta olmak üzere farklı ilçelerde ev, ofis, depo
            ve parça eşya taşıma hizmeti sunuyoruz.
          </p>

          <div className="service-area-tags">
            {siteData.serviceAreas.map((area) => (
              <span className="service-area-tag" key={area}>
                <span aria-hidden="true">✓</span>
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="service-areas-card">
          <span className="service-areas-card-label">Bulunduğunuz bölgeyi sorun</span>

          <h3>Listenizde ilçeniz görünmüyor mu?</h3>

          <p>
            Hizmet durumunu öğrenmek için bizi arayın veya WhatsApp üzerinden
            konumunuzu paylaşın.
          </p>

          <a
            className="button button-primary"
            href={siteData.whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp’tan Sorun
          </a>

          <a className="service-areas-phone" href={siteData.phoneLink}>
            {siteData.phoneText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServiceAreas;