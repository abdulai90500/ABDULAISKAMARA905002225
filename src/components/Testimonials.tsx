import Image from "next/image";

const testimonials = [
  {
    name: "Sani Abdulai",
    role: "Business Owner",
    avatar: "/img/testimonial-2.jpg",
    text: "Your work is so amazing! The flyer you designed for me is so classic and professional. I couldn't be happier with the result.",
    stars: 5,
  },
  {
    name: "Marta Socrate",
    role: "Startup Founder",
    avatar: "/img/testimonial-4.jpg",
    text: "Everyone appreciates how interactive and classic the website you designed for us looks. Truly outstanding craftsmanship!",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="container testimonials-inner">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">Real feedback from real clients who trusted my work.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <Image src={t.avatar} alt={t.name} width={48} height={48} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-stars">{"★".repeat(t.stars)}</div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
