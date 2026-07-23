import { siteData } from "../data/siteData";

function MobileActions() {
  return (
    <div className="mobile-actions" aria-label="Hızlı iletişim">
      <a
        className="mobile-action mobile-action-whatsapp"
        href={siteData.whatsappLink}
        target="_blank"
        rel="noreferrer"
      >
        <span aria-hidden="true">💬</span>
        <strong>WhatsApp</strong>
      </a>

      <a
        className="mobile-action mobile-action-call"
        href={siteData.phoneLink}
      >
        <span aria-hidden="true">☎</span>
        <strong>Hemen Ara</strong>
      </a>
    </div>
  );
}

export default MobileActions;