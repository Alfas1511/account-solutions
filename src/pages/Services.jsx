import { useEffect } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/site.js";

export default function Services() {
  useEffect(() => {
    document.title = "Services — Accounts Solutions, Kothamangalam";
  }, []);

  return (
    <main>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow">What we do</p>
          <h1 className="mt-3 max-w-2xl text-5xl">
            Complete financial services under one roof
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="divide-y border-y">
          {services.map((s) => (
            <div
              key={s.title}
              className="grid items-start gap-6 py-10 md:grid-cols-[220px_1fr_2fr]"
            >
              <img
                src={s.image}
                alt={s.alt}
                loading="lazy"
                className="h-48 w-full rounded-lg border object-fill md:h-32"
              />
              <div>
                <h2 className="text-2xl text-primary">{s.title}</h2>
              </div>
              <p className="text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to="/contact" className="btn-gold">
            Visit our office
          </Link>
        </div>
      </section>
    </main>
  );
}
