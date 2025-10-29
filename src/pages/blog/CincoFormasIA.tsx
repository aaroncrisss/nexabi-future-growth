import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageCircle, BarChart3, Zap, Users, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CincoFormasIA = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const blogSection = document.getElementById('insights');
                if (blogSection) {
                  blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Blog
          </Button>
        </div>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-display mb-4 text-foreground">
            5 formas en que la IA puede ayudar a tu negocio hoy
          </h1>
          <p className="text-muted-foreground text-lg">
            Ideas prácticas y casos reales de cómo implementar inteligencia artificial sin ser experto en tecnología.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>Por Cris - Cristóbal Abarca</span>
            <span>•</span>
            <span>7 min de lectura</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-muted/30 rounded-lg p-8 mb-8">
            <p className="text-lg text-foreground leading-relaxed">
              No necesitas ser una gran corporación ni tener un equipo de desarrolladores para aprovechar 
              la inteligencia artificial. Hoy, cualquier PYME puede implementar soluciones de IA que generen 
              resultados tangibles. Aquí te mostramos cinco formas prácticas de empezar.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-3xl font-display mb-4 text-foreground flex items-center gap-3">
              <MessageCircle className="w-8 h-8 text-primary" />
              1. Asistentes virtuales para atención al cliente
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un chatbot inteligente puede responder consultas frecuentes 24/7, liberando a tu equipo para 
              atender casos más complejos. Lo mejor: con las herramientas actuales, se puede implementar 
              en días, no meses.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-display mb-2 text-foreground">Caso práctico</h3>
              <p className="text-muted-foreground leading-relaxed">
                Una empresa de servicios implementó un asistente de WhatsApp que resuelve el 70% de 
                consultas automáticamente. Reducción de tiempo de respuesta: de 2 horas a 2 minutos.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display mb-4 text-foreground flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-primary" />
              2. Análisis predictivo de datos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La IA puede analizar patrones en tus datos históricos y predecir comportamientos futuros: 
              demanda de productos, rotación de clientes, necesidades de inventario.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Retail:</strong> Predice qué productos venderás más la próxima temporada
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Servicios:</strong> Identifica clientes en riesgo de cancelación
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Manufactura:</strong> Optimiza niveles de stock basándote en tendencias
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display mb-4 text-foreground flex items-center gap-3">
              <Zap className="w-8 h-8 text-primary" />
              3. Automatización de procesos con IA
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Más allá de la automatización tradicional, la IA puede tomar decisiones contextuales. 
              Por ejemplo, clasificar emails, priorizar tickets de soporte o asignar leads automáticamente 
              según su probabilidad de conversión.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-display mb-2 text-foreground">Ejemplo real</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sistema que lee facturas entrantes, extrae datos clave, los valida y los ingresa en tu 
                sistema contable. Reducción de errores manuales: 95%.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display mb-4 text-foreground flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              4. Personalización de marketing a escala
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La IA puede segmentar tu audiencia y personalizar mensajes automáticamente basándose en 
              comportamiento, preferencias e historial de interacciones.
            </p>
            <div className="space-y-3">
              <div className="bg-muted/30 rounded p-4">
                <p className="text-foreground font-medium mb-1">Email marketing inteligente</p>
                <p className="text-muted-foreground text-sm">
                  Ajusta el contenido y timing de envío para cada contacto según su comportamiento
                </p>
              </div>
              <div className="bg-muted/30 rounded p-4">
                <p className="text-foreground font-medium mb-1">Recomendaciones de productos</p>
                <p className="text-muted-foreground text-sm">
                  Similar a Netflix o Amazon, pero para tu catálogo
                </p>
              </div>
              <div className="bg-muted/30 rounded p-4">
                <p className="text-foreground font-medium mb-1">Contenido dinámico</p>
                <p className="text-muted-foreground text-sm">
                  Tu sitio web muestra diferentes mensajes según el perfil del visitante
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display mb-4 text-foreground flex items-center gap-3">
              <Bot className="w-8 h-8 text-primary" />
              5. Generación de contenido asistida por IA
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Desde borradores de emails hasta descripciones de productos, la IA puede acelerar 
              significativamente tu creación de contenido. No lo reemplaza tu creatividad, la amplifica.
            </p>
            <div className="border-l-4 border-primary pl-6">
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">Importante:</strong> La IA genera el primer borrador, 
                tú le das el toque humano, tu voz de marca y el criterio final.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En NEXABIS lo usamos para acelerar la creación de reportes, propuestas y documentación, 
                pero siempre con revisión y personalización humana.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display mb-4 text-foreground">
              ¿Por dónde empezar?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No intentes implementar las cinco a la vez. Nuestra recomendación:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-display">
                  1
                </div>
                <p className="text-muted-foreground leading-relaxed pt-0.5">
                  Identifica tu mayor punto de dolor: ¿atención al cliente? ¿gestión de datos? ¿marketing?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-display">
                  2
                </div>
                <p className="text-muted-foreground leading-relaxed pt-0.5">
                  Empieza con un proyecto piloto pequeño y medible
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-display">
                  3
                </div>
                <p className="text-muted-foreground leading-relaxed pt-0.5">
                  Mide resultados y ajusta antes de escalar
                </p>
              </div>
            </div>
          </section>

          <div className="bg-gradient-hero rounded-lg p-8 text-center">
            <h3 className="text-2xl font-display text-primary-foreground mb-4">
              Conversemos sobre tu proyecto
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              En NEXABIS te ayudamos a identificar cuál de estas soluciones generará el mayor 
              impacto en tu negocio y te acompañamos en la implementación.
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/#contacto')}
              className="bg-background text-foreground hover:bg-background/90 shadow-glow"
            >
              Agenda tu diagnóstico gratuito
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CincoFormasIA;
