import { Bot, BarChart3, MessageCircle, Cog, Search, Brain, Rocket, Mail, Phone, Linkedin, ChevronDown, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SolutionCard from '@/components/SolutionCard';
import StepCard from '@/components/StepCard';
import ContactForm from '@/components/ContactForm';
import heroImage from '@/assets/hero-ai.jpg';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        id="inicio" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 107, 107, 0.75) 0%, rgba(255, 140, 66, 0.70) 50%, rgba(255, 209, 102, 0.65) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-primary-foreground mb-6 tracking-tight">
              NEXABI TECH
            </h1>
            <p className="text-2xl md:text-3xl text-primary-foreground/95 mb-4 font-medium">
              Artificial Business Intelligence for Real Growth
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Desarrollamos automatizaciones, soluciones IA y sistemas inteligentes que impulsan a las empresas hacia el futuro.
            </p>
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
              NEXABI TECH nació de la visión de Aarön Cris Tech: acercar la Inteligencia Artificial al mundo real de los negocios.
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

      {/* Academy Section */}
      <section id="academy" className="py-20 md:py-32 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-2xl gradient-hero inline-block">
                <GraduationCap className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-foreground">
              Próximamente: NEXABI Academy
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Estamos construyendo la <strong>NEXABI Academy</strong>, un espacio de aprendizaje para emprendedores y equipos que quieren dominar la IA aplicada sin ser programadores.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Cursos cortos, casos reales y acompañamiento humano.
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
                  href="mailto:contacto@nexabi.tech"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth group"
                >
                  <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-smooth">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>contacto@nexabi.tech</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-footer py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-primary-foreground font-medium mb-2">
              NEXABI TECH © 2025 – Todos los derechos reservados.
            </p>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Desarrollado por Aarön Cris Tech
            </p>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-smooth"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('soluciones')}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-smooth"
              >
                Soluciones
              </button>
              <button
                onClick={() => scrollToSection('academy')}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-smooth"
              >
                Academy
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-smooth"
              >
                Contacto
              </button>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
