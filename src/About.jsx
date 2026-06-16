

import './About.css'

function About() {
  return (
    <main className="about-page">
      <section className="hero">
        <div className="hero-inner">
          <h1>About Our App</h1>
          <p className="lead">We build delightful experiences that help users discover and buy what they love.</p>
          <a className="cta" href="/products">Browse Products</a>
        </div>
        <div className="hero-image" aria-hidden>
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop" alt="team working" />
        </div>
      </section>

      <section className="values container">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="card">
            <h3>Customer First</h3>
            <p>We listen and iterate quickly to build value for our users.</p>
          </div>
          <div className="card">
            <h3>Quality</h3>
            <p>Well-crafted UI, fast performance and reliable behaviour.</p>
          </div>
          <div className="card">
            <h3>Transparency</h3>
            <p>Clear communication and honest product decisions.</p>
          </div>
        </div>
      </section>

      <section className="team container">
        <h2>Meet The Team</h2>
        <div className="team-grid">
          <article className="member">
            <img src="https://i.pravatar.cc/150?img=12" alt="Member avatar" />
            <h4>Alex Morgan</h4>
            <p>Product Designer</p>
          </article>
          <article className="member">
            <img src="https://i.pravatar.cc/150?img=32" alt="Member avatar" />
            <h4>Priya Singh</h4>
            <p>Frontend Engineer</p>
          </article>
          <article className="member">
            <img src="https://i.pravatar.cc/150?img=48" alt="Member avatar" />
            <h4>Sam Lee</h4>
            <p>Engineering Lead</p>
          </article>
        </div>
      </section>

      <section className="contact container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Your name" aria-label="name" />
          <input placeholder="Email" aria-label="email" />
          <textarea placeholder="Message" aria-label="message" />
          <button className="btn">Send Message</button>
        </form>
      </section>
    </main>
  )
}

export default About