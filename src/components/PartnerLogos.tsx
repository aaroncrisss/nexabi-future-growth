import { Cloud, Zap, Mail, MessageSquare, Brain, Globe, Workflow } from 'lucide-react';

const PartnerLogos = () => {
  const partners = [
    { name: 'N8N', icon: Workflow },
    { name: 'Make', icon: Zap },
    { name: 'Zapier', icon: Zap },
    { name: 'Meta', icon: MessageSquare },
    { name: 'OpenAI', icon: Brain },
    { name: 'Google Cloud', icon: Globe },
    { name: 'Hubspot', icon: MessageSquare },
    { name: 'Salesforce', icon: Cloud },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="flex flex-col items-center gap-2 group opacity-60 hover:opacity-100 transition-smooth"
        >
          <partner.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-smooth" />
          <span className="text-xs text-muted-foreground font-medium">{partner.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PartnerLogos;
