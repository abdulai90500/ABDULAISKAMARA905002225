import Image from "next/image";
import Link from "next/link";

const posts = [
  { img: "/img/post-1.jpg", category: "Travel", title: "See More Ideas About Travel", author: "Abdulai Kamara", avatar: "/img/testimonial-2.jpg", read: "10 min" },
  { img: "/img/post-2.jpg", category: "Web Design", title: "Modern Web Design Trends 2024", author: "Abdulai Kamara", avatar: "/img/testimonial-2.jpg", read: "8 min" },
  { img: "/img/post-3.jpg", category: "Web Design", title: "Building Responsive Layouts", author: "Abdulai Kamara", avatar: "/img/testimonial-2.jpg", read: "12 min" },
];

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Blog</span>
          <h2 className="section-title">Recent Articles</h2>
          <p className="section-subtitle">Thoughts, tutorials and insights from my latest blog posts.</p>
        </div>
        <div className="blog-grid">
          {posts.map((p) => (
            <article className="blog-card" key={p.title}>
              <div className="blog-img-wrapper">
                <Image src={p.img} alt={p.title} width={400} height={200} className="blog-img" />
                <span className="blog-category">{p.category}</span>
              </div>
              <div className="blog-body">
                <h3 className="blog-title">
                  <Link href="/blog">{p.title}</Link>
                </h3>
              </div>
              <div className="blog-footer">
                <div className="blog-author">
                  <Image src={p.avatar} alt={p.author} width={32} height={32} className="blog-author-avatar" />
                  <span className="blog-author-name">{p.author}</span>
                </div>
                <span className="blog-read"><i className="fas fa-clock" style={{ marginRight: 4 }} />{p.read} read</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
