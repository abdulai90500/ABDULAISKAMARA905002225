export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-brand">AbdulaiFolio</span>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} <strong>Abdulai S. Kamara</strong>. All Rights Reserved.
          </p>
          <p className="footer-copy" style={{ fontSize: "0.8rem" }}>
            Designed &amp; Built with ❤️ by Abdulai
          </p>
        </div>
      </div>
    </footer>
  );
}
