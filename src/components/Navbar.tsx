"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "services", "work", "blog", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-inner">
          <a className="navbar-brand" href="#home" onClick={() => handleNavClick("#home")}>
            AbdulaiFolio
          </a>
          <div className="navbar-links">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`${active === l.href ? "active" : ""}${l.label === "Contact" ? " navbar-cta" : ""}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
