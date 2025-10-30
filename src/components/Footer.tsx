import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="gradient-footer py-8 md:py-12">
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
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-left">Inicio</Link>
              <Link to="/soluciones" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-left">Soluciones</Link>
              <Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-left">Blog</Link>
              <Link to="/academy" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-left">Academy</Link>
              <Link to="/nosotros" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-left">Nosotros</Link>
              <Link to="/contacto" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-left">Contacto</Link>
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
              NEXABIS © 2025 — Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <button className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">Política de Privacidad</button>
              <button className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">Términos de Servicio</button>
            </div>
          </div>
          <p className="text-primary-foreground/60 text-xs mt-4 text-center">
            Desarrollado por Cristóbal Abarca | Operamos desde Chile para toda Latinoamérica
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
