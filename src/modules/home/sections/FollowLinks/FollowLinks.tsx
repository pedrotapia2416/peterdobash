import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/ui/Button/Button';
import { Section } from '../../../../shared/ui/Section/Section';
import { bookingEmail, socialLinks } from '../../data/homeContent';
import styles from './FollowLinks.module.scss';

export function FollowLinks() {
  const { t } = useTranslation('home');
  const [form, setForm] = useState({ name: '', email: '', date: '', city: '', event: '', message: '' });
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const labels = t('follow.links', { returnObjects: true }) as string[];
  const whatsappUrl = 'https://wa.me/5493543610930?text=Hola%20Peter%20Do%20Bash%2C%20quiero%20consultar%20por%20una%20fecha.';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState('sending');
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_s5mljyv',
          template_id: 'template_d7nq0yc',
          user_id: 'TGwcVIiW4kQrgZyDw',
          template_params: form,
        }),
      });
      if (!response.ok) throw new Error('EmailJS request failed');
      setSubmitState('sent');
      setForm({ name: '', email: '', date: '', city: '', event: '', message: '' });
    } catch {
      setSubmitState('error');
    }
    return;
    const subject = `Booking Peter Do Bash — ${form.name || 'Nueva consulta'}`;
    const body = [
      `Nombre: ${form.name}`,
      `Email: ${form.email}`,
      `Fecha: ${form.date}`,
      `Ciudad / venue: ${form.city}`,
      `Tipo de evento: ${form.event}`,
      '',
      form.message,
    ].join('\n');

    window.location.href = `mailto:${bookingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="contact" eyebrow={t('follow.eyebrow')} title={t('follow.title')}>
      <a className={styles.booking} href={`mailto:${bookingEmail}?subject=Booking%20Peter%20Do%20Bash`}>
        <span>{t('follow.bookingLabel')}</span>
        <strong>{bookingEmail}</strong>
      </a>
      <form className={styles.bookingForm} onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <label>
            <span>{t('follow.bookingForm.name')}</span>
            <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
          </label>
          <label>
            <span>{t('follow.bookingForm.email')}</span>
            <input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
          </label>
          <label>
            <span>{t('follow.bookingForm.date')}</span>
            <input type="date" value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} />
          </label>
          <label>
            <span>{t('follow.bookingForm.city')}</span>
            <input value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} />
          </label>
        </div>
        <label>
          <span>{t('follow.bookingForm.event')}</span>
          <input value={form.event} onChange={(event) => setForm({ ...form, event: event.target.value })} />
        </label>
        <label>
          <span>{t('follow.bookingForm.message')}</span>
          <textarea required rows={5} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
        </label>
        <div className={styles.formActions}>
          <button type="submit">{t('bookingForm.submit')} <span aria-hidden="true">→</span></button>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">{t('bookingForm.whatsapp')} <span aria-hidden="true">↗</span></a>
        </div>
        {submitState === 'sending' && <small role="status">Enviando consulta…</small>}
        {submitState === 'sent' && <small role="status">Consulta enviada correctamente.</small>}
        {submitState === 'error' && <small role="alert">No se pudo enviar. Probá nuevamente o escribí por WhatsApp.</small>}
      </form>
      <div className={styles.links}>
        {socialLinks.map((link, index) => (
          <Button href={link.href} target="_blank" rel="noreferrer" variant="secondary" key={link.label}>
            {labels[index] ?? link.label}
          </Button>
        ))}
      </div>
    </Section>
  );
}
