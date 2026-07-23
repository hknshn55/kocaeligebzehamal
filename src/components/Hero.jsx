import heroImage from "../assets/hero.png";
import { siteData } from "../data/siteData";

function Hero() {
  return (
    <section className="hero-section" id="anasayfa">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            {siteData.hero.eyebrow}
          </span>

          <h1>{siteData.hero.title}</h1>

          <p>{siteData.hero.description}</p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={siteData.whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp’tan Ulaşın
            </a>

            <a className="button button-secondary" href={siteData.phoneLink}>
              Hemen Arayın
            </a>
          </div>

          <div className="hero-highlights">
            <span>Aynı gün hizmet</span>
            <span>Deneyimli ekip</span>
            <span>İstanbul geneli</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src={heroImage}
              alt="Profesyonel taşıma hizmeti veren hamal ekibi"
            />

            <div className="hero-floating-card">
              <strong>Hızlı ve Güvenilir</strong>
              <span>Taşıma işleriniz için yanınızdayız.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;