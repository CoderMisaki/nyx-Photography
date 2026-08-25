import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

const serviceOptions = [
  "Commercial",
  "Architecture",
  "Editorial",
  "Private Commission",
];

interface FormData {
  service: string;
  date: string;
  location: string;
  description: string;
  name: string;
  email: string;
  phone: string;
}

const empty: FormData = {
  service: "",
  date: "",
  location: "",
  description: "",
  name: "",
  email: "",
  phone: "",
};

export default function Booking() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(empty);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Commission Inquiry — ${data.service}`);
    const body = encodeURIComponent(
      `Service: ${data.service}\nDate: ${data.date}\nLocation: ${data.location}\nDescription: ${data.description}\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}`,
    );
    window.location.href = `mailto:studio@nyxphoto.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const steps = [
    /* 0 */ (
      <div key="service" className="space-y-4">
        <p className="text-[11px] tracking-[0.3em] uppercase text-ink-muted mb-6">Select Service</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {serviceOptions.map((s) => (
            <button
              key={s}
              onClick={() => {
                update("service", s);
                setStep(1);
              }}
              className={`text-left px-6 py-5 border text-[14px] tracking-wide transition-all ${
                data.service === s
                  ? "border-ink bg-ink text-background"
                  : "border-border hover:border-accent"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    ),
    /* 1 */ (
      <div key="date" className="space-y-6">
        <p className="text-[11px] tracking-[0.3em] uppercase text-ink-muted">Preferred Date</p>
        <input
          type="date"
          value={data.date}
          onChange={(e) => update("date", e.target.value)}
          className="w-full max-w-sm border-b border-ink bg-transparent py-3 text-[15px] outline-none focus:border-champagne transition-colors"
        />
      </div>
    ),
    /* 2 */ (
      <div key="location" className="space-y-6">
        <p className="text-[11px] tracking-[0.3em] uppercase text-ink-muted">Location</p>
        <input
          type="text"
          placeholder="City, Country"
          value={data.location}
          onChange={(e) => update("location", e.target.value)}
          className="w-full max-w-sm border-b border-ink bg-transparent py-3 text-[15px] outline-none focus:border-champagne placeholder:text-ink-muted transition-colors"
        />
      </div>
    ),
    /* 3 */ (
      <div key="project" className="space-y-6">
        <p className="text-[11px] tracking-[0.3em] uppercase text-ink-muted">Project Description</p>
        <textarea
          placeholder="Tell me about your vision..."
          value={data.description}
          onChange={(e) => update("description", e.target.value)}
          rows={4}
          className="w-full max-w-lg border-b border-ink bg-transparent py-3 text-[15px] outline-none resize-none focus:border-champagne placeholder:text-ink-muted transition-colors"
        />
      </div>
    ),
    /* 4 */ (
      <div key="contact" className="space-y-6">
        <p className="text-[11px] tracking-[0.3em] uppercase text-ink-muted mb-4">Contact</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            className="border-b border-ink bg-transparent py-3 text-[15px] outline-none focus:border-champagne placeholder:text-ink-muted transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className="border-b border-ink bg-transparent py-3 text-[15px] outline-none focus:border-champagne placeholder:text-ink-muted transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="border-b border-ink bg-transparent py-3 text-[15px] outline-none focus:border-champagne placeholder:text-ink-muted transition-colors"
          />
        </div>
      </div>
    ),
  ];

  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[11px] tracking-[0.35em] uppercase text-ink-muted mb-4">
              Private Commission & Acquisition
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4">
              Let&apos;s Create
            </h2>
            <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-champagne inline-block" />
              <span className="text-ink-muted">Studio Status: Accepting Select Commissions for Q3/Q4 2026</span>
            </div>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-12 h-12 rounded-full border border-champagne flex items-center justify-center mx-auto mb-6">
                <Check size={20} className="text-champagne" />
              </div>
              <h3 className="font-serif text-3xl font-light mb-3">Inquiry Sent</h3>
              <p className="text-[14px] text-ink-secondary">
                Thank you for your interest. I&apos;ll review your project and respond within 48 hours.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Progress */}
              <div className="flex gap-2 mb-12">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-[2px] flex-1 transition-all duration-500 ${
                      i <= step ? "bg-ink" : "bg-border"
                    }`}
                  />
                ))}
              </div>

              {/* Step content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {steps[step]}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-ink-muted hover:text-ink disabled:opacity-30 transition-colors"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                {step < steps.length - 1 ? (
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    className="flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-ink hover:text-champagne transition-colors"
                  >
                    Next <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!data.name || !data.email}
                    className="flex items-center gap-2 px-8 py-3 bg-ink text-background text-[12px] tracking-[0.2em] uppercase hover:bg-ink/80 disabled:opacity-30 transition-all"
                  >
                    Send Inquiry <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
