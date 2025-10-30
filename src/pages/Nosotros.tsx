import { useEffect } from 'react';
import { Heart, Target, Users, Lightbulb, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PartnerLogos from '@/components/PartnerLogos';
import ValueCard from '@/components/ValueCard';

const Nosotros = () => {
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
              Tecnología con propósito
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Creemos en soluciones simples, humanas y accesibles, donde la tecnología libera tiempo y potencia el talento de las personas.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-foreground">
                De Aarön Cris Tech a NEXABIS
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                NEXABIS nació de la visión de <strong className="text-foreground">Cristóbal Abarca (Cris)</strong>: acercar la Inteligencia Artificial al mundo real de los negocios.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Con más de 3 años de experiencia en marketing automation e inteligencia de negocios, Cris fundó Aarön Cris Tech con una misión clara: hacer que la tecnología avanzada sea accesible para PYMEs y empresas con propósito.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                NEXABIS es la evolución natural de esa visión. Un nombre que refleja nuestra esencia: <strong className="text-foreground">NEXt-gen Artificial Business Intelligence Solutions</strong> — soluciones de próxima generación que combinan IA, automatización y analítica para generar crecimiento real.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 my-8">
                <p className="text-2xl md:text-3xl font-display text-gradient italic">
                  "El crecimiento real comienza cuando automatizas con sentido"
                </p>
                <cite className="text-muted-foreground not-italic block mt-4">— Cristóbal Abarca, Fundador de NEXABIS</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
                Nuestra filosofía
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Principios que guían cada proyecto, cada solución y cada decisión.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard
                icon={Users}
                title="Cercanía"
                description="Entendemos tu negocio antes que tu sistema."
              />
              <ValueCard
                icon={Target}
                title="Precisión"
                description="Cada solución es personalizada, no genérica."
              />
              <ValueCard
                icon={TrendingUp}
                title="Escalabilidad"
                description="Crecemos contigo, paso a paso."
              />
              <ValueCard
                icon={Heart}
                title="Propósito"
                description="IA con enfoque humano y ético."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Method */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
                Cómo trabajamos
              </h2>
              <p className="text-lg text-muted-foreground">
                Un método simple y efectivo para implementar IA con sentido.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-8 border-l-4 border-primary">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                      <span className="text-2xl font-display text-primary-foreground">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display mb-2 text-foreground">Análisis rápido</h3>
                    <p className="text-muted-foreground">
                      Evaluamos tus procesos actuales y detectamos oportunidades de mejora. No perdemos tiempo en análisis innecesarios, vamos directo a lo que importa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-8 border-l-4 border-primary">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                      <span className="text-2xl font-display text-primary-foreground">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display mb-2 text-foreground">Diseño inteligente</h3>
                    <p className="text-muted-foreground">
                      Creamos una solución adaptada a tu negocio. Nada genérico, todo personalizado para tus necesidades específicas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-8 border-l-4 border-primary">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                      <span className="text-2xl font-display text-primary-foreground">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display mb-2 text-foreground">Implementación con propósito</h3>
                    <p className="text-muted-foreground">
                      Integramos, medimos resultados y te acompañamos en el crecimiento. No te dejamos solo después de la implementación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Integrate */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
              Tecnologías que integramos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trabajamos con las herramientas más confiables del mercado para construir soluciones robustas y escalables.
            </p>
          </div>
          <PartnerLogos />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
                Nuestro impacto en números
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-muted/50 rounded-xl">
                <div className="text-4xl md:text-5xl font-display text-gradient mb-2">100+</div>
                <div className="text-muted-foreground">Automatizaciones</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-xl">
                <div className="text-4xl md:text-5xl font-display text-gradient mb-2">50+</div>
                <div className="text-muted-foreground">Clientes Activos</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-xl">
                <div className="text-4xl md:text-5xl font-display text-gradient mb-2">+3</div>
                <div className="text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-xl">
                <div className="text-4xl md:text-5xl font-display text-gradient mb-2">∞</div>
                <div className="text-muted-foreground">Posibilidades</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display text-primary-foreground mb-4">
            ¿Listo para automatizar con sentido?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Conoce más sobre cómo NEXABIS puede transformar tu negocio.
          </p>
          <Link to="/contacto">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 shadow-glow font-display text-lg px-8 py-6"
            >
              Agenda tu reunión gratuita
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
