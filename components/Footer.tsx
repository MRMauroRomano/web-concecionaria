import Link from "next/link";
import { Tractor, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Tractor className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">AgroMaq</span>
            </Link>
            <p className="text-background/70 leading-relaxed">
              Líder en venta de maquinaria agrícola con más de 25 años de experiencia en el sector.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-background/70 hover:text-background transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-background/70 hover:text-background transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-background/70 hover:text-background transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categorías</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/catalogo?categoria=tractores" className="text-background/70 hover:text-background transition-colors">
                  Tractores
                </Link>
              </li>
              <li>
                <Link href="/catalogo?categoria=cosechadoras" className="text-background/70 hover:text-background transition-colors">
                  Cosechadoras
                </Link>
              </li>
              <li>
                <Link href="/catalogo?categoria=sembradoras" className="text-background/70 hover:text-background transition-colors">
                  Sembradoras
                </Link>
              </li>
              <li>
                <Link href="/catalogo?categoria=pulverizadoras" className="text-background/70 hover:text-background transition-colors">
                  Pulverizadoras
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="h-5 w-5 shrink-0" />
                <span>+54 11 4567-8900</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="h-5 w-5 shrink-0" />
                <span>ventas@agromaq.com</span>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Ruta Provincial 5, Km 120, Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2026 AgroMaq. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-background/60 hover:text-background transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="#" className="text-background/60 hover:text-background transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
