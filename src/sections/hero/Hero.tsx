import React from "react";
import { ShieldCheck, Wrench, Clock3 } from "lucide-react";

import { Button } from "@/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-primary py-24 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:34px_34px] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,var(--accent)_0%,transparent_45%),radial-gradient(circle_at_82%_80%,var(--secondary)_0%,transparent_40%)] opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.22)_1px,transparent_1.8px)] bg-[size:34px_34px] opacity-20" />

      <div className="container relative z-10 mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary-foreground/85">
            AD TECH LAB
          </p>

          <h1 className="text-4xl font-bold leading-[1.05] text-primary-foreground md:text-6xl">
            Diagnostico preciso.
            <br />
            Reparacion de alto rendimiento.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/74">
            Convertimos fallos en equipos listos para producir o jugar. Flujo tecnico trazable, costos definidos y tiempos reales desde el primer minuto.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing">
              <Button className="h-11 rounded-md border border-accent/60 bg-accent px-6 font-semibold text-accent-foreground shadow-[0_0_24px_rgba(76,145,255,0.45)] hover:bg-accent/90">
                Iniciar cotizacion
              </Button>
            </a>
            <a href="#services">
              <Button
                variant="outline"
                className="h-11 rounded-md border-primary-foreground/35 bg-primary-foreground/8 px-6 text-primary-foreground hover:bg-primary-foreground/16"
              >
                Explorar servicios
              </Button>
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md border border-accent/35 bg-primary-foreground/6 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-sm">
              <p className="text-2xl font-bold text-primary-foreground">+500</p>
              <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/66">Equipos atendidos</p>
            </div>
            <div className="rounded-md border border-secondary/35 bg-primary-foreground/6 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-sm">
              <p className="text-2xl font-bold text-primary-foreground">24h</p>
              <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/66">Diagnostico promedio</p>
            </div>
            <div className="rounded-md border border-accent/35 bg-primary-foreground/6 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-sm">
              <p className="text-2xl font-bold text-primary-foreground">100%</p>
              <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/66">Cotizacion previa</p>
            </div>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-md border border-primary-foreground/24 bg-primary-foreground/7 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent/22 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-secondary/18 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:18px_18px] opacity-40" />

          <div className="relative z-10 space-y-4">
            <h2 className="text-xl font-semibold text-primary-foreground md:text-2xl">Pipeline de servicio</h2>

            <div className="rounded-md border border-accent/35 bg-primary-foreground/8 p-4">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground">
                <Wrench className="h-4 w-4 text-accent" />
                Escaneo tecnico
              </p>
              <p className="mt-1 text-sm text-primary-foreground/72">Chequeo de hardware, termica y estabilidad en pruebas controladas.</p>
            </div>

            <div className="rounded-md border border-secondary/35 bg-primary-foreground/8 p-4">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                Protocolo seguro
              </p>
              <p className="mt-1 text-sm text-primary-foreground/72">Intervencion con trazabilidad y garantia por escrito.</p>
            </div>

            <div className="rounded-md border border-accent/35 bg-primary-foreground/8 p-4">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground">
                <Clock3 className="h-4 w-4 text-accent" />
                Entrega sincronizada
              </p>
              <p className="mt-1 text-sm text-primary-foreground/72">Plazo confirmado por etapa para que no te quedes a ciegas.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
