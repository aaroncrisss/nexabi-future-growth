import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }

    // Aquí iría la lógica de envío real
    toast.success('¡Mensaje enviado! Te contactaremos pronto.');
    
    // Resetear formulario
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      mensaje: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nombre" className="text-foreground font-medium">
            Nombre completo *
          </Label>
          <Input
            id="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            required
            className="border-border focus:ring-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="empresa" className="text-foreground font-medium">
            Empresa / Organización
          </Label>
          <Input
            id="empresa"
            placeholder="Nombre de tu empresa"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            className="border-border focus:ring-primary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground font-medium">
          Correo electrónico *
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="border-border focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje" className="text-foreground font-medium">
          Mensaje *
        </Label>
        <Textarea
          id="mensaje"
          placeholder="Cuéntanos sobre tu proyecto o necesidades..."
          value={formData.mensaje}
          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
          required
          rows={5}
          className="border-border focus:ring-primary resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto gradient-hero hover:opacity-90 shadow-glow text-primary-foreground font-display text-lg px-8"
      >
        Enviar mensaje
      </Button>
    </form>
  );
};

export default ContactForm;
