import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stepNumber: number;
}

const StepCard = ({ icon: Icon, title, description, stepNumber }: StepCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      <div className="mb-4 relative">
        <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
          <Icon className="w-10 h-10 text-primary-foreground" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-display text-accent-foreground shadow-md">
          {stepNumber}
        </div>
      </div>
      <h3 className="text-xl font-display mb-2 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground max-w-xs">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
