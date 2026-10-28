import { useEffect } from "react";
import { maps, site } from "../data/site.js";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact — Account Solutions, Kothamangalam";
  }, []);

  return (
    <main>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-3 text-5xl">Visit our office</h1>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-10">
          <p className="eyebrow">Address</p>
          <h2 className="mt-3 text-2xl text-primary">{site.name}</h2>
          <div className="mt-4 space-y-1 text-lg text-muted-foreground">
            {site.address.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-gold" target="_blank" rel="noreferrer" href={maps.directions}>
              Get directions
            </a>
            <a
              className="inline-flex items-center rounded border px-6 py-3 font-semibold text-primary transition-colors hover:border-gold hover:text-gold"
              target="_blank"
              rel="noreferrer"
              href={maps.place}
            >
              Open in Google Maps
            </a>
          </div>
        </div>
        <iframe
          title="Map showing our office at Oliapuram Shopping Complex, Kothamangalam"
          className="min-h-80 w-full rounded-lg border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={maps.embed}
        />
      </section>
    </main>
  );
}
