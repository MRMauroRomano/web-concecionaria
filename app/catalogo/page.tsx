"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Filter, Loader2, X } from "lucide-react";
import { products, categories, getProductsByCategory, searchProducts, type Product } from "@/lib/products";

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
        {product.featured && (
          <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Destacado
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{product.brand}</span>
          <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded capitalize">
            {categories.find((c) => c.id === product.category)?.name}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">{product.description}</p>

        {/* Specs */}
        <div className="mt-4 flex flex-wrap gap-2">
          {product.specs.map((spec, i) => (
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

export default function CatalogoPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Simulating initial load
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check for category in URL params
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("categoria");
    if (cat && categories.some((c) => c.id === cat)) {
      setSelectedCategory(cat);
    }
  }, []);

  const filteredProducts = useMemo(() => {
    let result = getProductsByCategory(selectedCategory);
    if (searchQuery.trim()) {
      const searchResults = searchProducts(searchQuery);
      result = result.filter((p) => searchResults.some((sr) => sr.id === p.id));
    }
    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-foreground py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-background text-balance">
              Catálogo de Maquinaria
            </h1>
            <p className="mt-4 text-lg text-background/70 max-w-2xl mx-auto text-pretty">
              Explora nuestra amplia gama de equipos agrícolas de las mejores marcas del mercado.
            </p>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="bg-background py-6 border-b border-border sticky top-16 lg:top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar por nombre, marca o categoría..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-3 border border-border rounded-lg text-foreground"
              >
                <Filter className="h-5 w-5" />
                Filtros
              </button>

              {/* Desktop Categories */}
              <div className="hidden lg:flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Categories */}
            {showFilters && (
              <div className="lg:hidden mt-4 flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setShowFilters(false);
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Count */}
            <div className="mb-8 flex items-center justify-between">
              <p className="text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? "producto encontrado" : "productos encontrados"}
              </p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">No se encontraron productos</p>
                <p className="text-muted-foreground mt-2">Intenta con otros filtros o términos de búsqueda</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-primary font-medium hover:underline"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
