import { Button } from "@/components/ui/button";
import { Shield, Lock, Truck, CreditCard } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garantia de 30 Dias",
    description: "Devolução do seu dinheiro se não ficar satisfeito"
  },
  {
    icon: Lock,
    title: "Compra 100% Segura",
    description: "Seus dados protegidos com criptografia SSL"
  },
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "Entrega gratuita para todo o Brasil"
  },
  {
    icon: CreditCard,
    title: "Pagamento Facilitado",
    description: "Parcele em até 12x no cartão"
  }
];

const Guarantee = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-accent to-primary text-accent-foreground rounded-3xl p-8 md:p-12 shadow-glow">
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-accent-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-12 w-12 text-accent-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                FÓRMULA DETOX BLACK É O MAIS POTENTE DO MERCADO
              </h2>
              <p className="text-lg md:text-xl opacity-95 mb-6">
                Você tem 30 dias para testar. Se não gostar, devolvemos 100% do seu dinheiro!
              </p>
              <p className="text-base opacity-90 mb-8">
                Não assumimos riscos - queremos que você alcance seus objetivos com total segurança e confiança. 
                Nossa garantia é incondicional porque acreditamos no poder transformador do DTX Black.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-12 py-6 shadow-xl"
                asChild
              >
                <a href="https://app.monetizze.com.br/r/AZW15606936" target="_blank" rel="noopener noreferrer">
                  QUERO MEU DTX BLACK AGORA
                </a>
              </Button>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {guarantees.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-card-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
