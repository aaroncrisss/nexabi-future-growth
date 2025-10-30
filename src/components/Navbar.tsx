import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-display text-gradient hover:opacity-80 transition-smooth">
          NEXABIS
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link 
            to="/" 
            className={`${isActive('/') ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground transition-smooth`}
          >
            Inicio
          </Link>
          <Link 
            to="/soluciones" 
            className={`${isActive('/soluciones') ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground transition-smooth`}
          >
            Soluciones
          </Link>
          <Link 
            to="/blog" 
            className={`${isActive('/blog') ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground transition-smooth`}
          >
            Blog
          </Link>
          <Link 
            to="/academy" 
            className={`${isActive('/academy') ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground transition-smooth`}
          >
            Academy
          </Link>
          <Link 
            to="/nosotros" 
            className={`${isActive('/nosotros') ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground transition-smooth`}
          >
            Nosotros
          </Link>
          <Link 
            to="/contacto" 
            className={`${isActive('/contacto') ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground transition-smooth`}
          >
            Contacto
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <Link to="/contacto">
            <Button size="sm" className="hidden md:flex gradient-hero text-primary-foreground">
              Hablemos
            </Button>
          </Link>
          
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button size="sm" variant="ghost" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background/98 backdrop-blur-lg">
              <div className="flex flex-col gap-6 mt-8">
                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-lg text-muted-foreground hover:text-foreground transition-smooth py-2"
                >
                  Inicio
                </Link>
                <Link 
                  to="/soluciones" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-lg text-muted-foreground hover:text-foreground transition-smooth py-2"
                >
                  Soluciones
                </Link>
                <Link 
                  to="/blog" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-lg text-muted-foreground hover:text-foreground transition-smooth py-2"
                >
                  Blog
                </Link>
                <Link 
                  to="/academy" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-lg text-muted-foreground hover:text-foreground transition-smooth py-2"
                >
                  Academy
                </Link>
                <Link 
                  to="/nosotros" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-lg text-muted-foreground hover:text-foreground transition-smooth py-2"
                >
                  Nosotros
                </Link>
                <Link 
                  to="/contacto" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-lg text-muted-foreground hover:text-foreground transition-smooth py-2"
                >
                  Contacto
                </Link>
                <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="gradient-hero text-primary-foreground mt-4 w-full">
                    Hablemos
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
