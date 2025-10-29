import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="mb-4 p-4 rounded-xl bg-gradient-hero group-hover:scale-110 transition-smooth">
        <Icon className="w-8 h-8 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-display mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default ValueCard;
