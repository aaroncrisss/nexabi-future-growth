import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-glow transition-smooth border-border/50 h-full">
      <CardContent className="p-6">
        <Quote className="w-8 h-8 text-primary mb-4" />
        <p className="text-muted-foreground leading-relaxed mb-4 italic">
          "{quote}"
        </p>
        <div className="border-t border-border pt-4">
          <p className="font-display text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
