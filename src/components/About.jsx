import heroImage from "../assets/hero.png";
import { siteData } from "../data/siteData";

function About() {
  return (
    <section className="section about-section" id="hakkimizda">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-image-wrapper">
            <img
              src={heroImage}
              alt="Eşya taşıma hizmeti sunan profesyonel ekip"
            />

            <div className="about-badge">
              <strong>Güvenli Taşıma</strong>
              <span>Eşyalarınıza özen gösteriyoruz</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-eyebrow">Neden bizi tercih etmelisiniz?</span>

          <h2>Eşyalarınızı kendi eşyamız gibi dikkatle taşıyoruz</h2>

          <p>
            Taşıma işlerinde yalnızca güç değil; dikkat, zamanlama ve ekip
            uyumu da önemlidir. Deneyimli ekibimizle taşıma sürecini hızlı,
            düzenli ve güvenilir şekilde tamamlıyoruz.
          </p>

          <div className="advantage-list">
            {siteData.advantages.map((advantage) => (
              <div className="advantage-item" key={advantage}>
                <span className="advantage-check" aria-hidden="true">
                  ✓
                </span>

                <span>{advantage}</span>
              </div>
            ))}
          </div>

          <div className="about-actions">
            <a
              className="button button-primary"
              href={siteData.whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp’tan Bilgi Alın
            </a>

            <a className="about-phone-link" href={siteData.phoneLink}>
              <small>Telefon</small>
              <strong>{siteData.phoneText}</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;