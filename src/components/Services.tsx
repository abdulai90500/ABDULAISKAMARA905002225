const services = [
  { icon: "fas fa-chart-line", name: "Data Analyst", desc: "Transforming complex data into actionable insights using tools like Power BI, Excel, and SQL." },
  { icon: "fas fa-laptop-code", name: "Web Application", desc: "Full-stack web applications built with modern technologies and best practices." },
  { icon: "fas fa-database", name: "Data Engineer", desc: "Designing and implementing robust data systems and pipelines for effective analysis." },
  { icon: "fas fa-tasks", name: "Project Management", desc: "Managing technical projects effectively across public and private sectors." },
  { icon: "fas fa-mobile-alt", name: "Responsive Design", desc: "Mobile-first designs that look perfect on every screen size and device." },
  { icon: "fas fa-search", name: "Research", desc: "Conducting field research and delivering data-driven solutions." },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I Offer</span>
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">Look at the range of professional services I provide below.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.name}>
              <div className="service-icon"><i className={s.icon} /></div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
