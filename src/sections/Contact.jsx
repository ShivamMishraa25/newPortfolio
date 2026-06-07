import React from 'react'

function Contact() {
  return (
    <section id="contact" className="section-spacing c-space">
      <form
        className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur-sm shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input type="hidden" name="access_key" value="79bf0b36-06d1-44cc-a20c-e1aace175be3" />
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Contact</p>
          <h2 className="text-heading">Let&apos;s build something great</h2>
          <p className="subtext">Share a few details below and I&apos;ll get back to you. You can also reach me directly using the details in the footer.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="field-label">Name</label>
            <input
              type="text"
              name="name"
              className="field-input field-input-focus"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="field-label">Email</label>
            <input
              type="email"
              name="email"
              className="field-input field-input-focus"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="field-label">Subject</label>
          <input
            type="text"
            name="subject"
            className="field-input field-input-focus"
            placeholder="Project inquiry, collaboration, etc."
            required
          />
        </div>

        <div>
          <label className="field-label">Message</label>
          <textarea
            name="message"
            className="field-input field-input-focus min-h-36"
            rows={6}
            placeholder="Tell me about your project..."
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <button type="submit" className="btn">Send Message</button>
          <p className="text-sm text-neutral-400">Prefer email? Use <a className="text-aqua hover:underline" href="mailto:shivam.m4464@gmail.com">shivam.m4464@gmail.com</a>.</p>
        </div>
      </form>
    </section>
  )
}

export default Contact
