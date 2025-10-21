import { CheckCircle2 } from "lucide-react";
import dtxProduto from "@/assets/dtx-produto.avif";

const ProductSummary = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Resumo do Produto
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={dtxProduto} 
                alt="DTX Black - Detox Natural em Cápsulas" 
                className="w-full max-w-sm mx-auto drop-shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">DTX Black</h3>
                <p className="text-lg text-muted-foreground">
                  Suplemento detox 100% natural para emagrecimento e saúde
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-card-foreground">Categoria</h4>
                    <p className="text-muted-foreground">Suplemento detox e emagrecedor</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-card-foreground">Formato</h4>
                    <p className="text-muted-foreground">Cápsulas (60 por pote)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-card-foreground">Uso Recomendado</h4>
                    <p className="text-muted-foreground">2 cápsulas por dia antes das refeições</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-card-foreground">Principais Benefícios</h4>
                    <p className="text-muted-foreground">
                      Elimina toxinas, acelera metabolismo, melhora digestão, 
                      promove emagrecimento saudável
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-card-foreground">Público-alvo</h4>
                    <p className="text-muted-foreground">
                      Pessoas que buscam emagrecimento natural e melhora da saúde geral
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-card-foreground">Diferenciais</h4>
                    <p className="text-muted-foreground">
                      100% natural, aprovado pela ANVISA, garantia de 30 dias, 
                      frete grátis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSummary;
