import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
import { services } from "../data/site.js";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img
          src={hero}
          alt="Ledger, pen and calculator on an office desk"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <p className="eyebrow">Kothamangalam · Ernakulam</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-tight md:text-7xl">
            A clear path through <em className="text-gold">accounts & taxes</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-80">
            Bookkeeping, income tax, GST and business planning — handled carefully
            so you can focus on growing.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/services" className="btn-gold">
              Our services
            </Link>
            <Link to="/contact" className="btn-outline-light">
              Visit us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow">Services</p>
        <h2 className="mt-3 max-w-2xl text-4xl text-primary">
          Everything your business needs to stay compliant
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card p-6 transition-colors hover:bg-secondary"
            >
              <img
                src={s.image}
                alt={s.alt}
                loading="lazy"
                className="mb-5 h-40 w-full rounded-md object-fill md:h-48"
              />
              <div className="mb-5 h-0.5 w-10 bg-gold" />
              <h3 className="text-xl text-primary">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {[
            ["Local & personal", "Meet us face to face at PO Junction — no call centres."],
            ["On-time filings", "We track your deadlines so penalties never surprise you."],
            ["Honest advice", "Clear explanations and transparent fees, every time."],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="text-2xl text-primary">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-4xl text-primary">Ready to get your accounts in order?</h2>
        <Link to="/contact" className="btn-gold mt-8">
          Find our office
        </Link>
      </section>
    </main>
  );
}
