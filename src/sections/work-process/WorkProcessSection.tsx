import React from "react";
import { SectionHeading } from "../../shared/SectionHeading";
import { ProcessStepItem } from "./ProcessStepItem";

const processSteps = [
  {
    step: "01",
    title: "Diagnostico",
    description: "Inspeccion de hardware y software para ubicar la causa principal de la falla.",
    accentClassName: "border-accent/50 bg-accent/20 text-accent",
  },
  {
    step: "02",
    title: "Cotizacion",
    description: "Definicion de opciones, tiempos y costo total antes de aprobar el trabajo.",
    accentClassName: "border-secondary/50 bg-secondary/20 text-secondary",
  },
  {
    step: "03",
    title: "Reparacion",
    description: "Intervencion tecnica con pruebas termicas y verificacion de estabilidad.",
    accentClassName: "border-accent/50 bg-accent/20 text-accent",
  },
  {
    step: "04",
    title: "Entrega",
    description: "Confirmacion final contigo y recomendaciones para sostener rendimiento y vida util.",
    accentClassName: "border-secondary/50 bg-secondary/20 text-secondary",
  },
];

export function WorkProcessSection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-primary py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,var(--accent)_0%,transparent_55%)] opacity-25" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Proceso de trabajo"
          subtitle="Flujo simple, tecnico y sin friccion para que sepas exactamente en que etapa va tu equipo."
        />

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-primary-foreground/20 md:hidden" />
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-primary-foreground/20 md:block" />

          <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
            {processSteps.map((item) => (
              <ProcessStepItem
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
                accentClassName={item.accentClassName}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
