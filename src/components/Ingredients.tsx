import dtxDetox from "@/assets/dtx-detox.avif";
import detoxDtx from "@/assets/detox-dtx.avif";
import emagreceDtx from "@/assets/emagrece-dtx.avif";

const ingredients = [
  {
    name: "Chá Verde",
    benefit: "Poderoso antioxidante que acelera o metabolismo e promove a queima de gordura.",
    image: emagreceDtx
  },
  {
    name: "Hibisco",
    benefit: "Combate o inchaço, auxilia na digestão e possui propriedades diuréticas naturais.",
    image: dtxDetox
  },
  {
    name: "Psyllium",
    benefit: "Rica fonte de fibras que melhora o trânsito intestinal e proporciona saciedade.",
    image: detoxDtx
  }
];

const Ingredients = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Fórmula cuidadosamente selecionada
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada ingrediente foi escolhido por sua eficácia comprovada e benefícios à saúde. 
            Tecnologia e natureza trabalhando juntas pelo seu bem-estar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={ingredient.image} 
                  alt={`${ingredient.name} - Ingrediente do DTX Black`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-accent transition-colors">
                  {ingredient.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {ingredient.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
