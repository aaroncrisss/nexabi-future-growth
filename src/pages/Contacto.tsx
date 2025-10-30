import { useEffect } from 'react';
import { Mail, Phone, Linkedin, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display text-primary-foreground mb-6">
              Hablemos de tu proyecto
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Agenda una conversación y descubre cómo la IA puede transformar tu negocio. Sin compromisos, solo una conversación honesta sobre tus necesidades.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-display mb-6 text-foreground">
                  Envíanos un mensaje
                </h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl md:text-3xl font-display mb-6 text-foreground">
                  Contacto directo
                </h2>
                
                <div className="space-y-6 mb-8">
                  <a
                    href="https://wa.me/56986343217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth group"
                  >
                    <div className="p-3 rounded-lg bg-background group-hover:bg-primary/10 transition-smooth">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">WhatsApp / Teléfono</div>
                      <div className="text-muted-foreground">+56 9 8634 3217</div>
                    </div>
                  </a>

                  <a
                    href="mailto:contacto@nexabis.tech"
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth group"
                  >
                    <div className="p-3 rounded-lg bg-background group-hover:bg-primary/10 transition-smooth">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Email</div>
                      <div className="text-muted-foreground">contacto@nexabis.tech</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/cristobalabarca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth group"
                  >
                    <div className="p-3 rounded-lg bg-background group-hover:bg-primary/10 transition-smooth">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">LinkedIn</div>
                      <div className="text-muted-foreground">Cristóbal Abarca</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="p-3 rounded-lg bg-background">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Ubicación</div>
                      <div className="text-muted-foreground">Chile — Servicios para toda Latinoamérica</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-display text-lg mb-3 text-foreground">Horario de atención</h3>
                  <p className="text-muted-foreground mb-4">
                    Lunes a Viernes: 9:00 - 18:00 (GMT-3)<br />
                    Respuesta en menos de 24 horas
                  </p>
                  <Button className="gradient-hero text-primary-foreground w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Agenda una videollamada
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display mb-6 text-foreground">
              ¿Prefieres una reunión rápida?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Agenda un diagnóstico gratuito de 30 minutos. Sin compromisos, solo una conversación sobre cómo la IA puede ayudar a tu negocio.
            </p>
            <Button size="lg" className="gradient-hero text-primary-foreground">
              <Calendar className="w-5 h-5 mr-2" />
              Agendar diagnóstico gratuito
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
