import Image from "next/image";

const works = [
  { img: "/img/work-1.jpg", title: "Visionary Security", category: "Web App", date: "2024", link: "https://visionary-security.vercel.app/" },
  { img: "/img/work-2.jpg", title: "BAH Management", category: "Web App", date: "2024", link: "https://bahmanagement-e2lv.vercel.app/" },
  { img: "/img/work-3.jpg", title: "JTechn", category: "Web App", date: "2024", link: "https://jtechn-p6k5.vercel.app/" },
  { img: "/img/work-4.jpg", title: "Fuel System", category: "Web App", date: "2024", link: "https://fuel-1c1t.vercel.app/login" },
  { img: "/img/work-5.jpg", title: "Online Voting System", category: "Web App", date: "2024", link: "https://voting-online-ruddy.vercel.app/" },
  { img: "/img/work-6.jpg", title: "Data Analyst HRM", category: "Data Analysis", date: "2024", link: "https://github.com/abdulai90500/data-analyst-HRM" },
];

export default function Portfolio() {
  return (
    <section id="work" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">My Work</h2>
          <p className="section-subtitle">A showcase of selected projects and creative work.</p>
        </div>
        <div className="portfolio-grid">
          {works.map((w) => (
            <a href={w.link} target="_blank" rel="noopener noreferrer" className="portfolio-item" key={w.title} style={{ display: 'block' }}>
              <Image src={w.img} alt={w.title} width={400} height={240} className="portfolio-img" />
              <div className="portfolio-overlay">
                <div className="portfolio-plus"><i className="fas fa-link" /></div>
                <h3 className="portfolio-title">{w.title}</h3>
                <div className="portfolio-meta">
                  <span className="portfolio-cat">{w.category}</span>
                  <span>·</span>
                  <span>{w.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
