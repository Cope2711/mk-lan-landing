import React from "react";
import { Wrench, ShieldAlert, ShieldCheck, HardDriveDownload } from "lucide-react";

import { SectionHeading } from "../../shared/SectionHeading";
import { ServiceCardItem } from "./ServiceCardItem";

const services = [
  {
    icon: Wrench,
    step: "01",
    title: "Construccion de PCs",
    description:
      "Te ayudamos a elegir componentes segun tu presupuesto y objetivos, y armamos tu equipo optimizado para rendimiento, estabilidad y futuras mejoras.",
    iconColorClassName: "text-accent",
    glowColorClassName: "bg-accent/20",
    glowPosition: "top-right" as const,
  },
  {
    icon: ShieldAlert,
    step: "02",
    title: "Eliminacion de virus",
    description:
      "Limpieza profunda de amenazas, bloqueo de procesos maliciosos y endurecimiento del sistema.",
    iconColorClassName: "text-secondary",
    glowColorClassName: "bg-secondary/25",
    glowPosition: "top-right" as const,
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Mantenimiento preventivo",
    description:
      "Limpieza interna, control de temperaturas y ajuste de componentes para evitar fallos futuros.",
    iconColorClassName: "text-accent",
    glowColorClassName: "bg-accent/20",
    glowPosition: "bottom-left" as const,
  },
  {
    icon: HardDriveDownload,
    step: "04",
    title: "Formateo e instalacion de software",
    description:
      "Sistema operativo limpio, drivers al dia y herramientas esenciales listas para trabajar o jugar.",
    iconColorClassName: "text-secondary",
    glowColorClassName: "bg-secondary/25",
    glowPosition: "bottom-left" as const,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-primary py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,var(--accent)_0%,transparent_42%),radial-gradient(circle_at_85%_80%,var(--secondary)_0%,transparent_38%)] opacity-20" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Servicios"
          subtitle="Intervenciones precisas con diagnostico por capas, proteccion activa y puesta a punto enfocada en rendimiento real."
        >
          <p className="mb-3 inline-flex rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
            Laboratorio AD
          </p>
        </SectionHeading>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCardItem
              key={service.step}
              icon={service.icon}
              step={service.step}
              title={service.title}
              description={service.description}
              iconColorClassName={service.iconColorClassName}
              glowColorClassName={service.glowColorClassName}
              glowPosition={service.glowPosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
