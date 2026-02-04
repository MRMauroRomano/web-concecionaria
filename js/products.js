// Products Data with extended info and gallery
const products = [
  {
    id: "1",
    name: "Tractor T7 260",
    brand: "New Holland",
    category: "tractores",
    description: "Tractor de alta potencia con transmision powershift y sistema hidraulico de ultima generacion. Ideal para trabajos pesados.",
    fullDescription: "El Tractor T7 260 de New Holland representa la cima de la ingenieria agricola moderna. Equipado con un motor de 260 HP, este tractor esta disenado para enfrentar los trabajos mas exigentes del campo. Su transmision Powershift 19x6 ofrece cambios suaves y precisos, mientras que la cabina Premium proporciona el maximo confort al operador durante largas jornadas de trabajo. El sistema GPS integrado permite una precision milimetrica en todas las operaciones, optimizando el uso de insumos y maximizando la productividad. Su sistema hidraulico de ultima generacion garantiza respuesta inmediata y potencia constante para cualquier implemento.",
    price: "USD 185.000",
    specs: ["260 HP", "Powershift 19x6", "Cabina Premium", "GPS Integrado"],
    features: ["Motor FPT de 6 cilindros", "Sistema hidraulico de caudal variable", "Eje delantero suspendido", "Climatizador automatico", "Monitor tactil 12 pulgadas", "Faros LED de trabajo"],
    image: "images/productos/tractor-t7-260.jpg",
    gallery: ["images/productos/tractor-t7-260.jpg", "images/productos/tractor-t7-260-2.jpg", "images/productos/tractor-t7-260-3.jpg", "images/productos/tractor-t7-260-4.jpg"],
    featured: true,
    isNew: true,
  },
  {
    id: "2",
    name: "Cosechadora CR 9.90",
    brand: "New Holland",
    category: "cosechadoras",
    description: "Cosechadora axial de alto rendimiento con tecnologia Twin Rotor para maxima eficiencia en la cosecha.",
    fullDescription: "La Cosechadora CR 9.90 de New Holland es una maquina extraordinaria que redefine los estandares de productividad en la cosecha. Con su revolucionario sistema Twin Rotor, esta cosechadora procesa el cultivo de manera mas eficiente y delicada, reduciendo perdidas y mejorando la calidad del grano. Su motor de 520 HP proporciona potencia de sobra para enfrentar los cultivos mas densos, mientras que la tolva de 14.500 litros minimiza las paradas para descarga. El sistema Intelliview IV ofrece control total de todas las funciones desde una pantalla intuitiva, permitiendo ajustes en tiempo real para optimizar el rendimiento.",
    price: "USD 520.000",
    specs: ["520 HP", "Tolva 14.500L", "Corte 12.5m", "Intelliview IV"],
    features: ["Sistema Twin Rotor", "Descarga de alta velocidad", "SmartTrax opcional", "Mapeo de rendimiento", "Control automatico de altura", "Sensor de perdidas"],
    image: "images/productos/cosechadora-cr990.jpg",
    gallery: ["images/productos/cosechadora-cr990.jpg", "images/productos/cosechadora-cr990-2.jpg", "images/productos/cosechadora-cr990-3.jpg", "images/productos/cosechadora-cr990-4.jpg"],
    featured: true,
    isNew: false,
  },
  {
    id: "3",
    name: "Sembradora Precision Planting",
    brand: "John Deere",
    category: "sembradoras",
    description: "Sembradora de precision con sistema de dosificacion variable y monitoreo en tiempo real por surco.",
    fullDescription: "La Sembradora Precision Planting de John Deere representa lo ultimo en tecnologia de siembra de precision. Cada uno de sus 24 surcos cuenta con sensores independientes que monitorean la profundidad, la presion y la distribucion de semillas en tiempo real. El sistema de dosificacion variable permite ajustar la densidad de siembra segun mapas de prescripcion, maximizando el potencial de cada zona del lote. El monitor Pro integrado muestra toda la informacion critica de manera clara y permite realizar ajustes sobre la marcha sin detener la operacion.",
    price: "USD 95.000",
    specs: ["24 Surcos", "Dosis Variable", "Monitor Pro", "Control Hidraulico"],
    features: ["Sensores por surco", "Sistema vSet", "Control de profundidad activo", "Fertilizacion variable", "Corte automatico por surco", "Conectividad telemetrica"],
    image: "images/productos/sembradora-precision.jpg",
    gallery: ["images/productos/sembradora-precision.jpg", "images/productos/sembradora-precision-2.jpg", "images/productos/sembradora-precision-3.jpg", "images/productos/sembradora-precision-4.jpg"],
    featured: true,
    isNew: true,
  },
  {
    id: "4",
    name: "Tractor 8R 410",
    brand: "John Deere",
    category: "tractores",
    description: "Tractor premium con motor PowerTech PSS y transmision e23 para maxima eficiencia de combustible.",
    fullDescription: "El Tractor 8R 410 de John Deere es la eleccion de los productores mas exigentes. Su motor PowerTech PSS de 410 HP combina potencia brutal con eficiencia de combustible excepcional gracias a su sistema de post-tratamiento de emisiones. La transmision e23 ofrece 23 velocidades hacia adelante con cambios imperceptibles, permitiendo encontrar siempre la relacion perfecta para cada tarea. El sistema CommandARM pone todos los controles al alcance de la mano, mientras que AutoTrac garantiza lineas perfectamente rectas sin fatiga del operador.",
    price: "USD 320.000",
    specs: ["410 HP", "e23 Transmision", "CommandARM", "AutoTrac"],
    features: ["Motor PowerTech PSS", "Sistema IVT opcional", "ActiveCommand Steering", "JDLink conectividad", "Suspension de cabina", "Control de lastrado automatico"],
    image: "images/productos/tractor-8r-410.jpg",
    gallery: ["images/productos/tractor-8r-410.jpg", "images/productos/tractor-8r-410-2.jpg", "images/productos/tractor-8r-410-3.jpg", "images/productos/tractor-8r-410-4.jpg"],
    featured: false,
    isNew: true,
  },
  {
    id: "5",
    name: "Pulverizadora Patriot 4440",
    brand: "Case IH",
    category: "pulverizadoras",
    description: "Pulverizadora autopropulsada con barral de fibra de carbono y sistema de aplicacion inteligente.",
    fullDescription: "La Pulverizadora Patriot 4440 de Case IH es una maquina de aplicacion de ultima generacion disenada para maximizar la eficiencia y precision en la proteccion de cultivos. Su barral de fibra de carbono de 36 metros es extraordinariamente ligero y resistente, permitiendo mayor velocidad de trabajo y mejor seguimiento del terreno. El sistema AIM Command controla electronicamente cada pico de pulverizacion, permitiendo corte automatico por secciones y compensacion de curvas. AccuBoom mantiene el barral siempre a la altura optima del cultivo.",
    price: "USD 280.000",
    specs: ["4400L Tanque", "36m Barral", "AIM Command", "AccuBoom"],
    features: ["Barral fibra de carbono", "Picos PWM individuales", "Sistema de enjuague", "Tanque de agua limpia", "GPS de alta precision", "Control de deriva"],
    image: "images/productos/pulverizadora-patriot.jpg",
    gallery: ["images/productos/pulverizadora-patriot.jpg", "images/productos/pulverizadora-patriot-2.jpg", "images/productos/pulverizadora-patriot-3.jpg", "images/productos/pulverizadora-patriot-4.jpg"],
    featured: false,
    isNew: false,
  },
  {
    id: "6",
    name: "Cosechadora S790",
    brand: "John Deere",
    category: "cosechadoras",
    description: "Cosechadora de ultima generacion con sistema de trillar activo y mapeo de rendimiento integrado.",
    fullDescription: "La Cosechadora S790 de John Deere representa el pináculo de la tecnología de cosecha. Su innovador sistema de trilla activa se ajusta automaticamente a las condiciones del cultivo, optimizando la separacion y limpieza del grano. Con 549 HP de potencia y una tolva de 17.000 litros, esta maquina esta disenada para maximizar la productividad en las campanas mas exigentes. El sistema ProDrive ofrece velocidad de descarga incomparable, mientras que HarvestSmart ajusta automaticamente la velocidad de avance para mantener siempre la capacidad optima de procesamiento.",
    price: "USD 580.000",
    specs: ["549 HP", "Tolva 17.000L", "ProDrive", "HarvestSmart"],
    features: ["Sistema de trilla activa", "Combine Advisor", "AutoTrac integrado", "Active Yield", "Documentacion automatica", "Machine Sync"],
    image: "images/productos/cosechadora-s790.jpg",
    gallery: ["images/productos/cosechadora-s790.jpg", "images/productos/cosechadora-s790-2.jpg", "images/productos/cosechadora-s790-3.jpg", "images/productos/cosechadora-s790-4.jpg"],
    featured: false,
    isNew: true,
  },
  {
    id: "7",
    name: "Tractor Axion 960",
    brand: "Claas",
    category: "tractores",
    description: "Tractor de alto rendimiento con transmision CVT y sistema CMATIC para una conduccion suave.",
    fullDescription: "El Tractor Axion 960 de Claas combina potencia alemana con tecnologia de vanguardia. Su transmision CVT CMATIC ofrece una experiencia de conduccion incomparable, con aceleracion suave y sin interrupciones de potencia. Los 445 HP de su motor se transmiten eficientemente al suelo gracias a su sistema de gestion de traccion inteligente. El terminal CEBIS proporciona control total de todas las funciones del tractor desde una interfaz intuitiva, mientras que GPS Pilot permite operaciones de precision sin fatiga.",
    price: "USD 245.000",
    specs: ["445 HP", "CMATIC CVT", "CEBIS", "GPS Pilot"],
    features: ["Transmision continua", "Sistema CEMOS", "Suspension de cabina", "Control de patinamiento", "Telematics conectividad", "Luces LED integrales"],
    image: "images/productos/tractor-axion-960.jpg",
    gallery: ["images/productos/tractor-axion-960.jpg", "images/productos/tractor-axion-960-2.jpg", "images/productos/tractor-axion-960-3.jpg", "images/productos/tractor-axion-960-4.jpg"],
    featured: false,
    isNew: false,
  },
  {
    id: "8",
    name: "Sembradora Air Seeder",
    brand: "Case IH",
    category: "sembradoras",
    description: "Sembradora neumatica de gran capacidad ideal para siembra directa en extensas superficies.",
    fullDescription: "La Sembradora Air Seeder de Case IH es la solucion ideal para productores que necesitan cubrir grandes extensiones en poco tiempo. Con 32 surcos y una tolva de 6.500 litros, esta sembradora permite largas jornadas de trabajo sin paradas frecuentes. Su sistema de distribucion neumatica garantiza precision incluso a altas velocidades, mientras que la doble fertilizacion permite colocar nutrientes tanto en la linea como al costado de la semilla. El monitor AFS Pro proporciona informacion detallada de cada aspecto de la siembra.",
    price: "USD 78.000",
    specs: ["32 Surcos", "Tolva 6500L", "Doble Fertilizacion", "Monitor AFS"],
    features: ["Distribucion neumatica", "Cuchillas turbo", "Ruedas limitadoras", "Sistema de carga rapida", "Dosificadores de precision", "Control de profundidad"],
    image: "images/productos/sembradora-air-seeder.jpg",
    gallery: ["images/productos/sembradora-air-seeder.jpg", "images/productos/sembradora-air-seeder-2.jpg", "images/productos/sembradora-air-seeder-3.jpg", "images/productos/sembradora-air-seeder-4.jpg"],
    featured: false,
    isNew: false,
  },
  {
    id: "9",
    name: "Rastra de Discos HD",
    brand: "Apache",
    category: "implementos",
    description: "Rastra de discos pesada para trabajo agresivo en suelos dificiles y manejo de rastrojos.",
    fullDescription: "La Rastra de Discos HD de Apache es un implemento robusto disenado para los trabajos mas exigentes de preparacion de suelo. Con 6.5 metros de ancho de trabajo y discos de 28 pulgadas, esta rastra penetra profundamente en suelos duros y maneja los rastrojos mas voluminosos. Su chasis reforzado y el sistema de levante hidraulico garantizan durabilidad y facilidad de operacion. Ideal para incorporacion de rastrojos post-cosecha y preparacion de camas de siembra.",
    price: "USD 35.000",
    specs: ["6.5m Ancho", "Discos 28\"", "Sistema Levante", "Chasis Reforzado"],
    features: ["Discos ondulados", "Rodamientos sellados", "Regulacion de angulo", "Ruedas de transporte", "Enganche categoria III", "Cuchillas reemplazables"],
    image: "images/productos/rastra-discos.jpg",
    gallery: ["images/productos/rastra-discos.jpg", "images/productos/rastra-discos-2.jpg", "images/productos/rastra-discos-3.jpg", "images/productos/rastra-discos-4.jpg"],
    featured: false,
    isNew: false,
  },
  {
    id: "10",
    name: "Pulverizadora Pantera 4530",
    brand: "Pla",
    category: "pulverizadoras",
    description: "Pulverizadora nacional de alta tecnologia con sistema de corte por seccion automatico.",
    fullDescription: "La Pulverizadora Pantera 4530 de Pla es orgullo de la industria nacional, combinando tecnologia de punta con la robustez necesaria para las condiciones argentinas. Su tanque de 4.500 litros y barral de 30 metros permiten cubrir grandes superficies con eficiencia. El sistema de corte por seccion automatico evita solapamientos y reduce el desperdicio de productos, mientras que el piloto automatico libera al operador para concentrarse en el monitoreo de la aplicacion.",
    price: "USD 195.000",
    specs: ["4500L Tanque", "30m Barral", "Corte Seccion", "Piloto Auto"],
    features: ["Fabricacion nacional", "Repuestos disponibles", "Servicio tecnico local", "Sistema de lavado", "Filtros autolimpiantes", "Cabina climatizada"],
    image: "images/productos/pulverizadora-pantera.jpg",
    gallery: ["images/productos/pulverizadora-pantera.jpg", "images/productos/pulverizadora-pantera-2.jpg", "images/productos/pulverizadora-pantera-3.jpg", "images/productos/pulverizadora-pantera-4.jpg"],
    featured: false,
    isNew: true,
  },
  {
    id: "11",
    name: "Mixer Vertical 14",
    brand: "Mainero",
    category: "implementos",
    description: "Mixer vertical para preparacion de raciones TMR con sistema de pesaje electronico.",
    fullDescription: "El Mixer Vertical 14 de Mainero es la herramienta ideal para establecimientos ganaderos que buscan optimizar la alimentacion de su rodeo. Con capacidad de 14 metros cubicos, permite preparar raciones TMR (Total Mixed Ration) de manera eficiente y homogenea. Su sistema de pesaje electronico garantiza precisión en las formulaciones, mientras que el sinfin de descarga facilita la distribucion del alimento. Disenado y fabricado en Argentina, cuenta con amplio respaldo de repuestos y servicio tecnico.",
    price: "USD 42.000",
    specs: ["14m3 Capacidad", "Balanza Digital", "Sinfin Descarga", "PTO 540"],
    features: ["Sinfines reforzados", "Contra-cuchillas", "Indicador remoto", "Cinta de descarga lateral", "Chasis galvanizado", "Facil mantenimiento"],
    image: "images/productos/mixer-vertical.jpg",
    gallery: ["images/productos/mixer-vertical.jpg", "images/productos/mixer-vertical-2.jpg", "images/productos/mixer-vertical-3.jpg", "images/productos/mixer-vertical-4.jpg"],
    featured: false,
    isNew: false,
  },
  {
    id: "12",
    name: "Enfardadora Gigante",
    brand: "Claas",
    category: "implementos",
    description: "Enfardadora de rollos gigantes con sistema de atado automatico y alta densidad de compactacion.",
    fullDescription: "La Enfardadora Gigante de Claas es la solucion profesional para la confeccion de rollos de forraje de maxima calidad. Produce rollos de 1.8 x 1.2 metros con alta densidad de compactacion, optimizando el almacenamiento y transporte. Su sistema de atado automatico garantiza rollos perfectamente formados y seguros, mientras que el pick up de 2.35 metros recoge eficientemente hileras anchas. El monitor ISOBUS permite control total desde la cabina del tractor.",
    price: "USD 85.000",
    specs: ["Rollo 1.8x1.2m", "Atado Auto", "Pick Up 2.35m", "Monitor ISOBUS"],
    features: ["Camara variable", "18 cuchillas", "Sistema de freno", "Contador de rollos", "Sensor de humedad opcional", "Aplicador de conservante"],
    image: "images/productos/enfardadora-gigante.jpg",
    gallery: ["images/productos/enfardadora-gigante.jpg", "images/productos/enfardadora-gigante-2.jpg", "images/productos/enfardadora-gigante-3.jpg", "images/productos/enfardadora-gigante-4.jpg"],
    featured: false,
    isNew: false,
  },
];

