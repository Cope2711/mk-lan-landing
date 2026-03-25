import React from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import { BrandMark } from "../shared/BrandMark";
import { SITE_NAV_LINKS } from "../shared/siteNavLinks";

export function FooterSection() {
  const defaultWhatsappUrl = buildWhatsAppUrl();

  return (
    <footer className="relative overflow-hidden border-t border-primary-foreground/15 bg-primary py-9">
      <div className="absolute inset-0 bg-[linear-gradient(140deg,var(--border)_1px,transparent_1px)] bg-[length:24px_24px] opacity-20" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/6 p-4">
            <BrandMark
              className="text-primary-foreground"
              iconWrapClassName="shadow-lg shadow-accent/25"
              textClassName="text-xl"
            />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Soporte tecnico para equipos de trabajo y gaming con procesos claros, garantia y respuesta rapida.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">Navegacion</p>
            <ul className="mt-3 space-y-1.5 text-sm text-primary-foreground/80">
              {SITE_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-accent">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">Canales</p>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">+52 662 160 9375</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">+52 662 329 6985</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-secondary" />
                <a href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">WhatsApp directo</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Cobertura en norte de Hermosillo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-primary-foreground/15 pt-4 text-sm text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Advance Digital. Todos los derechos reservados.</p>
          <p>Atencion de lunes a sabado | Diagnostico con previa coordinacion</p>
        </div>
      </div>
    </footer>
  );
}
