import { siteData } from "../data/siteData";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#anasayfa" aria-label="Ana sayfaya git">
          <span className="brand-logo">GH</span>

          <span className="brand-text">
            <strong>{siteData.brandName}</strong>
            <small>{siteData.brandTagline}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Ana menü">
          <a href="#anasayfa">Ana Sayfa</a>
          <a href="#hizmetler">Hizmetlerimiz</a>
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#bolgeler">Bölgeler</a>
          <a href="#iletisim">İletişim</a>
        </nav>

        <a className="header-call-button" href={siteData.phoneLink}>
          <span aria-hidden="true">☎</span>
          <span>
            <small>Hemen arayın</small>
            <strong>{siteData.phoneText}</strong>
          </span>
        </a>
      </div>
    </header>
  );
}

export default Header;