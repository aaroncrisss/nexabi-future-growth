import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, BarChart3, MessageCircle, Cog, CheckCircle, TrendingUp, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TestimonialCard from '@/components/TestimonialCard';

const Soluciones = () => {
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
              Soluciones que transforman tu negocio
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Aplicamos IA y automatización para lograr resultados medibles y reales en cada área de tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Automatización Inteligente */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-flex p-4 rounded-2xl gradient-hero mb-6">
                  <Bot className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
                  Automatización Inteligente
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Diseñamos flujos automáticos y bots personalizados que ahorran tiempo y recursos, permitiendo que tu equipo se enfoque en lo que realmente importa.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Automatización de procesos repetitivos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Bots personalizados para tareas específicas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Integración con sistemas existentes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Monitoreo y optimización continua</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted/50 rounded-2xl p-8">
                <h3 className="text-xl font-display mb-6 text-foreground">Beneficios clave</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4">
                    <Clock className="w-6 h-6 text-primary mb-2" />
                    <div className="text-2xl font-display text-foreground mb-1">70%</div>
                    <div className="text-sm text-muted-foreground">Ahorro de tiempo</div>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <TrendingUp className="w-6 h-6 text-primary mb-2" />
                    <div className="text-2xl font-display text-foreground mb-1">3x</div>
                    <div className="text-sm text-muted-foreground">Productividad</div>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <Zap className="w-6 h-6 text-primary mb-2" />
                    <div className="text-2xl font-display text-foreground mb-1">95%</div>
                    <div className="text-sm text-muted-foreground">Precisión</div>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-primary mb-2" />
                    <div className="text-2xl font-display text-foreground mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Operación</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Intelligence */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-background rounded-2xl p-8">
                <h3 className="text-xl font-display mb-6 text-foreground">Lo que incluye</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Dashboards personalizados</div>
                      <div className="text-sm text-muted-foreground">Visualiza tus KPIs en tiempo real</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Análisis predictivo</div>
                      <div className="text-sm text-muted-foreground">Anticipa tendencias y oportunidades</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Reportes automáticos</div>
                      <div className="text-sm text-muted-foreground">Información lista cuando la necesitas</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Integración de fuentes</div>
                      <div className="text-sm text-muted-foreground">Todos tus datos en un solo lugar</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex p-4 rounded-2xl gradient-hero mb-6">
                  <BarChart3 className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
                  Business Intelligence & Analytics
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Transformamos datos en decisiones estratégicas con dashboards y reportes inteligentes que te dan claridad y control total sobre tu negocio.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "Los datos sin análisis son solo ruido. Convertimos ese ruido en sinfonía de crecimiento."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IA Conversacional */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex p-4 rounded-2xl gradient-hero mb-6">
                  <MessageCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
                  IA Conversacional
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Asistentes virtuales y chatbots que conectan con tus clientes de forma natural, mejorando la experiencia y liberando tiempo de tu equipo.
                </p>
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Atención al cliente 24/7</h4>
                    <p className="text-sm text-muted-foreground">Respuestas instantáneas sin importar la hora</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Calificación de leads</h4>
                    <p className="text-sm text-muted-foreground">Identifica prospectos de calidad automáticamente</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Soporte multicanal</h4>
                    <p className="text-sm text-muted-foreground">WhatsApp, web, redes sociales en un solo sistema</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-xl font-display mb-4 text-foreground">Casos de uso</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Chatbot de ventas para e-commerce
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Asistente de atención al cliente
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Bot de reservas y citas
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    FAQ automático inteligente
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Asistente interno para equipos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integraciones */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-6 text-center">
                    <div className="text-3xl font-display text-foreground mb-2">N8N</div>
                    <div className="text-sm text-muted-foreground">Automatización</div>
                  </div>
                  <div className="bg-background rounded-lg p-6 text-center">
                    <div className="text-3xl font-display text-foreground mb-2">Zapier</div>
                    <div className="text-sm text-muted-foreground">Conectores</div>
                  </div>
                  <div className="bg-background rounded-lg p-6 text-center">
                    <div className="text-3xl font-display text-foreground mb-2">Make</div>
                    <div className="text-sm text-muted-foreground">Workflows</div>
                  </div>
                  <div className="bg-background rounded-lg p-6 text-center">
                    <div className="text-3xl font-display text-foreground mb-2">HubSpot</div>
                    <div className="text-sm text-muted-foreground">CRM</div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex p-4 rounded-2xl gradient-hero mb-6">
                  <Cog className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
                  Integraciones Tecnológicas
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Conectamos herramientas como N8N, Salesforce, Make, Zapier y HubSpot para centralizar tu ecosistema digital y eliminar el trabajo manual.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Sincronización automática de datos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Flujos de trabajo multi-plataforma</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">API personalizadas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              quote="NEXABIS transformó completamente la manera en que gestionamos nuestras campañas. Es tecnología con alma."
              author="Claudia M."
              role="Directora de Marketing"
            />
            <TestimonialCard
              quote="La automatización que implementaron nos permitió enfocarnos en lo que realmente importa: nuestros clientes."
              author="Roberto S."
              role="CEO, Startup Tech"
            />
            <TestimonialCard
              quote="Cris y su equipo entienden que la IA no es el fin, sino el medio para potenciar a las personas."
              author="María T."
              role="Gerente de Operaciones"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display text-primary-foreground mb-4">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Solicita tu diagnóstico gratuito y descubre qué solución se adapta mejor a tus necesidades.
          </p>
          <Link to="/contacto">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 shadow-glow font-display text-lg px-8 py-6"
            >
              Solicita tu diagnóstico gratuito
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Soluciones;
