import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, Clock, DollarSign, Heart, Target, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MedirImpactoAutomatizacion = () => {
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
            Cómo medir el impacto de la automatización en tu empresa
          </h1>
          <p className="text-muted-foreground text-lg">
            Métricas clave y estrategias para evaluar el retorno de inversión de tus proyectos de IA y automatización.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>Por Cris - Cristóbal Abarca</span>
            <span>•</span>
            <span>8 min de lectura</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-muted/30 rounded-lg p-8 mb-8">
            <p className="text-lg text-foreground leading-relaxed">
              Implementar automatización e IA es solo el primer paso. Lo que realmente importa es medir 
              su impacto real en tu negocio. Sin métricas claras, es imposible saber si estás invirtiendo 
              en las soluciones correctas o si es momento de ajustar el rumbo.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-3xl font-display mb-4 text-foreground">
              Las 5 dimensiones del impacto
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En NEXABIS medimos el éxito de cada proyecto desde cinco perspectivas complementarias. 
              No basta con ahorrar tiempo o dinero si la experiencia del usuario empeora.
            </p>
          </section>

          <section className="mb-8">
            <div className="space-y-8">
              {/* Dimensión 1 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display text-foreground">1. Eficiencia temporal</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El más obvio pero no el único importante. Mide cuánto tiempo ahorras en procesos específicos.
                </p>
                <div className="space-y-2 ml-12">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Horas ahorradas por semana/mes:</strong> Compara antes vs después
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Velocidad de respuesta:</strong> En atención al cliente o procesos internos
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Tiempo liberado:</strong> Qué hacen tus equipos con el tiempo recuperado
                    </p>
                  </div>
                </div>
              </div>

              {/* Dimensión 2 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display text-foreground">2. Impacto financiero</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El ROI tradicional es importante, pero no te quedes solo en costos directos.
                </p>
                <div className="space-y-2 ml-12">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Costo vs ahorro directo:</strong> Inversión inicial y operativa vs ahorros medibles
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Ingresos incrementales:</strong> ¿Aumentaron ventas o conversiones?
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Reducción de errores costosos:</strong> Menos errores manuales = menos pérdidas
                    </p>
                  </div>
                </div>
              </div>

              {/* Dimensión 3 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display text-foreground">3. Calidad y precisión</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Automatizar rápido pero mal no tiene sentido. La calidad es crucial.
                </p>
                <div className="space-y-2 ml-12">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Tasa de error:</strong> Compara errores antes y después
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Consistencia:</strong> ¿Los procesos son más predecibles?
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Cumplimiento:</strong> Mejor adherencia a procesos y normativas
                    </p>
                  </div>
                </div>
              </div>

              {/* Dimensión 4 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display text-foreground">4. Satisfacción de usuarios</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tanto clientes externos como tu equipo interno. Esta métrica es crítica y a menudo ignorada.
                </p>
                <div className="space-y-2 ml-12">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">NPS o CSAT:</strong> Net Promoter Score o satisfacción del cliente
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Satisfacción del equipo:</strong> ¿Tu equipo está más feliz o frustrado?
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Tasa de adopción:</strong> ¿Realmente usan la herramienta o la evitan?
                    </p>
                  </div>
                </div>
              </div>

              {/* Dimensión 5 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display text-foreground">5. Escalabilidad</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ¿Tu solución crece contigo o se convierte en un cuello de botella?
                </p>
                <div className="space-y-2 ml-12">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Capacidad:</strong> ¿Puede manejar 2x, 5x, 10x más volumen?
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Costos a escala:</strong> ¿Los costos crecen linealmente o menos?
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Flexibilidad:</strong> Facilidad para adaptar o expandir funcionalidades
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display mb-4 text-foreground">
              Framework de medición en 3 etapas
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-display mb-2 text-foreground">Etapa 1: Baseline (antes)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Documenta métricas actuales ANTES de implementar. Sin baseline, no hay comparación válida. 
                  Incluye: tiempo promedio por tarea, costos actuales, tasa de error, satisfacción medida, 
                  volumen procesado.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-display mb-2 text-foreground">Etapa 2: Piloto (durante)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Implementa en un grupo pequeño o proceso limitado. Mide continuamente y ajusta. 
                  Esta fase es para aprender, no para perfección. Recopila feedback cualitativo además de números.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-display mb-2 text-foreground">Etapa 3: Producción (después)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mide consistentemente post-implementación. Establece revisiones mensuales o trimestrales. 
                  Las mejoras reales a menudo aparecen después del período de adaptación inicial.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display mb-4 text-foreground">
              Dashboard de métricas recomendado
            </h2>
            <div className="bg-muted/30 rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Crea un dashboard simple (puede ser una hoja de cálculo) con estas métricas principales:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background rounded p-4 border border-border">
                  <p className="text-foreground font-display mb-1">Métricas semanales</p>
                  <p className="text-muted-foreground text-sm">Horas ahorradas, volumen procesado, errores detectados</p>
                </div>
                <div className="bg-background rounded p-4 border border-border">
                  <p className="text-foreground font-display mb-1">Métricas mensuales</p>
                  <p className="text-muted-foreground text-sm">ROI acumulado, satisfacción, tasa de adopción</p>
                </div>
                <div className="bg-background rounded p-4 border border-border">
                  <p className="text-foreground font-display mb-1">Métricas trimestrales</p>
                  <p className="text-muted-foreground text-sm">Impacto estratégico, escalabilidad demostrada, optimizaciones implementadas</p>
                </div>
                <div className="bg-background rounded p-4 border border-border">
                  <p className="text-foreground font-display mb-1">Feedback cualitativo</p>
                  <p className="text-muted-foreground text-sm">Comentarios de usuarios, casos de éxito, problemas identificados</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display mb-4 text-foreground">
              Errores comunes al medir
            </h2>
            <div className="space-y-3">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <p className="text-foreground font-medium mb-1">❌ Medir solo tiempo o solo dinero</p>
                <p className="text-muted-foreground text-sm">
                  Una visión unidimensional te puede hacer perder de vista impactos importantes en calidad o satisfacción.
                </p>
              </div>
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <p className="text-foreground font-medium mb-1">❌ No tener baseline claro</p>
                <p className="text-muted-foreground text-sm">
                  "Creo que ahorramos tiempo" no es suficiente. Necesitas números concretos del antes y después.
                </p>
              </div>
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <p className="text-foreground font-medium mb-1">❌ Medir muy pronto</p>
                <p className="text-muted-foreground text-sm">
                  Dale tiempo a tu equipo de adaptarse. La productividad puede caer inicialmente antes de mejorar.
                </p>
              </div>
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <p className="text-foreground font-medium mb-1">❌ Ignorar el feedback cualitativo</p>
                <p className="text-muted-foreground text-sm">
                  Los números cuentan la mitad de la historia. Escucha a tu equipo y usuarios.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-gradient-hero rounded-lg p-8 text-center">
            <h3 className="text-2xl font-display text-primary-foreground mb-4">
              ¿Quieres implementar automatización con medición integrada?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              En NEXABIS no solo implementamos soluciones, te ayudamos a definir KPIs relevantes 
              y a medir el impacto real desde el día uno.
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

export default MedirImpactoAutomatizacion;
