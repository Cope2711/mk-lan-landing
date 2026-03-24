import React from "react";
import { SectionHeading } from "../../shared/SectionHeading";
import { TrustMatrixItem } from "./TrustMatrixItem";
import { MetricStatCard } from "./MetricStatCard";

const trustItems = [
  {
    step: "01",
    title: "Experiencia",
    description: "Tecnicos con trayectoria en reparaciones criticas para uso profesional, estudio y gaming.",
    borderClassName: "border-accent/55",
    badgeClassName: "bg-accent/20 text-accent",
  },
  {
    step: "02",
    title: "Garantia",
    description: "Cada servicio queda respaldado con pruebas y registro para seguimiento posterior.",
    borderClassName: "border-secondary/55",
    badgeClassName: "bg-secondary/20 text-secondary",
  },
  {
    step: "03",
    title: "Atencion rapida",
    description: "Respuesta agil en canales directos y prioridad a equipos con urgencia operativa.",
    borderClassName: "border-accent/55",
    badgeClassName: "bg-accent/20 text-accent",
  },
  {
    step: "04",
    title: "Precios claros",
    description: "Presupuestos transparentes, aprobacion previa y detalle de costos por componente.",
    borderClassName: "border-secondary/55",
    badgeClassName: "bg-secondary/20 text-secondary",
  },
];

const metricCards = [
  {
    label: "SLA interno",
    valueWidthClassName: "w-[88%]",
    valueColorClassName: "bg-accent",
    description: "88% de casos con atencion en ventana temprana.",
  },
  {
    label: "Cobertura",
    valueWidthClassName: "w-[94%]",
    valueColorClassName: "bg-secondary",
    description: "94% de reparaciones resueltas sin reingreso temprano.",
  },
  {
    label: "Transparencia",
    valueWidthClassName: "w-[100%]",
    valueColorClassName: "bg-accent",
    description: "Costos definidos antes de iniciar: sin cargos sorpresa.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-primary py-24">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,var(--border)_1px,transparent_1px)] bg-[length:28px_28px] opacity-20" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          align="left"
          title="Por que elegirnos"
          subtitle="Combinamos experiencia tecnica, protocolos de seguridad y comunicacion clara para que todo el proceso sea confiable desde el primer contacto."
        />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-primary-foreground/20 bg-primary-foreground/5 p-7 backdrop-blur-sm">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent/20 blur-3xl" />
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/65">Matriz de confianza</p>
            <ul className="space-y-5">
              {trustItems.map((item) => (
                <TrustMatrixItem
                  key={item.step}
                  step={item.step}
                  title={item.title}
                  description={item.description}
                  borderClassName={item.borderClassName}
                  badgeClassName={item.badgeClassName}
                />
              ))}
            </ul>
          </div>

          <div className="grid content-center gap-4">
            {metricCards.map((metric) => (
              <MetricStatCard
                key={metric.label}
                label={metric.label}
                valueWidthClassName={metric.valueWidthClassName}
                valueColorClassName={metric.valueColorClassName}
                description={metric.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
