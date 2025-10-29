import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
}

const BlogCard = ({ title, excerpt }: BlogCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-glow transition-smooth border-border/50 h-full flex flex-col">
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display mb-3 text-foreground group-hover:text-gradient transition-smooth">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
          {excerpt}
        </p>
        <Button variant="ghost" className="w-full justify-between group">
          Leer más
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
