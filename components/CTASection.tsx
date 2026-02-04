import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-background rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-background rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
          ¿Listo para Potenciar tu Producción?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
          Nuestros asesores están listos para ayudarte a encontrar la maquinaria perfecta para tu campo.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors"
          >
            Solicitar Cotización
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href="tel:+541145678900"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            <Phone className="h-5 w-5" />
            Llamar Ahora
          </a>
        </div>

        <p className="mt-8 text-primary-foreground/60 text-sm">
          Atención personalizada de Lunes a Viernes de 8:00 a 18:00 hs
        </p>
      </div>
    </section>
  );
}
