import { siteData } from "../data/siteData";

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7.2 3.7 9.6 7.8a1.5 1.5 0 0 1-.3 1.8l-1.4 1.2a15.2 15.2 0 0 0 5.3 5.3l1.2-1.4a1.5 1.5 0 0 1 1.8-.3l4.1 2.4a1.5 1.5 0 0 1 .7 1.7l-.5 2A2 2 0 0 1 18.6 22C9.4 21.4 2.6 14.6 2 5.4A2 2 0 0 1 3.5 3.5l2-.5a1.5 1.5 0 0 1 1.7.7Z" />
  </svg>
);

const MessageIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5.5 4.5h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7l-4.8 3.2v-3.2H5.5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Z" />
    <path d="M7.5 11h.01" />
    <path d="M12 11h.01" />
    <path d="M16.5 11h.01" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3.2 2" />
    <path d="M12 3v1.2" />
    <path d="M21 12h-1.2" />
    <path d="M12 21v-1.2" />
    <path d="M3 12h1.2" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

function Footer() {
  const currentYear = new Date().getFullYear();

  const brandInitials = siteData.brandName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a
            className="brand footer-brand-link"
            href="#anasayfa"
            aria-label="Ana sayfaya dön"
          >
            <span className="brand-logo">{brandInitials}</span>

            <span className="brand-text">
              <strong>{siteData.brandName}</strong>
              <small>{siteData.brandTagline}</small>
            </span>
          </a>

          <p>
            Ev, ofis, depo, fabrika ve parça eşya taşıma işlerinizde hızlı,
            dikkatli ve güvenilir hamal desteği.
          </p>
        </div>

        <div className="footer-column">
          <h3>Sayfalar</h3>

          <nav className="footer-links" aria-label="Alt menü">
            <a href="#anasayfa">Ana Sayfa</a>
            <a href="#hizmetler">Hizmetlerimiz</a>
            <a href="#hakkimizda">Hakkımızda</a>
            <a href="#bolgeler">Hizmet Bölgeleri</a>
            <a href="#iletisim">İletişim</a>
          </nav>
        </div>

        <div className="footer-column">
          <h3>Hizmetler</h3>

          <div className="footer-links">
            {siteData.services.slice(0, 5).map((service) => (
              <a href="#hizmetler" key={service.title}>
                {service.title}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h3>İletişim</h3>

          <div className="footer-contact-list">
            <a href={siteData.phoneLink}>
              <span className="footer-contact-icon">
                <PhoneIcon />
              </span>

              <span>{siteData.phoneText}</span>
            </a>

            <a
              href={siteData.whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <span className="footer-contact-icon">
                <MessageIcon />
              </span>

              <span>WhatsApp’tan ulaşın</span>
            </a>

            <a
              href={siteData.mapsLink}
              target="_blank"
              rel="noreferrer"
            >
              <span className="footer-contact-icon">
                <MapPinIcon />
              </span>

              <span>{siteData.address}</span>
            </a>

            <span>
              <span className="footer-contact-icon">
                <ClockIcon />
              </span>

              <span>Haftanın 7 günü</span>
            </span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {currentYear} {siteData.brandName}. Tüm hakları saklıdır.
        </p>

        <a className="footer-back-to-top" href="#anasayfa">
          Yukarı dön
          <ArrowUpIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;