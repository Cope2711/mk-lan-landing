import React from "react";

import { Button } from "@/ui/button";
import { SectionHeading } from "../../shared/SectionHeading";
import { PricingTierCard } from "./PricingTierCard";
import { QuickQuoteInput } from "./QuickQuoteInput";

export function PricingSection() {
  const pricingTiers = [
    {
      label: "Plan inicial",
      price: "Desde $35",
      description: "Diagnostico completo con reporte tecnico.",
      className: "border border-accent/45 bg-accent/15",
      labelClassName: "text-accent",
    },
    {
      label: "Mantenimiento",
      price: "Desde $50",
      description: "Limpieza interna, ajuste termico y optimizacion base.",
      className: "border border-secondary/45 bg-secondary/15",
      labelClassName: "text-secondary",
    },
    {
      label: "Reparacion avanzada",
      price: "Desde $80",
      description: "Precio final segun pieza, marca y complejidad.",
      className: "border border-primary-foreground/20 bg-primary-foreground/6",
      labelClassName: "text-primary-foreground/60",
    },
  ];

  const quickQuoteFields = [
    { placeholder: "Nombre" },
    { placeholder: "WhatsApp" },
    { placeholder: "Modelo del equipo", className: "sm:col-span-2" },
    { placeholder: "Falla principal", className: "sm:col-span-2" },
  ];

  return (
    <section id="pricing" className="relative overflow-hidden bg-primary py-24">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,var(--border)_1px,transparent_1px)] bg-[length:26px_26px] opacity-20" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Precios o cotizacion rapida" subtitle="Desde $35 o formulario breve" />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            {pricingTiers.map((tier) => (
              <PricingTierCard
                key={tier.label}
                label={tier.label}
                price={tier.price}
                description={tier.description}
                className={tier.className}
                labelClassName={tier.labelClassName}
              />
            ))}
          </div>

          <div className="rounded-3xl border border-primary-foreground/20 bg-primary-foreground/7 p-6 backdrop-blur-sm lg:min-h-[484px]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/65">Formulario breve</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {quickQuoteFields.map((field) => (
                <QuickQuoteInput key={field.placeholder} placeholder={field.placeholder} className={field.className} />
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-primary-foreground/65">Respuesta estimada en menos de 30 minutos.</p>
              <Button className="h-11 rounded-full bg-accent px-7 font-semibold text-accent-foreground hover:bg-accent/90">
                Pedir cotizacion
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
