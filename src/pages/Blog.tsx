import { useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BlogCard from '@/components/BlogCard';

const Blog = () => {
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
            <div className="inline-flex p-4 rounded-2xl bg-background/10 backdrop-blur-sm mb-6">
              <BookOpen className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-6xl font-display text-primary-foreground mb-6">
              Insights NEXABIS
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Aprende cómo la IA y la automatización están transformando los negocios. Estrategias, casos reales y conocimiento práctico.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
              Más contenido próximamente
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estamos preparando más artículos sobre automatización, IA aplicada y casos de éxito. Suscríbete a nuestro newsletter para no perderte ninguna publicación.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
