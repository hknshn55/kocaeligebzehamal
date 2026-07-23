import { siteData } from "../data/siteData";

function WorkSteps() {
  return (
    <section className="section work-steps-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">Nasıl çalışıyoruz?</span>

          <h2>Dört adımda taşıma işinizi tamamlıyoruz</h2>

          <p>
            Taşıma sürecini karmaşıklaştırmadan, iletişimden teslimata kadar
            düzenli ve anlaşılır şekilde ilerliyoruz.
          </p>
        </div>

        <div className="work-steps-grid">
          {siteData.steps.map((step, index) => (
            <article className="work-step-card" key={step.number}>
              <div className="work-step-number">{step.number}</div>

              <div className="work-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              {index < siteData.steps.length - 1 && (
                <span className="work-step-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSteps;