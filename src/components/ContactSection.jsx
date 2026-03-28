import { motion, useReducedMotion } from "framer-motion";

export default function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="bg-[var(--surface)] px-6 py-16 text-[var(--on-surface)]">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4 }}
        >
          <div className="surface-deep ghost-outline section-frame grid gap-6 rounded-xl p-6 md:grid-cols-[0.78fr,1.22fr] md:p-8">
            <div>
              <p className="eyebrow">Get in Touch</p>
              <h2 className="section-title mt-5 text-4xl font-extrabold md:text-5xl">
                Contact
              </h2>

              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="eyebrow">Principal Investigator</dt>
                  <dd className="mt-2 text-lg text-[var(--on-surface)]">Dr. Krishna Kisi</dd>
                  <dd className="mt-1 text-sm text-[var(--on-surface-variant)]">
                    Associate Professor, Department of Engineering Technology
                  </dd>
                </div>

                <div>
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-2">
                    <a href="mailto:kpk41@txstate.edu" className="editorial-link">
                      kpk41@txstate.edu
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="eyebrow">Location</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[var(--on-surface-variant)]">
                    RFM 2240
                    <br />
                    601 University Drive
                    <br />
                    San Marcos, TX 78666
                  </dd>
                </div>

                <div>
                  <dt className="eyebrow">Phone</dt>
                  <dd className="mt-2 text-sm text-[var(--on-surface-variant)]">512-245-7577</dd>
                </div>
              </dl>
            </div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="overflow-hidden rounded-lg bg-[var(--surface-lowest)]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.432617650893!2d-97.9423984848858!3d29.88999498194464!2m3!1f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865ca87118318721%3A0x2863a34651336423!2sTexas%20State%20University!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                title="Map showing Texas State University in San Marcos, Texas"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
