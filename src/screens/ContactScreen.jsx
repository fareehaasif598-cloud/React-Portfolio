import { profile } from '../data/profile.js';
import KeyButton from '../components/KeyButton.jsx';
import Reveal from '../components/Reveal.jsx';
import ContactForm from '../components/ContactForm.jsx';

export default function ContactScreen() {
  const { email, links } = profile;

  return (
    <div className="wrap">
      <Reveal once>
        <div className="section-head">
          <span className="eyebrow">Say hi</span>
          <h2>Get In Touch</h2>
          <p className="section-desc">
            Open to junior frontend roles, internships, and freelance work. The fastest way to reach
            me is email.
          </p>
        </div>
      </Reveal>

      <Reveal once delay={120}>
        <ContactForm />
      </Reveal>

      <Reveal once delay={200}>
        <div className="contact-actions">
          <KeyButton as="a" variant="ghost" href={`mailto:${email}`}>
            Email Me
          </KeyButton>

          <KeyButton
            as="a"
            variant="ghost"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </KeyButton>

          {links.linkedin && (
            <KeyButton
              as="a"
              variant="ghost"
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </KeyButton>
          )}

          {links.resume && (
            <KeyButton as="a" variant="ghost" href={links.resume}>
              Resume
            </KeyButton>
          )}
        </div>
      </Reveal>

      <Reveal once delay={260}>
        <p className="section-desc" style={{ marginTop: '32px' }}>
          {email}
        </p>
      </Reveal>
    </div>
  );
}