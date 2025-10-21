import { Leaf, Zap, Heart, Shield } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Fórmula desenvolvida com ingredientes naturais cuidadosamente selecionados para máxima eficácia e segurança."
  },
  {
    icon: Zap,
    title: "Acelera o Metabolismo",
    description: "Potencializa a queima de gordura através da aceleração natural do metabolismo, aumentando o gasto energético."
  },
  {
    icon: Heart,
    title: "Melhora a Digestão",
    description: "Promove o funcionamento saudável do sistema digestivo, reduzindo inchaço e melhorando a absorção de nutrientes."
  },
  {
    icon: Shield,
    title: "Elimina Toxinas",
    description: "Desintoxica profundamente o organismo, removendo toxinas acumuladas e impurezas prejudiciais à saúde."
  }
];

const WhyDtx = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por que DTX Black é o melhor detox?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvido com tecnologia avançada e ingredientes de alta qualidade, 
            o DTX Black oferece resultados comprovados e seguros.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyDtx;
