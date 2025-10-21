import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import magraDtx from "@/assets/magra-dtx.avif";

const packages = [
  {
    bottles: 1,
    months: 1,
    price: "R$ 39,96",
    discount: "50% OFF",
    featured: false
  },
  {
    bottles: 3,
    months: 3,
    price: "R$ 29,92",
    pricePerBottle: "R$ 89,76 no total",
    discount: "63% OFF",
    featured: true,
    badge: "MAIS VENDIDO"
  },
  {
    bottles: 5,
    months: 5,
    price: "R$ 19,88",
    pricePerBottle: "R$ 99,40 no total",
    discount: "75% OFF",
    featured: false,
    badge: "MELHOR CUSTO-BENEFÍCIO"
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary opacity-90" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Escolha a melhor opção para você
          </h2>
          <p className="text-lg md:text-xl text-secondary-foreground/90 max-w-3xl mx-auto">
            Quanto mais você investe na sua saúde, mais você economiza. 
            Aproveite os descontos exclusivos!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-6 transition-all duration-300 ${
                pkg.featured 
                  ? 'bg-accent text-accent-foreground scale-105 shadow-glow border-2 border-accent' 
                  : 'bg-card/10 backdrop-blur-sm border border-secondary-foreground/20 hover:border-accent/50'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <Sparkles className="h-3 w-3" />
                  {pkg.badge}
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">{pkg.bottles}</div>
                <div className="text-sm uppercase tracking-wider opacity-90">
                  {pkg.bottles > 1 ? 'Potes' : 'Pote'}
                </div>
                <div className="text-xs mt-1 opacity-75">
                  {pkg.months} {pkg.months > 1 ? 'meses' : 'mês'} de tratamento
                </div>
              </div>
              
              <div className="bg-destructive text-destructive-foreground text-center py-2 rounded-lg mb-4 font-bold">
                {pkg.discount}
              </div>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-1">{pkg.price}</div>
                <div className="text-sm opacity-75">por pote</div>
                {pkg.pricePerBottle && (
                  <div className="text-xs mt-1 opacity-75">{pkg.pricePerBottle}</div>
                )}
              </div>
              
              <Button 
                variant={pkg.featured ? "secondary" : "cta"}
                className="w-full mb-4"
                size="lg"
                asChild
              >
                <a href="https://app.monetizze.com.br/r/AZW15606936" target="_blank" rel="noopener noreferrer">
                  COMPRAR AGORA
                </a>
              </Button>
              
              <div className="space-y-2">
                {[
                  "Frete Grátis",
                  "Garantia de 30 dias",
                  "Compra 100% segura"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <img 
            src={magraDtx} 
            alt="Mulher em forma com DTX Black" 
            className="max-w-md mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
