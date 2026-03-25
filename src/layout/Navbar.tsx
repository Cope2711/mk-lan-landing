import React from "react";
import { buildWhatsAppUrl, openWhatsAppChat, SERVICE_REQUEST_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

import { BrandMark } from "../shared/BrandMark";
import { SITE_NAV_LINKS } from "../shared/siteNavLinks";

export function Navbar() {
  const serviceRequestWhatsappUrl = buildWhatsAppUrl(SERVICE_REQUEST_WHATSAPP_MESSAGE);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary-foreground/15 bg-primary/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <BrandMark
          className="text-primary-foreground"
          iconWrapClassName="shadow-lg shadow-accent/30"
          textClassName="text-xl"
        />
        <div className="hidden gap-4 text-sm font-medium text-primary-foreground/70 lg:flex">
          {SITE_NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary-foreground">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={serviceRequestWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => {
              event.preventDefault();
              openWhatsAppChat(SERVICE_REQUEST_WHATSAPP_MESSAGE);
            }}
            className="inline-flex h-10 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-colors hover:bg-accent/90"
          >
            Solicitar servicio
          </a>
        </div>
      </div>
    </nav>
  );
}
