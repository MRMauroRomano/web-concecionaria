"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { products, type Product } from "@/lib/products";

/* =========================
   MODAL DE PRODUCTO
========================= */
function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-card rounded-2xl max-w-4xl w-full mx-4 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-muted-foreground hover:text-foreground"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div>
            <p className="text-sm text-muted-foreground">{product.brand}</p>
            <h2 className="text-3xl font-bold mt-1">{product.name}</h2>

            <p className="text-2xl text-primary font-semibold mt-3">
              {product.price}
            </p>

            <p className="text-muted-foreground mt-4">
              {product.description}
            </p>

            <ul className="mt-4 space-y-2">
              {product.specs.map((spec, i) => (
                <li key={i} className="text-sm flex gap-2">
                  ✔ {spec}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/549XXXXXXXXXX?text=Hola, me interesa el ${product.name}`}
                target="_blank"
                className="flex-1 bg-green-500 text-white text-center py-2 rounded-lg font-medium hover:bg-green-600 transition"
              >
                WhatsApp
              </a>

              <Link
                href={`/contacto?producto=${encodeURIComponent(product.name)}`}
                className="flex-1 bg-primary text-primary-foreground text-center py-2 rounded-lg font-medium hover:bg-primary/90 transition"
              >
                Cotizar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   CARD DE PRODUCTO
========================= */
function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
        {!imageError && product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary">
            <p className="text-xs text-muted-foreground">
              Imagen no disponible
            </p>
          </div>
        )}

        {product.isNew && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Nuevo
          </span>
        )}
      </div>

      <div className="p-6">
        <span className="text-sm text-muted-foreground">
          {product.brand}
        </span>

        <h3 className="text-xl font-semibold mt-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <p className="text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.specs.slice(0, 2).map((spec, i) => (
            <span
              key={i}
              className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Desde</p>
            <p className="text-2xl font-bold text-primary">
              {product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   FEATURED PRODUCTS
========================= */
export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      await new Promise((r) => setTimeout(r, 500));
      setFeaturedProducts(products.filter((p) => p.featured).slice(0, 3));
      setLoading(false);
    };
    loadProducts();
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-medium">
              Nuestro Catálogo
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">
              Equipos Destacados
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Descubre nuestra selección de maquinaria agrícola.
            </p>
          </div>

          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Ver todo el catálogo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
