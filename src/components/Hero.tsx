"use client";
import { useEffect, useRef, useState } from "react";

const roles = ["Data Analyst", "Data Engineer", "Web Application Developer", "Project Manager", "Researcher"];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 50 : 100;
    timerRef.current = setTimeout(() => {
      if (!deleting) {
        setTypedText(current.slice(0, typedText.length + 1));
        if (typedText.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setTypedText(current.slice(0, typedText.length - 1));
        if (typedText.length - 1 === 0) {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [typedText, deleting, roleIdx]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-glow" />
      <div className="hero-glow-2" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge fade-in">
            <span className="hero-badge-dot" />
            Available for freelance work
          </div>
          <h1 className="hero-title fade-in fade-in-delay-1">
            <span>Hi, I&apos;m</span>
            <span className="gradient-text">Abdulai S. Kamara</span>
          </h1>
          <div className="hero-typed-wrapper fade-in fade-in-delay-2">
            <span className="hero-typed-prefix">I am a </span>
            <span className="typed-text">{typedText}</span>
            <span className="typed-cursor">|</span>
          </div>
          <div className="hero-actions fade-in fade-in-delay-3">
            <button className="btn-primary" onClick={() => scrollTo("work")}>
              <i className="fas fa-eye" /> View My Work
            </button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>
              <i className="fas fa-paper-plane" /> Get In Touch
            </button>
          </div>
          <div className="hero-stats fade-in">
            <div>
              <div className="hero-stat-num">30+</div>
              <div className="hero-stat-label">Projects Done</div>
            </div>
            <div>
              <div className="hero-stat-num">30+</div>
              <div className="hero-stat-label">Happy Clients</div>
            </div>
            <div>
              <div className="hero-stat-num">10</div>
              <div className="hero-stat-label">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
      <button className="hero-scroll" onClick={() => scrollTo("about")}>
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down" />
      </button>
    </section>
  );
}
