import { useEffect } from 'react';
import { GraduationCap, BookOpen, Users, Target, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Academy = () => {
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
            <div className="inline-flex p-6 rounded-3xl bg-background/10 backdrop-blur-sm mb-8">
              <GraduationCap className="w-16 h-16 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-6xl font-display text-primary-foreground mb-6">
              NEXABIS Academy
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-4">
              Un espacio de aprendizaje para emprendedores y equipos que quieren dominar la IA aplicada sin ser programadores.
            </p>
            <div className="inline-block bg-background/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-primary-foreground font-medium">
                <Calendar className="w-4 h-4 inline mr-2" />
                Lanzamiento: Q3 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
                Lo que encontrarás en la Academy
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cursos prácticos, casos reales y acompañamiento personalizado para implementar IA en tu negocio.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted/50 rounded-2xl p-8 text-center">
                <div className="inline-flex p-4 rounded-2xl gradient-hero mb-4">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display mb-3 text-foreground">Cursos cortos</h3>
                <p className="text-muted-foreground">
                  Contenido directo al grano. Sin teoría innecesaria, solo lo que necesitas para aplicar.
                </p>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8 text-center">
                <div className="inline-flex p-4 rounded-2xl gradient-hero mb-4">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display mb-3 text-foreground">Casos reales</h3>
                <p className="text-muted-foreground">
                  Aprende de proyectos implementados. Estrategias que funcionan en el mundo real.
                </p>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8 text-center">
                <div className="inline-flex p-4 rounded-2xl gradient-hero mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display mb-3 text-foreground">Acompañamiento</h3>
                <p className="text-muted-foreground">
                  Soporte humano cuando lo necesites. No estarás solo en tu proceso de aprendizaje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
                Temas que abordaremos
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-background rounded-lg p-6 border-l-4 border-primary">
                <h3 className="font-display text-lg mb-2 text-foreground">Fundamentos de IA para negocios</h3>
                <p className="text-muted-foreground text-sm">
                  Entiende qué es realmente la IA y cómo puede aplicarse en tu industria.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border-l-4 border-primary">
                <h3 className="font-display text-lg mb-2 text-foreground">Automatización sin código</h3>
                <p className="text-muted-foreground text-sm">
                  Crea flujos automáticos con herramientas como N8N, Make y Zapier.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border-l-4 border-primary">
                <h3 className="font-display text-lg mb-2 text-foreground">Chatbots y asistentes virtuales</h3>
                <p className="text-muted-foreground text-sm">
                  Implementa IA conversacional que realmente conecte con tus clientes.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border-l-4 border-primary">
                <h3 className="font-display text-lg mb-2 text-foreground">Data Analytics para decisiones</h3>
                <p className="text-muted-foreground text-sm">
                  Aprende a leer tus datos y convertirlos en estrategia de crecimiento.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border-l-4 border-primary">
                <h3 className="font-display text-lg mb-2 text-foreground">ROI de proyectos de IA</h3>
                <p className="text-muted-foreground text-sm">
                  Mide el impacto real de tus implementaciones y justifica inversiones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display mb-6 text-foreground">
              Únete a la lista de espera
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sé de los primeros en acceder a NEXABIS Academy. Regístrate y te notificaremos cuando lancemos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <Input 
                type="email" 
                placeholder="tu@email.com" 
                className="flex-1"
              />
              <Button className="gradient-hero text-primary-foreground">
                Unirme a la lista
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Recibirás actualizaciones sobre el desarrollo de la Academy y contenido exclusivo.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academy;
