export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: string;
  specs: string[];
  image: string; // URL de la imagen del producto
  featured: boolean;
  isNew: boolean;
}

export const categories = [
  { id: "all", name: "Todos" },
  { id: "tractores", name: "Tractores" },
  { id: "cosechadoras", name: "Cosechadoras" },
  { id: "sembradoras", name: "Sembradoras" },
  { id: "pulverizadoras", name: "Pulverizadoras" },
  { id: "implementos", name: "Implementos" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Tractor T7 260",
    brand: "New Holland",
    category: "tractores",
    description: "Tractor de alta potencia con transmisión powershift y sistema hidráulico de última generación. Ideal para trabajos pesados.",
    price: "USD 185.000",
    specs: ["260 HP", "Powershift 19x6", "Cabina Premium", "GPS Integrado"],
    image: "/images/productos/tractor-t7-260.jpg",
    featured: true,
    isNew: true,
  },
  {
    id: "2",
    name: "Cosechadora CR 9.90",
    brand: "New Holland",
    category: "cosechadoras",
    description: "Cosechadora axial de alto rendimiento con tecnología Twin Rotor para máxima eficiencia en la cosecha.",
    price: "USD 520.000",
    specs: ["520 HP", "Tolva 14.500L", "Corte 12.5m", "Intelliview IV"],
    image: "/images/productos/cosechadora-cr990.jpg",
    featured: true,
    isNew: false,
  },
  {
    id: "3",
    name: "Sembradora Precision Planting",
    brand: "John Deere",
    category: "sembradoras",
    description: "Sembradora de precisión con sistema de dosificación variable y monitoreo en tiempo real por surco.",
    price: "USD 95.000",
    specs: ["24 Surcos", "Dosis Variable", "Monitor Pro", "Control Hidráulico"],
    image: "/images/productos/sembradora-precision.jpg",
    featured: true,
    isNew: true,
  },
  {
    id: "4",
    name: "Tractor 8R 410",
    brand: "John Deere",
    category: "tractores",
    description: "Tractor premium con motor PowerTech PSS y transmisión e23 para máxima eficiencia de combustible.",
    price: "USD 320.000",
    specs: ["410 HP", "e23 Transmisión", "CommandARM", "AutoTrac"],
    image: "/images/productos/tractor-8r-410.jpg",
    featured: false,
    isNew: true,
  },
  {
    id: "5",
    name: "Pulverizadora Patriot 4440",
    brand: "Case IH",
    category: "pulverizadoras",
    description: "Pulverizadora autopropulsada con barral de fibra de carbono y sistema de aplicación inteligente.",
    price: "USD 280.000",
    specs: ["4400L Tanque", "36m Barral", "AIM Command", "AccuBoom"],
    image: "/images/productos/pulverizadora-patriot.jpg",
    featured: false,
    isNew: false,
  },
  {
    id: "6",
    name: "Cosechadora S790",
    brand: "John Deere",
    category: "cosechadoras",
    description: "Cosechadora de última generación con sistema de trillar activo y mapeo de rendimiento integrado.",
    price: "USD 580.000",
    specs: ["549 HP", "Tolva 17.000L", "ProDrive", "HarvestSmart"],
    image: "/images/productos/cosechadora-s790.jpg",
    featured: false,
    isNew: true,
  },
  {
    id: "7",
    name: "Tractor Axion 960",
    brand: "Claas",
    category: "tractores",
    description: "Tractor de alto rendimiento con transmisión CVT y sistema CMATIC para una conducción suave.",
    price: "USD 245.000",
    specs: ["445 HP", "CMATIC CVT", "CEBIS", "GPS Pilot"],
    image: "/images/productos/tractor-axion-960.jpg",
    featured: false,
    isNew: false,
  },
  {
    id: "8",
    name: "Sembradora Air Seeder",
    brand: "Case IH",
    category: "sembradoras",
    description: "Sembradora neumática de gran capacidad ideal para siembra directa en extensas superficies.",
    price: "USD 78.000",
    specs: ["32 Surcos", "Tolva 6500L", "Doble Fertilización", "Monitor AFS"],
    image: "/images/productos/sembradora-air-seeder.jpg",
    featured: false,
    isNew: false,
  },
  {
    id: "9",
    name: "Rastra de Discos HD",
    brand: "Apache",
    category: "implementos",
    description: "Rastra de discos pesada para trabajo agresivo en suelos difíciles y manejo de rastrojos.",
    price: "USD 35.000",
    specs: ["6.5m Ancho", "Discos 28\"", "Sistema Levante", "Chasis Reforzado"],
    image: "/images/productos/rastra-discos.jpg",
    featured: false,
    isNew: false,
  },
  {
    id: "10",
    name: "Pulverizadora Pantera 4530",
    brand: "Pla",
    category: "pulverizadoras",
    description: "Pulverizadora nacional de alta tecnología con sistema de corte por sección automático.",
    price: "USD 195.000",
    specs: ["4500L Tanque", "30m Barral", "Corte Sección", "Piloto Auto"],
    image: "/images/productos/pulverizadora-pantera.jpg",
    featured: false,
    isNew: true,
  },
  {
    id: "11",
    name: "Mixer Vertical 14",
    brand: "Mainero",
    category: "implementos",
    description: "Mixer vertical para preparación de raciones TMR con sistema de pesaje electrónico.",
    price: "USD 42.000",
    specs: ["14m³ Capacidad", "Balanza Digital", "Sinfín Descarga", "PTO 540"],
    image: "/images/productos/mixer-vertical.jpg",
    featured: false,
    isNew: false,
  },
  {
    id: "12",
    name: "Enfardadora Gigante",
    brand: "Claas",
    category: "implementos",
    description: "Enfardadora de rollos gigantes con sistema de atado automático y alta densidad de compactación.",
    price: "USD 85.000",
    specs: ["Rollo 1.8x1.2m", "Atado Auto", "Pick Up 2.35m", "Monitor ISOBUS"],
    image: "/images/productos/enfardadora-gigante.jpg",
    featured: false,
    isNew: false,
  },
];

export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === "all") return products;
  return products.filter((p) => p.category === categoryId);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.brand.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  );
}
