import { Wrench, Truck, CreditCard, Headphones } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Servicio Técnico",
    description: "Mantenimiento preventivo y correctivo con repuestos originales y técnicos certificados.",
  },
  {
    icon: Truck,
    title: "Entrega a Domicilio",
    description: "Llevamos tu maquinaria hasta tu campo en cualquier punto del país.",
  },
  {
    icon: CreditCard,
    title: "Financiamiento",
    description: "Planes de pago flexibles y tasas preferenciales para productores.",
  },
  {
    icon: Headphones,
    title: "Asesoramiento",
    description: "Te ayudamos a elegir el equipo ideal según tus necesidades productivas.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium">Nuestros Servicios</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 text-balance">
            Más que una Venta, una Alianza
          </h2>
          <p className="text-muted-foreground mt-4 text-pretty">
            Te acompañamos en cada etapa, desde la elección hasta el mantenimiento de tu maquinaria.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
