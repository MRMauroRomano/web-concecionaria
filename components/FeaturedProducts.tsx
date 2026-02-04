"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { products, type Product } from "@/lib/products";

function ProductCard({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
        {!imageError && product.image ? (
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-muted-foreground">Imagen no disponible</p>
            </div>
          </div>
        )}
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Nuevo
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-sm text-muted-foreground">{product.brand}</span>
        <h3 className="text-xl font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground mt-2 line-clamp-2">{product.description}</p>

        {/* Specs */}
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

        {/* Price & CTA */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Desde</p>
            <p className="text-2xl font-bold text-primary">{product.price}</p>
          </div>
          <Link
            href={`/contacto?producto=${encodeURIComponent(product.name)}`}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Cotizar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating async loading of products
    const loadProducts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setFeaturedProducts(products.filter((p) => p.featured).slice(0, 3));
      setLoading(false);
    };
    loadProducts();
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-medium">Nuestro Catálogo</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 text-balance">
              Equipos Destacados
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl text-pretty">
              Descubre nuestra selección de maquinaria agrícola de última generación.
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

        {/* Products Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
