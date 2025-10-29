import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AutomatizarNoEsDeshumanizar from "./pages/blog/AutomatizarNoEsDeshumanizar";
import CincoFormasIA from "./pages/blog/CincoFormasIA";
import MedirImpactoAutomatizacion from "./pages/blog/MedirImpactoAutomatizacion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/automatizar-no-es-deshumanizar" element={<AutomatizarNoEsDeshumanizar />} />
          <Route path="/blog/cinco-formas-ia" element={<CincoFormasIA />} />
          <Route path="/blog/medir-impacto-automatizacion" element={<MedirImpactoAutomatizacion />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
