import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o DTX Black?",
    answer: "O DTX Black funciona através de uma fórmula natural que combina ingredientes detoxificantes e termogênicos. Ele acelera o metabolismo, ajuda a eliminar toxinas acumuladas no organismo, melhora o funcionamento intestinal e promove a queima de gordura de forma natural e segura."
  },
  {
    question: "Quantas cápsulas devo tomar por dia?",
    answer: "Recomendamos tomar 2 cápsulas por dia, preferencialmente antes das principais refeições, acompanhadas de um copo de água. Para melhores resultados, mantenha uma alimentação balanceada e pratique atividades físicas regularmente."
  },
  {
    question: "Em quanto tempo verei resultados?",
    answer: "Os resultados variam de pessoa para pessoa, mas a maioria dos usuários relata mudanças perceptíveis nas primeiras 2 semanas de uso, como redução do inchaço e melhora na disposição. Resultados mais significativos de perda de peso são observados após 30 dias de uso contínuo."
  },
  {
    question: "O DTX Black tem efeitos colaterais?",
    answer: "O DTX Black é formulado com ingredientes 100% naturais e não apresenta efeitos colaterais significativos quando usado conforme as orientações. No entanto, gestantes, lactantes e pessoas com condições médicas específicas devem consultar um médico antes de iniciar o uso."
  },
  {
    question: "Existe garantia de satisfação?",
    answer: "Sim! Oferecemos garantia incondicional de 30 dias. Se você não ficar satisfeito com os resultados, devolvemos 100% do seu dinheiro, sem perguntas. Acreditamos tanto na eficácia do DTX Black que assumimos todo o risco para você."
  },
  {
    question: "O DTX Black é aprovado pela ANVISA?",
    answer: "Sim, o DTX Black é um suplemento alimentar regularizado e aprovado pela ANVISA, atendendo a todos os padrões de qualidade e segurança exigidos pela legislação brasileira. Você pode consumir com total tranquilidade."
  },
  {
    question: "Quanto tempo dura cada pote?",
    answer: "Cada pote contém 60 cápsulas, o que corresponde a 30 dias de tratamento (tomando 2 cápsulas por dia conforme recomendado). Para resultados otimizados, recomendamos o uso contínuo por no mínimo 90 dias."
  },
  {
    question: "Como é feita a entrega?",
    answer: "A entrega é feita pelos Correios em todo o Brasil com frete grátis. Após a confirmação do pagamento, seu pedido é processado e enviado em até 3 dias úteis. O prazo de entrega varia conforme sua região, geralmente entre 7 a 15 dias úteis."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Reunimos as perguntas mais comuns sobre o DTX Black. 
            Se tiver alguma dúvida adicional, entre em contato conosco!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left hover:text-accent">
                  <span className="font-semibold text-card-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
