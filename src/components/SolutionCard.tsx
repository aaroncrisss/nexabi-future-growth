import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SolutionCard = ({ icon: Icon, title, description }: SolutionCardProps) => {
  return (
    <Card className="group shadow-card hover:shadow-glow transition-smooth border-border/50 hover:border-primary/30 h-full">
      <CardContent className="p-6 flex flex-col items-start h-full">
        <div className="mb-4 p-3 rounded-xl bg-gradient-hero group-hover:animate-glow">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-display mb-3 text-foreground group-hover:text-gradient transition-smooth">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default SolutionCard;
