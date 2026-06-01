"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const skills = [
  { name: "HTML5", pct: 85 },
  { name: "CSS3 / SCSS", pct: 75 },
  { name: "JavaScript", pct: 90 },
  { name: "PHP", pct: 50 },
  { name: "Python", pct: 40 },
  { name: "React / Next.js", pct: 80 },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !animated) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [animated]);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          {/* Image side */}
          <div className="about-image-wrapper">
            <div className="about-image-frame">
              <Image src="/img/2.jpg" alt="Abdulai S. Kamara" width={500} height={420} style={{ objectFit: "cover", height: "420px", width: "100%" }} />
            </div>
            <div className="about-badge">
              <span className="about-badge-icon">🎓</span>
              <div>
                <div className="about-badge-title">Limkokwing University</div>
                <div className="about-badge-text">BSc Information Technology</div>
              </div>
            </div>
          </div>
          {/* Info side */}
          <div>
            <div className="section-header" style={{ textAlign: "left", marginBottom: 32 }}>
              <span className="section-tag">About Me</span>
              <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)" }}>
                Passionate Developer &amp; Designer
              </h2>
            </div>
            <p className="about-desc">
              Results-driven Research, Data Analytics, Project Management, and Software Developer. A graduate with a BSc Hons in Information Technology and a professional with 3+ years of hands-on experience designing and implementing data systems, conducting field research, and managing technical projects across the public and private sectors.
            </p>
            <p className="about-desc">
              Proven ability to translate complex data into actionable insights using tools such as Power BI, Excel, Python, and SQL. Experienced in training and mentoring junior professionals in technical environments. Passionate about empowering the next generation of Sierra Leonean development practitioners through practical, industry-aligned education.
            </p>
            <div className="about-info">
              <div className="about-info-item">
                <span className="about-info-label">Name</span>
                <span className="about-info-value">Abdulai S. Kamara</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Role</span>
                <span className="about-info-value">Full Stack Developer</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Email</span>
                <span className="about-info-value">abdulaiskamara4@gmail.com</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Phone</span>
                <span className="about-info-value">+232 99 096 245</span>
              </div>
            </div>
            <p className="skills-title">Technical Skills</p>
            {skills.map((s) => (
              <div className="skill" key={s.name}>
                <div className="skill-header">
                  <span>{s.name}</span>
                  <span className="skill-pct">{s.pct}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: animated ? `${s.pct}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
