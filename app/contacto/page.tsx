"use client";

import React from "react"

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+54 11 4567-8900", "+54 11 4567-8901"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["ventas@agromaq.com", "soporte@agromaq.com"],
  },
  {
    icon: MapPin,
    title: "Dirección",
    details: ["Ruta Provincial 5, Km 120", "Buenos Aires, Argentina"],
  },
  {
    icon: Clock,
    title: "Horarios",
    details: ["Lunes a Viernes: 8:00 - 18:00", "Sábados: 8:00 - 13:00"],
  },
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    producto: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check for product in URL params
    const params = new URLSearchParams(window.location.search);
    const producto = params.get("producto");
    if (producto) {
      setFormData((prev) => ({ ...prev, producto: decodeURIComponent(producto) }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-foreground py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-background text-balance">
              Contáctanos
            </h1>
            <p className="mt-4 text-lg text-background/70 max-w-2xl mx-auto text-pretty">
              Estamos aquí para ayudarte. Solicita información, cotizaciones o agenda una visita a nuestro showroom.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">¡Mensaje Enviado!</h2>
                    <p className="mt-4 text-muted-foreground">
                      Gracias por contactarnos. Nuestro equipo se comunicará contigo a la brevedad.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ nombre: "", email: "", telefono: "", producto: "", mensaje: "" });
                      }}
                      className="mt-6 text-primary font-medium hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-foreground mb-6">Envíanos un Mensaje</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                            Nombre Completo *
                          </label>
                          <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="Juan Pérez"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="juan@ejemplo.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                            Teléfono
                          </label>
                          <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="+54 11 1234-5678"
                          />
                        </div>
                        <div>
                          <label htmlFor="producto" className="block text-sm font-medium text-foreground mb-2">
                            Producto de Interés
                          </label>
                          <input
                            type="text"
                            id="producto"
                            name="producto"
                            value={formData.producto}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="Ej: Tractor T7 260"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                          Mensaje *
                        </label>
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          required
                          rows={5}
                          value={formData.mensaje}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                          placeholder="Cuéntanos en qué podemos ayudarte..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Enviar Mensaje
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">Información de Contacto</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
                      >
                        <div className="bg-primary/10 p-3 rounded-xl h-fit">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          {item.details.map((detail, i) => (
                            <p key={i} className="text-muted-foreground mt-1">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 bg-muted rounded-2xl overflow-hidden aspect-video flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Ruta Provincial 5, Km 120
                      <br />
                      Buenos Aires, Argentina
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-primary font-medium hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
