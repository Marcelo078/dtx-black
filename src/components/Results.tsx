import { Star } from "lucide-react";
import transformacao from "@/assets/transformacao-1.jpg";
import mulherFeliz from "@/assets/mulher-feliz.jpg";

const testimonials = [
  {
    name: "Ana Paula",
    age: 32,
    result: "-8kg em 60 dias",
    text: "Não acreditei quando vi o resultado! O DTX Black mudou minha vida. Me sinto mais leve, com mais energia e autoestima lá em cima!",
    rating: 5
  },
  {
    name: "Mariana Costa",
    age: 28,
    result: "-5kg em 30 dias",
    text: "Já tentei diversos produtos, mas nenhum funcionou como o DTX Black. Perdi medidas, desinchei e meu intestino finalmente funciona regularmente!",
    rating: 5
  },
  {
    name: "Juliana Santos",
    age: 35,
    result: "-12kg em 90 dias",
    text: "Transformação incrível! Além de emagrecer, minha pele melhorou, tenho mais disposição e minha saúde está muito melhor. Recomendo!",
    rating: 5
  }
];

const Results = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Resultados reais que falam por si
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Milhares de pessoas já transformaram suas vidas com o DTX Black. 
            Veja você mesmo os resultados incríveis!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={transformacao} 
              alt="Transformação com DTX Black - Antes e Depois" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={mulherFeliz} 
              alt="Mulher feliz com resultados do DTX Black" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-card-foreground mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-bold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.age} anos</p>
                <p className="text-accent font-semibold mt-2">{testimonial.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
