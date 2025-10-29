import { Button } from '@/components/ui/button';
import { ArrowLeft, Bot, Heart, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AutomatizarNoEsDeshumanizar = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Button>
        </div>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-display mb-4 text-foreground">
            Por qué automatizar no es deshumanizar
          </h1>
          <p className="text-muted-foreground text-lg">
            Descubre cómo la automatización bien aplicada libera tiempo para que las personas se enfoquen en lo que realmente importa.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>Por Cris - Cristóbal Abarca</span>
            <span>•</span>
            <span>5 min de lectura</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-muted/30 rounded-lg p-8 mb-8">
            <p className="text-lg text-foreground leading-relaxed">
              Existe un mito persistente en el mundo empresarial: automatizar significa perder el toque humano. 
              Nada más lejos de la realidad. La automatización inteligente no reemplaza a las personas, 
              las empodera para enfocarse en lo que realmente importa.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-3xl font-display mb-4 text-foreground flex items-center gap-3">
              <Bot className="w-8 h-8 text-primary" />
              El verdadero propósito de la automatización
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cuando hablamos de automatización en NEXABIS, no nos referimos a eliminar personas del proceso. 
              Hablamos de liberar a tu equipo de tareas repetitivas, mecánicas y de bajo valor añadido. 
              ¿El resultado? Más tiempo para la creatividad, la estrategia y la conexión humana.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Imagina que tu equipo de ventas pasa 3 horas diarias ingresando datos manualmente en sistemas. 
              Con automatización inteligente, ese tiempo se reduce a minutos, permitiendo que se concentren 
              en lo que saben hacer mejor: construir relaciones con clientes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display mb-4 text-foreground flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              Casos reales de automatización humana
            </h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-display mb-2 text-foreground">Proyecto IETQ</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos un sistema de comunicación automatizada que no solo mejoró la eficiencia, 
                  sino que hizo que los miembros se sintieran más conectados. Las respuestas automáticas 
                  personalizadas permitieron que el equipo dedicara más tiempo a conversaciones significativas.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-display mb-2 text-foreground">Empresa B2B</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Al automatizar procesos de gestión, el equipo redujo 40% su tiempo en tareas administrativas. 
                  Ese tiempo lo reinvirtieron en innovación de producto y atención al cliente, 
                  mejorando significativamente su satisfacción.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display mb-4 text-foreground flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Los 3 principios de la automatización con sentido
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-display mb-2 text-foreground">Empodera, no reemplaza</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    La tecnología debe potenciar las capacidades humanas, no sustituirlas. 
                    Automatiza lo mecánico para que las personas brillen en lo creativo.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-display mb-2 text-foreground">Personaliza la experiencia</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Los sistemas automatizados pueden ser más personales que los procesos manuales cuando 
                    se diseñan con empatía y datos relevantes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-display mb-2 text-foreground">Mide el impacto humano</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No solo midas eficiencia en tiempo y costos. Mide satisfacción de equipo, 
                    calidad de interacciones y bienestar organizacional.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display mb-4 text-foreground flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              El futuro es colaborativo
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La automatización exitosa no es una batalla entre humanos y máquinas. Es una colaboración 
              donde cada uno aporta sus fortalezas: las máquinas con velocidad y precisión, 
              las personas con empatía y creatividad.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En NEXABIS creemos que el crecimiento real comienza cuando automatizas con sentido. 
              Cuando la tecnología sirve a las personas, no al revés. Cuando cada automatización 
              se diseña pensando en cómo mejorará la vida de quienes la usan.
            </p>
          </section>

          <div className="bg-gradient-hero rounded-lg p-8 text-center">
            <h3 className="text-2xl font-display text-primary-foreground mb-4">
              ¿Listo para automatizar con propósito?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a implementar automatización que empodera a tu equipo.
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/#contacto')}
              className="bg-background text-foreground hover:bg-background/90 shadow-glow"
            >
              Agenda una conversación
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AutomatizarNoEsDeshumanizar;
