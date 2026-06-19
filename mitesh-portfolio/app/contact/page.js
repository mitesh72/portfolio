import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Mitesh Uniyal",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow mono">GET IN TOUCH</span>
          <h1>Let&apos;s talk</h1>
          <p>Have a project in mind, or an opening on your team? I&apos;d love to hear about it.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap contact-grid">
          <div className="contact-info">
            <p>
              The fastest way to reach me is email — I check it daily and usually reply within a
              day or two.
            </p>
            <div className="contact-detail">
              <div className="contact-detail-item">
                <span>Email</span>
                <a href="mailto:uniyalmitesh812@gmail.com">uniyalmitesh812@gmail.com</a>
              </div>
              <div className="contact-detail-item">
                <span>Phone</span>
                <a href="tel:+918750183705">+91 87501 83705</a>
              </div>
              <div className="contact-detail-item">
                <span>Location</span>
                <span>Delhi, India</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
