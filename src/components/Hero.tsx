import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import dtxProduto from "@/assets/dtx-produto.avif";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-background/95" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full border border-accent/30 mb-4">
              <p className="text-sm font-semibold text-accent-foreground">
                ✨ Fórmula 100% Natural
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Elimine até 4kg em 30 dias tomando apenas 2 cápsulas por dia!
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              O DTX Black é o suplemento detox mais potente do mercado. Acelera seu metabolismo, elimina toxinas e ajuda você a conquistar o corpo dos seus sonhos de forma natural.
            </p>
            
            <div className="space-y-3">
              {[
                "Acelera o metabolismo naturalmente",
                "Elimina toxinas acumuladas",
                "Melhora a digestão e funcionamento intestinal",
                "Aumenta energia e disposição"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-primary-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-base md:text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                variant="cta"
                className="w-full sm:w-auto text-lg px-12 py-6 shadow-glow animate-pulse"
                asChild
              >
                <a href="https://app.monetizze.com.br/r/AZW15606936" target="_blank" rel="noopener noreferrer">
                  👉 QUERO EMAGRECER AGORA
                </a>
              </Button>
              <p className="text-sm text-primary-foreground/70 mt-3">
                ⚡ Oferta por tempo limitado
              </p>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl animate-pulse" />
              <img 
                src={dtxProduto} 
                alt="DTX Black - Suplemento Detox Natural" 
                className="relative w-full max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
