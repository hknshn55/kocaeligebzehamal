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

function ContactCta() {
  return (
    <section className="contact-cta-section" id="iletisim">
      <div className="container">
        <div className="contact-cta-card">
          <div className="contact-cta-content">
            <span className="contact-cta-eyebrow">
              Hızlıca iletişime geçin
            </span>

            <h2>Taşıma işiniz için güvenilir bir ekip mi arıyorsunuz?</h2>

            <p>
              Bizi arayın veya taşınacak eşyaların fotoğraflarını WhatsApp
              üzerinden gönderin. İşin detaylarını birlikte planlayalım.
            </p>
          </div>

          <div className="contact-cta-actions">
            <a
              className="button contact-whatsapp-button"
              href={siteData.whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <span className="button-icon">
                <MessageIcon />
              </span>

              WhatsApp’tan Yazın
            </a>

            <a
              className="button contact-call-button"
              href={siteData.phoneLink}
            >
              <span className="button-icon">
                <PhoneIcon />
              </span>

              <span>
                <small>Hemen arayın</small>
                <strong>{siteData.phoneText}</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="contact-location-grid">
          <div className="contact-info-card">
            <span className="section-eyebrow">İletişim ve konum</span>

            <h2>Bize ulaşın</h2>

            <p>
              Gebze ve Kocaeli çevresindeki hamal ve taşıma işleriniz için
              haftanın her günü iletişime geçebilirsiniz.
            </p>

            <div className="contact-info-list">
              <a href={siteData.phoneLink} className="contact-info-item">
                <span className="contact-info-icon">
                  <PhoneIcon />
                </span>

                <span>
                  <small>Telefon</small>
                  <strong>{siteData.phoneText}</strong>
                </span>
              </a>

              <a
                href={siteData.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="contact-info-item"
              >
                <span className="contact-info-icon">
                  <MessageIcon />
                </span>

                <span>
                  <small>WhatsApp</small>
                  <strong>Mesaj gönderin</strong>
                </span>
              </a>

              <a
                href={siteData.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="contact-info-item"
              >
                <span className="contact-info-icon">
                  <MapPinIcon />
                </span>

                <span>
                  <small>Hizmet merkezi</small>
                  <strong>{siteData.address}</strong>
                </span>
              </a>

              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <ClockIcon />
                </span>

                <span>
                  <small>Çalışma zamanı</small>
                  <strong>Haftanın 7 günü</strong>
                </span>
              </div>
            </div>

            <a
              className="button button-primary contact-directions-button"
              href={siteData.mapsLink}
              target="_blank"
              rel="noreferrer"
            >
              <MapPinIcon />
              Google Haritalar’da Aç
            </a>
          </div>

          <div className="contact-map-card">
            <iframe
              src={siteData.mapsEmbedUrl}
              title={`${siteData.brandName} konumu`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="contact-map-badge">
              <span>
                <MapPinIcon />
              </span>

              <span>
                <small>Hizmet merkezi</small>
                <strong>{siteData.address}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCta;