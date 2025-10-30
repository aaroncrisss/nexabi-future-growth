import { Bot, BarChart3, MessageCircle, Cog, ChevronDown, Users, Target, TrendingUp, Heart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SolutionCard from '@/components/SolutionCard';
import ContactForm from '@/components/ContactForm';
import TestimonialCard from '@/components/TestimonialCard';
import ImpactCard from '@/components/ImpactCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import ValueCard from '@/components/ValueCard';
import BlogCard from '@/components/BlogCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-ai.jpg';
import { Zap } from 'lucide-react';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section 
        id="inicio" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 107, 107, 0.88) 0%, rgba(255, 140, 66, 0.85) 50%, rgba(255, 209, 102, 0.82) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display text-primary-foreground mb-6 tracking-tight">
              NEXABIS
            </h1>
            <p className="text-2xl md:text-3xl text-primary-foreground/95 mb-4 font-medium">
              Artificial Business Intelligence for Real Growth
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-6 leading-relaxed">
              Soluciones en Inteligencia Artificial, automatización y analítica de datos para PYMEs y empresas con propósito.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8 mt-10">
              <div className="bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-display text-primary-foreground mb-2">100+</div>
                <div className="text-sm text-primary-foreground/80">Automatizaciones</div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-display text-primary-foreground mb-2">50+</div>
                <div className="text-sm text-primary-foreground/80">Clientes Activos</div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-display text-primary-foreground mb-2">24/7</div>
                <div className="text-sm text-primary-foreground/80">Soporte IA</div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-display text-primary-foreground mb-2">∞</div>
                <div className="text-sm text-primary-foreground/80">Posibilidades</div>
              </div>
            </div>

            <Link to="/soluciones">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 shadow-glow font-display text-lg px-8 py-6 mb-6"
              >
                Descubre cómo podemos ayudarte
              </Button>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              Cristóbal Abarca
            </p>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('sobre-nosotros')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground animate-float cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section */}
      <section id="sobre-nosotros" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display mb-8 text-foreground">
              Tecnología con propósito
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              NEXABIS nació de la visión de Cristóbal Abarca (Cris): acercar la Inteligencia Artificial al mundo real de los negocios.
              <br /><br />
              Creemos en soluciones simples, humanas y accesibles, donde la tecnología libera tiempo y potencia el talento de las personas.
            </p>
            <blockquote className="text-2xl md:text-3xl font-display text-gradient italic py-8">
              "El crecimiento real comienza cuando automatizas con sentido"
            </blockquote>
            <Link to="/nosotros">
              <Button variant="outline" className="mt-4">
                Conoce nuestra historia
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="soluciones" className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-foreground">
              Nuestras soluciones inteligentes
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Aplicamos IA y automatización para lograr resultados medibles y reales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in-up">
            <SolutionCard
              icon={Bot}
              title="Automatización Inteligente"
              description="Diseñamos flujos automáticos y bots personalizados que ahorran tiempo y recursos."
            />
            <SolutionCard
              icon={BarChart3}
              title="Business Intelligence & Analytics"
              description="Transformamos datos en decisiones con dashboards y reportes inteligentes."
            />
            <SolutionCard
              icon={MessageCircle}
              title="IA Conversacional"
              description="Asistentes virtuales y chatbots que conectan con tus clientes de forma natural."
            />
            <SolutionCard
              icon={Cog}
              title="Integraciones Tecnológicas"
              description="Conectamos herramientas como Salesforce, Make y Zapier para centralizar tu ecosistema digital."
            />
          </div>

          <div className="text-center">
            <Link to="/soluciones">
              <Button
                size="lg"
                className="gradient-hero text-primary-foreground hover:opacity-90 shadow-glow font-display text-lg px-8"
              >
                Ver todas las soluciones
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-foreground">
              Nos eligen porque...
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto animate-fade-in-up">
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
      </section>

      {/* Impact / Success Stories Section */}
      <section id="impacto" className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-foreground">
              Casos de éxito / Impacto real
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Resultados medibles, clientes satisfechos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in-up">
            <ImpactCard
              title="Proyecto IETQ"
              description="Automatización completa del sistema de comunicación interna, mejorando la coordinación entre equipos y la experiencia de los miembros."
              metrics={[
                { label: 'Productividad', value: '+30%', icon: TrendingUp },
                { label: 'Respuesta', value: '2x', icon: Zap },
                { label: 'Satisfacción', value: '95%', icon: Heart },
              ]}
            />
            <ImpactCard
              title="Empresa B2B"
              description="Reducción del 40% en tiempo de gestión mediante integración de herramientas y automatización de procesos clave."
              metrics={[
                { label: 'Tiempo ahorrado', value: '40%', icon: TrendingUp },
                { label: 'Eficiencia', value: '2x', icon: Zap },
                { label: 'ROI', value: '+150%', icon: Heart },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="insights" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-foreground">
              Insights que impulsan el futuro
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Aprende cómo la IA y la automatización están transformando los negocios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up mb-8">
            <BlogCard
              title="Por qué automatizar no es deshumanizar"
              excerpt="Descubre cómo la automatización bien aplicada libera tiempo para que las personas se enfoquen en lo que realmente importa."
              slug="automatizar-no-es-deshumanizar"
            />
            <BlogCard
              title="5 formas en que la IA puede ayudar a tu negocio hoy"
              excerpt="Ideas prácticas y casos reales de cómo implementar inteligencia artificial sin ser experto en tecnología."
              slug="cinco-formas-ia"
            />
            <BlogCard
              title="Cómo medir el impacto de la automatización"
              excerpt="Métricas clave y estrategias para evaluar el retorno de inversión de tus proyectos de IA y automatización."
              slug="medir-impacto-automatizacion"
            />
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button variant="outline" size="lg">
                Ver todos los artículos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-foreground">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up">
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

      {/* CTA Banner Section */}
      <section className="py-12 md:py-20 gradient-hero bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display text-primary-foreground mb-4">
            ¿Listo para automatizar con sentido?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agenda tu reunión gratuita y descubre cómo NEXABIS puede transformar tu negocio.
          </p>
          <Link to="/contacto">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 shadow-glow font-display text-lg px-8 py-6"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agenda tu reunión gratuita
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-foreground">
              Hablemos de tu proyecto
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Agenda una conversación y descubre cómo la IA puede transformar tu negocio.
            </p>
          </div>

          <div className="animate-fade-in-up max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
