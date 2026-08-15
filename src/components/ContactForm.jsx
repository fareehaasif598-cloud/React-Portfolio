import { useState } from 'react';
import { profile } from '../data/profile.js';
import KeyButton from './KeyButton.jsx';

const emptyForm = {
  name: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const isSubmitting = status === 'submitting';

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: '',
    }));
  }

  function validateForm() {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!form.email.includes('@')) {
      nextErrors.email = 'Please enter a valid email.';
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Please enter a message.';
    } else if (form.message.trim().length < 10) {
      nextErrors.message = 'Please write at least 10 characters.';
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus('submitting');

    window.setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );

      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

      setForm(emptyForm);
      setStatus('sent');
    }, 600);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && <p className="form-error">{errors.name}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && <p className="form-error">{errors.message}</p>}
      </div>

      <KeyButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </KeyButton>

      {status === 'sent' && (
        <p className="state" aria-live="polite">
          Your email app should open with the message ready to send.
        </p>
      )}
    </form>
  );
}