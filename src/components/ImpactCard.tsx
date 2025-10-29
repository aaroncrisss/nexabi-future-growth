import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ImpactCardProps {
  title: string;
  description: string;
  metrics: Array<{ label: string; value: string; icon: LucideIcon }>;
}

const ImpactCard = ({ title, description, metrics }: ImpactCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-glow transition-smooth border-border/50 h-full">
      <CardContent className="p-6">
        <h3 className="text-2xl font-display mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <metric.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-display text-gradient mb-1">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactCard;
