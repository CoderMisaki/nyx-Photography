import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowUpRight, MessageSquare } from 'lucide-react';
import { TikTokIcon, InstagramIcon, WhatsAppIcon, SOCIAL_LINKS } from '@/components/icons/SocialIcons';

interface ContactSectionProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  isOpenModal = false,
  onCloseModal,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discipline: 'Stadium & Arena Coverage',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (onCloseModal) onCloseModal();
    }, 2500);
  };

  const content = (
    <div className="max-w-7xl mx-auto py-24 px-6 md:px-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted block mb-2">
            COMMISSIONS & DIRECT DISPATCH
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-primary">
            Initiate <span className="italic">Dialogue</span>
          </h2>
        </div>
        <p className="font-mono text-xs text-secondary mt-4 md:mt-0 tracking-wider uppercase">
          AVAILABLE FOR WORLDWIDE ASSIGNMENTS
        </p>
      </div>

      {/* Direct Contact Channels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {/* WhatsApp Card */}
        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 bg-surface border border-border hover:border-primary/50 transition-all rounded-sm flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <WhatsAppIcon className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-1">
              DIRECT WHATSAPP CHAT
            </span>
            <p className="font-serif text-lg font-medium text-primary">{SOCIAL_LINKS.whatsappDisplay}</p>
            <p className="font-sans text-xs text-secondary mt-1">Instant project inquiries & field bookings</p>
          </div>
        </a>

        {/* Instagram Card */}
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 bg-surface border border-border hover:border-primary/50 transition-all rounded-sm flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-1">
              INSTAGRAM ARCHIVE
            </span>
            <p className="font-serif text-lg font-medium text-primary">{SOCIAL_LINKS.instagramHandle}</p>
            <p className="font-sans text-xs text-secondary mt-1">Daily matchday frames & behind the lens</p>
          </div>
        </a>

        {/* TikTok Card */}
        <a
          href={SOCIAL_LINKS.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 bg-surface border border-border hover:border-primary/50 transition-all rounded-sm flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <TikTokIcon className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-1">
              TIKTOK VIDEO REELS
            </span>
            <p className="font-serif text-lg font-medium text-primary">{SOCIAL_LINKS.tiktokHandle}</p>
            <p className="font-sans text-xs text-secondary mt-1">High-speed shutter motion & raw audio</p>
          </div>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Direct Studio Representation */}
        <div className="lg:col-span-5 space-y-8 font-mono text-xs">
          <div>
            <span className="text-muted text-[10px] uppercase tracking-widest block mb-2">
              PRIMARY STUDIO
            </span>
            <p className="font-serif text-2xl font-light text-primary mb-1">Jakarta, Indonesia</p>
            <p className="text-secondary font-sans text-xs">South Jakarta Creative District & Mobile Field Rig</p>
          </div>

          <div className="pt-6 border-t border-border">
            <span className="text-muted text-[10px] uppercase tracking-widest block mb-2">
              EDITORIAL INBOX
            </span>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="font-serif text-xl sm:text-2xl text-primary hover:underline block"
            >
              {SOCIAL_LINKS.email}
            </a>
            <p className="text-muted text-[10px] mt-1">RESPONSE WITHIN 24 HOURS ACROSS ALL TIMEZONES</p>
          </div>

          <div className="pt-6 border-t border-border">
            <span className="text-muted text-[10px] uppercase tracking-widest block mb-2">
              SYNDICATION & REPRESENTATION
            </span>
            <p className="text-primary font-medium">NYX SPORTS MONOGRAPH LTD.</p>
            <p className="text-secondary mt-1 font-sans text-xs">
              Specializing in Olympic, Championship & High-Speed Combat Coverage.
            </p>
          </div>
        </div>

        {/* Right Column: Editorial Inquiry Form */}
        <div className="lg:col-span-7 bg-surface border border-border p-8 md:p-10 shadow-sm">
          {submitted ? (
            <div className="py-16 text-center space-y-4 animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
              <h3 className="font-serif text-3xl text-primary font-light">
                Dispatch Received
              </h3>
              <p className="font-sans text-sm text-secondary max-w-md mx-auto font-light">
                Thank you for your transmission. The studio will review your project parameters and respond with availability and rate dossier.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-2">
                    Client / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vogue Sport / L'Équipe"
                    className="w-full bg-background border border-border p-3 text-xs font-sans text-primary focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="editor@publication.com"
                    className="w-full bg-background border border-border p-3 text-xs font-sans text-primary focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-2">
                    Assignment Discipline
                  </label>
                  <select
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="w-full bg-background border border-border p-3 text-xs font-sans text-primary focus:outline-none focus:border-primary transition-colors"
                  >
                    <option>Stadium & Arena Coverage</option>
                    <option>Championship Combat / Boxing</option>
                    <option>Tennis Tournament Feature</option>
                    <option>Aquatic / High-Speed Underwater</option>
                    <option>Commercial Brand Campaign</option>
                    <option>Private Athlete Monograph</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-2">
                    Target Location / Dates
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Paris 2026 / Jakarta"
                    className="w-full bg-background border border-border p-3 text-xs font-sans text-primary focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-2">
                  Project Scope & Creative Brief *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe the editorial premise, deliverables, publication medium, and timelines..."
                  className="w-full bg-background border border-border p-3 text-xs font-sans text-primary focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary text-background font-mono text-xs uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium"
              >
                <span>TRANSMIT DISPATCH</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
        <div className="bg-background max-w-4xl w-full border border-border relative my-8 shadow-2xl">
          <button
            onClick={onCloseModal}
            className="absolute top-6 right-6 font-mono text-xs uppercase text-secondary hover:text-primary p-2"
          >
            [CLOSE ✕]
          </button>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="contact-section" className="border-t border-border bg-background">
      {content}
    </section>
  );
};
