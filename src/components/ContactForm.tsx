'use client';

import { useState, type FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ONDERWERP_OPTIONS = [
  'Milieuadvies',
  'Compliance & Registers',
  'Audits & Certificeringen',
  'Workshops & Trainingen',
  'Overig',
] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mjgpkblj', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="glass-green p-8 md:p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-green/15 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-brand-green" />
        </div>
        <h3 className="font-display text-[var(--text-2xl)] font-bold mb-3">
          Bericht Verzonden
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-6">
          Bedankt voor uw bericht! Wij nemen zo snel mogelijk contact met u op.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-brand-green font-display font-semibold text-sm uppercase tracking-wider hover:text-brand-green-light transition-colors duration-200"
        >
          Nieuw bericht versturen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-green p-8 md:p-10 space-y-6">
      <h2 className="font-display text-[var(--text-2xl)] font-bold mb-2">
        Stuur ons een bericht
      </h2>
      <p className="text-[var(--color-text-muted)] text-sm mb-6">
        Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
      </p>

      {/* Naam */}
      <div>
        <label
          htmlFor="naam"
          className="block font-display text-sm font-medium mb-2"
        >
          Naam <span className="text-brand-green">*</span>
        </label>
        <input
          type="text"
          id="naam"
          name="naam"
          required
          placeholder="Uw naam"
          className="w-full px-4 py-3 bg-brand-dark/60 border border-grey-200 rounded-[var(--radius-md)] text-white placeholder:text-[var(--color-text-disabled)] focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green/50 transition-colors duration-200"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block font-display text-sm font-medium mb-2"
        >
          E-mailadres <span className="text-brand-green">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="uw@email.nl"
          className="w-full px-4 py-3 bg-brand-dark/60 border border-grey-200 rounded-[var(--radius-md)] text-white placeholder:text-[var(--color-text-disabled)] focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green/50 transition-colors duration-200"
        />
      </div>

      {/* Onderwerp */}
      <div>
        <label
          htmlFor="onderwerp"
          className="block font-display text-sm font-medium mb-2"
        >
          Onderwerp
        </label>
        <select
          id="onderwerp"
          name="onderwerp"
          className="w-full px-4 py-3 bg-brand-dark/60 border border-grey-200 rounded-[var(--radius-md)] text-white focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green/50 transition-colors duration-200 appearance-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2352b788' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
          }}
        >
          {ONDERWERP_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Bericht */}
      <div>
        <label
          htmlFor="bericht"
          className="block font-display text-sm font-medium mb-2"
        >
          Bericht <span className="text-brand-green">*</span>
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={6}
          placeholder="Hoe kunnen wij u helpen?"
          className="w-full px-4 py-3 bg-brand-dark/60 border border-grey-200 rounded-[var(--radius-md)] text-white placeholder:text-[var(--color-text-disabled)] focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green/50 transition-colors duration-200 resize-y"
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-[var(--radius-md)]">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-red-300 text-sm">
            Er is iets misgegaan. Probeer het opnieuw of neem direct contact op
            via e-mail of telefoon.
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="cta__button w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Verzenden...
          </>
        ) : (
          <>
            Verstuur Bericht
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
