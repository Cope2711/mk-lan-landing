import React from "react";
import { CheckCircle } from "lucide-react";
import { SectionHeading } from "../../shared/SectionHeading";
import { TestimonialEntry } from "./TestimonialEntry";
import { CommitmentStageCard } from "./CommitmentStageCard";
import { TrustChecklistItem } from "./TrustChecklistItem";

export function TestimonialsSection() {
  const testimonials = [
    {
      initials: "AM",
      accentClassName: "bg-accent/70",
      initialsClassName: "bg-accent/20 text-accent",
      quote:
        '"Mi PC no daba video y en menos de 24 horas me explicaron la falla, cambiaron el componente y sali con garantia. Todo super claro desde el primer mensaje."',
      author: "Andrea M. | Disenadora 3D",
    },
    {
      initials: "CR",
      accentClassName: "bg-secondary/80",
      initialsClassName: "bg-secondary/20 text-secondary",
      quote:
        '"Tenia virus y lentitud extrema. Me entregaron el equipo limpio, optimizado y con recomendaciones para no volver a caer en lo mismo."',
      author: "Carlos R. | Administrador",
    },
    {
      initials: "VP",
      accentClassName: "bg-accent/70",
      initialsClassName: "bg-accent/20 text-accent",
      quote:
        '"Lo que mas valoro es que cotizan antes de tocar nada. Sin letras pequenas y con tiempos reales. Excelente atencion."',
      author: "Valeria P. | Emprendedora",
    },
  ];

  const commitmentStages = [
    {
      title: "Antes",
      description: "Diagnostico documentado y explicacion clara del problema.",
      className: "border border-accent/40 bg-accent/12",
      titleClassName: "text-accent",
    },
    {
      title: "Durante",
      description: "Actualizaciones por etapa y aprobacion previa de cualquier cambio.",
      className: "border border-secondary/45 bg-secondary/12",
      titleClassName: "text-secondary",
    },
    {
      title: "Entrega",
      description: "Pruebas funcionales, garantia y recomendaciones preventivas.",
      className: "border border-accent/40 bg-accent/12",
      titleClassName: "text-accent",
    },
  ];

  const trustChecklist = [
    {
      text: "Cotizacion cerrada antes de intervenir.",
      iconClassName: "text-accent",
    },
    {
      text: "Garantia por escrito al finalizar el trabajo.",
      iconClassName: "text-secondary",
    },
  ];

  return (
    <section id="testimonios" className="relative overflow-hidden bg-primary py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,var(--secondary)_0%,transparent_36%),radial-gradient(circle_at_82%_76%,var(--accent)_0%,transparent_40%)] opacity-20" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Testimonios" subtitle="Opiniones reales de clientes" />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-3xl border border-primary-foreground/20 bg-primary-foreground/7 backdrop-blur-sm">
            {testimonials.map((testimonial, index) => (
              <TestimonialEntry
                key={testimonial.initials}
                initials={testimonial.initials}
                accentClassName={testimonial.accentClassName}
                initialsClassName={testimonial.initialsClassName}
                quote={testimonial.quote}
                author={testimonial.author}
                withBottomBorder={index < testimonials.length - 1}
              />
            ))}
          </div>

          <aside className="rounded-3xl border border-primary-foreground/20 bg-primary-foreground/6 p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/65">Compromiso AD</p>
            <h3 className="mt-3 text-2xl font-semibold text-primary-foreground">Lo que siempre recibes</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
              Sin puntuaciones infladas: te mostramos procesos, evidencia y respaldo real en cada servicio.
            </p>

            <div className="mt-6 space-y-3">
              {commitmentStages.map((stage) => (
                <CommitmentStageCard
                  key={stage.title}
                  title={stage.title}
                  description={stage.description}
                  className={stage.className}
                  titleClassName={stage.titleClassName}
                />
              ))}
            </div>

            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/80">
              {trustChecklist.map((item) => (
                <TrustChecklistItem key={item.text} icon={CheckCircle} iconClassName={item.iconClassName} text={item.text} />
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
