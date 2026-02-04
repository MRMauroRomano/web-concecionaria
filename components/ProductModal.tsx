"use client";

import { Product } from "@/lib/products";
import Image from "next/image";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-card rounded-2xl max-w-4xl w-full mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-muted-foreground hover:text-foreground"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Imagen */}
          <div className="relative aspect-[4/3]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Info */}
          <div>
            <span className="text-sm text-muted-foreground">{product.brand}</span>
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
                className="flex-1 bg-green-500 text-white text-center py-2 rounded-lg font-medium hover:bg-green-600"
              >
                WhatsApp
              </a>
              <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-medium">
                Cotizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
