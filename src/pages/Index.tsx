import { Bot, BarChart3, MessageCircle, Cog, Search, Brain, Rocket, Mail, Phone, Linkedin, ChevronDown, GraduationCap, Users, Target, TrendingUp, Zap, Heart, Lightbulb, BookOpen, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SolutionCard from '@/components/SolutionCard';
import StepCard from '@/components/StepCard';
import ContactForm from '@/components/ContactForm';
import TestimonialCard from '@/components/TestimonialCard';
import PartnerLogos from '@/components/PartnerLogos';
import ImpactCard from '@/components/ImpactCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import ValueCard from '@/components/ValueCard';
import BlogCard from '@/components/BlogCard';
import heroImage from '@/assets/hero-ai.jpg';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navbar Sticky */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-display text-gradient">NEXABIS</h1>
          <div className="hidden md:flex gap-6 text-sm">
            <button onClick={() => scrollToSection('soluciones')} className="text-muted-foreground hover:text-foreground transition-smooth">Soluciones</button>
            <button onClick={() => scrollToSection('impacto')} className="text-muted-foreground hover:text-foreground transition-smooth">Impacto</button>
            <button onClick={() => scrollToSection('insights')} className="text-muted-foreground hover:text-foreground transition-smooth">Insights</button>
            <button onClick={() => scrollToSection('academy')} className="text-muted-foreground hover:text-foreground transition-smooth">Academy</button>
            <button onClick={() => scrollToSection('contacto')} className="text-muted-foreground hover:text-foreground transition-smooth">Contacto</button>
          </div>
          <Button size="sm" onClick={() => scrollToSection('contacto')} className="gradient-hero text-primary-foreground">
            Hablemos
          </Button>
        </div>
      </nav>

      <WhatsAppButton />

      {/* Hero Section */}
      <section 
        id="inicio" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-primary-foreground mb-6 tracking-tight">
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

            <Button
              size="lg"
              onClick={() => scrollToSection('soluciones')}
              className="bg-background text-foreground hover:bg-background/90 shadow-glow font-display text-lg px-8 py-6 mb-6"
            >
              Descubre cómo podemos ayudarte
            </Button>
            <p className="text-primary-foreground/80 text-sm">
              By Aarön Cris Tech
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
      <section id="sobre-nosotros" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display mb-8 text-foreground">
              Tecnología con propósito
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              NEXABIS nació de la visión de Aarön Cris Tech: acercar la Inteligencia Artificial al mundo real de los negocios.
              <br /><br />
              Creemos en soluciones simples, humanas y accesibles, donde la tecnología libera tiempo y potencia el talento de las personas.
            </p>
            <blockquote className="text-2xl md:text-3xl font-display text-gradient italic py-8">
              "El crecimiento real comienza cuando automatizas con sentido"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="soluciones" className="py-20 md:py-32 bg-muted/30">
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
            <Button
              size="lg"
              onClick={() => scrollToSection('contacto')}
              className="gradient-hero text-primary-foreground hover:opacity-90 shadow-glow font-display text-lg px-8"
            >
              Solicita tu diagnóstico gratuito
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-background">
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
      <section id="impacto" className="py-20 md:py-32 bg-muted/30">
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
              title="Iglesia IETQ"
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

      {/* Partners Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
              Tecnologías que integramos
            </h2>
            <p className="text-muted-foreground">
              Trabajamos con las herramientas más confiables del mercado.
            </p>
          </div>
          <div className="animate-fade-in-up">
            <PartnerLogos />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-muted/30">
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
              quote="Aarön y su equipo entienden que la IA no es el fin, sino el medio para potenciar a las personas."
              author="María T."
              role="Gerente de Operaciones"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="como-trabajamos" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-foreground">
              Nuestro método
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto animate-fade-in-up">
            <StepCard
              icon={Search}
              title="Análisis rápido"
              description="Evaluamos tus procesos y detectamos oportunidades de mejora."
              stepNumber={1}
            />
            <StepCard
              icon={Brain}
              title="Diseño inteligente"
              description="Creamos una solución adaptada a tu negocio."
              stepNumber={2}
            />
            <StepCard
              icon={Rocket}
              title="Implementación con propósito"
              description="Integramos, medimos y te acompañamos en el crecimiento."
              stepNumber={3}
            />
          </div>
        </div>
      </section>

      {/* Blog / Insights Section */}
      <section id="insights" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-foreground">
              Insights que impulsan el futuro
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Aprende cómo la IA y la automatización están transformando los negocios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up">
            <BlogCard
              title="Por qué automatizar no es deshumanizar"
              excerpt="Descubre cómo la automatización bien aplicada libera tiempo para que las personas se enfoquen en lo que realmente importa."
            />
            <BlogCard
              title="5 formas en que la IA puede ayudar a tu negocio hoy"
              excerpt="Ideas prácticas y casos reales de cómo implementar inteligencia artificial sin ser experto en tecnología."
            />
            <BlogCard
              title="Cómo medir el impacto de la automatización"
              excerpt="Métricas clave y estrategias para evaluar el retorno de inversión de tus proyectos de IA y automatización."
            />
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display text-primary-foreground mb-4">
            ¿Listo para automatizar con sentido?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agenda tu reunión gratuita y descubre cómo NEXABIS puede transformar tu negocio.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('contacto')}
            className="bg-background text-foreground hover:bg-background/90 shadow-glow font-display text-lg px-8 py-6"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Agenda tu reunión gratuita
          </Button>
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="py-20 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-2xl gradient-hero inline-block">
                <GraduationCap className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-foreground">
              Próximamente: NEXABIS Academy
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Estamos construyendo la <strong>NEXABIS Academy</strong>, un espacio de aprendizaje para emprendedores y equipos que quieren dominar la IA aplicada sin ser programadores.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Cursos cortos, casos reales y acompañamiento humano.
            </p>
            <p className="text-sm text-muted-foreground/80 mb-8">
              Llegará en Q2 2025
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-display text-lg px-8"
            >
              Unirme a la lista de espera
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-foreground">
              Hablemos de tu proyecto
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Agenda una conversación y descubre cómo la IA puede transformar tu negocio.
            </p>
          </div>

          <div className="animate-fade-in-up mb-16">
            <ContactForm />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display mb-6 text-foreground">
                Contacto directo
              </h3>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <a
                  href="https://wa.me/56986343217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth group"
                >
                  <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-smooth">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+56 9 8634 3217</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/cristobalabarca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth group"
                >
                  <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-smooth">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span>Cristóbal Abarca – Aarön Cris Tech</span>
                </a>
                <a
                  href="mailto:contacto@nexabis.tech"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth group"
                >
                  <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-smooth">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>contacto@nexabis.tech</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-footer py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Column */}
            <div>
              <h3 className="text-2xl font-display text-primary-foreground mb-3">NEXABIS</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                El crecimiento real comienza cuando automatizas con sentido.
              </p>
              <p className="text-primary-foreground/70 text-xs">
                +3 años en marketing automation e inteligencia de negocios
              </p>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="font-display text-primary-foreground mb-3">Navegación</h4>
              <nav className="flex flex-col gap-2 text-sm">
                <button onClick={() => scrollToSection('inicio')} className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-left">Inicio</button>
                <button onClick={() => scrollToSection('soluciones')} className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-left">Soluciones</button>
                <button onClick={() => scrollToSection('impacto')} className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-left">Impacto</button>
                <button onClick={() => scrollToSection('insights')} className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-left">Insights</button>
                <button onClick={() => scrollToSection('academy')} className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-left">Academy</button>
                <button onClick={() => scrollToSection('contacto')} className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-left">Contacto</button>
              </nav>
            </div>

            {/* Newsletter Column */}
            <div>
              <h4 className="font-display text-primary-foreground mb-3">Newsletter</h4>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Recibe tips de automatización e IA cada mes.
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="bg-background/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button className="bg-background text-foreground hover:bg-background/90">
                  Suscribir
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-primary-foreground/80">
                NEXABIS © 2025 – Todos los derechos reservados.
              </p>
              <div className="flex gap-4">
                <button className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">Política de Privacidad</button>
                <button className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">Términos de Servicio</button>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-xs mt-4 text-center">
              Operamos desde Chile para toda Latinoamérica | Desarrollado por Aarön Cris Tech
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
