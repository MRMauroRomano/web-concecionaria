"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-field-bg.jpg"
          alt="Campo agricola"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left z-10">
            <span 
              className={`inline-block bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              + de 25 años de experiencia
            </span>
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight text-balance transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Potencia tu Campo con la
              <span className="text-primary"> Mejor Maquinaria</span>
            </h1>
            <p 
              className={`mt-6 text-lg lg:text-xl text-background/80 leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty transition-all duration-700 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Ofrecemos la más amplia gama de tractores, cosechadoras y equipos agricolas de las mejores marcas del mercado.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/30"
              >
                Ver Catalogo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 border-2 border-background/50 text-background px-8 py-4 rounded-lg font-semibold hover:bg-background/10 hover:border-background transition-all backdrop-blur-sm"
              >
                Contactar Asesor
              </Link>
            </div>

            {/* Stats */}
            <div 
              className={`mt-12 grid grid-cols-3 gap-6 lg:gap-8 transition-all duration-700 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="text-center lg:text-left">
                <p className="text-3xl lg:text-4xl font-bold text-primary drop-shadow-lg">500+</p>
                <p className="text-background/70 text-sm mt-1">Equipos Vendidos</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl lg:text-4xl font-bold text-primary drop-shadow-lg">25+</p>
                <p className="text-background/70 text-sm mt-1">Años de Experiencia</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl lg:text-4xl font-bold text-primary drop-shadow-lg">98%</p>
                <p className="text-background/70 text-sm mt-1">Clientes Satisfechos</p>
              </div>
            </div>
          </div>

          {/* Animated Tractor */}
          <div className="relative hidden lg:flex flex-col items-center justify-center">
            <div 
              className={`relative w-full max-w-2xl transition-all duration-1000 ease-out delay-300 ${
                isLoaded 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-32"
              }`}
            >
              {/* Tractor Shadow */}
              <div 
                className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 rounded-full blur-xl transition-all duration-1000 delay-500 ${
                  isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              />
              
              {/* Tractor Image */}
              <div className="relative animate-float">
                <Image
                  src="/images/hero-tractor.png"
                  alt="Tractor agricola de alta potencia"
                  width={700}
                  height={500}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Feature Badges - Below Tractor */}
            <div 
              className={`flex flex-wrap justify-center gap-4 mt-8 transition-all duration-700 delay-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="bg-background/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Garantia 3 Años</span>
                </div>
              </div>

              <div className="bg-background/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-foreground">Marca Premium</span>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span className="text-sm font-semibold">Servicio 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