const categories = [
  { id: "all", name: "Todos" },
  { id: "tractores", name: "Tractores" },
  { id: "cosechadoras", name: "Cosechadoras" },
  { id: "sembradoras", name: "Sembradoras" },
  { id: "pulverizadoras", name: "Pulverizadoras" },
  { id: "implementos", name: "Implementos" },
];

// Helper functions
function getProductsByCategory(categoryId) {
  if (categoryId === "all") return products;
  return products.filter(p => p.category === categoryId);
}

function searchProducts(query) {
  const lowerQuery = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.brand.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
}

function getFeaturedProducts() {
  return products.filter(p => p.featured);
}

// Product Card HTML Generator
function createProductCard(product, showFeaturedBadge = false) {
  const specsHTML = product.specs.slice(0, 2).map(spec => 
    `<span class="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">${spec}</span>`
  ).join('');

  return `
    <div class="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
      <div class="relative aspect-[4/3] bg-muted overflow-hidden cursor-pointer" onclick="openProductModal('${product.id}')">
        <img 
          src="${product.image}" 
          alt="${product.name}"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onerror="this.parentElement.innerHTML = createImagePlaceholder()"
        >
        ${product.isNew ? '<span class="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Nuevo</span>' : ''}
        ${showFeaturedBadge && product.featured ? '<span class="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">Destacado</span>' : ''}
        <!-- View Details Overlay -->
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span class="bg-white text-foreground px-4 py-2 rounded-lg font-medium flex items-center gap-2">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            Ver Detalles
          </span>
        </div>
      </div>
      <div class="p-6">
        <span class="text-sm text-muted-foreground">${product.brand}</span>
        <h3 class="text-xl font-semibold text-foreground mt-1 group-hover:text-primary transition-colors cursor-pointer" onclick="openProductModal('${product.id}')">${product.name}</h3>
        <p class="text-muted-foreground mt-2 line-clamp-2">${product.description}</p>
        <div class="mt-4 flex flex-wrap gap-2">${specsHTML}</div>
        <div class="mt-6 flex items-center justify-between">
          <div>
            <p class="text-sm text-muted-foreground">Desde</p>
            <p class="text-2xl font-bold text-primary">${product.price}</p>
          </div>
          <div class="flex gap-2">
            <button onclick="openProductModal('${product.id}')" class="bg-secondary text-secondary-foreground px-3 py-2 rounded-lg font-medium hover:bg-secondary/80 transition-colors" title="Ver detalles">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </button>
            <a href="contacto.html?producto=${encodeURIComponent(product.name)}" class="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Cotizar
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Get product by ID
function getProductById(id) {
  return products.find(p => p.id === id);
}

// Product Modal Functions
let currentGalleryIndex = 0;
let currentProduct = null;

function openProductModal(productId) {
  currentProduct = getProductById(productId);
  if (!currentProduct) return;
  
  currentGalleryIndex = 0;
  
  const modal = document.getElementById('productModal');
  if (!modal) return;
  
  // Update modal content
  document.getElementById('modalProductName').textContent = currentProduct.name;
  document.getElementById('modalProductBrand').textContent = currentProduct.brand;
  document.getElementById('modalProductPrice').textContent = currentProduct.price;
  document.getElementById('modalProductDescription').textContent = currentProduct.fullDescription || currentProduct.description;
  document.getElementById('modalCotizarBtn').href = `contacto.html?producto=${encodeURIComponent(currentProduct.name)}`;
  
  // Update specs
  const specsContainer = document.getElementById('modalProductSpecs');
  specsContainer.innerHTML = currentProduct.specs.map(spec => 
    `<span class="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg text-sm">${spec}</span>`
  ).join('');
  
  // Update features
  const featuresContainer = document.getElementById('modalProductFeatures');
  if (currentProduct.features && currentProduct.features.length > 0) {
    featuresContainer.innerHTML = currentProduct.features.map(feature => 
      `<li class="flex items-center gap-2">
        <svg class="h-5 w-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        <span>${feature}</span>
      </li>`
    ).join('');
  }
  
  // Update gallery
  updateGalleryImage();
  updateGalleryThumbnails();
  
  // Show modal
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

function updateGalleryImage() {
  if (!currentProduct) return;
  const mainImage = document.getElementById('modalMainImage');
  const gallery = currentProduct.gallery || [currentProduct.image];
  mainImage.src = gallery[currentGalleryIndex];
  mainImage.onerror = function() {
    this.src = currentProduct.image;
  };
  
  // Update counter
  document.getElementById('galleryCounter').textContent = `${currentGalleryIndex + 1} / ${gallery.length}`;
}

function updateGalleryThumbnails() {
  if (!currentProduct) return;
  const container = document.getElementById('galleryThumbnails');
  const gallery = currentProduct.gallery || [currentProduct.image];
  
  container.innerHTML = gallery.map((img, index) => `
    <button 
      onclick="setGalleryIndex(${index})"
      class="relative aspect-square rounded-lg overflow-hidden border-2 ${index === currentGalleryIndex ? 'border-primary' : 'border-transparent'} hover:border-primary/50 transition-colors"
    >
      <img src="${img}" alt="Vista ${index + 1}" class="w-full h-full object-cover" onerror="this.src='${currentProduct.image}'">
    </button>
  `).join('');
}

function setGalleryIndex(index) {
  currentGalleryIndex = index;
  updateGalleryImage();
  updateGalleryThumbnails();
}

function nextGalleryImage() {
  if (!currentProduct) return;
  const gallery = currentProduct.gallery || [currentProduct.image];
  currentGalleryIndex = (currentGalleryIndex + 1) % gallery.length;
  updateGalleryImage();
  updateGalleryThumbnails();
}

function prevGalleryImage() {
  if (!currentProduct) return;
  const gallery = currentProduct.gallery || [currentProduct.image];
  currentGalleryIndex = (currentGalleryIndex - 1 + gallery.length) % gallery.length;
  updateGalleryImage();
  updateGalleryThumbnails();
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeProductModal();
  }
  if (e.key === 'ArrowRight') {
    nextGalleryImage();
  }
  if (e.key === 'ArrowLeft') {
    prevGalleryImage();
  }
});

function createImagePlaceholder() {
  return `
    <div class="absolute inset-0 flex items-center justify-center bg-secondary">
      <div class="text-center p-4">
        <div class="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
          <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </div>
        <p class="text-xs text-muted-foreground">Imagen no disponible</p>
      </div>
    </div>
  `;
}
