"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const productOptions = [
  "Optical Lenses",
  "Reading Glasses",
  "Prescription Glasses",
  "Blue Cut Lenses",
  "Progressive Lenses",
  "Optical Frames",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  product: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  product: "",
  message: "",
};

const controlClass =
  "mt-2 w-full rounded-2xl border border-[#d8d0c2] bg-[#fbfaf7] px-4 py-4 text-base text-[#19202a] outline-none transition placeholder:text-[#8b867d] focus:border-[#bda55f] focus:bg-[#fffdf9] focus:shadow-[0_0_0_4px_rgba(215,189,120,0.2)]";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Full name is required.";
    if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim())) {
      nextErrors.phone = "Enter a valid phone number.";
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.product) nextErrors.product = "Choose a product category.";
    if (form.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }
    return nextErrors;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
    }, 900);
  };

  return (
    <section id="contact" className="bg-[#f3efe7] py-16 sm:py-24">
      {/* Contact and inquiry form section */}
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[1.75rem] bg-[#19202a] p-6 text-[#f7f1e6] shadow-[0_24px_64px_rgba(25,32,42,0.16)] sm:p-8 lg:p-9"
        >
          <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-[#d7bd78]/12" />
          <p className="eyebrow relative text-[#d7bd78]">Contact</p>
          <h2 className="panel-title relative mt-4 max-w-xl">
            Let us help you choose the right optical product.
          </h2>
          <p className="body-copy relative mt-5 max-w-xl text-[#d8d0c2]">
            Share the product type, quantity, prescription needs, or fitting
            requirements. Our team will respond with practical next steps.
          </p>
          <div className="relative mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {[
              ["Phone", "+91 98765 43210"],
              ["Email", "inquiries@billbirdoptics.com"],
              ["Location", "Mumbai, Maharashtra"],
              ["Working Hours", "Mon to Sat, 10:00 AM to 7:00 PM"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-xs font-semibold text-[#a9a294]">{label}</p>
                <p className="mt-1 text-sm font-semibold leading-6">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[1.75rem] border border-[#ded7ca] bg-[#fffdf9] p-5 shadow-[0_24px_70px_rgba(25,32,42,0.1)] sm:p-7 lg:p-8"
        >
          <div className="mb-6 flex flex-col justify-between gap-4 rounded-[1.35rem] bg-[#f5f0e8] px-5 py-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-[#8a7132]">Inquiry form</p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight text-[#19202a]">
                Request product details
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-[#6f746f]">
                Add your contact details and product requirement. We will reply with options and next steps.
              </p>
            </div>
            {status === "success" ? (
              <p className="shrink-0 rounded-full bg-[#eef6e9] px-4 py-2 text-sm font-semibold text-[#3f6b32]">
                We received your inquiry.
              </p>
            ) : null}
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            <Field label="Full Name" error={errors.name}>
              <input
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className={controlClass}
                placeholder="Your name"
              />
            </Field>
            <Field label="Phone Number" error={errors.phone}>
              <input
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className={controlClass}
                placeholder="+91 98765 43210"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={controlClass}
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Product Interested In" error={errors.product}>
              <select
                value={form.product}
                onChange={(event) => updateField("product", event.target.value)}
                className={controlClass}
              >
                <option value="">Select product</option>
                {productOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Message" error={errors.message} className="mt-4">
            <textarea
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className={`${controlClass} min-h-36 resize-none`}
              placeholder="Tell us what you are looking for"
            />
          </Field>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-sm leading-6 text-[#73706a]">
              Typical response time is within one business day.
            </p>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#19202a] px-7 py-4 text-sm font-semibold text-[#fbfaf7] shadow-[0_18px_42px_rgba(25,32,42,0.18)] transition hover:-translate-y-1 hover:bg-[#2c3745] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "Inquiry Sent"
                  : "Submit Inquiry"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-semibold text-[#39424e]">
        {label}
      </span>
      {children}
      {error ? <span className="mt-2 block text-sm text-[#9f3f2f]">{error}</span> : null}
    </label>
  );
}
